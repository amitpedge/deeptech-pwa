import { useState, useRef, useEffect } from 'react';
import { useFetcher } from '@remix-run/react';

export default function InteractiveNewscard({ newsItem }) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectionBox, setSelectionBox] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [showExplainButton, setShowExplainButton] = useState(false);
  const [isExplained, setIsExplained] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [loadingDots, setLoadingDots] = useState('');
  const [showDebug, setShowDebug] = useState(false);
  
  // New states for additional API responses
  const [whySoResponse, setWhySoResponse] = useState('');
  const [soWhatResponse, setSoWhatResponse] = useState('');
  const [tellMeMoreResponse, setTellMeMoreResponse] = useState('');
  const [activeOverlay, setActiveOverlay] = useState(null); // null, 'whySo', 'soWhat', 'tellMeMore'
  const [isLoading, setIsLoading] = useState(false);
  
  const cardRef = useRef(null);
  const summaryRef = useRef(null);
  const fetcher = useFetcher();
  
  // Reset selection when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        resetSelection();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Monitor fetcher state for loading and success
  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data && fetcher.data.explanation) {
      setExplanation(fetcher.data.explanation);
      setIsExplained(true);
      setLoadingDots('');
    }
  }, [fetcher.state, fetcher.data]);
  
  // Animate loading dots
  useEffect(() => {
    let interval;
    if (fetcher.state === 'submitting' || isLoading) {
      interval = setInterval(() => {
        setLoadingDots(prev => {
          if (prev.length >= 3) return '';
          return prev + '.';
        });
      }, 500);
    } else {
      setLoadingDots('');
    }
    
    return () => clearInterval(interval);
  }, [fetcher.state, isLoading]);
  
  // Debug key listener for showing the debug panel
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Press 'D' + 'B' + 'G' keys to toggle debug panel
      if (e.key === 'd' && e.altKey && e.shiftKey) {
        setShowDebug(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  const handleTouchStart = (e) => {
    // Clear any existing selection
    window.getSelection().removeAllRanges();
    setIsSelecting(true);
    setShowExplainButton(false);
  };
  
  const handleTouchEnd = (e) => {
    setIsSelecting(false);
    const selection = window.getSelection();
    
    if (selection && selection.toString().trim().length > 0) {
      // Expand selection to complete words
      expandSelectionToWords(selection);
      
      // Now update UI with the adjusted selection
      createSelectionBox(selection);
      setSelectedText(selection.toString());
      setShowExplainButton(true);
    } else {
      resetSelection();
    }
  };
  
  // Helper function to expand selection to whole words
  const expandSelectionToWords = (selection) => {
    if (!selection || selection.rangeCount === 0) return;
    
    const range = selection.getRangeAt(0);
    
    // Adjust start position to beginning of word
    const startContainer = range.startContainer;
    const startOffset = range.startOffset;
    
    // Only adjust if we're in a text node
    if (startContainer.nodeType === Node.TEXT_NODE) {
      const startText = startContainer.textContent;
      let newStartOffset = startOffset;
      
      // Move backward until we find a word boundary
      while (newStartOffset > 0 && !/\s/.test(startText.charAt(newStartOffset - 1))) {
        newStartOffset--;
      }
      
      range.setStart(startContainer, newStartOffset);
    }
    
    // Adjust end position to end of word
    const endContainer = range.endContainer;
    const endOffset = range.endOffset;
    
    // Only adjust if we're in a text node
    if (endContainer.nodeType === Node.TEXT_NODE) {
      const endText = endContainer.textContent;
      let newEndOffset = endOffset;
      
      // Move forward until we find a word boundary
      while (newEndOffset < endText.length && !/\s/.test(endText.charAt(newEndOffset))) {
        newEndOffset++;
      }
      
      range.setEnd(endContainer, newEndOffset);
    }
    
    // Update the selection
    selection.removeAllRanges();
    selection.addRange(range);
  };
  
  const createSelectionBox = (selection) => {
    if (!selection || selection.rangeCount === 0) return;
    
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const cardRect = summaryRef.current.getBoundingClientRect();
    
    // Calculate position relative to the card
    const box = {
      top: rect.top - cardRect.top,
      left: rect.left - cardRect.left,
      width: rect.width,
      height: rect.height
    };
    
    setSelectionBox(box);
  };
  
  const requestExplanation = () => {
    if (!selectedText) return;
    
    // Log the exact text being sent (visible in dev tools)
    console.log('Sending text to API:', selectedText);
    
    // Use Remix fetcher to submit to the action
    fetcher.submit(
      { text: selectedText, newsId: newsItem.id },
      { method: 'post', action: '/app/explain-news' }
    );
    
    // Hide selection UI while waiting for response
    setShowExplainButton(false);
    setSelectionBox(null);
  };
  
  const resetSelection = () => {
    setSelectionBox(null);
    setSelectedText('');
    setShowExplainButton(false);
    window.getSelection().removeAllRanges();
  };
  
  const resetCard = () => {
    setIsExplained(false);
    setExplanation('');
    setActiveOverlay(null);
    setWhySoResponse('');
    setSoWhatResponse('');
    setTellMeMoreResponse('');
    resetSelection();
  };
  
  // Get the selected sentence for the loading message
  const getHighlightedText = () => {
    if (!selectedText) return '';
    
    // Limit to first 50 characters with ellipsis if longer
    return selectedText.length > 50 
      ? `"${selectedText.substring(0, 50)}..."` 
      : `"${selectedText}"`;
  };
  
  // Dummy API functions with artificial delay
  const fetchWhySoResponse = async () => {
    setIsLoading(true);
    setActiveOverlay('whySo');
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setWhySoResponse(`This news is important because it reflects a significant shift in ${newsItem.companyName}'s market strategy. The implications might affect their competitive position and stock value in the coming quarters. Industry analysts have been monitoring these developments closely since the company's last earnings call.`);
    setIsLoading(false);
  };
  
  const fetchSoWhatResponse = async () => {
    setIsLoading(true);
    setActiveOverlay('soWhat');
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setSoWhatResponse(`The consequences of this development include potential changes in ${newsItem.companyName}'s product roadmap, possible restructuring of their operations, and impacts on their partnerships. Investors should pay attention to how this might affect quarterly projections and long-term growth prospects. Competitors in the same sector might also respond with strategic adjustments.`);
    setIsLoading(false);
  };
  
  const fetchTellMeMoreResponse = async () => {
    setIsLoading(true);
    setActiveOverlay('tellMeMore');
    
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setTellMeMoreResponse(`${newsItem.companyName} has been working on this initiative for the past 18 months. The development team consists of over 200 professionals across three continents. This move follows their strategic pivot announced last year and aligns with the industry-wide trend toward more sustainable and scalable solutions. The company has invested approximately $45 million in research and development for this project, with expectations of ROI within the next 5-7 quarters. Several key executives, including the CTO and VP of Product, have been championing this direction since the board meeting in Q3 of last year.`);
    setIsLoading(false);
  };
  
  // Determine card class based on loading state
  const cardClassName = `news-card ${(fetcher.state !== 'idle' || isLoading) ? 'ripple-container' : ''}`;
  
  return (
    <div 
      ref={cardRef}
      className={cardClassName}
    >
      {(fetcher.state !== 'idle' || isLoading) && (
        <div className="ripple-effect">
          <span></span>
        </div>
      )}
      
      {/* Card Header */}
      <div className="card-header news-card-header">
        <div className="news-meta-info">
          <div className="left-meta">
            <div className="news-date-container">
              <span className="meta-icon">📅</span>
              <span className="news-date">{new Date(newsItem.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="right-meta">
            <div className="news-sources">
              {/* Use multiple icons based on source count */}
              {(() => {
                const sourceCount = Math.floor(Math.random() * 5) + 1;
                return (
                  <>
                    <span className="meta-icon">
                      {sourceCount === 1 ? '📄' : sourceCount === 2 ? '📄📄' : '📄📄📄'}
                    </span>
                    <span className="sources-count">{sourceCount} {sourceCount === 1 ? 'source' : 'sources'}</span>
                  </>
                );
              })()}
            </div>
            <div className="confidence-score">
              <span className="meta-icon">⭐</span>
              <span className="score-value">{Math.floor(Math.random() * 30) + 70}%</span>
            </div>
          </div>
        </div>
        <h3 className="news-title">{newsItem.title}</h3>
      </div>
      
      {/* Card Content */}
      {isExplained ? (
        // Display explanation content
        <div className="explanation-content">
          <p className="explanation-label">Explanation:</p>
          <div className="explanation-text">
            {explanation.split('\n').map((paragraph, index) => (
              paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
            ))}
          </div>
          <button 
            className="reset-button"
            onClick={resetCard}
          >
            Back to original
          </button>
        </div>
      ) : activeOverlay ? (
        // Display API response overlays
        <div className={`news-overlay ${activeOverlay}-overlay`}>
          <div className="overlay-strip"></div>
          <div className="overlay-content">
            <h4 className="overlay-title">
              {activeOverlay === 'whySo' ? 'Why is this important?' : 
               activeOverlay === 'soWhat' ? 'What are the consequences?' : 
               'Additional Information'}
            </h4>
            
            <div className="overlay-text">
              {activeOverlay === 'whySo' && whySoResponse && 
                whySoResponse.split('\n').map((paragraph, index) => (
                  paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
                ))
              }
              
              {activeOverlay === 'soWhat' && soWhatResponse && 
                soWhatResponse.split('\n').map((paragraph, index) => (
                  paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
                ))
              }
              
              {activeOverlay === 'tellMeMore' && tellMeMoreResponse && 
                tellMeMoreResponse.split('\n').map((paragraph, index) => (
                  paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
                ))
              }
            </div>
            
            <button 
              className="reset-button"
              onClick={resetCard}
            >
              Back to news
            </button>
          </div>
        </div>
      ) : (
        // Display original content with selection capability
        <>
          <div 
            ref={summaryRef}
            className="news-summary"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            style={{ position: 'relative', userSelect: isSelecting ? 'text' : 'none' }}
          >
            {newsItem.summary}
            
            {/* Selection box overlay */}
            {selectionBox && (
              <div 
                className="selection-box"
                style={{
                  position: 'absolute',
                  top: `${selectionBox.top}px`,
                  left: `${selectionBox.left}px`,
                  width: `${selectionBox.width}px`,
                  height: `${selectionBox.height}px`,
                  backgroundColor: 'rgba(0, 123, 255, 0.2)',
                  border: '2px solid #007bff',
                  borderRadius: '3px',
                  pointerEvents: 'none',
                  zIndex: 1
                }}
              />
            )}
          </div>
          
          {/* Explain button */}
          {showExplainButton && (
            <div className="explain-button-container">
              <div className="selected-text-display">
                Selected: <span className="selected-text-content">"{selectedText}"</span>
              </div>
              <div className="action-buttons">
                <button 
                  className="explain-button"
                  onClick={requestExplanation}
                >
                  Explain this
                </button>
                <button 
                  className="cancel-button"
                  onClick={resetSelection}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          
          {/* Debug panel - hidden by default, toggle with Alt+Shift+D */}
          {showDebug && (
            <div className="debug-panel">
              <h4>Debug Information</h4>
              <div className="debug-content">
                <p><strong>Selected Text:</strong></p>
                <pre>{selectedText || '(none)'}</pre>
                <p><strong>Selection Box:</strong></p>
                <pre>{JSON.stringify(selectionBox, null, 2) || '(none)'}</pre>
                <p><strong>Fetcher State:</strong> {fetcher.state}</p>
              </div>
            </div>
          )}
          
          {/* Loading indicator overlay */}
          {(fetcher.state !== 'idle' || isLoading) && (
            <div className="loading-overlay">
              <p>
                {activeOverlay === 'whySo' ? 'Analyzing importance' : 
                 activeOverlay === 'soWhat' ? 'Evaluating consequences' : 
                 activeOverlay === 'tellMeMore' ? 'Gathering more information' : 
                 `Analyzing ${getHighlightedText()}`}{loadingDots}
              </p>
            </div>
          )}
        </>
      )}
      
      {/* Card Footer with API buttons */}
      <div className="news-card-footer">
        <div className="left-buttons">
          <button 
            className="api-button why-so-button"
            onClick={fetchWhySoResponse}
            disabled={isLoading || isExplained || activeOverlay}
          >
            Why so?
          </button>
          <button 
            className="api-button so-what-button"
            onClick={fetchSoWhatResponse}
            disabled={isLoading || isExplained || activeOverlay}
          >
            So what?
          </button>
        </div>
        
        <div className="right-buttons">
          <button 
            className="api-button tell-more-button"
            onClick={fetchTellMeMoreResponse}
            disabled={isLoading || isExplained || activeOverlay}
          >
            Tell me more
          </button>
        </div>
      </div>
    </div>
  );
} 