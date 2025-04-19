import Link from "next/link";
import style from "./header.module.scss";
import { Button } from "antd";
type HeaderProps = {
  title: string;
  label: string;
  href: string;
};

const Header = ({ title, label, href }: HeaderProps) => {
  return (
    <div className={style.headercontainer}>
      <div className={style.title}>{title}</div>
      <Link href={href}>
        <Button>{label}</Button>
      </Link>
    </div>
  );
};

export default Header;
