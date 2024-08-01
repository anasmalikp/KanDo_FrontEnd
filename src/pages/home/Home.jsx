import React, { useState,useEffect } from 'react'
import './Home.css';
import logo from '../../assets/logo-no-background.png';
import Boards from '../../components/homecomponents/Boards';
import BoardList from '../../components/homecomponents/BoardList';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/material/TextField';
import { CreateNewBoard, GetAllBoards } from '../../services/BoardServices';

const Home = () => {
    const [open, setOpen] = React.useState(false);
    const [boardname, setBoardname] = useState("")
    const [boards, setBoards] = useState([])

    const GetBoards = async()=>{
        const response = await GetAllBoards()
        if(response!=null){
            setBoards(response)
        }
    }

    useEffect(()=>{
        GetBoards()
    },[])

    const createboard = async()=>{
        const response = await CreateNewBoard(boardname)
        await GetBoards()
        setOpen(false)
    }

    return (
        <div className='home'>
            <div className="home_sidebar">
                <div className='logo_cont'>
                    <img src={logo} width='100px' />
                </div>
                <div className="home_myboard">
                    My Board
                </div>
            </div>
            <div className="home_main">
                <div className="home_topbar">
                    <Button onClick={() => setOpen(true)}>
                        <AddCircleOutlineIcon />
                    </Button>
                </div>
                <div className='brdlist'>
                    <BoardList boards={boards} />
                </div>

            </div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Add New Board
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        <TextField onChange={e=> setBoardname(e.target.value)} label="Boar Name" variant="standard" />
                        <Button onClick={createboard} variant="contained" color="success">
                            Create Board
                        </Button>
                    </Typography>
                </Sheet>
            </Modal>
        </div>
    )
}

export default Home