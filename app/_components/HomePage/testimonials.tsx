
import { Avatar, Blockquote } from "flowbite-react";
import { SecondLevelHeading } from "@/app/_components/General/typography";

const QuoteSVG = () =>
{
    return (
        <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
        >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
    )
}


export function TestimonialsElement(
    {
        title,
        subtitles,
        peopleTestimonial
    }
        :
        {
            title: string,
            subtitles: string[]
            peopleTestimonial: Testimonial[]
        }
)
{
    return (
        <div className="my-4 flex flex-col">
            <SecondLevelHeading title={title} subtitles={subtitles} classNamePlus="text-center" />
            {peopleTestimonial.map(
                (tests: Testimonial, index: number) =>
                {
                    return (
                        <div key={`testimonial-${index}`}>
                            <SingleTestimonial testimonial={tests} />
                        </div>
                    )
                }
            )}
        </div>
    );
}

function SingleTestimonial({ testimonial }: { testimonial: Testimonial })
{
    return (
        <figure className="mx-auto max-w-screen-md text-center">
            <QuoteSVG />
            <Blockquote>
                <p className="text-base font-medium italic text-gray-900 dark:text-white">{testimonial.text}</p>
            </Blockquote>
            <figcaption className="mt-6 flex items-center justify-center space-x-3">
                <Avatar rounded size="md" img={testimonial.avatarUrl} alt="profile picture" />
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite className="pr-3 font-medium text-gray-900 dark:text-white">{testimonial.personName}</cite>
                    <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">{testimonial.personRole}</cite>
                </div>
            </figcaption>
        </figure>
    )
}

export interface Testimonial
{
    text: string,
    avatarUrl: string,
    personName: string,
    personRole: string
}
