import { useParams } from "react-router-dom";

export default function ReaderPage() {
  const { bookId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <p className="text-brown-muted">Reading Book ID: {bookId}</p>
      <h1 className="text-3xl font-serif font-bold text-brown-dark">
        Reader Page
      </h1>
    </div>
  );
}
