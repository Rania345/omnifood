import { useState } from 'react';
import { CloseOutline, MenuOutline } from 'react-ionicons';
import { scroller } from 'react-scroll';

function Header() {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const scrollTo = (target: string) => {
        event?.preventDefault();
        scroller.scrollTo(target, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
        setNavOpen(false);
    }
    return (
        <header className={`header ${navOpen ? 'nav-open' : ''}`}>
            <a href="#">
                <img className="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
            </a>

            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li><a className="main-nav-link" href="#how" onClick={() => scrollTo('how')}>How it works</a></li>
                    <li><a className="main-nav-link" href="#meals" onClick={() => scrollTo('meals')}>Meals</a></li>
                    <li>
                        <a className="main-nav-link" href="#testimonials" onClick={() => scrollTo('testimonials')}>Testimonials</a>
                    </li>
                    <li><a className="main-nav-link" href="#pricing" onClick={() => scrollTo('pricing')}>Pricing</a></li>
                    <li><a className="main-nav-link nav-cta" href="#cta" onClick={() => scrollTo('cta')}>Try for free</a></li>
                </ul>
            </nav>

            <button className="btn-mobile-nav" aria-label='Toggle menu' onClick={() => setNavOpen(!navOpen)}>
                <MenuOutline cssClasses="icon-mobile-nav" style={{ display: navOpen ? 'none' : 'block' }} />
                <CloseOutline cssClasses="icon-mobile-nav" style={{ display: navOpen ? 'block' : 'none' }} />
            </button>
        </header>

    )
}

export default Header;