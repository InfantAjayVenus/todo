import { Container } from "@/Todo/components/Content";
import { MainSection } from "../components/MainLayout";
import {motion} from 'framer-motion';

export function Inbox() {
    return (

        <>
            <MainSection.Body.Header>
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
                >Inbox</motion.h3>
            </MainSection.Body.Header>
            <Container>
                <p>Hello Inbox</p>
            </Container>
        </>
    )
}