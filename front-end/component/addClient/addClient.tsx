import styles from "../../styles/addclient.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormHelperText, Input, InputLabel } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Phone } from "@mui/icons-material";

interface Adress {
  _id: String;
  adresse1: String;
  adresse2: String;
  ville: String;
}

interface Client {
  _id: Number;
  nomDuContact: String;
  societe: String;
  numIce: String;
  telephone: String;
  email: String;
  adresse: Adress;
  webSiteUrl: String;
}

export default function AddClientFields() {
  const [contactName, setContactName] = useState("");
  const [societe, setSociete] = useState("");
  const [website, setWebsite] = useState("");
  const [numICE, setNumICE] = useState("");
  const [phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Adress, setAdress] = useState("");

  const send = (e: any) => {
    e.preventDefault();

    let data = {
      nomDuContact: contactName,
      societe: societe,
      webSiteUrl: website,
      numIce: numICE,
      telephone: phone,
      email: Email,
      adresse1: Adress,
    }(data);

    Axios.post("http://localhost:3300/Client/create", data)
      .then((res) => res)
      .catch((err) => err);
  };

  return (
    <div className="addclient">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch", maxWidth: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          required
          id="outlined-basic"
          label="Nom du contact"
          variant="outlined"
        />
        <TextField
          value={societe}
          onChange={(e) => setSociete(e.target.value)}
          required
          id="outlined-basic"
          label="Societe"
          variant="outlined"
        />
        <br />
        <TextField
          value={numICE}
          onChange={(e) => setNumICE(e.target.value)}
          required
          id="ougcchgchctlined-basic"
          label="Numero de ICE"
          variant="outlined"
        />
        <TextField
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
          id="ougcchgchctlined-basic"
          label="Telephone"
          variant="outlined"
        />
        <br />
        <TextField
          value={Email}
          required
          onChange={(e) => setEmail(e.target.value)}
          id="ougcchgchctlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          value={Adress}
          required
          onChange={(e) => setAdress(e.target.value)}
          id="ougcchgchctlined-basic"
          label="Adresse"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          style={{ width: "97%" }}
          id="outlined-basic"
          label="URL de site web"
          variant="outlined"
          fullWidth
        />
        <br />
        <Button onClick={send} color="success" variant="outlined">
          Crées
        </Button>
      </Box>
    </div>
  );
}
