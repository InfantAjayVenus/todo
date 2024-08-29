import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddProject } from './routes/AddProject';
import { Calendar } from './routes/Calendar';
import { Projects } from './routes/Projects';
import { TaskItem } from './routes/TaskItem';
import { TasksList } from './routes/TasksList';
import Layout from './routes/Layout';


export default function Todo() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<TasksList />} />
                    <Route path=':taskId' element={<TaskItem />} />
                    <Route path='calendar' element={<Calendar />} />
                    <Route path='projects' element={<Projects />}>
                        <Route path='new' element={<AddProject />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
