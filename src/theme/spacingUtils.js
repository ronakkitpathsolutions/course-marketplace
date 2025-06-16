import { spacing, spacingHelpers } from './spacing';

/**
 * Advanced spacing utilities for responsive design and complex layouts
 */

export const responsiveSpacing = {
  // Generate responsive spacing based on breakpoints
  generateResponsiveSpacing: (baseSize, multipliers = { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 }) => ({
    xs: spacingHelpers.px(baseSize * multipliers.xs),
    sm: spacingHelpers.px(baseSize * multipliers.sm),
    md: spacingHelpers.px(baseSize * multipliers.md),
    lg: spacingHelpers.px(baseSize * multipliers.lg),
  }),

  // Common responsive spacing patterns
  patterns: {
    // Section spacing (for page sections)
    section: {
      padding: {
        mobile: spacingHelpers.px(spacing.lg),    // 24px
        tablet: spacingHelpers.px(spacing.xl),    // 32px
        desktop: spacingHelpers.px(spacing.xxl),  // 48px
      },
      margin: {
        mobile: spacingHelpers.px(spacing.md),    // 16px
        tablet: spacingHelpers.px(spacing.lg),    // 24px
        desktop: spacingHelpers.px(spacing.xl),   // 32px
      }
    },

    // Container spacing
    container: {
      padding: {
        mobile: spacingHelpers.px(spacing.md),    // 16px
        tablet: spacingHelpers.px(spacing.lg),    // 24px
        desktop: spacingHelpers.px(spacing.xl),   // 32px
      }
    },

    // Grid spacing
    grid: {
      gap: {
        tight: spacingHelpers.px(spacing.sm),     // 8px
        normal: spacingHelpers.px(spacing.md),    // 16px
        loose: spacingHelpers.px(spacing.lg),     // 24px
      }
    }
  }
};

export const layoutSpacing = {
  // Common layout measurements
  header: {
    height: spacingHelpers.px(64),
    padding: spacingHelpers.px(spacing.md),
  },
  
  footer: {
    padding: spacingHelpers.px(spacing.xl),
  },

  sidebar: {
    width: spacingHelpers.px(280),
    padding: spacingHelpers.px(spacing.lg),
  },

  // Navigation spacing
  nav: {
    item: {
      padding: spacingHelpers.padding(spacing.sm, spacing.md), // 8px 16px
    },
    menu: {
      gap: spacingHelpers.px(spacing.xs), // 4px
    }
  }
};

// Component-specific advanced spacing
export const componentSpacing = {
  // Modal/Dialog spacing
  modal: {
    backdrop: {
      padding: spacingHelpers.px(spacing.lg), // 24px
    },
    content: {
      padding: spacingHelpers.px(spacing.xl), // 32px
    }
  },

  // Form field spacing
  form: {
    field: {
      marginBottom: spacingHelpers.px(spacing.lg), // 24px
    },
    fieldGroup: {
      gap: spacingHelpers.px(spacing.md), // 16px
    },
    section: {
      marginBottom: spacingHelpers.px(spacing.xl), // 32px
    }
  },

  // Table spacing
  table: {
    cell: {
      padding: spacingHelpers.padding(spacing.sm, spacing.md), // 8px 16px
    },
    header: {
      padding: spacingHelpers.padding(spacing.md, spacing.md), // 16px 16px
    }
  }
};

// Animation and transition utilities
export const animationSpacing = {
  // Common durations
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },

  // Easing functions
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    linear: 'linear',
  }
};

// Breakpoint helpers for consistent responsive design
export const breakpointHelpers = {
  // Generate media queries with spacing
  up: (breakpoint) => `@media (min-width: ${breakpoint}px)`,
  down: (breakpoint) => `@media (max-width: ${breakpoint - 1}px)`,
  between: (min, max) => `@media (min-width: ${min}px) and (max-width: ${max - 1}px)`,

  // Common breakpoints
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  }
};

// Validation utilities
export const spacingValidation = {
  // Check if a value follows the 8px grid
  isValidSpacing: (value) => {
    const numValue = parseInt(value);
    return numValue % spacing.xs === 0; // Should be divisible by 4
  },

  // Suggest the nearest valid spacing
  suggestSpacing: (value) => {
    const numValue = parseInt(value);
    const remainder = numValue % spacing.xs;
    
    if (remainder === 0) return numValue;
    
    const lower = numValue - remainder;
    const upper = numValue + (spacing.xs - remainder);
    
    return Math.abs(numValue - lower) < Math.abs(numValue - upper) ? lower : upper;
  }
};

const spacingUtils = {
  responsiveSpacing,
  layoutSpacing,
  componentSpacing,
  animationSpacing,
  breakpointHelpers,
  spacingValidation
};

export default spacingUtils;
