import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Scroller, scroller } from 'react-scroll';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });

        props.onClose(false);
    }

    return (
        <Drawer 
        anchor="right" 
        open={props.open}  
        variant="temporary"
        onClose={() => props.onClose(false)}
        >
            
            <List component="nav">
                
                <ListItem onClick={() => scrollToElement('Featured')} button>Event starts in</ListItem>
                <ListItem onClick={() => scrollToElement('VenueNfo')} button>Venue NFO</ListItem>
                <ListItem onClick={() => scrollToElement('Highlights')} button>Highlights</ListItem>
                <ListItem onClick={() => scrollToElement('Pricing')} button>Pricing</ListItem>
                <ListItem onClick={() => scrollToElement('Location')} button>Location</ListItem>
            
            </List>

        </Drawer>
    );
}
 
export default SideDrawer;