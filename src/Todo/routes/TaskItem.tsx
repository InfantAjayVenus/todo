import { useParams } from "react-router-dom";
import { MainSection } from "../components/MainLayout";
import { Container } from "../components/Container";

export function TaskItem() {
    const {taskId} = useParams();
    return (
        <>
            <MainSection.Body.Title>
                {taskId}
            </MainSection.Body.Title>
            <Container>body</Container>
        </>
    )
}