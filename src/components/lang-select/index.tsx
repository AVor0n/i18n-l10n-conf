import classNames from "classnames/bind";
import { useCallback, useState } from "react";

import DoneIcon from "@/icons/done.svg";
import EarthIcon from "@/icons/earth.svg";

import styles from "./styles.module.css";
import { useClickOutside } from "./use-click-outside";

const cx = classNames.bind(styles);

const LANGUAGES: Record<string, string> = {
    ru: "Русский",
    en: "English",
    ar: "اَلْعَرَبِيَّةُ",
};

export const LangSelect = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClose = useCallback(() => {
        setShowMenu(false);
    }, []);

    const handleMenuToggle = useCallback(() => {
        setShowMenu((prevShowMenu) => !prevShowMenu);
    }, []);

    const langSelectRef = useClickOutside<HTMLDivElement>(handleMenuClose);

    const selectedLang = "ru";

    return (
        <div className={cx("lang-select")} ref={langSelectRef}>
            <button
                className={cx("lang-select__button")}
                onClick={handleMenuToggle}
                data-testid="lang-select-button"
            >
                <span className={cx("lang-select__text")}>{LANGUAGES[selectedLang]}</span>
                <EarthIcon />
            </button>

            {showMenu && (
                <ul className={cx("lang-select__menu")} data-testid="lang-select-menu">
                    {Object.entries(LANGUAGES).map(([lang, langName]) => (
                        <li
                            className={cx("lang-select__menu-item")}
                            key={lang}
                            onClick={handleMenuClose}
                        >
                            <span className={cx("lang-select__menu-item-text")}>{langName}</span>
                            {lang === selectedLang && <DoneIcon />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
