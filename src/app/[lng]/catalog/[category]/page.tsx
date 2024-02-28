import React from 'react'
import classes from "./styles.module.css"


import BackShape from '@/layout/backShape/backShape'
import { useTranslation } from '@/app/i18n'
import CategoryCards from '@/Components/catalog/categoryCards'

interface pageProps {
    params: { lng: string }
}

export default async function page({ params: { lng } }: pageProps) {
    const { t } = await useTranslation(lng)

    return (
        <BackShape text={t("назад в каталог")} href={"/catalog"}>
            <h2 className={classes.title}>Стропы грузоподъемные</h2>
            <CategoryCards category='something' />
        </BackShape>
    )
}
