export async function POST(req: Request) {
  const { email } = await req.json();

  const res = await fetch("https://api.mailerlite.com/api/v2/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY!,
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    return new Response("Subscription failed", { status: 400 });
  }

  return new Response("Subscribed successfully", { status: 200 });
}
