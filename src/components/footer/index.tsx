import classNames from "classnames/bind";

import TelegramIcon from "@/icons/telegram.svg";
import VkontakteIcon from "@/icons/vkontakte.svg";

import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const Footer = () => (
    <footer className={cx("footer")}>
        <div className={cx("footer-content")}>
            <div>
                <div className={cx("footer-content__text")}>
                    Если вы нашли ошибку, пожалуйста, <a href="#">сообщите нам</a>
                </div>

                <div className={cx("footer-content__copyright")}>
                    <div className={cx("footer-content__text")}>
                        Все материалы доступны по лицензии <a href="#">CC BY-NC 3.0</a> с
                        обязательным указанием © ООО «<a href="#">Альт</a>»
                    </div>
                    <div className={cx("footer-content__text")}>
                        © 2019–2024, ООО «<a href="#">Альт</a>»
                    </div>
                </div>
            </div>

            <div className={cx("footer-content__social")}>
                <div className={cx("footer-content__text")}>Подпишитесь</div>

                <div className={cx("footer-content__social-links")} data-testid="social-icons">
                    {[TelegramIcon, VkontakteIcon].map((Icon, index) => (
                        <a key={index} href="#">
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);
