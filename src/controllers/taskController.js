const Task = require("../models/Task");

// Admin - Create Task
exports.createTask = async (req, res) => {
  const { title, description, assignedTo } = req.body;

  const task = Task.create({
    title,
    description,
    assignedTo,
  });

  res.json(task);
};

// Admin - Get All Tasks
exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate("assignedTo", "name email");
  res.json(tasks);
};

// Employee - Get own Tasks
exports.getMyTasks = async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user.id });
  res.json(tasks);
};

// Employee - Update Task Status
exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (task.assignedTo.toString() !== req.user.id) {
    return res.status(403).json({ message: "Not Your Task!" });
  }

  task.status = status;
  await task.save();

  res.json(task);
};

// Admin - Delete Task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task Deleted!" });
};
