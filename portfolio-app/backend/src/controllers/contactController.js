// Example: Store message in memory (replace with DB or email in production)
let messages = [];

exports.handleContact = (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required." });
  }
  messages.push({ name, email, message, date: new Date() });
  res.json({ success: true, msg: "Message received!" });
};