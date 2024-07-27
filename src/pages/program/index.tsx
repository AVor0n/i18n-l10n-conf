import classNames from "classnames/bind";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

import { HorizontalDivider } from "@/components/horizontal-divider";
import { PageHeader } from "@/components/page-header";

import { PRESENTATIONS } from "./constants";
import styles from "./styles.module.css";

const cx = classNames.bind(styles);

export const ProgramPage = () => (
    <>
        <Head>
            <title>Программа - I&L–2024</title>
        </Head>

        <PageHeader title="Программа" />

        <section className={cx("program")}>
            <div className={cx("program__text")}>21:30</div>
            <div className={cx("program__text", "program__text_registration")}>
                Регистрация в офлайне
            </div>

            <HorizontalDivider className={cx("program__divider")} />

            {PRESENTATIONS.map(
                ({ time, avatar, name, title, presentationTitle, presentationDescription }) => (
                    <Fragment key={presentationTitle}>
                        <div className={cx("program__text")}>{time}</div>

                        <div className={cx("program__card")}>
                            <Image
                                className={cx("program__card-avatar")}
                                src={avatar}
                                height={170}
                                width={170}
                                alt={name}
                            />
                            <div className={cx("program__card-text")}>{name}</div>
                            <div className={cx("program__card-text")}>{title}</div>
                        </div>

                        <div>
                            <div className={cx("program__text")}>{presentationTitle}</div>
                            <div className={cx("program__description")}>
                                {presentationDescription}
                            </div>
                        </div>
                    </Fragment>
                )
            )}
        </section>
    </>
);
