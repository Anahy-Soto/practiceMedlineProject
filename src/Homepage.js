import React from 'react';
import Navbar from './Components/Navbar';
// import Sidebar from './Components/sidebar';
import Toggle from './Components/scripts';
import Temps from './Components/Temps';
import Recents from './Components/Recents';

function Homepage() {
    return (
        <div className="Homepage">
            <Toggle />
            <Temps />
            <Recents />
        </div>
    );
}

export default Homepage;

