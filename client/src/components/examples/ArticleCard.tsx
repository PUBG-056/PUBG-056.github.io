import ArticleCard from '../ArticleCard';
import gamingImage from '@assets/generated_images/Gaming_tech_article_thumbnail_f3456d32.png';

export default function ArticleCardExample() {
  return (
    <div className="p-8 bg-background max-w-sm">
      <ArticleCard
        id="1"
        title="RGB 機械鍵盤選購指南：2025 年度最佳推薦"
        excerpt="從軸體選擇到燈效設定，完整解析如何挑選最適合你的機械鍵盤。包含 Cherry、Gateron 等主流品牌比較。"
        category="科技"
        date="2025-01-10"
        readTime="6 分鐘"
        imageUrl={gamingImage}
        slug="RGB-機械鍵盤選購指南-2025-年度最佳推薦"
      />
    </div>
  );
}
