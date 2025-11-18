import search from '../images/Vector.svg';
import log from '../images/log.svg';

export default function Header() {
  return (
    <header className="container py-[17px] flex justify-between">
        <p>F B</p>
        <nav className='flex gap-16'>
            <li>Каталог</li>
            <li>Галерея</li>
            <li>О лаборатории</li>
            <li>Контакты</li>
        </nav>
        <div className='flex gap-[67px]'>
            <img src={search} alt="search" />
            <img src={log} alt="" />
        </div>
    </header>
  )
}