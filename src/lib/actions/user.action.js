import User from "../models/user.model";
import { connectToMongoDB } from "../mongodb/mongoose";

//! 1- Function to create or update the user:
export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    //! connect to the database:
    await connectToMongoDB();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          photo: image_url,
          email: email_addresses[0].email_address,
          username: username,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    return user;
  } catch (error) {
    console.log("Error creating or updating user", error);
    throw error;
  }
};

//! 2- Function to delete the user:
export const deleteUser = async (id) => {
  try {
    //! connect to the database:
    await connectToMongoDB();

    await User.findByIdAndDelete({
      clerkId: id,
    });
  } catch (error) {
    console.log("Error deleting user", error);
    throw error;
  }
};
