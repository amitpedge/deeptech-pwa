import { useState } from 'react';
import { companies } from "../data/companies";
import { useNavigate, useLoaderData } from "@remix-run/react";
import CompanyCard from '../components/CompanyCard';

export function links() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}

export async function loader() {
  try {
    const response = await fetch('https://pdf-processing-service.vercel.app/summaries');
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    return { news: data };
  } catch (error) {
    console.error('Error fetching news:', error);
    return { news: [] };
  }
}

// Helper function to find which company the news article is about
function findRelevantCompany(text) {
  const company = companies.find(company => 
    text.toLowerCase().includes(company.title.toLowerCase())
  );
  return company ? company.title : 'General News';
}

// Helper function to find company ID
function findCompanyId(text) {
  const company = companies.find(company => 
    text.toLowerCase().includes(company.title.toLowerCase())
  );
  return company ? company.id : null;
}

export default function Index() {
  const [activeTab, setActiveTab] = useState('COMPANIES');
  const { news } = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = (code) => {
    console.log(`Deleting company with code: ${code}`);
    // In a real app, this would handle deletion from your data store
  };

  return (
    <div>
      <div className="tabs-container">
        <div 
          className={`tab ${activeTab === 'COMPANIES' ? 'active' : ''}`}
          onClick={() => setActiveTab('COMPANIES')}>
          COMPANIES
        </div>
        <div 
          className={`tab ${activeTab === 'NEWS' ? 'active' : ''}`}
          onClick={() => setActiveTab('NEWS')}>
          NEWS
        </div>
      </div>

      <main>
        {activeTab === 'COMPANIES' && (
          <div className="company-list">
            {companies.map((company) => (
              <CompanyCard 
                key={company.id}
                company={company}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {activeTab === 'NEWS' && (
          <div className="news-container">
            <div className="news-list">
              {news.map((item) => (
                <div key={item.id} className="news-card">
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-date">{new Date(item.date).toLocaleDateString()}</p>
                  <p className="news-summary">{item.summary}</p>
                  <div className="news-footer">
                    <span className="news-company">{item.companyName}</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
              {news.length === 0 && (
                <div className="no-news">No news articles found</div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
