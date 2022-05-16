import * as React from "react"
import { useFormik } from 'formik'
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { ContactSchema } from '../utils/FormValidation'
import '../styles/components/contact.css'

const useStyles = makeStyles((theme) => ({
    root: {
        "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#FFF77D",
                borderWidth: "1px"
            }
        }
    },
    submit: {
        backgroundColor: theme.palette.success.main,
        padding: theme.spacing(1.5)
    }
}));

const theme = createMuiTheme({
    overrides: {
        MuiInputLabel: {
            root: {
                "&$focused": {
                    color: "#FFF77D"
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#FFF77D',
            contrastText: "#FFF77D"
        },
    }
});

const Contact = () => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            name: '',
            subject: '',
            email: '',
            message: ''
        },
        validationSchema: ContactSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            resetForm();
            setSubmitting(false);
            console.log(values)
        },
    });

    return (
        <section className="contactSection" id="contact">
            <h1 className="contactSectionTitle">CONTACT</h1><br />
            <form onSubmit={formik.handleSubmit} className="form">
                <TextField
                    name="name"
                    label="Full Name"
                    variant="filled"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    fullWidth
                /><br /><br />
                <TextField
                    type="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                /><br /><br />
                <TextField
                    id="subject"
                    name="subject"
                    label="Subject"
                    variant="filled"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                    helperText={formik.touched.subject && formik.errors.subject}
                    fullWidth
                /><br /><br />
                <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    id="message"
                    name="message"
                    label="Message"
                    variant="filled"
                    type="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                /><br /><br />
                <ThemeProvider theme={theme}>
                    <Button
                        type="submit"
                        variant="contained"
                        className="submit"
                    >
                        Submit
                    </Button>
                </ThemeProvider>
            </form>
        </section>
    )
}

export default Contact