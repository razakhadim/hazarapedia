import React from 'react'
import Feature from './Feature'
import Grid from './Grid'
import Placeholder from './Placeholder'
import TextSection from './sections/TextSection'

const Components = {
  'grid': Grid,
  'feature': Feature,
  'textSection': TextSection,
}

const DynamicComponent = ({blok}) => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid}/>
  }
 
  return  blok.component ? <Placeholder componentName={blok.component}/> : null
}

export default DynamicComponent
