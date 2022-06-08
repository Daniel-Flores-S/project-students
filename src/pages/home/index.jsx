import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <div
            style={{
                display: 'flex',
                flexGrow: 1,
                backgroundColor: '#fafafa',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >

            <div>
                <h3>Home</h3>
                <Button
                    color="success"                    
                    size="large"
                    type="submit"
                    variant="contained"                    
                    onClick={() => [signout(), navigate("/")]}
                >
                    Sair
                </Button>
            </div>
        </div>
    );
}

export default Home;


