
import { LuCalendar, LuCalendarDays, LuInbox, LuPlus } from 'react-icons/lu';
import { Button } from '../components/ui/button';
import { Header, MainSection } from './layout/MainLayout';
import { List } from './components/List';


export default function Todo() {

    return (
        <>
            <Header>
                <title>todo.</title>
            </Header>
            <MainSection>
                <MainSection.Body title='Today'>
                    <List />
                    <Button variant={'outline'} className='rounded-xl border-current absolute bottom-4 right-4 h-12 w-12 p-1 text-2xl lg:hidden'>
                        <LuPlus />
                    </Button>
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
