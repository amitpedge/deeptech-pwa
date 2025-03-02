import { useNavigate, Link } from "@remix-run/react";

export default function CompanyCard({ company, onDelete }) {
  const navigate = useNavigate();

  const handleNewsClick = (e) => {
    e.preventDefault();
    navigate(`/app/company/${company.symbol}/news`); // Updated path with /app prefix
  };

  return (
    <div className="card">
      {/* Simple header with fixed layout */}
      <div className="card-header">
        <div className="title-row">
          <span className="company-name">{company.title}</span>
          <button 
            onClick={() => onDelete(company.id)}
            className="delete-btn"
          >
            ×
          </button>
        </div>
      </div>

      {/* Market data */}
      <div className="card-body">
        <div className="data-row">
          <span>Market Cap</span>
          <span>{company.marketCap}</span>
        </div>
        <div className="data-row">
          <span>LTP</span>
          <span>{company.lastPrice}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <div>
          {company.unreadNews !== "0" && (
            <button 
              className="news-count"
              onClick={handleNewsClick}
              aria-label={`View ${company.unreadNews} unread news for ${company.title}`}
            >
              {company.unreadNews}
            </button>
          )}
        </div>
        <Link 
          to={`/app/company/${company.symbol}/summary`} 
          className="details-link"
          preventScrollReset
        >
          View Details →
        </Link>
      </div>
    </div>
  );
} 