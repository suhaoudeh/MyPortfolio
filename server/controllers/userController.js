import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

export const createUser = async (req, res) => {
  try {
    console.log('📥 Incoming POST request:', req.body); // Confirm request
    const user = new User(req.body);
    await user.save();
    console.log('✅ User saved:', user); // Confirm save
    res.status(201).json(user);
  } catch (err) {
    console.error('❌ Error saving user:', err.message);
    res.status(400).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    console.error('❌ Error updating user:', err.message);
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('❌ Error deleting user:', err.message);
    res.status(400).json({ error: err.message });
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({ message: 'All users deleted' });
  } catch (err) {
    console.error('❌ Error deleting all users:', err.message);
    res.status(400).json({ error: err.message });
  }
};