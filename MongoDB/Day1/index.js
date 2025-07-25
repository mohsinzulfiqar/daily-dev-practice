import Authentication from "../Models/Day1/index.js";

export const registerUser = async (req, res) => {
  const { email, password, userType } = req;
  try {
    const result = await Authentication.create({
      email,
      password,
      userType,
    });
    return res.status(200).json({ email: result?.email });
  } catch (err) {
    return res.status(400).json({ error: err.message || "An error occurred during registration." });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Authentication.find().sort({ _id: -1 }).limit(2);
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message || "Failed to fetch users." });
  }
};