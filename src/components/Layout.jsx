import { Outlet } from 'react-router-dom'

import styles from '../css/layout.module.css'

import Navbar from './Navbar'
import Hero from './Hero'
import Seriesmap from './Seriesmap'
import VideoSlider from './VideoSlider'
import Benchmarks from './Benchmarks'

function Layout() {
    return (
        <>
        <Navbar />
        <Hero />
        <Seriesmap />
        <VideoSlider />
        <Benchmarks />
        </>
    )
}

export default Layout