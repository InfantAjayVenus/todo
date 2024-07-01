import { LayoutProps } from "..";

export interface MainSectionBodyProps extends LayoutProps {
    title: string,
};


export function Body({ title, children }: MainSectionBodyProps) {
    return (
        <section className='flex flex-col min-h-[90%] lg:min-h-[95%] lg:pl-[20%]'>
            <header className='pt-2 pb-4'>
                <h3 className='text-2xl font-bold'>{title}</h3>
            </header>
            <div className='flex-grow relative border border-current rounded-3xl p-4 lg:w-[80%] '>
                {children}
            </div>
        </section>
    )
}