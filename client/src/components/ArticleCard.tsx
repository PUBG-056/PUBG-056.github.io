import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";
import { Link } from "wouter";

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string;
}

export default function ArticleCard({
  id,
  title,
  excerpt,
  category,
  date,
  readTime,
  imageUrl,
  slug,
}: ArticleCardProps) {
  const categoryColors: Record<string, string> = {
    遊戲: "bg-primary text-primary-foreground",
    科技: "bg-accent text-accent-foreground",
    評測: "bg-chart-2 text-white",
  };

  return (
    <Link href={`/article/${slug}`} data-testid={`link-article-${id}`}>
      <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            data-testid={`img-article-${id}`}
          />
          <div className="absolute top-4 left-4">
            <Badge className={categoryColors[category] || "bg-primary"} data-testid={`badge-category-${id}`}>
              {category}
            </Badge>
          </div>
        </div>
        
        <CardHeader className="flex-1">
          <h3 className="text-xl font-semibold line-clamp-2 leading-tight" data-testid={`text-title-${id}`}>
            {title}
          </h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed" data-testid={`text-excerpt-${id}`}>
            {excerpt}
          </p>
        </CardContent>
        
        <CardFooter className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span data-testid={`text-date-${id}`}>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span data-testid={`text-readtime-${id}`}>{readTime}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
