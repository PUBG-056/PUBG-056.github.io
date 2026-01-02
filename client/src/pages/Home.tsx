import { useState, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import { articles } from "@/data/content";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const categories = useMemo(() => {
    const categoryCounts: Record<string, number> = {};
    articles.forEach((article) => {
      categoryCounts[article.category] = (categoryCounts[article.category] || 0) + 1;
    });
    return [
      { name: "全部", count: articles.length },
      ...Object.entries(categoryCounts).map(([name, count]) => ({ name, count })),
    ];
  }, []);

  const filteredArticles = activeCategory === "全部"
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 space-y-12">
          {featuredArticle && (
            <HeroSection
              title={featuredArticle.title}
              excerpt={featuredArticle.excerpt}
              category={featuredArticle.category}
              date={featuredArticle.date}
              readTime={featuredArticle.readTime}
              imageUrl={featuredArticle.imageUrl}
              articleId={featuredArticle.slug}
            />
          )}

          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl font-bold font-tech">最新文章</h2>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.slice(1).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
