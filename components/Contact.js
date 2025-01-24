'use client'
import { useState, useEffect } from "react";
import {useTranslation } from "react-i18next";
import { sendContactForm } from "../lib/api";
import {Container, Heading, FormControl, FormLabel, Input, Text, Textarea, FormErrorMessage, Button, useToast} from "@chakra-ui/react";
const initValues = { name: "", email: "", subject: "", message: "" }
const initState = { values: initValues, isLoading: false, error: "" };

const Contact = () => {
    const toast = useToast();
    const { t } = useTranslation();
    const [rows, setRows] = useState(15);
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({})

    const { values, isLoading, error } = state;

    const onBlur = ({target}) => setTouched((prev) => ({...prev,
        [target.name]:true
    }))

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value,
        },
    }));

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            const response = await sendContactForm(values);
            if (!response.success) {
                throw new Error(response.message);
            }

            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    useEffect(() => {
        const updateRows = () => {
            setRows(window.innerWidth >= 768 ? 15 : 8);
        };
        updateRows();
        window.addEventListener('resize', updateRows);
        return () => {
            window.removeEventListener('resize', updateRows);
        };
    }, []);

    return (
        <div className="dark:bg-gray-900 font-Poppins">
            <div className="rounded-t-3xl overflow-auto overflow-y-scroll bg-gray-800 pt-3">
                <Container className='text-white'>
                    <Heading className='mb-5'>{t('contact:contact-Header')}</Heading>
                    {error && (
                        <Text color="red.300" my={4} fontSize='xl'>
                            {error}
                        </Text>
                    )}

                    <FormControl isRequired isInvalid={touched.name && !values.name} className='mb-5'>
                        <FormLabel>{t('contact:contactPlaceholder-Name')}</FormLabel>
                        <Input type='text' name='name' errorBorderColor='red.300' value={values.name}
                               onChange={handleChange} onBlur={onBlur}/>
                        <FormErrorMessage>Please enter your full name</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={touched.email && !values.email} className='mb-5'>
                        <FormLabel>{t('contact:contactPlaceholder-Email')}</FormLabel>
                        <Input type='email' name='email' errorBorderColor='red.300' value={values.email}
                               onChange={handleChange} onBlur={onBlur}/>
                        <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={touched.subject && !values.subject} className='mb-5'>
                        <FormLabel>{t('contact:contactPlaceholder-Subject')}</FormLabel>
                        <Input type='text' name='subject' errorBorderColor='red.300' value={values.subject}
                               onChange={handleChange} onBlur={onBlur}/>
                        <FormErrorMessage>Subject cannot be empty</FormErrorMessage>
                    </FormControl>

                    <FormControl isRequired isInvalid={touched.message && !values.message} className='mb-5'>
                        <FormLabel>{t('contact:contactPlaceholder-Message')}</FormLabel>
                        <Textarea type='text' name='message' errorBorderColor='red.300' rows={rows}
                                  value={values.message} onChange={handleChange} onBlur={onBlur}/>
                        <FormErrorMessage>Message cannot be empty</FormErrorMessage>
                    </FormControl>
                    <div className='flex justify-center mb-5'>
                        <Button sx={{ "&.chakra-button": { color: "white" }}} variant="outline" type='submit' onClick={onSubmit} isLoading={isLoading} className='blueBtn'
                                disabled={ !values.name || !values.email || !values.subject || !values.message }>
                            {t('buttons:button-Send')}
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Contact;