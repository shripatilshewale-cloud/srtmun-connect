import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChatBox } from '../components/ChatBox';

export const Chatbot: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <ChatBox initialQuery={initialQuery} />
    </div>
  );
};
