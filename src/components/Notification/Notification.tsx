import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Notification.scss";

export default function Notification() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toNavigate = (url: string) => {
    navigate(url);
    handleClose();
  };

  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={handleClickOpen("paper")}
      >
        Notification
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Notification</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Sites often appear on the Internet that copy our design and content,
            impersonating us. It is important to know that our site starts with{" "}
            <span
              onClick={() => toNavigate("/")}
              className={"root__link"}
            >
              https://site.com/
            </span>{" "}
            without prefixes, as well as our contact information is listed in
            the{" "}
            <span
              className={"root__link"}
              onClick={() => toNavigate("/contacts")}
            >
              "Contacts"
            </span>{" "}
            section. Our managers will never demand payment without concluding
            an agreement and discussing all the terms of delivery! Be careful,
            do not agree to deliveries without a concluded contract!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
