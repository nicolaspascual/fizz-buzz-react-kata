/**
 * This function takes a number and returns a string based on the following rules:
 * - If the number is divisible by 3, return "Fizz"
 * - If the number is divisible by 5, return "Buzz"
 * - If the number is divisible by both 3 and 5, return "FizzBuzz"
 * - Otherwise, return the number as a string
 * 
 * 
 * @param number
 * @throws Error if number is not provided or is less than 1 or greater than 100
 * @returns 
 */
export function fizzBuzz(number?: number): string {

  if (number === undefined)
    throw new Error("Please provide a number");
  if (number < 1)
    throw new Error("Please provide a number greater than 0");
  if (number > 100)
    throw new Error("Please provide a number less than or equal to 100");

  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number.toString();
}