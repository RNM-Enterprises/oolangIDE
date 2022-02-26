// theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        boxShadow:'3px 3px 6px #b8b9be, -3px -3px 6px #fff',
        backgroundColor:'#FCF5EF',
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
       
      },
    other: {

    }
    },
  
})

export default theme