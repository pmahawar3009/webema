'use client'
import Link from "next/link"
import Image from 'next/image';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupsIcon from '@mui/icons-material/Groups';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 240;

const areas = [
    { href: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { href: 'assessmentDevOpsPeople', label: 'DevOps People Assessment', icon: <GroupsIcon /> },
    { href: 'assessmentDevOpsProcess', label: 'DevOps Process Assessment', icon: <DonutLargeIcon /> },
    { href: 'cicd', label: 'CI/CD Assessment', icon: <AllInclusiveIcon /> },
    { href: 'Infra', label: 'Infrastructure Assessment', icon: <LegendToggleIcon /> },
    { href: 'process', label: 'Process Maturity Assessment', icon: <ModelTrainingIcon /> }
]



export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            anchor="left"
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {areas.map((area, index) => (
                        <Box key={index}>
                            <Link href={area.href}>
                                <ListItem sx={{ p: 0.5 }}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {area.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={area.label} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Divider />
                        </Box>
                    ))}
                    <Box sx={{ pl: 6, pt: 4, display: { xs: 'none', md: 'flex' } }}>
                        <Image
                            src="/CAPMF.png"
                            alt="Capgemini Logo"
                            width={150}
                            height={36}
                            priority
                        />
                    </Box>
                </List>
            </Box>
        </Drawer>
    );
}
