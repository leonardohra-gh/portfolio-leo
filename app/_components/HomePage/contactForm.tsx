"use client";
// https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';
import { SecondLevelHeading } from "@/app/_components/General/typography";

export type FormData = {
    nameCompany: string;
    email: string;
    message: string;
};

export function ContactForm(
    {
        title,
        paragraphs,
        labels,
        placeholders,
        submitText
    }:
        {
            title: string,
            paragraphs: string[],
            labels: string[],
            placeholders: string[],
            submitText: string
        }
)
{
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData)
    {
        sendEmail(data);
    }

    return (
        <div className="flex flex-col items-center">
            <SecondLevelHeading title={title} subtitles={paragraphs} classNamePlus="text-center" />
            <form id="contactForm" className="flex w-full lg:w-3/5 flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="formNameCompany" value={labels[0]} />
                    </div>
                    <TextInput id="formNameCompany" type="text" placeholder={placeholders[0]} required shadow {...register('nameCompany', { required: true })} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="formEmail" value={labels[1]} />
                    </div>
                    <TextInput id="formEmail" type="email" placeholder={placeholders[1]} shadow {...register('email', { required: false })} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value={labels[2]} />
                    </div>
                    <Textarea id="comment" placeholder={placeholders[2]} required rows={4} {...register('message', { required: true })} />
                </div>
                <Button color="purple" type="submit">{submitText}</Button>
            </form>
        </div>

    );
}