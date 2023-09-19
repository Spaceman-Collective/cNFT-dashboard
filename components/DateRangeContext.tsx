import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { create } from "zustand";

type State = {
  dateRange: DateRange;
};

type Action = {
  updateRange: (selectedRange: State["dateRange"]) => void;
};

export const useDateRangeStore = create<State & Action>((set) => ({
  dateRange: { from: addDays(new Date(), -30), to: new Date() },
  updateRange: (dateRange) => set({ dateRange }),
}));
