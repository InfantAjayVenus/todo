import { LayoutProps } from "./MainLayout";

interface ContainerProps extends LayoutProps { };

export function Container({ children }: ContainerProps) {
    return (
        <div className='flex-grow relative border border-current rounded-3xl p-4 lg:w-[80%] '>{children}</div>
    )
}