import readingTime from "reading-time";
import { DateTime } from "luxon";

export const getReadingTime = (text: string) => {
  if (text) {
    return readingTime(text).text;
  }
};

export const getRelativeDate = (date: string) => {
  if (date) {
    return DateTime.fromISO(date).toRelative();
  }
};
