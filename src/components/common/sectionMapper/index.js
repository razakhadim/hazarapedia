import React from 'react'
import { Sections } from './SectionMapper.util'
import Placeholder from '../../Placeholder'
import { sbEditable } from '@storyblok/storyblok-editable'

const SectionMapper = ({blok}) => {
    if (typeof Sections[blok.component] !== 'undefined') {
        
        const Section = Sections[blok.component]
        return <Section {...sbEditable(blok)} blok={blok} key={blok._uid}/> //need to map all sections on the page
    }
    return blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default SectionMapper
