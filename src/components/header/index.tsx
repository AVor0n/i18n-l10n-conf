import classNames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";

import { LangSelect } from "@/components/lang-select";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const Header = () => {
    const { pathname } = useRouter();

    return (
        <header className={cx("header")}>
            <LangSelect />

            <nav>
                {[
                    { href: "/", text: "Главная" },
                    { href: "/buy-tickets", text: "Купить билеты" },
                    { href: "/program", text: "Программа" },
                ].map(({ href, text }) => (
                    <Link key={href} href={href}>
                        <a
                            className={cx("navigation__link", {
                                navigation__link_active: pathname === href,
                            })}
                        >
                            {text}
                        </a>
                    </Link>
                ))}
            </nav>
        </header>
    );
};
