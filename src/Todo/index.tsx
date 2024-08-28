import { AnimatePresence } from 'framer-motion';
import { LuCalendar, LuCalendarDays, LuFolder, LuInbox } from 'react-icons/lu';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Header, MainSection } from './components/MainLayout';
import { Calendar } from './routes/Calendar';
import { Projects } from './routes/Projects';
import { TaskItem } from './routes/TaskItem';
import { TasksList } from './routes/TasksList';


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
                            <Route index Component={TasksList} />
                            <Route path='task/:taskId/' Component={TaskItem} />
                            <Route path='calendar/' Component={Calendar} />
                            <Route path='projects/'  Component={Projects} />
                        </Routes>
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
        </BrowserRouter>
    );
}
