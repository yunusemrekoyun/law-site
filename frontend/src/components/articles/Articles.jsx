import { ARTICLES } from "../../data/articles";
import ArticleItem from "./ArticleItem";

export default function Articles() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {ARTICLES.map((item) => (
        <ArticleItem key={item.id || item.slug} item={item} />
      ))}
    </div>
  );
}
