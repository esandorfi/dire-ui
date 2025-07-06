export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    }
  },

    uiPro: {
      colors: {
        primary: 'emerald',
        neutral: 'slate',
      },
      button: {
        defaultVariants: {
          // Set default button color to neutral
          // color: 'neutral'
        }
      },
      pageHero: {
        slots: {

          xcontainer: 'flex flex-col lg:grid gap-16 sm:gap-y-24 section-leftright',
       
        },
        
        
      }
    }
  })
  

