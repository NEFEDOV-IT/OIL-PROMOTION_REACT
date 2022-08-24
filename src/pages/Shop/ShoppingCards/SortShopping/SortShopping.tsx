import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './SortShopping.scss'
import {useDispatch} from "react-redux";
import {searchItemShop, sortShop} from "../../../../store/shop/shop.slice";
import { TextField } from "@mui/material";
import {useState} from "react";

export default function SortShopping() {
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const searchItem = (e:any) => {
        dispatch(searchItemShop(e.target.value))
    }

    const handleChange = (event: SelectChangeEvent) => {
        setPrice(event.target.value as string);
        dispatch(sortShop(event.target.value))
    };

    return (
        <Box className={'cards__prices'}>
            <TextField
                onChange={searchItem}
                className={'cards__prices-input'}
                id="outlined-basic"
                label="Search"
                variant="outlined"
            />
            <FormControl>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    className={'cards__prices-select'}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={price}
                    label="Sort"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Default</MenuItem>
                    <MenuItem value={2}>Min price</MenuItem>
                    <MenuItem value={3}>Max price</MenuItem>
                    <MenuItem value={4}>A-Z</MenuItem>
                    <MenuItem value={5}>Z-A</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
