import React from '../lib/react.js';

export type ListItem = {
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children: React.ReactNode;
  onToggle?: () => void;
};

export type List = ListItem[];
