import React from 'react';
import { useLocation } from 'react-router-dom';
import { ComingSoonLayout } from '../features/coming-soon';

interface ComingSoonPageProps {
  moduleKey?: string;
}

export const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ moduleKey }) => {
  const location = useLocation();
  const currentKey = moduleKey || location.pathname.replace(/^\//, '') || 'proximamente';

  return <ComingSoonLayout moduleKey={currentKey} />;
};
