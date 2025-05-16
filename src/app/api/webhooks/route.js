import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOKE_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  //! get the Header Payload:
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  //! check if the svix_id, svix_timestamp, svix_signature are present:
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  //! get the body of the request:
  const payload = await req.json();
  const body = JSON.stringify(payload);

  //! create a new Svix instance with your secret:
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  //! verify the payload:
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (error) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const { id } = evt?.data;
  const eventType = evt?.type;

  console.log(`Webhook with and ID of ${id} and type of ${eventType}`);
  console.log("Webhook body:", body);

  if (eventType === "user.created") {
    console.log("User Created");
  }
  if (eventType === "user.updated") {
    console.log("User Updated");
  }

  return new Response("", { status: 200 });
}
