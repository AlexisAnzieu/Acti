import {
    Button,
    Flex,
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

type Props = {
    label?: string;
    size?: "lg" | "md";
    id?: string;
};

const NewsletterComponent = ({ label, size = "lg", id = "email" }: Props) => {
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
            {({ isSubmitting }) => (
                <Form>
                    <Field name="email" validate={validateEmail}>
                        {({ field, form }: any) => (
                            <FormControl
                                isInvalid={
                                    form.errors.email && form.touched.email
                                }
                            >
                                <FormLabel
                                    htmlFor={id}
                                    fontFamily={size === "lg" ? "heading" : "body"}
                                    fontWeight={size === "lg" ? 800 : 600}
                                    fontSize={size === "lg" ? "26px" : "md"}
                                    letterSpacing={size === "lg" ? "-0.02em" : 0}
                                    lineHeight={1.15}
                                    mb={3}
                                >
                                    {label ?? t("newsletter.email")}
                                </FormLabel>
                                <Flex wrap="wrap" gap="10px">
                                    <Input
                                        {...field}
                                        id={id}
                                        type="email"
                                        flex="1 1 220px"
                                        minW={0}
                                        h="48px"
                                        bg="white"
                                        color="ink"
                                        border="1.5px solid"
                                        borderColor="lineStrong"
                                        borderRadius="10px"
                                        placeholder={t("newsletter.email")}
                                    />
                                    <Button
                                        type="submit"
                                        isLoading={isSubmitting}
                                        h="48px"
                                        px={6}
                                        bg="ink"
                                        color="paper"
                                        borderRadius="10px"
                                        _hover={{ bg: "#1E4A48" }}
                                        _active={{ bg: "#1E4A48" }}
                                    >
                                        {t("newsletter.submit")}
                                    </Button>
                                </Flex>
                                <FormErrorMessage>
                                    {form.errors.email}
                                </FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                </Form>
            )}
        </Formik>
    );
};

export default NewsletterComponent;
