import React from 'react'
import { Sections } from './SectionMapper.util'
import Placeholder from '../../Placeholder'

const SectionMapper = ({blok}) => {
    if (typeof Sections[blok.component] !== 'undefined') {
        const Section = Sections[blok.component]
        return <Section blok={blok} key={blok._uid}/>
    }
    return blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default SectionMapper