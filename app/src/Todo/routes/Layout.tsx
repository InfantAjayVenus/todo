
import { AnimatePresence } from 'framer-motion';
import { LuCalendar, LuCalendarDays, LuFolder, LuInbox } from 'react-icons/lu';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, MainSection } from '../components/MainLayout';


export default function Layout() {

    return (
        <>
            <Header>
                <title>todo.</title>
            </Header>
            <MainSection>
                <MainSection.Body>
                    <AnimatePresence mode='wait'>
                       <Outlet /> 
                    </AnimatePresence>
                </MainSection.Body>

                <MainSection.Navbar>
                    <NavLink to='/?filter=today' >
                        <MainSection.Navbar.NavbarItem icon={<LuCalendar className='text-4xl' />} label='Today' />
                    </NavLink>
                    <NavLink to='/calendar'>
                        <MainSection.Navbar.NavbarItem icon={<LuCalendarDays className='text-4xl' />} label='Calendar' />
                    </NavLink>
                    <NavLink to='/?filter=inbox'>
                        <MainSection.Navbar.NavbarItem icon={<LuInbox className='text-4xl' />} label='Inbox' />
                    </NavLink>
                    <NavLink to='/projects'>
                        <MainSection.Navbar.NavbarItem icon={<LuFolder className='text-4xl' />} label='Projects' />
                    </NavLink>
                </MainSection.Navbar>
            </MainSection>
        </>
    );
}
