import { Container } from "@/Todo/components/Container";
import { List } from "@/Todo/components/List";
import { Button } from "@/components/ui/button";
import { LuPlus } from "react-icons/lu";
import { motion } from 'framer-motion';
import { MainSection } from "../components/MainLayout";

export function TasksList() {
    return (
        <>
            <MainSection.Body.Title>
                Today
            </MainSection.Body.Title>
            <Container>
                <List />
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
                    >
                        <LuPlus />
                    </Button>
                </motion.div>
            </Container>
        </>
    )
}