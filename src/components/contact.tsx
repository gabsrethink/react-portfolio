import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button as MuiButton,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import texts from "../constants/texts.json";
import { Button } from "./button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#57e295",
    },
    background: {
      paper: "#0a192f",
    },
    text: {
      primary: "#ccd6f6",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: "#8892b0",
          "&:before": {
            borderBottom: "1px solid #8892b0",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid #8892b0",
          },
          "&.Mui-focused:before": {
            borderBottom: "2px solid #57e295",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#8892b0",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0a192f",
          color: "#8892b0", //
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#57e295",
        },
      },
    },
  },
});

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setLoading(false);
            setOpen(true);
          },
          (error) => {
            console.log(error.text);
            setLoading(false);
            alert("Erro ao enviar mensagem.");
          }
        );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.h1
        className="text-gray-50 max-w-[600px] mx-auto text-3xl font-bold pb-4 max-sm:px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {texts.contactForm.title}
      </motion.h1>
      <motion.h2
        className="max-w-[600px] mx-auto text-xl font-bold pb-4 max-sm:px-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {texts.contactForm.subtitle}
      </motion.h2>
      <motion.div
        className="flex flex-col items-center justify-center bg-purple-900"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-[600px] pt-0 max-sm:p-6 max-sm:pt-0"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <TextField
              label={texts.contactForm.fields.nameLabel}
              name="user_name"
              variant="standard"
              required
              fullWidth
              margin="normal"
              color="primary"
              className="no-focus-border"
            />
            <TextField
              label={texts.contactForm.fields.emailLabel}
              name="user_email"
              variant="standard"
              type="email"
              required
              fullWidth
              margin="normal"
              color="primary"
            />
          </div>
          <TextField
            label={texts.contactForm.fields.messageLabel}
            name="message"
            variant="standard"
            multiline
            rows={3}
            required
            fullWidth
            margin="normal"
            color="primary"
            className="no-focus-border"
          />
          <div className="flex justify-center mt-8">
            <Button
              text={texts.contactForm.buttonText}
              type="submit"
              loading={loading}
            />
          </div>
        </form>
      </motion.div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{texts.contactForm.dialog.title}</DialogTitle>
        <DialogContent>
          <p>{texts.contactForm.dialog.content}</p>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={() => setOpen(false)}>
            {texts.contactForm.dialog.closeButton}
          </MuiButton>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default ContactForm;
