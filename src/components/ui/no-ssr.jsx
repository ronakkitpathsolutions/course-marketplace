"use client";

import { useEffect, useState } from 'react';

/**
 * Wrapper component to prevent hydration mismatches by ensuring
 * client-only components are rendered only after hydration
 */
const NoSSR = ({ children, fallback = null }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return children;
};

export default NoSSR;
