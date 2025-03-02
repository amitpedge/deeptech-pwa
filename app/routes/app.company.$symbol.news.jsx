import { useLoaderData, useNavigate, useParams, Link } from "@remix-run/react";

export async function loader({ params }) {
  console.log('Loader params:', params); // Debug log
  const API_URL = process.env.API_URL || 'http://localhost:8000';
  try {
    const response = await fetch(`${API_URL}/api/company/${params.symbol}/news`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching news:', error);
    // You can also throw a Response here for better error handling
    return { 
      news: [],
      error: 'Failed to fetch news'
    };
  }
}

export default function CompanyNews() {
  const { symbol } = useParams();
  const { news } = useLoaderData();

  return (
    <div className="news-container">
      <Link to=".." className="back-link">← Back </Link>
      
      <div className="news-list">
        {news?.map((item) => (
          <div key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p className="news-meta">
              {item.date} • {item.source}
            </p>
            <p className="news-summary">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 