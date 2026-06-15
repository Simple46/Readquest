import { useParams } from "react-router-dom";

export default function BookDetailPage() {
  const { bookId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-brown-muted">Book ID: {bookId}</p>
      <h1 className="text-3xl font-serif font-bold text-brown-dark">
        Book Detail Page
      </h1>
    </div>
  );
}
