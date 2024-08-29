import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../components/Container";
import { MainSection } from "../components/MainLayout";

export function TaskItem() {
    const { taskId } = useParams();
    const navigate = useNavigate();
    
    return (
        <>
            <MainSection.Body.Header className="flex items-center justify-between text-center">
                <MainSection.Body.Title>
                    {taskId}
                </MainSection.Body.Title>
                <Button variant={'ghost'} className="text-3xl" onClick={() => navigate(-1)}><IoClose /> </Button>
            </MainSection.Body.Header>
            <Container>body</Container>
        </>
    )
}