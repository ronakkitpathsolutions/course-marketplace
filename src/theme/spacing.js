/**
 * Design system spacing tokens
 * All spacing values in pixels for consistent design system
 */

export const spacing = {
  // Base spacing unit (8px system)
  base: 8,
  
  // Spacing scale (8px base system)
  xs: 4,    // 0.5 * base
  sm: 8,    // 1 * base  
  md: 16,   // 2 * base
  lg: 24,   // 3 * base
  xl: 32,   // 4 * base
  xxl: 48,  // 6 * base
  xxxl: 64, // 8 * base
  
  // Component specific spacing
  component: {
    // Button spacing
    button: {
      small: {
        padding: {
          vertical: 4,
          horizontal: 16
        },
        borderRadius: 31
      },
      medium: {
        padding: {
          vertical: 8,
          horizontal: 20
        },
        borderRadius: 41
      },
      large: {
        padding: {
          vertical: 11,
          horizontal: 24
        },
        borderRadius: 50
      },
      text: {
        small: {
          vertical: 7,
          horizontal: 12
        },
        medium: {
          vertical: 9,
          horizontal: 16
        },
        large: {
          vertical: 12,
          horizontal: 16
        }
      }
    },
    
    // Card spacing
    card: {
      borderRadius: 20,
      content: {
        padding: {
          vertical: 32,
          horizontal: 24
        }
      },
      header: {
        padding: {
          top: 32,
          horizontal: 24,
          bottom: 16
        }
      }
    },
    
    // Alert spacing
    alert: {
      padding: {
        vertical: 4,
        horizontal: 16
      }
    },
    
    // Badge spacing
    badge: {
      offset: {
        top: 4,
        right: -8
      }
    },
    
    // Dialog spacing
    dialog: {
      actions: {
        padding: 16
      }
    },
    
    // Form spacing
    form: {
      label: {
        marginBottom: 3
      }
    },
    
    // List spacing
    list: {
      padding: {
        vertical: 4
      }
    },
    
    // Progress bar
    progress: {
      height: 3
    }
  }
};

// Font sizes in pixels
export const fontSize = {
  xs: 12,   // caption
  sm: 14,   // input, small text
  md: 16,   // body text
  lg: 18,   // subtitle
  xl: 20,   // heading small
  xxl: 22,  // logo
  xxxl: 24  // heading large
};

// Letter spacing in pixels
export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1
};

// Line heights
export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.57,
  loose: 2.5
};

// Helper functions to convert spacing to CSS strings
export const spacingHelpers = {
  // Convert spacing value to px string
  px: (value) => `${value}px`,
  
  // Convert padding object to CSS string
  padding: (vertical, horizontal) => `${vertical}px ${horizontal}px`,
  
  // Convert margin object to CSS string  
  margin: (vertical, horizontal) => `${vertical}px ${horizontal}px`,
  
  // Get spacing value
  get: (size) => spacing[size] || spacing.md,
  
  // Get component spacing
  component: (component, variant, property) => {
    return spacing.component[component]?.[variant]?.[property];
  }
};

export default spacing;
