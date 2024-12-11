import express from "express";
import { deleteJob, getAllJobs,getMyJobs,postJob,updateJob } from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";
 

const router = express.Router();

router.get("/getall",getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getMyJobs", isAuthorized, getMyJobs);
router.put("/update/:id", isAuthorized, updateJob);
router.put("/delete/:id", isAuthorized, deleteJob);

export default router;