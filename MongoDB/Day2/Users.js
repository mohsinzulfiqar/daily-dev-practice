import mongoose from "mongoose";
import User from "./Models/User.js";


async function addDummyUsers() {
  try {
    const users = [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        username: "alice123",
        role: "USER",
        createdBy: "admin",
        bio: "I love coding and coffee!",
      },
      {
        name: "Bob Smith",
        email: "bob@example.com",
        username: "bob_smith",
        role: "ADMIN",
        createdBy: "superadmin",
        bio: "Database enthusiast.",
      },
      {
        name: "Charlie Brown",
        email: "charlie@example.com",
        username: "charlie_b",
        role: "USER",
        createdBy: "admin",
        bio: "Frontend developer.",
      },
      {
        name: "David Lee",
        email: "david@example.com",
        username: "davidlee",
        role: "USER",
        createdBy: "admin",
        bio: "Loves React and Node.js.",
      },
      {
        name: "Eva Green",
        email: "eva@example.com",
        username: "eva_green",
        role: "USER",
        createdBy: "admin",
        bio: "Avid reader and writer.",
      },
      {
        name: "Frank Wright",
        email: "frank@example.com",
        username: "frankwright",
        role: "USER",
        createdBy: "admin",
        bio: "Sports lover.",
      },
      {
        name: "Grace Hill",
        email: "grace@example.com",
        username: "gracehill",
        role: "USER",
        createdBy: "admin",
        bio: "Traveler and photographer.",
      },
      {
        name: "Henry Ford",
        email: "henry@example.com",
        username: "henryford",
        role: "USER",
        createdBy: "admin",
        bio: "Tech enthusiast.",
      },
      {
        name: "Ivy Adams",
        email: "ivy@example.com",
        username: "ivyadams",
        role: "USER",
        createdBy: "admin",
        bio: "Designer and artist.",
      },
      {
        name: "Jack Wilson",
        email: "jack@example.com",
        username: "jackwilson",
        role: "USER",
        createdBy: "admin",
        bio: "Full-stack developer.",
      },
    ];

    // Insert 10 users
    const result = await User.insertMany(users);
    console.log("10 Users added successfully:", result);
    return result

  } catch (error) {
    console.error("Error adding users:", error);
  }
}


async function getAllUsers() {
  try {
    const result = await User.find();
    console.log("10 Users added successfully:", result);
    return result

  } catch (error) {
    console.error("Error adding users:", error);
  }
}

async function searchUser(name) {
  try {
    // const result = await User.find({ name: name });
    // const result = await User.find({
    // bio: { $regex: name, $options: "i" }
    // bio: name
    // case-insensitive search
    // }).limit(10);
    // optional: limit to 10 results

    const result = await User.find(
      { $text: { $search: name } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });

    console.log("Users found:", result.length);
    return result;
    console.log("10 Users added successfully:", result);
    return result
  } catch (error) {
    console.error("Error adding users:", error);
  }
}

export { addDummyUsers, getAllUsers, searchUser }