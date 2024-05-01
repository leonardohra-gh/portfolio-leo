
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
            className={`container w-11/12 2xl:w-3/5 mx-auto
                ${
                    className? className : ""
                }`}
            >
            {children}
        </div>
    );
}

export default Container;