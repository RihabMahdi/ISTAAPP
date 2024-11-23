import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextWeek, prevWeek, setShowAddAssignmentModal } from "../../../features/scheduler/schedulerSlice";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

export default function SchedulerHeader() {
  const dispatch = useDispatch();
  const startOfWeek = useSelector((state) => state.scheduler.startOfWeek);
  const startDate = startOfWeek ? dayjs(startOfWeek) : null;

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center px-5 pt-5 mx-5">
        <h2>{startDate.format("D")} - {startDate.add(5, "day").format("D MMM, YYYY")}</h2>
        <button onClick={() => dispatch(prevWeek())}>
          <ChevronLeft/>
        </button>
        <button onClick={() => dispatch(nextWeek())}>
          <ChevronRight/>
        </button>
      </div>
      <div className="flex items-center pt-5 mx-5">
        <button 
          className="btn btn-primary btn-sm gap-2"
          onClick={() => {dispatch(setShowAddAssignmentModal(true));
            dispatch(setShowAddAssignmentModal(true));
          }}>
          <Plus/>
          Add Assignment
        </button>
      </div>
    </header>
  );
}