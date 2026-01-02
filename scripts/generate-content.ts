import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  articles: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    articles: [],
  };

  // Load articles
  try {
    const articlesDir = resolve(contentPath, "articles");
    const articleFiles = await readdir(articlesDir);
    for (const file of articleFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(articlesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const article = yaml.load(content) as any;
          const slug = file.replace(/\.(yaml|yml)$/, "");
          article.slug = slug;
          // 驗證圖片 URL
          if (article.imageUrl && !article.imageUrl.startsWith("/attached_assets/")) {
            console.warn(`警告: 文章 "${article.title}" 的圖片 URL "${article.imageUrl}" 應該以 "/attached_assets/" 開頭`);
          }
          data.articles.push(article);
        }
      }
    }
    // Sort by date descending
    data.articles.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load articles:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Articles: ${data.articles.length}`);
}

generateContent().catch(console.error);

