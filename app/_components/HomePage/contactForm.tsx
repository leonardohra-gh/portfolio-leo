"use client";

import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useTranslation } from "@/app/i18n/client";

export function ContactForm({ lng }: { lng: string }) {
    const { t } = useTranslation(lng, 'contactForm')
    return (
        <div className="flex flex-col items-center">
            <form className="flex w-full lg:w-3/5 flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="formNameCompany" value={t("nameCompanyLabel")} />
                    </div>
                    <TextInput id="formNameCompany" type="text" placeholder={t("nameCompanyPlaceholder")} required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="formEmail" value={t("emailLabel")} />
                    </div>
                    <TextInput id="formEmail" type="email" placeholder={t("emailPlaceholder")} required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value={t("messageLabel")} />
                    </div>
                    <Textarea id="comment" placeholder={t("messagePlaceholder")} required rows={4} />
                </div>
                <Button type="submit">{t("buttonSubmit")}</Button>
            </form>
        </div>

    );
}