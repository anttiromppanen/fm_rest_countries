import { ReactNode } from "react";
import { Link } from "react-router-dom";

function StyledButton({
  children,
  linkTo,
}: {
  children: ReactNode;
  linkTo: string;
}) {
  return (
    <Link
      to={linkTo}
      className="
      user-shadow flex w-fit items-center justify-center gap-x-2 bg-userLightSecondaryBg px-6 py-2 text-sm
      dark:bg-userDarkSecondaryBg dark:text-userDarkPrimaryText"
    >
      {children}
    </Link>
  );
}

export default StyledButton;
