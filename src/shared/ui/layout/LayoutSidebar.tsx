export const LayoutSidebar = ({
  children,
  width = "w-1/4",
}: {
  children: JSX.Element;
  width?: string;
}) => {
  return <nav className={width}>{children}</nav>;
};
