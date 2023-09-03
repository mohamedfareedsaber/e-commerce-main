interface Props {
  company: string;
}
export default function NewsLetter({ company }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <h6 className="font-bold">NEWSLETTER SUBSCRIPTION</h6>
      <p className="text-center text-text/70">
        Sign up for {company} updates to receive information about new arrivals,
        future events and specials.
      </p>
      <form
        action="/api/subscribe/newsletter"
        method="POST"
        className="flex w-full flex-col items-center justify-center gap-y-2"
      >
        <input type="email" name="email" className="w-full px-2 py-2" placeholder="Email" />
        <button type="submit" className="w-full bg-primary px-2 py-2">
          Subscribe
        </button>
      </form>
    </div>
  );
}
