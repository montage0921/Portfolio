export default function EmailForm() {
  async function handleSendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        e.currentTarget.reset();
      } else {
        console.log("Failed to send the message");
      }
    } catch {
      console.log("Something went wrong");
    }
  }

  return (
    <form
      className="w-[400px] flex flex-col gap-5  "
      onSubmit={handleSendEmail}
    >
      <h1 className="self-center text-2xl font-semibold ">Send a Message</h1>

      <div className="flex flex-col items-center gap-1 px-5 opacity-80">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full border-2 h-13 rounded-sm px-5 outline-none focus:outline-none focus:ring-0"
          placeholder="Gary Shi..."
          required
        />
      </div>
      <div className="flex flex-col items-center gap-1 px-5 opacity-80">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border-2 h-13 rounded-sm px-5 outline-none focus:outline-none focus:ring-0"
          placeholder="john@example.com"
          required
        />
      </div>
      <div className="flex flex-col items-center gap-1 px-5 opacity-80">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full border-2 h-20 rounded-sm px-5 py-2 outline-none focus:outline-none focus:ring-0"
          placeholder="Hello, I'd like to talk about..."
          required
        />
      </div>
      <button
        className="bg-[hsl(var(--theme-color))] w-[90%] self-center 
                   px-6 py-2 flex justify-center items-center rounded-full font-semibold text-sm 
                   md:text-base hover:cursor-pointer transition-transform duration-300 
                   hover:scale-[1.05]"
      >
        Send a message
      </button>
    </form>
  );
}
