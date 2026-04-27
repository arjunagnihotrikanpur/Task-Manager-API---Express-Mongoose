const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createTask,
  getAllTasks,
  getMyTasks,
  updateTaskStatus,
  deleteTask,
} = require("../controllers/taskController");

// Admin Routes
router.post("/", auth, role("admin"), createTask);
router.get("/", auth, role("admin"), getAllTasks);
router.delete("/:id", auth, role("admin"), deleteTask);

// Employee Routes
router.get("/me", auth, role("employee"), getMyTasks);
router.patch("/:id", auth, role("employee"), updateTaskStatus);

module.exports = router;
