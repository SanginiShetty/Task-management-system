// import { Router } from "express";
// import {
//   addTask,
//   getAllTasks,
//   getTaskById,
//   updateTask,
//   deleteTask,
//   searchTaskByTitle,
// } from "../controllers/task.controller.js";

// const taskRouter = Router();

// // CRUD operations for tasks
// taskRouter.route("/").post(addTask).get(getAllTasks);

// // Operations for a single task by ID
// taskRouter
//   .route("/:id")
//   .get(getTaskById)
//   .put(updateTask)
//   .delete(deleteTask);

// // Search task by title
// taskRouter.route("/search/:title").get(searchTaskByTitle);

// export default taskRouter;



import { Router } from "express";
import {
  addTask,
  getAllTasks,
  deleteTask,
} from "../controllers/task.controller.js";

const taskRouter = Router();

// POST /tasks: Create a task
taskRouter.post("/", addTask);

// GET /tasks: Get all tasks
taskRouter.get("/", getAllTasks);

// DELETE /tasks/:id: Delete a task by ID
taskRouter.delete("/:id", deleteTask);

export default taskRouter;
