import { ReactNode } from "react"
import styles from './flex-row.module.css'

type FlexRowProps = {
    children: ReactNode
}

export default function FlexRow({ children }: FlexRowProps){
    return <div className={styles.flexRow}>{children}</div>
}