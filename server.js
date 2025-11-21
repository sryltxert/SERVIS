import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const TOKEN = "TELEGRAM_BOT_TOKENİN";
const CHAT_ID = "MESAJLARIN DÜŞECEĞİ CHAT_ID";

app.post("/send", async (req, res) => {
  const { name, contact, message } = req.body;

  const text = `
Yeni Form Mesajı:
👤 İsim: ${name}
📞 İletişim: ${contact}
💬 Mesaj: ${message}
  `;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
    }),
  });

  res.json({ ok: true });
});

app.listen(3000, () => console.log("Server 3000'de çalışıyo kank."));
