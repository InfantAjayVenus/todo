
import { LuCalendar, LuCalendarDays, LuInbox } from 'react-icons/lu';
import { Header, MainSection } from './layout/MainLayout';
import { Today } from './layout/routes/Today';


export default function Todo() {

    return (
        <>
            <Header>
                <title>todo.</title>
            </Header>
            <MainSection>
                <MainSection.Body>
                    <Today />
                </MainSection.Body>

                <MainSection.Navbar>
                    <MainSection.Navbar.NavbarItem icon={<LuCalendar className='text-4xl' />} label='Today' />
                    <MainSection.Navbar.NavbarItem icon={<LuCalendarDays className='text-4xl' />} label='Calendar' />
                    <MainSection.Navbar.NavbarItem icon={<LuInbox className='text-4xl' />} label='Inbox' />
                </MainSection.Navbar>
            </MainSection>
        </>
    );
}
