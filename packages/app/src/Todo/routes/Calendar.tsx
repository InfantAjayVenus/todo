import { Container } from "@/Todo/components/Container";
import { MainSection } from "../components/MainLayout";
import {motion} from 'framer-motion';

export function Calendar() {
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
                >Calendar</motion.h3>
            </MainSection.Body.Title>
            <Container>
                <p>Hello Calendar</p>
            </Container>
        </>
    )
}