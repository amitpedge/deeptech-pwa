import { useState } from 'react';
import { companies } from "../data/companies";
import { news } from "../data/news";
import styles from "../styles/index.css"
import { useNavigate } from "@remix-run/react";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('COMPANIES');
  const [selectedCompany, setSelectedCompany] = useState('all');
  const navigate = useNavigate();

  const handleCompanyClick = (url) => {
    window.open(url, '_blank');
  };

  // Filter news based on selected company
  const filteredNews = selectedCompany === 'all' 
    ? news 
    : news.filter(item => item.company === selectedCompany);

  return (
    <div className="app-container">
      <header className="header">
        <div className="left-icons">
          <div className="logo">
            <span>🔮</span>
            <span>1nvest</span>
          </div>
        </div>
        <button className="icon-button">👤</button>
      </header>

      <nav className="navigation">
        <button 
          className={`nav-button ${activeTab === 'COMPANIES' ? 'active' : ''}`}
          onClick={() => setActiveTab('COMPANIES')}
        >
          COMPANIES
        </button>
        <button 
          className={`nav-button ${activeTab === 'NEWS' ? 'active' : ''}`}
          onClick={() => setActiveTab('NEWS')}
        >
          NEWS
        </button>
      </nav>

      <main>
        {activeTab === 'COMPANIES' ? (
          <div className="company-list">
            {companies.map((company) => (
              <div 
                key={company.code} 
                className="company-item"
                onClick={() => handleCompanyClick(company.url)}
                role="button"
                tabIndex={0}
              >
                <h3>{company.name}</h3>
                <div className="company-details">
                  <span>{company.revenue}</span>
                  <span>|</span>
                  <span>{company.days} days</span>
                  <span>|</span>
                  <span>{company.code}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="news-section">
            <div className="news-filters">
              <select 
                value={selectedCompany} 
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="company-filter"
              >
                <option value="all">All Companies</option>
                {companies.map((company) => (
                  <option key={company.code} value={company.code}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="news-list">
              {filteredNews.map((item) => (
                <div key={item.id} className="news-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="news-meta">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <button className="sign-out-button">SIGN OUT</button>
      </footer>
    </div>
  );
}