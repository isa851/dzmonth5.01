import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={{ display: "flex", listStyle: 'none', gap: '15px',  }}>
            <Link to='/'>
                Главная 
            </Link>
            <Link to='/about'>
                О нас
            </Link>
            <Link to='/Contacts'>
                Контакты
            </Link>
        </header>
    )
}



