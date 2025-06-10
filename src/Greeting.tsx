import React from 'react';

/**
 * Displays a greeting message with the provided name in uppercase.
 *
 * @param name - The name to display in the greeting.
 *
 * @returns A React element containing the personalized greeting.
 *
 * @remark If {@link name} is an empty string, the greeting will display an empty space instead of defaulting to 'Guest'.
 */
export function Greeting({ name }: { name: string }) {
  // Introduce a bug: if name is empty, it should say 'Guest', but this is not handled
  return <h2>Hello, {name.toUpperCase()}! Welcome to CodeRabbit review test.</h2>;
}

/**
 * Returns a greeting message based on the provided hour of the day.
 *
 * @param hour - The hour of the day in 24-hour format.
 * @returns A greeting string corresponding to the time of day, or "Invalid hour" if the hour is 24 or greater.
 *
 * @remark For hours between 18 and 23, the function returns "Good night" instead of distinguishing between "Good evening" and "Good night".
 */
export function getGreetingTime(hour: number): string {
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  if (hour < 24) return 'Good night'; // Bug: should be 'Good evening' for 18-21, 'Good night' for 22-23
  return 'Invalid hour';
}
