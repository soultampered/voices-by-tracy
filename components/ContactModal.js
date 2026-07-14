'use client'
import { useState, useEffect } from "react";
import {useTranslation } from "react-i18next";
import { sendContactForm } from "../lib/api";
import {Container, Heading, FormControl, FormLabel, Input, Text, Textarea, FormErrorMessage, Button, useToast} from "@chakra-ui/react";
const initValues = { name: "", email: "", subject: "", message: "" }
const initState = { values: initValues, isLoading: false, error: "" };

const fieldStyle = {
	bg: "#171717",
	borderColor: "#404040",
	color: "white",
	borderRadius: "8px",
	_placeholder: { color: "#737373" },
	_hover: { borderColor: "#525252" },
	focusBorderColor: "#2563eb",
};

const labelStyle = {
	fontSize: "xs",
	textTransform: "uppercase",
	letterSpacing: "wide",
	color: "#a3a3a3",
	fontWeight: "semibold",
	mb: 1,
};

const ContactModal = () => {
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
		<Container w="full" maxW="none" className='font-Poppins text-white rounded-xl overflow-auto overflow-y-scroll pt-3'
				   bg="#0c0c0d" border="1px solid #262626">
			<Heading className='mb-5' color="white">{t('contact:contact-Header')}</Heading>
			{error && (
				<Text color="red.300" my={4} fontSize='xl'>
					{error}
				</Text>
			)}

			<FormControl isRequired isInvalid={touched.name && !values.name} className='mb-5'>
				<FormLabel {...labelStyle}>{t('contact:contactPlaceholder-Name')}</FormLabel>
				<Input type='text' name='name' errorBorderColor='red.300' value={values.name}
					   onChange={handleChange} onBlur={onBlur} {...fieldStyle}/>
				<FormErrorMessage>Please enter your full name</FormErrorMessage>
			</FormControl>

			<FormControl isRequired isInvalid={touched.email && !values.email} className='mb-5'>
				<FormLabel {...labelStyle}>{t('contact:contactPlaceholder-Email')}</FormLabel>
				<Input type='email' name='email' errorBorderColor='red.300' value={values.email}
					   onChange={handleChange} onBlur={onBlur} {...fieldStyle}/>
				<FormErrorMessage>Please enter a valid email address</FormErrorMessage>
			</FormControl>

			<FormControl isRequired isInvalid={touched.subject && !values.subject} className='mb-5'>
				<FormLabel {...labelStyle}>{t('contact:contactPlaceholder-Subject')}</FormLabel>
				<Input type='text' name='subject' errorBorderColor='red.300' value={values.subject}
					   onChange={handleChange} onBlur={onBlur} {...fieldStyle}/>
				<FormErrorMessage>Subject cannot be empty</FormErrorMessage>
			</FormControl>

			<FormControl isRequired isInvalid={touched.message && !values.message} className='mb-5'>
				<FormLabel {...labelStyle}>{t('contact:contactPlaceholder-Message')}</FormLabel>
				<Textarea type='text' name='message' errorBorderColor='red.300' rows={rows}
						  value={values.message} onChange={handleChange} onBlur={onBlur} {...fieldStyle}/>
				<FormErrorMessage>Message cannot be empty</FormErrorMessage>
			</FormControl>
			<div className='flex justify-center mb-5'>
				<Button
					type='submit'
					onClick={onSubmit}
					isLoading={isLoading}
					disabled={ !values.name || !values.email || !values.subject || !values.message }
					bg="#2563eb"
					color="white"
					borderRadius="8px"
					fontWeight="semibold"
					_hover={{ bg: "#3b82f6" }}
					_disabled={{ opacity: 0.5, cursor: "not-allowed" }}>
					{t('buttons:button-Send')}
				</Button>
			</div>
		</Container>
	);
};

export default ContactModal;
