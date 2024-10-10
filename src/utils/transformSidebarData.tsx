import { ReactElement, ReactNode } from 'react';

interface TUserPath {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
  sidebar?: boolean;
}

interface SidebarMenuItem {
  name: string;
  path?: string;
  element?: ReactElement;
  children?: SidebarMenuItem[];
}

export const transformSidebarData = (paths: TUserPath[]): SidebarMenuItem[] => {
  return paths
    .filter((item) => item.sidebar !== false)
    .map((item) => ({
      name: item.name,
      path: item.path,
      children: item.children && transformSidebarData(item.children),
    }));
};
