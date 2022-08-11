import Link from '../node_modules/next/link'
import styles from '../styles/button.module.css'


interface ButtonProps {
    text: string
    href: string
    onClick?: (e: any) => void
}


export default function Button(props: ButtonProps) {

    function renderButton() {
        return (
            
                <button className={styles.button}
                    onClick={props.onClick}>
                    {props.text}
                </button>
            
        )

    }
    return props.href ? (
        <Link href={props.href}>
           {renderButton()} 
        </Link>
    ) : renderButton()
           
    }
