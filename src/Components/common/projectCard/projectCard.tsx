import React from 'react'
import classes from "./styles.module.css"
import Image, { StaticImageData } from 'next/image'

interface projectCardProps {
    info: string
    image: StaticImageData
    className?: string
}

export default function ProjectCard({ info, image, className }: projectCardProps) {
    return (
        <div className={`${classes.project} ${className ? classes[className] : ""}`}>
            <Image src={image} alt='project_image' className={classes.project_image} width={270} height={270} />
            <p className={classes.project_info}>{info}</p>
        </div>
    )
}
