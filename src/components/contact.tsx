import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  TextField,
  ThemeProvider,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button as MuiButton,
} from "@mui/material";
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
          color: "#ccd6f6",
          "&:before": {
            borderBottom: "1px solid #ccd6f6",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "2px solid #ccd6f6",
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
          color: "#ccd6f6",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0a192f",
          color: "#ccd6f6", //
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
      <h2 className="text-gray-50 max-w-[600px] mx-auto text-3xl font-bold pb-4 max-sm:px-6">
        Envie uma mensagem!
      </h2>
      <p className="max-w-[600px] mx-auto text-xl font-bold pb-4 max-sm:px-6">
        Dúvida, sugestão ou só quer bater um papo? Fique à vontade!
      </p>
      <div className="flex flex-col items-center justify-center bg-purple-900">
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-2xl p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextField
              label="Seu Nome"
              name="user_name"
              variant="standard"
              required
              fullWidth
              margin="normal"
              color="primary"
              className="no-focus-border"
            />
            <TextField
              label="Seu E-mail"
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
            label="Sua mensagem"
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
            <Button text="Enviar!" type="submit" loading={loading} />
          </div>
        </form>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Obrigado!</DialogTitle>
        <DialogContent>
          <p>Sua mensagem foi enviada com sucesso!</p>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={() => setOpen(false)}>Fechar</MuiButton>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default ContactForm;
