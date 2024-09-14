export const LayoutMain = ({
  children,
  width = "w-3/4",
}: {
  children: JSX.Element;
  width?: string;
}) => {
  return <main className={width}>{children}</main>;
};
