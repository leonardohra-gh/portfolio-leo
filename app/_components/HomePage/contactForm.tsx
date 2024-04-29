"use client";
// https://medium.com/@abilsavio/email-contact-form-using-nextjs-app-router-60c29fe70644

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useTranslation } from "@/app/i18n/client";
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils/send-email';

export type FormData = {
    nameCompany: string;
    email: string;
    message: string;
};

export function ContactForm({ lng }: { lng: string }) {
    const { t } = useTranslation(lng, 'contactForm')
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <div className="flex flex-col items-center">
            <form className="flex w-full lg:w-3/5 flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="formNameCompany" value={t("nameCompanyLabel")} />
                    </div>
                    <TextInput id="formNameCompany" type="text" placeholder={t("nameCompanyPlaceholder")} required shadow {...register('nameCompany', { required: true })} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="formEmail" value={t("emailLabel")} />
                    </div>
                    <TextInput id="formEmail" type="email" placeholder={t("emailPlaceholder")} required shadow {...register('email', { required: false })} />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value={t("messageLabel")} />
                    </div>
                    <Textarea id="comment" placeholder={t("messagePlaceholder")} required rows={4} {...register('message', { required: true })} />
                </div>
                <Button color="purple" type="submit">{t("buttonSubmit")}</Button>
            </form>
        </div>

    );
}