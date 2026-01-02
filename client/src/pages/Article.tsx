import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, Share2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import MarkdownContent from "@/components/MarkdownContent";
import { articles } from "@/data/content";

export default function Article() {
  const [, params] = useRoute("/article/:slug");
  const article = articles.find((a) => a.slug === params?.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">找不到文章</h2>
              <p className="text-muted-foreground">這篇文章可能不存在</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Link href="/" data-testid="link-back">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft className="h-4 w-4" />
                返回首頁
              </Button>
            </Link>

            <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
                data-testid="img-article-hero"
              />
            </div>

            <div className="space-y-4">
              <Badge data-testid="badge-article-category">{article.category}</Badge>
              
              <h1 className="text-4xl font-bold font-tech leading-tight" data-testid="text-article-title">
                {article.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span data-testid="text-article-date">{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span data-testid="text-article-readtime">{article.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="gap-2" data-testid="button-share">
                  <Share2 className="h-4 w-4" />
                  分享
                </Button>
              </div>
            </div>

            <Card className="p-8">
              <MarkdownContent content={article.content} data-testid="content-article" />
            </Card>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
