'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';

const pages = ['Home', 'Dashboard', 'Report', 'About'];
const settings = ['Profile', 'Logout'];


const links = [
    { href: '/', label: 'Home' },
    { href: 'dashboard', label: 'Dashboard' },
    { href: 'report', label: 'Report' },
    { href: 'about', label: 'About' },
]

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/">
                        <Box sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                            <Image
                                src="/logo-white.svg"
                                alt="Capgemini Logo"
                                width={150}
                                height={36}
                                priority
                            />
                        </Box>
                    </Link>
                    {/* Mobile size */}
                    <Container sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }} >
                        <Box>
                            <Link href="/">
                                <Box sx={{ mt: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <Image
                                        src="/logo-white.svg"
                                        alt="Capgemini Logo"
                                        width={150}
                                        height={36}
                                        priority
                                    />
                                </Box>
                            </Link>
                        </Box>
                        <Box>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Container>
                    {/* Desktop size */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                                justifyContent: 'center'
                            }}
                        >
                            SDLC Maturity Assessment
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Maximising speed, value and quality
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {links.map((page) => (
                                <Box
                                    key={page.label}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
                                >
                                    <Link href={page.href} onClick={handleCloseNavMenu}>{page.label}</Link>
                                </Box>
                            ))}


                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <PermIdentityRoundedIcon alt="Profile image" sx={{ color: 'white' }} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}


export default ResponsiveAppBar;