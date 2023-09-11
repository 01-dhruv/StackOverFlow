import React from 'react'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './RightSideBar.css'

const RightSideBar = () => {
    return (
        <section className="right-sidebar">
            <Widget />
            <WidgetTags />
        </section>
    )
}

export default RightSideBar
