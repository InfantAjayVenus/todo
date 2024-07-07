import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { LuCalendar, LuCalendarDays, LuInbox } from 'react-icons/lu';
import { Header, MainSection } from './components/MainLayout';
import { Today } from './routes/Today';
import { Calendar } from './routes/Calendar';
import { AnimatePresence } from 'framer-motion';
import { Inbox } from './routes/Inbox';


export default function Todo() {

    return (
        <BrowserRouter>
            <Header>
                <title>todo.</title>
            </Header>
            <MainSection>
                <MainSection.Body>
                    <AnimatePresence mode='wait'>
                        <Routes>
                            <Route path='/' Component={Today} />
                            <Route path='/calendar' Component={Calendar} />
                            <Route path='/inbox' Component={Inbox} />
                        </Routes>
                    </AnimatePresence>
                </MainSection.Body>

                <MainSection.Navbar>
                    <NavLink to='/'>
                        <MainSection.Navbar.NavbarItem icon={<LuCalendar className='text-4xl' />} label='Today' />
                    </NavLink>
                    <NavLink to='/calendar'>
                        <MainSection.Navbar.NavbarItem icon={<LuCalendarDays className='text-4xl' />} label='Calendar' />
                    </NavLink>
                    <NavLink to='/inbox'>
                        <MainSection.Navbar.NavbarItem icon={<LuInbox className='text-4xl' />} label='Inbox' />
                    </NavLink>
                </MainSection.Navbar>
            </MainSection>
        </BrowserRouter>
    );
}
