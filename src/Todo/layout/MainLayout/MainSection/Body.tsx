import { LayoutProps } from "..";

export interface MainSectionBodyProps extends LayoutProps {};

export interface BodyHeaderProps extends LayoutProps {};


export function Body({ children }: MainSectionBodyProps) {
    return (
        <section className='flex flex-col min-h-[90%] lg:min-h-[95%] lg:pl-[20%]'>
            {children}
        </section>
    )
}

Body.Header = function Header({children}: BodyHeaderProps) {
    return (
        <header className='pt-2 pb-4'>{children}</header>
    )
};
