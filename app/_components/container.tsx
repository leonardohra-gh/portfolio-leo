
const Container = 
(
    {
        className,
        children,
    }:
    {
        className?: string
        children: React.ReactNode
    }
) =>
{
    return (
        <div
            className={`container lg:p-8 mx-auto xl:px-0 w-11/12
                ${
                    className? className : ""
                }`}
            >
            {children}
        </div>
    );
}

export default Container;