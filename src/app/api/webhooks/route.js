import { createOrUpdateUser, deleteUser } from "../../../lib/actions/user";
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

  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, first_name, last_name, image_url, email_addresses, username } =
      evt?.data;

    try {
      await createOrUpdateUser(
        id,
        first_name,
        last_name,
        image_url,
        email_addresses,
        username
      );

      //! return a success response:
      return new Response("User is Created Or Updated Successfully!", {
        status: 200,
      });
    } catch (error) {
      console.log("Error creating or updating user", error);
      return new Response("Error creating or updating user", {
        status: 400,
      });
    }
  }


  if (eventType === 'user.deleted') {
    const { id } = evt?.data;
    try {
      await deleteUser(id);

      //! return a success response:
      return new Response("User is Deleted Successfully!", {
        status: 200,
      });
    } catch (error) {
      console.log("Error deleting user", error);
      return new Response("Error deleting user", {
        status: 400,
      });
    }
  }

  return new Response("", { status: 200 });
}
