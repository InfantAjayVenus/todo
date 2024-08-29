import { motion } from 'framer-motion';
import { MainSection } from "../components/MainLayout";
import { Container } from '../components/Container';
import { Button } from '@/components/ui/button';
import { LuPlus } from 'react-icons/lu';
import { Outlet, useNavigate,  } from 'react-router-dom';

export function Projects() {
    const navigate = useNavigate();
    return (
        <>
            <MainSection.Body.Title>
                <motion.h3
                    className='text-2xl font-bold'
                    initial={{
                        opacity: 0,
                        x: -20
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.4,
                    }}
                >Projects</motion.h3>
            </MainSection.Body.Title>
            <Container>
                <motion.ul
                    className='py-6 overflow-auto max-h-[100%]'
                    variants={{
                        start: {},
                        end: {
                            transition: {
                                type: 'spring',
                                duration: 4,
                                staggerChildren: 0.09,
                            }
                        }
                    }
                    }

                    initial="start"
                    animate="end"
                >
                    {(new Array(45).fill(0).map((_, index) => (
                        <p>test {index}</p>
                    )))}
                </motion.ul>
                <motion.div
                    className='sticky bottom-2 left-[90%] h-12 w-12 rounded-2xl lg:hidden'
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.4
                    }}
                >
                    <Button
                        variant={'outline'}
                        className='border-current h-full w-full p-1 text-2xl'
                        onClick={() => {
                            navigate('new');
                        }}
                    >
                        <LuPlus />
                    </Button>
                </motion.div>
            </Container>
            <Outlet />
        </>
    )
}