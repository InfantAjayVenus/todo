import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

interface AddProjectProps {
}

export function AddProject({ }: AddProjectProps) {
    const navigate = useNavigate();
    return (
        <>
            <Sheet
                defaultOpen
                onOpenChange={(open) => {
                    if (!open) {
                        setTimeout(() => {
                            navigate(-1);
                        },100)
                    }
                }}
            >
                <SheetContent side={'bottom'} sheetOverlayProps={{className: 'opacity-60'}}>
                    <SheetHeader>
                        <SheetTitle>Add Project</SheetTitle>
                        <SheetDescription>
                            Projects are a way to organize or group your tasks.
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}