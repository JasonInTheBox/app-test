import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { TextField, IconButton, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import InputAdornment from '@mui/material/InputAdornment';

function Header() {
    const [search, setSearch] = useState("");
    const [anchorElement, setAnchorElement] = useState(null);
    const navigate = useNavigate();

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSearch() {
        console.log("Searching: ", search);
        //to be implemented
    }

    function handleMenuClick(event) {
        setAnchorElement(event.currentTarget);
    }

    function handleMenuClose() {
        setAnchorElement(null);
    }

    function handleFridge(){
        handleMenuClose();
        navigate('./fridge')
    }

    return (
        <div className="header-container">
            <div className="header">
                <div className="search-box">
                    <TextField 
                        className="box"
                        label="Search for history recipe"
                        variant="outlined"
                        value={search}
                        onChange={handleChange}
                        onKeyDown={(event) => event.key === 'Enter' && handleSearch()}
                        size='small'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <h1 className="smart-menu">Smart Menu</h1>

                <div className="menu">
                    <IconButton onClick={handleMenuClick} style={{ cursor: 'pointer' }}>
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        anchorElement={anchorElement}
                        open={Boolean(anchorElement)}
                        onClose={handleMenuClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        PaperProps={{
                            style: {
                                marginTop: '40px',
                            }
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleFridge}>Fridge</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Nothing for now</MenuItem>
                    </Menu>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header;
