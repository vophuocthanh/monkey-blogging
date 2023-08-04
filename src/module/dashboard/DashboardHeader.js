import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/button/Button';
import { useAuth } from '../../contexts/auth-context';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Box from '@mui/material/Box';
const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    img {
      max-width: 40px;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
      background-position: center;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  @media screen and (max-width: 1023.98px) {
    .logo {
      visibility: hidden;
    }
  }
`;
export function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectMode = event.target.value;
    console.log(selectMode);
    setMode(selectMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='label-select-dark-light-mode' disabled='false'>
        Mode
      </InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <div
            className=''
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <LightModeIcon fontSize='small'></LightModeIcon> Light
          </div>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeOutlinedIcon fontSize='small'></DarkModeOutlinedIcon> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize='small'></SettingsBrightnessIcon>{' '}
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
const DashboardHeader = () => {
  const { userInfo } = useAuth();
  return (
    <DashboardHeaderStyles>
      <NavLink to='/' className='logo'>
        <img srcSet='/logo.png 2x' alt='monkey-blogging' className='logo' />
        <span className='hidden lg:inline-block'>Monkey Blogging</span>
      </NavLink>
      <ModeSelect></ModeSelect>
      <div className='header-right'>
        <Button to='/manage/add-post' className='header-button' height='52px'>
          Write new post
        </Button>
        <NavLink to='/manage/update-user' className='header-avatar'>
          <img
            src={
              userInfo?.photoURL ||
              `https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80`
            }
            alt=''
          />
        </NavLink>
      </div>
    </DashboardHeaderStyles>
  );
};

export default DashboardHeader;
