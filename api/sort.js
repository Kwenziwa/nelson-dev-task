export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method Not Allowed. Please use POST." });
  }

  const { data } = req.body;

  // Validate that "data" exists and is a string
  if (!data || typeof data !== "string") {
    return res
      .status(400)
      .json({ error: 'Invalid input. "data" must be a non-empty string.' });
  }

  // Convert the string into characters, sort alphabetically
  const sortedChars = data.split("").sort();

  // Return the result as a JSON response
  return res.status(200).json({ word: sortedChars });
}
