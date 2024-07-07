import { Container } from "@/Todo/components/Content";
import { List } from "@/Todo/components/List";
import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
import { motion } from 'framer-motion';
import { MainSection } from "../components/MainLayout";

export function Today() {
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
                >Today</motion.h3>
            </MainSection.Body.Header>
            <Container>
                <List />
                <motion.span
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
                        className='rounded-xl border-current absolute bottom-4 right-4 h-12 w-12 p-1 text-2xl lg:hidden'

                    >
                        <LuPlus />
                    </Button>
                </motion.span>
            </Container>
        </>
    )
}