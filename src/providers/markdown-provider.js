import React, { createContext, useContext, useState } from 'react';

const MarkdownContext = createContext();

/**
 * Provides Markdown state management for the app.
 */
const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => useContext(MarkdownContext);

export default MarkdownProvider;
