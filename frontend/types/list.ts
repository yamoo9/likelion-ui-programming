import React from '../lib/react.js';

export type ListItem = {
  id: string;
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children: React.ReactNode;
  onToggle?: () => void;
};

export type List = ListItem[];
