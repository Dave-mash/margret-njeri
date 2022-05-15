import Filter from 'bad-words';
import * as Yup from "yup";

const filter = new Filter();

export const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Your name is required'),
    email: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .email("Invalid email address format")
        .required("Email is required"),
    subject: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    message: Yup.string()
        .test('cleanName', 'Profane words are not allowed!', value => !filter.isProfane(value))
        .min(6, "Password must be 6 characters at minimum")
        .required("Password is required")
})