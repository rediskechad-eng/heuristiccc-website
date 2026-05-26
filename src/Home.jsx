import AIAssistantWidget from "./components/AIAssistantWidget";

export default function Home() {
  const services = [
    {
      title: "AI Automation Implementation",
      desc: "Design and deploy structured AI workflows with documentation, operational controls, and measurable outcomes."
    },
    {
      title: "AI Knowledge Systems (RAG)",
      desc: "Vectorized document intelligence pipelines delivering grounded answers tied to your internal sources."
    },
    {
      title: "AI Agents & Tool Integration",
      desc: "Tool-using agents with guardrails, human-in-the-loop approvals, and audit-ready traces."
    },
    {
      title: "Governance & Risk Advisory",
      desc: "Policy-aligned AI adoption with accountability, access controls, and operational risk frameworks."
    }
  ];

  const outcomes = [
    {
      title: "Automation that holds up in production",
      desc: "Replace repetitive workflows with systems designed for reliability, traceability, and ROI reporting."
    },
    {
      title: "Grounded intelligence, not guesses",
      desc: "RAG architectures that keep outputs anchored to your documents, policies, and approved knowledge."
    },
    {
      title: "Governance built in",
      desc: "Roles, approvals, and risk controls embedded directly into the operating system—not bolted on."
    }
  ];

  const faqs = [
    {
      q: "What does a typical engagement look like?",
      a: "We start with an objective and a current-state map, then define success criteria, build a pilot, harden it (monitoring, access controls, QA), and deploy."
    },
    {
      q: "Do you work with existing tools (n8n, CRMs, Google Workspace, Microsoft 365)?",
      a: "Yes. We integrate with your stack and standardize inputs/outputs so systems are maintainable by your team."
    },
    {
      q: "How do you control hallucinations and risk?",
      a: "Source-grounded retrieval, constrained tool use, validation steps, and human approval loops where appropriate. We design for auditability."
    },
    {
      q: "Can you provide a white paper before a call?",
      a: "Yes. Request it via the form and we’ll send the current edition."
    }
  ];

  const encode = (data) => new URLSearchParams(data).toString();

  const ensureLeadSummaryPresent = (formEl) => {
    if (!formEl) return;

    const leadSummaryValue =
      document.getElementById("lead_summary")?.value ||
      document.getElementById("framework_lead_summary")?.value ||
      "";

    const field = formEl.querySelector('input[name="lead_summary"]');
    if (field) {
      field.value = leadSummaryValue;
      field.setAttribute("value", leadSummaryValue);
    }
  };

  const handleFrameworkSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    ensureLeadSummaryPresent(form);

    const formData = new FormData(form);

    const payload = {};
    for (const [key, value] of formData.entries()) {
      payload[key] = value;
    }

    payload["form-name"] = "framework-download";

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload)
      });

      window.location.assign("/framework-download");
    } catch (err) {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <header className="bg-white/90 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/Heuristic-logo.png"
              alt="Heuristic Consulting Corporation Logo"
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">
                Heuristic Consulting
              </p>
              <p className="text-xs text-gray-500">
                AI Systems Architecture & Automation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#whitepaper"
              className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition"
            >
              White Paper
            </a>
            <a
              href="https://calendly.com/lise-heuristiccc/30min"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gray-200/90 bg-white/10 border border-white/10 rounded-full px-3 py-1">
              Production-first AI delivery
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              Architecture • Automation • Governance
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Build AI systems that operate in production.
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
              We architect and deploy LLM-powered systems, retrieval frameworks, and automation pipelines
              that replace manual work and produce measurable operational leverage.
            </p>

            <p className="mt-4 text-base text-gray-300 max-w-2xl">
              Heuristic Consulting designs and deploys production-grade AI automation systems, including
              retrieval-augmented generation (RAG), AI agents, and workflow automation pipelines for
              organizations that require governance, traceability, and measurable ROI.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://calendly.com/lise-heuristiccc/30min"
                target="_blank"
                rel="noopener"
                className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition"
              >
                Schedule a strategy discussion
              </a>
              <a
                href="#services"
                className="inline-flex justify-center rounded-md border border-white/30 px-6 py-3 hover:bg-white/10 transition"
              >
                See capabilities
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-200/90">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Reliable automation</p>
                <p className="mt-1 text-gray-200/80">Designed for uptime and traceability</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Grounded outputs</p>
                <p className="mt-1 text-gray-200/80">RAG tied to your internal sources</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Risk controls</p>
                <p className="mt-1 text-gray-200/80">Approvals, roles, governance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / POSITIONING */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
                For teams that need AI to work under real operational constraints.
              </h3>
              <p className="mt-2 text-gray-600">
                If your environment requires approvals, audit trails, role controls, and repeatable delivery — we build for that.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Focus</p>
                <p className="mt-1 font-semibold">Production</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Model</p>
                <p className="mt-1 font-semibold">Grounded</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <p className="text-xs text-gray-500">Control</p>
                <p className="mt-1 font-semibold">Governed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Production-grade outcomes
            </h3>
            <p className="mt-3 text-gray-600">
              Systems that reduce manual work, improve speed, and hold up under audit and operations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <h4 className="text-lg font-semibold">{o.title}</h4>
                <p className="mt-2 text-gray-600">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Core capabilities
            </h3>
            <p className="mt-3 text-gray-600">
              Architecture, implementation, and operational hardening — delivered as a complete system.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS AI AUTOMATION */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            What is AI Automation?
          </h3>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            AI automation combines large language models, structured workflows, and software
            integrations to replace repetitive manual work with intelligent systems.
            Instead of employees performing the same task repeatedly, an AI-driven workflow
            can analyze inputs, retrieve relevant information, make structured decisions,
            and trigger actions across tools like CRMs, email systems, or internal databases.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            In practice, AI automation is used to process documents, answer internal questions,
            generate reports, route tasks, and support decision-making. When designed correctly,
            these systems include governance controls, approval steps, and traceability so
            organizations can deploy AI safely in real operational environments.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              How we deliver
            </h3>
            <p className="mt-3 text-gray-600">
              A repeatable engagement model built for speed, clarity, and deployment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Define", desc: "Objective, constraints, success metrics, and risk posture." },
              { step: "02", title: "Design", desc: "Architecture, data flows, tool integration, controls." },
              { step: "03", title: "Build", desc: "Pilot implementation with validation and approval loops." },
              { step: "04", title: "Deploy", desc: "Harden, monitor, document, and hand off operations." }
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <p className="text-xs font-semibold text-gray-500">{s.step}</p>
                <h4 className="mt-2 font-semibold">{s.title}</h4>
                <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHITE PAPER */}
      <section id="whitepaper" className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                AI Systems Architecture White Paper
              </h3>
              <p className="mt-3 text-gray-600">
                A structured guide covering LLM foundations, RAG systems, agent design, context engineering,
                and governance frameworks for professional firms.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#contact"
                onClick={() => {
                  const field = document.getElementById("request_type");
                  if (field) field.value = "white_paper";
                }}
                className="inline-flex justify-center rounded-md bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition"
              >
                Request White Paper
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              FAQ
            </h3>
            <p className="mt-3 text-gray-600">
              Quick answers to the questions that determine fit.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-gray-50 p-6"
              >
                <summary className="cursor-pointer list-none font-semibold flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="ml-4 text-gray-500 group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK DOWNLOAD (EMAIL GATE) */}
      <section id="framework-download" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold mb-6">
            AI Automation Implementation Framework
          </h3>

          <p className="text-gray-600 mb-2">
            A 3-page worksheet that helps teams evaluate whether a workflow is a strong candidate for AI automation.
          </p>
          <p className="text-gray-500 mb-8 text-sm">
            Takes less than 3 minutes.
          </p>

          <form
            name="framework-download"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/framework-download"
            onSubmit={handleFrameworkSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="framework-download" />
            <input type="hidden" name="request_type" value="framework_download" />
            <input type="hidden" name="bot-field" />
            <input type="hidden" id="framework_lead_summary" name="lead_summary" value="pending_summary_capture" />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full p-4 border rounded"
              />

              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full p-4 border rounded"
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full p-4 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-4 border rounded"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="tel"
                name="phone_area"
                placeholder="Area Code (e.g., 612)"
                inputMode="numeric"
                pattern="[0-9]{3}"
                maxLength={3}
                required
                className="w-full p-4 border rounded"
              />

              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number (e.g., 5551234)"
                inputMode="numeric"
                pattern="[0-9]{7}"
                maxLength={7}
                required
                className="w-full p-4 border rounded"
              />
            </div>

            <select
              name="timeline"
              required
              className="w-full p-4 border rounded text-gray-700"
              defaultValue=""
            >
              <option value="" disabled>
                When are you looking to implement automation?
              </option>
              <option value="researching">Researching</option>
              <option value="3-6 months">3–6 months</option>
              <option value="immediate">Immediate</option>
            </select>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-4 rounded"
            >
              Download the 3-Minute Automation Evaluation Framework
            </button>

            <div className="pt-3 text-sm text-gray-600">
              <p className="font-medium text-gray-800">
                Want a fast answer on whether your workflow is a good automation candidate?
              </p>
              <p className="mt-1">
                Book a strategy call and we’ll map the workflow, constraints, and next steps.
              </p>
              <div className="mt-3">
                <a
                  href="https://calendly.com/lise-heuristiccc/30min"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 font-semibold hover:bg-gray-800 transition"
                >
                  Book a Strategy Call
                </a>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              US phone format only. Example: 612 and 5551234.
            </p>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Book a Strategy Call
            </h3>
            <p className="mt-3 text-gray-300">
              Share your objective, constraints, and tools. We’ll respond with next steps and scheduling options.
            </p>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <form
              name="contact-form"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/success"
              className="space-y-5"
              onSubmit={(e) => ensureLeadSummaryPresent(e.currentTarget)}
            >
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="hidden" id="request_type" name="request_type" value="strategy_call" />
              <input type="hidden" name="bot-field" />
              <input type="hidden" id="lead_summary" name="lead_summary" value="pending_summary_capture" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-md bg-white text-gray-900 p-3 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full rounded-md bg-white text-gray-900 p-3 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Phone
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="tel"
                    name="phone_area"
                    placeholder="Area Code (e.g., 612)"
                    inputMode="numeric"
                    pattern="[0-9]{3}"
                    maxLength={3}
                    required
                    className="w-full rounded-md bg-white text-gray-900 p-3 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number (e.g., 5551234)"
                    inputMode="numeric"
                    pattern="[0-9]{7}"
                    maxLength={7}
                    required
                    className="w-full rounded-md bg-white text-gray-900 p-3 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  US phone format only. Example: 612 and 5551234.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Objective
                </label>
                <textarea
                  name="message"
                  placeholder="What do you want the AI system to do? What tools/data does it need? Any approvals/compliance requirements?"
                  required
                  rows={6}
                  className="w-full rounded-md bg-white text-gray-900 p-3 outline-none ring-1 ring-transparent focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <label
                htmlFor="sms_opt_in"
                className="flex items-start gap-3 rounded-md border border-gray-700 bg-gray-900/60 p-4 text-sm text-gray-200 leading-relaxed cursor-pointer hover:border-gray-500"
              >
                <input
                  id="sms_opt_in"
                  type="checkbox"
                  name="sms_opt_in"
                  value="yes"
                  required
                  style={{ accentColor: "#2563eb" }}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer appearance-auto bg-white"
                />
                <span>
                  I agree to receive SMS messages from Heuristic Consulting Corporation. Reply STOP
                  to opt out. Msg &amp; data rates may apply. View our{" "}
                  <a href="/privacy" className="underline text-white hover:text-blue-300">
                    privacy policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 py-3 font-semibold hover:bg-blue-500 transition"
              >
                Submit
              </button>

              <p className="text-xs text-gray-400 text-center">
                Prefer email? Use <span className="text-gray-200 font-medium">lise@heuristiccc.com</span>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="sm:hidden fixed bottom-4 left-0 right-0 px-4 z-50">
        <a
          href="https://calendly.com/lise-heuristiccc/30min"
          target="_blank"
          rel="noopener"
          className="block text-center rounded-md bg-blue-600 text-white py-3 font-semibold shadow-lg"
        >
          Schedule a Strategy Call
        </a>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-medium text-gray-300">612-404-6281</p>
          <p className="mt-1">lise@heuristiccc.com</p>
          <p className="mt-4">
            <a
              href="/privacy"
              className="text-gray-300 hover:text-white underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Heuristic Consulting Corporation
          </p>
        </div>
      </footer>

      <AIAssistantWidget />
    </main>
  );
}