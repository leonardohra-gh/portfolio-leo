import Container from '@/app/_components/container'

const SectionTitle = 
(
    {
        align,
        pretitle,
        title,
        children
    }:
    {
        align?: string,
        pretitle?: string,
        title: string,
        children: React.ReactNode
    }
) =>
{
    return(
        <Container
            className={`flex w-full flex-col mt-4
                ${
                    align === 'left' ? "" : "items-center justify-center text-center"
                }`}
            >
            {pretitle && 
            (
                <div className='text-sm font-bold tracking-wider text-indigo-600 uppercase'>
                    {pretitle}
                </div>
            )}

            {title && 
            (
                <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                    {title}
                </h2>
            )}

            {children &&
            (
                <div className='max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify'>
                    {children}
                </div>
            )}
        </Container>
    );
}

export default SectionTitle;