import classNames from "classnames/bind";
import { FC, ReactNode } from "react";

import AltLogoIcon from "@/icons/alt-logo.svg";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

interface PageHeaderProps {
    title: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title }) => (
    <header className={cx("header")}>
        <h1 className={cx("header__title")}>{title}</h1>

        <div className={cx("header__subtitle")}>
            <AltLogoIcon />
            <h2 className={cx("header__subtitle-text")}>I&L–2024</h2>
        </div>
    </header>
);
