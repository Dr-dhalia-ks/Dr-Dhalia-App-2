import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

interface ServerBlessing {
  id: string;
  name: string;
  country: string;
  message: string;
  prayer?: string;
  relation: string;
  word: string;
  impact?: string;
  roseColor: 'gold' | 'champagne' | 'ivory' | 'rose-gold';
  createdAt: number;
}

const PORT = 3000;
const STORAGE_FILE = path.join(process.cwd(), "blessings_storage.json");

const SEED_BLESSINGS: ServerBlessing[] = [
  {
    id: "seed-1",
    name: "Pastor Tunde Sanni",
    country: "United Kingdom",
    message: "To my beloved sister and co-laborer in the kingdom, your 50 years are a testament to the quiet strength of faith. The way you care for our family, combined with your clinical precision, makes us all stand in awe. God’s hand is visible on every step of your journey.",
    prayer: "May the Lord multiply your strength, give you clarity for this next season, and satisfy you with long life, continuous healing, and peace.",
    relation: "family",
    word: "Grace",
    impact: "Dr. Dhalia taught me that patience and silent trust in seasons of transition are the greatest spiritual achievements.",
    roseColor: "gold",
    createdAt: 1781251200000
  },
  {
    id: "seed-2",
    name: "Dr. Elizabeth Finch",
    country: "United States",
    message: "Happy Golden Jubilee, Dhalia! Since our residency days, you have exemplified academic mastery and deep heart for the vulnerable. Leading the clinical boards alongside you was a masterpiece of professional excellence. You represent the modern physician at her best.",
    prayer: "I pray that your clinical legacy continues to flourish and that the next generation of doctors learns what true compassionate care looks like through you.",
    relation: "colleague",
    word: "Excellence",
    impact: "Dr. Dhalia taught me to look beyond clinical metrics and deeply understand the soul of the patient.",
    roseColor: "champagne",
    createdAt: 1781261200000
  },
  {
    id: "seed-3",
    name: "Chidimma Adeleke",
    country: "Nigeria",
    message: "Dr. Dhalia has been my mentor, second mother, and spiritual anchor. When I was navigating the hardest crossroads of my career and marriage, her soft words and absolute lack of judgment rebuilt my confidence completely. I am forever grateful.",
    prayer: "May God cause men to favor you in your future platform, and may your mentorship circles cover the face of the earth.",
    relation: "mentee",
    word: "Wisdom",
    impact: "Dr. Dhalia taught me to trust God’s timing even when my timeline fell apart.",
    roseColor: "rose-gold",
    createdAt: 1781271200000
  },
  {
    id: "seed-4",
    name: "David Kujore",
    country: "Canada",
    message: "To an extraordinary aunt, your warmth makes everyone feel seen. Even with your busy global schedule advising and healing, you never miss our family milestones. Thank you for showing us what an integrated, faith-led life looks like.",
    prayer: "May this milestone birthday bring you overflow of joy, laughter, and a profound sense of accomplishment.",
    relation: "family",
    word: "Legacy",
    impact: "Dr. Dhalia taught me to treasure people far above positions and titles.",
    roseColor: "ivory",
    createdAt: 1781281200000
  },
  {
    id: "seed-5",
    name: "Sarah Jenkins",
    country: "South Africa",
    message: "What a privilege to celebrate you! Your teachings on healthcare governance and your silent spiritual devotion are rare lights. Our leadership panels are richer because of your serene and elegant presence.",
    prayer: "May this platform launch you into speaking global volumes that restore faith-centered leadership to healthcare governance globally.",
    relation: "friend",
    word: "Faith",
    impact: "Dr. Dhalia taught me how to lead difficult boardrooms with absolute calm and elegance.",
    roseColor: "gold",
    createdAt: 1781291200000
  }
];

function getBlessings(): ServerBlessing[] {
  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const data = fs.readFileSync(STORAGE_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading file:", error);
  }
  // Fallback to seeds and write to file
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(SEED_BLESSINGS, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing initial seeds:", e);
  }
  return SEED_BLESSINGS;
}

function saveBlessings(blessings: ServerBlessing[]) {
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(blessings, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving file:", error);
  }
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // API router endpoints
  app.get("/api/blessings", (req, res) => {
    try {
      const list = getBlessings();
      res.json({ success: true, blessings: list });
    } catch (e) {
      res.status(500).json({ success: false, error: "Failed to load blessings list" });
    }
  });

  app.post("/api/blessings", (req, res) => {
    try {
      const { name, country, message, prayer, relation, word, impact, roseColor } = req.body;
      
      if (!name || !country || !message || !relation || !word) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
      }

      const list = getBlessings();
      const newBlessing: ServerBlessing = {
        id: "user-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
        name: String(name).trim(),
        country: String(country).trim(),
        message: String(message).trim(),
        prayer: prayer ? String(prayer).trim() : undefined,
        relation: String(relation).trim(),
        word: String(word).trim(),
        impact: impact ? String(impact).trim() : undefined,
        roseColor: roseColor || "gold",
        createdAt: Date.now()
      };

      list.unshift(newBlessing); // New ones on top
      saveBlessings(list);

      res.status(201).json({ success: true, blessing: newBlessing });
    } catch (e) {
      res.status(500).json({ success: false, error: "Failed to store blessing" });
    }
  });

  // Reset helper if visitors want to start pristine (for review/demo purposes)
  app.post("/api/reset", (req, res) => {
    try {
      saveBlessings(SEED_BLESSINGS);
      res.json({ success: true, blessings: SEED_BLESSINGS });
    } catch (e) {
      res.status(500).json({ success: false, error: "Reset failed" });
    }
  });

  // Vite development / static production middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Dr.Dhalia-KS Server] Running on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});
