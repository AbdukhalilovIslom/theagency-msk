import React from 'react'
import classes from "./styles.module.css"


import BackShape from '@/layout/backShape/backShape'
import CatalogCards from '@/Components/catalog/catalogCards'

export default function CatalogPage() {
    return (
        <BackShape>
            <h2 className={classes.title}>Каталог</h2>
            <CatalogCards />
        </BackShape>
    )
}
