import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSidebarItem = {
  key: string;
  icon?: ReactNode;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TUserPath = {
  name: string;
  path?: string;
  icon?: ReactNode;
  element?: ReactNode;
  children?: TUserPath[];
};
