import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Thanks for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <section className="relative py-20 rounded-3xl w-[80%] mx-auto text-center overflow-hidden bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#1a1f2e] shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-10 blur-2xl pointer-events-none" />

      <h2 className="relative text-4xl md:text-5xl font-extrabold text-[#E0F7FA] mb-6">
        Join the GearUp Community
      </h2>
      <p className="relative max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10">
        Be the first to know about new arrivals, special offers, and expert
        cycling tips — straight to your inbox.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="relative flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto px-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 py-4 px-6 rounded-full bg-white/90 text-gray-900 text-base font-medium placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-all duration-200 shadow-sm backdrop-blur-md"
        />
        <button
          type="submit"
          className="bg-cyan-400 text-gray-900 py-4 px-8 rounded-full font-semibold hover:bg-cyan-300 transition hover:scale-[1.03] shadow-lg"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
