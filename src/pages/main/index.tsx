import classNames from "classnames/bind";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import map from "public/images/map.jpg";
import { useCallback } from "react";

import { Button } from "@/components/button";
import { HorizontalDivider } from "@/components/horizontal-divider";
import { SpeakerCard } from "@/components/speaker-card";
import BoxIcon from "@/icons/box.svg";
import ConfLogoIcon from "@/icons/conf-logo.svg";
import MagnifyingGlassIcon from "@/icons/magnifying-glass.svg";
import MapArrowIcon from "@/icons/map-arrow.svg";
import SatelliteIcon from "@/icons/satellite.svg";
import AltLogoIcon from "@/icons/alt-logo.svg";

import { SPEAKERS_DATA } from "./constants";
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const MainPage: NextPage = () => {
    const router = useRouter();
    const handleBuyTickets = useCallback(() => router.push("/buy-tickets"), [router]);

    return (
        <>
            <Head>
                <title>
                    Международная конференция по интернационализации и локализации - I&L–2024
                </title>
            </Head>

            <header className={cx("header")}>
                <h2 className={cx("header__title")}>Интернационализация</h2>

                <div className={cx("header__container-wrapper")}>
                    <div className={cx("header__container")}>
                        <h2 className={cx("header__title", "header__container-title")}>
                            Локализация
                        </h2>
                        <h2 className={cx("header__title", "header__container-date")}>
                            21.08.2024
                        </h2>
                        <Button
                            className={cx("header__container-button")}
                            onClick={handleBuyTickets}
                        >
                            Купить билеты
                        </Button>
                        <AltLogoIcon
                            className={cx("header__container-logo")}
                            data-testid="alt-logo"
                        />
                    </div>

                    <ConfLogoIcon className={cx("header__logo")} data-testid="conf-logo" />
                </div>
            </header>

            <section className={cx("section")}>
                <h1 className={cx("section__title")}>
                    <span className={cx("section__title_accent")}>I&L–2024</span> — <br />
                    международная конференция по интернационализации и локализации для
                    профессионалов в IT
                </h1>

                <div className={cx("section__content")}>
                    <p className={cx("section__content-description")}>
                        Мы рады приветствовать вас на нашей конференции, где вы сможете поделиться
                        своим опытом, узнать о последних тенденциях и лучших практиках в области
                        интернационализации и локализации
                    </p>

                    <HorizontalDivider className={cx("section__content-divider")} />
                </div>
            </section>

            <section className={cx("section")}>
                <h3 className={cx("section__title")}>Спикеры</h3>

                <div className={cx("speakers", "section__content")}>
                    {SPEAKERS_DATA.map(({ id, avatar, name, title, description }) => (
                        <SpeakerCard
                            key={id}
                            avatar={avatar}
                            name={name}
                            title={title}
                            description={description}
                        />
                    ))}
                </div>
            </section>

            <section className={cx("section")}>
                <h3 className={cx("section__title")}>Это отличная возможность, чтобы:</h3>

                <div
                    className={cx("opportunities", "section__content")}
                    data-testid="opportunities-icons"
                >
                    {[
                        {
                            description: "Исследовать новые методологии",
                            Icon: MagnifyingGlassIcon,
                        },
                        {
                            description:
                                "Рассмотреть актуальные проблемы и поиски путей их решения",
                            Icon: MapArrowIcon,
                        },
                        {
                            description: "Получить опыт внедрения инновационных подходов",
                            Icon: SatelliteIcon,
                        },
                        {
                            description: "Опробовать полученные знания на практике",
                            Icon: BoxIcon,
                        },
                    ].map(({ description, Icon }) => (
                        <div className={cx("opportunities__item")} key={description}>
                            <Icon />
                            <div className={cx("opportunities__item-description")}>
                                {description}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={cx("section")}>
                <h3 className={cx("section__title")}>Место проведения</h3>

                <div className={cx("section__content")}>
                    <p className={cx("section__content-address")}>
                        Собираемся в офисе наших друзей:
                        <br />
                        Россия, Москва, улица Льва Толстого, 16
                    </p>

                    <div className={cx("section__content-map")}>
                        <Image src={map} alt="Карта с обозначением места проведения" />
                    </div>

                    <Button className={cx("section__content-button")} onClick={handleBuyTickets}>
                        Купить билеты
                    </Button>
                </div>
            </section>
        </>
    );
};
