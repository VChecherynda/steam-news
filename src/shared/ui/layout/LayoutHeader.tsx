import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export const LayoutHeader = ({
  children,
  width = "w-full",
}: {
  children: JSX.Element;
  width?: string;
}) => {
  const classes = twMerge(
    classnames(width, "h-12 p-2 justify-between content-center")
  );

  return <header className={classes}>{children}</header>;
};
