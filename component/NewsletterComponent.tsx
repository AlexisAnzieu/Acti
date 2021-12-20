import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "next-i18next";

const validateEmail = (email: string) => {
    let error;
    if (!email) {
        error = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        error = "This is not a valid email address";
    }
    return error;
};

const subscribeNewsletter = async (email: string): Promise<boolean> => {
    const host = process.env.NEXT_PUBLIC_BASE_URL;
    const apiUrl = new URL(`${host}/api/newsletter`);
    apiUrl.searchParams.append("email", email);

    return fetch(apiUrl.href)
        .then((res: Response) => res.status === 200)
        .catch(() => false);
};

const NewsletterComponent = () => {
    const { t } = useTranslation("common");
    const toast = useToast();

    return (
        <Formik
            initialValues={{ email: "" }}
            onSubmit={async (values, actions) => {
                const isSubscribed = await subscribeNewsletter(values.email);
                if (isSubscribed) {
                    toast({
                        title: t("newsletter.title.success"),
                        description: t("newsletter.description.success"),
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                    actions.resetForm();
                } else {
                    toast({
                        title: t("newsletter.title.error"),
                        description: t("newsletter.description.error"),
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                }
            }}
        >
            {() => (
                <Form>
                    <Field name="email" validate={validateEmail}>
                        {({ field, form }: any) => (
                            <FormControl
                                isInvalid={
                                    form.errors.email && form.touched.email
                                }
                            >
                                <FormLabel htmlFor="email">
                                    {t("newsletter.email")}
                                </FormLabel>
                                <Input
                                    {...field}
                                    size="lg"
                                    id="email"
                                    placeholder="contact@h2t.club"
                                />
                                <FormErrorMessage>
                                    {form.errors.email}
                                </FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Button mt={4} colorScheme="teal" type="submit">
                        {t("newsletter.submit")}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default NewsletterComponent;
