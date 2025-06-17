export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST requests allowed' });
    }

    const { data } = req.body;

    if (!data || typeof data !== 'string') {
        return res.status(400).json({ error: 'Invalid input, expected string in "data" field.' });
    }

    const word = data.split('').sort();
    return res.status(200).json({ word });
}