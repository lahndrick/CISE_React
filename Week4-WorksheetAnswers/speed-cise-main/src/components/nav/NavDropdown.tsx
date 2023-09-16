import React from "react";
import styles from "./Nav.Module.scss";

type Props = {
  children?: React.ReactNode;
};

const NavDropdown = ({ children }: Props) => {
  return <div className={styles.dropdown_container}>{children}</div>;
};

export default NavDropdown;
