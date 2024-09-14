import { LayoutHeader } from "./LayoutHeader";
import { LayoutMain } from "./LayoutMain";
import { LayoutSidebar } from "./LayoutSidebar";

interface LayoutProps {
  header: JSX.Element;
  sidebar?: JSX.Element;
  children: JSX.Element;
}

export const Layout = ({ header, sidebar, children }: LayoutProps) => {
  return (
    <div className='flex flex-wrap'>
      <LayoutHeader>{header}</LayoutHeader>
      {sidebar ? (
        <>
          <LayoutSidebar>{sidebar}</LayoutSidebar>
          <LayoutMain>{children}</LayoutMain>
        </>
      ) : (
        <LayoutMain width='w-full'>{children}</LayoutMain>
      )}
    </div>
  );
};
