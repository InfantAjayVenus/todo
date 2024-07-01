
import { LuCalendar, LuCalendarDays, LuInbox, LuPlus } from 'react-icons/lu';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Header, MainSection } from './layout/MainLayout';
import { motion } from 'framer-motion';


export default function Todo() {

    return (
        <>
            <Header>
                <title>todo.</title>
            </Header>
            <MainSection>
                <MainSection.Header title='Today'>
                    <motion.ul
                        className='py-6'
                        variants={{
                            start: {},
                            end: {
                                transition: {
                                    type: 'spring',
                                    duration: 2,
                                    staggerChildren: 0.09,
                                }
                            }
                        }}

                        initial="start"
                        animate="end"
                    >
                        {(new Array(5).fill(0).map((_, index) => (
                            <motion.li
                                key={index}
                                className='flex items-center justify-between space-x-2 border-b p-2 mb-2 capitalize'
                                variants={{
                                    start: {
                                        y: 20,
                                        opacity: 0,
                                    },
                                    end: {
                                        y: 0,
                                        opacity: 1,
                                    }
                                }}
                             >
                                <p className='text-xl text-ellipsis text-primary-foreground'>test</p>
                                <Checkbox className='h-5 w-5 border-2 font-semibold text-primary-foreground' />
                            </motion.li>
                        )))}
                    </motion.ul>
                    <Button variant={'outline'} className='rounded-xl border-current absolute bottom-4 right-4 h-12 w-12 p-1 text-2xl lg:hidden'>
                        <LuPlus />
                    </Button>
                </MainSection.Header>

                <MainSection.Navbar>
                    <MainSection.Navbar.NavbarItem icon={<LuCalendar className='text-4xl' />} label='Today' />
                    <MainSection.Navbar.NavbarItem icon={<LuCalendarDays className='text-4xl' />} label='Today' />
                    <MainSection.Navbar.NavbarItem icon={<LuInbox className='text-4xl' />} label='Today' />
                </MainSection.Navbar>
            </MainSection>
        </>
    );
}
