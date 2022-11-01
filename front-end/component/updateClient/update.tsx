import styles from '../../styles/addclient.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormHelperText, Input, InputLabel } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Phone } from '@mui/icons-material';
import { useRouter } from 'next/router'

export default function UpdateFields() {

  const [contactName, setContactName] = useState('');
  const [societe, setSociete] = useState('');
  const [website, setWebsite] = useState('');
  const [numICE, setNumICE] = useState('');
  const [phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Adress, setAdress] = useState('');

  const router = useRouter()
  const { id } = router.query

    // const [rows, setRows] = useState<Client>()

    useEffect(() => {
      Axios.get(`http://localhost:3300/Client/update/${id}`)
      .then(res => { 
        
        // setRows(res.data);
        setContactName(res.data?.nomDuContact);
        setSociete(res.data?.societe);
        setWebsite(res.data?.webSiteUrl);
        setNumICE(res.data?.numIce);
        setPhone(res.data?.telephone);
        setEmail(res.data?.email);
        setAdress(res.data?.adresse.adresse1);
      })
      .catch(err => console.log(err));  
    },[]);
  

  const send = (e:any) => {

    e.preventDefault()
    
      let  data = {id: Number(id), nomDuContact: contactName,"societe": societe,"webSiteUrl": website,"numIce": numICE,"telephone": phone,"email": Email,"adresse1": Adress} 

    

  
      Axios.post("http://localhost:3300/Client/update", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    return (
    <div className='addclient'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '30ch', maxWidth: '100%'  },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField value={contactName} onChange={(e) => setContactName(e.target.value)} required id="outlined-basic" label="Nom du contact" variant="outlined" />
        <TextField value={societe} onChange={(e) => setSociete(e.target.value)} required id="outlined-basic" label="Societe" variant="outlined" />
        <br />
        <TextField  value={numICE} onChange={(e) => setNumICE(e.target.value)} required id="ougcchgchctlined-basic" label="Numero de ICE" variant="outlined" />        
        <TextField  value={phone} required onChange={(e) => setPhone(e.target.value)} id="ougcchgchctlined-basic" label="Telephone" variant="outlined" />
        <br />
        <TextField value={Email} required onChange={(e) => setEmail(e.target.value)} id="ougcchgchctlined-basic" label="Email" variant="outlined" />
        <TextField value={Adress}required onChange={(e) => setAdress(e.target.value)} id="ougcchgchctlined-basic" label="Adresse" variant="outlined" />
        <br/>
        <br/>
        <TextField value={website}  onChange={(e) => setWebsite(e.target.value)} style ={{width: '97%'}} id="outlined-basic" label="URL de site web" variant="outlined" fullWidth />
        <br/>
        <Button onClick={send}  color="success" variant="outlined">Crées</Button>
      </Box>
      </div>
    );
}
