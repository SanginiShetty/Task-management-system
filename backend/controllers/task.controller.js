// import { Task } from "../models/Task.model.js";

// // Create a new task
// export const addTask = async (req, res) => {
//   try {
//     const { title, status, dueDate } = req.body;
//     const newTask = new Task({ title, status, dueDate });
//     await newTask.save();
//     res.status(201).json(newTask);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating task", error });
//   }
// };

// // Get all tasks
// export const getAllTasks = async (req, res) => {
//   try {
//     const tasks = await Task.find();
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching tasks", error });
//   }
// };

// // Get task by ID
// export const getTaskById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const task = await Task.findById(id);
//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching task", error });
//   }
// };

// // Update task by ID
// export const updateTask = async (req, res) => {
//   const { id } = req.params;
//   const { title, status, dueDate } = req.body;
//   try {
//     const updatedTask = await Task.findByIdAndUpdate(id, { title, status, dueDate }, { new: true });
//     if (!updatedTask) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.status(200).json(updatedTask);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating task", error });
//   }
// };

// // Delete task by ID
// export const deleteTask = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedTask = await Task.findByIdAndDelete(id);
//     if (!deletedTask) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.status(200).json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting task", error });
//   }
// };

// // Search task by title
// export const searchTaskByTitle = async (req, res) => {
//   const { title } = req.params;
//   try {
//     const tasks = await Task.find({ title: new RegExp(title, "i") }); // case-insensitive search
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: "Error searching tasks", error });
//   }
// };


import { Task } from "../models/Task.model.js";

// Create a new task
export const addTask = async (req, res) => {
  const { title, status, dueDate } = req.body;

  if (!title || !status || !dueDate) {
    return res.status(400).json({ message: "All fields (title, status, dueDate) are required." });
  }

  try {
    const newTask = new Task({ title, status, dueDate });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error: error.message });
  }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error: error.message });
  }
};

// Delete task by ID
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error: error.message });
  }
};
