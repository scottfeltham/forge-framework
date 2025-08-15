/**
 * FORGE Framework Theme System
 * NeoForge-inspired light/dark mode implementation
 */

(function() {
  'use strict';

  // Theme constants
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
  };

  const STORAGE_KEY = 'forge-theme';
  const THEME_ATTRIBUTE = 'data-theme';

  /**
   * Theme Manager Class
   */
  class ThemeManager {
    constructor() {
      this.currentTheme = null;
      this.toggleButton = null;
      this.systemPreference = null;
      
      this.init();
    }

    /**
     * Initialize the theme system
     */
    init() {
      // Detect system preference
      this.detectSystemPreference();
      
      // Set initial theme
      this.setInitialTheme();
      
      // Listen for system preference changes
      this.watchSystemPreference();
      
      // Initialize toggle button when DOM is ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.initToggleButton());
      } else {
        this.initToggleButton();
      }
    }

    /**
     * Detect system color scheme preference
     */
    detectSystemPreference() {
      if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.systemPreference = darkModeQuery.matches ? THEMES.DARK : THEMES.LIGHT;
      } else {
        this.systemPreference = THEMES.LIGHT;
      }
    }

    /**
     * Watch for system preference changes
     */
    watchSystemPreference() {
      if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Use modern addEventListener, fallback to addListener for older browsers
        if (darkModeQuery.addEventListener) {
          darkModeQuery.addEventListener('change', (e) => {
            this.systemPreference = e.matches ? THEMES.DARK : THEMES.LIGHT;
            
            // Only update if no manual preference is stored
            if (!this.getStoredTheme()) {
              this.setTheme(this.systemPreference, false);
            }
          });
        } else if (darkModeQuery.addListener) {
          darkModeQuery.addListener((e) => {
            this.systemPreference = e.matches ? THEMES.DARK : THEMES.LIGHT;
            
            if (!this.getStoredTheme()) {
              this.setTheme(this.systemPreference, false);
            }
          });
        }
      }
    }

    /**
     * Set the initial theme based on stored preference or system default
     */
    setInitialTheme() {
      const storedTheme = this.getStoredTheme();
      const initialTheme = storedTheme || this.systemPreference;
      
      this.setTheme(initialTheme, false);
    }

    /**
     * Get stored theme preference from localStorage
     * @returns {string|null} Stored theme or null
     */
    getStoredTheme() {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch (e) {
        console.warn('Failed to access localStorage for theme preference:', e);
        return null;
      }
    }

    /**
     * Store theme preference in localStorage
     * @param {string} theme - Theme to store
     */
    storeTheme(theme) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {
        console.warn('Failed to store theme preference:', e);
      }
    }

    /**
     * Set the current theme
     * @param {string} theme - Theme to set (light|dark)
     * @param {boolean} store - Whether to store the preference
     */
    setTheme(theme, store = true) {
      // Validate theme
      if (!Object.values(THEMES).includes(theme)) {
        console.warn(`Invalid theme: ${theme}. Defaulting to light.`);
        theme = THEMES.LIGHT;
      }

      // Update current theme
      this.currentTheme = theme;

      // Apply theme to document
      document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);

      // Store preference if requested
      if (store) {
        this.storeTheme(theme);
      }

      // Update toggle button state
      this.updateToggleButton();

      // Announce theme change to screen readers
      this.announceThemeChange(theme);

      // Dispatch custom event
      this.dispatchThemeChangeEvent(theme);
    }

    /**
     * Toggle between light and dark themes
     */
    toggleTheme() {
      const newTheme = this.currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
      this.setTheme(newTheme, true);
    }

    /**
     * Initialize the theme toggle button
     */
    initToggleButton() {
      // Create toggle button if it doesn't exist
      this.createToggleButton();
      
      // Add event listener
      if (this.toggleButton) {
        this.toggleButton.addEventListener('click', () => this.toggleTheme());
        this.toggleButton.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleTheme();
          }
        });
      }

      // Update initial state
      this.updateToggleButton();
    }

    /**
     * Create the theme toggle button HTML
     */
    createToggleButton() {
      // Look for existing toggle button
      this.toggleButton = document.querySelector('.theme-toggle');
      
      if (!this.toggleButton) {
        // Create toggle button
        this.toggleButton = document.createElement('button');
        this.toggleButton.className = 'theme-toggle';
        this.toggleButton.setAttribute('aria-label', 'Toggle theme');
        this.toggleButton.setAttribute('type', 'button');
        this.toggleButton.innerHTML = this.getToggleButtonHTML();

        // Insert into header navigation
        const header = document.querySelector('.site-header') || 
                      document.querySelector('header') || 
                      document.querySelector('.main-header');
        
        if (header) {
          // Try to find a nav element within header
          const nav = header.querySelector('nav') || header.querySelector('.site-nav');
          if (nav) {
            nav.appendChild(this.toggleButton);
          } else {
            header.appendChild(this.toggleButton);
          }
        } else {
          // Fallback: add to body if no header found
          console.warn('No header element found, adding theme toggle to body');
          document.body.appendChild(this.toggleButton);
        }
      }
    }

    /**
     * Get the HTML for the toggle button icons
     * @returns {string} HTML string
     */
    getToggleButtonHTML() {
      return `
        <svg class="theme-toggle__icon theme-toggle__icon--light" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg class="theme-toggle__icon theme-toggle__icon--dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
    }

    /**
     * Update toggle button state
     */
    updateToggleButton() {
      if (!this.toggleButton) return;

      const label = this.currentTheme === THEMES.LIGHT ? 
        'Switch to dark mode' : 
        'Switch to light mode';
      
      this.toggleButton.setAttribute('aria-label', label);
      this.toggleButton.setAttribute('title', label);
    }

    /**
     * Announce theme change to screen readers
     * @param {string} theme - New theme
     */
    announceThemeChange(theme) {
      const announcement = `Theme changed to ${theme} mode`;
      
      // Create temporary announcement element
      const announcer = document.createElement('div');
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.textContent = announcement;
      
      document.body.appendChild(announcer);
      
      // Remove after announcement
      setTimeout(() => {
        if (announcer.parentNode) {
          announcer.parentNode.removeChild(announcer);
        }
      }, 1000);
    }

    /**
     * Dispatch custom theme change event
     * @param {string} theme - New theme
     */
    dispatchThemeChangeEvent(theme) {
      const event = new CustomEvent('themechange', {
        detail: { theme, previous: this.currentTheme }
      });
      
      window.dispatchEvent(event);
    }

    /**
     * Get current theme
     * @returns {string} Current theme
     */
    getCurrentTheme() {
      return this.currentTheme;
    }

    /**
     * Check if dark mode is active
     * @returns {boolean} True if dark mode is active
     */
    isDarkMode() {
      return this.currentTheme === THEMES.DARK;
    }
  }

  // Initialize theme manager
  const themeManager = new ThemeManager();

  // Expose to global scope for external access
  window.ForgeTheme = {
    toggle: () => themeManager.toggleTheme(),
    setTheme: (theme) => themeManager.setTheme(theme, true),
    getCurrentTheme: () => themeManager.getCurrentTheme(),
    isDarkMode: () => themeManager.isDarkMode()
  };

  // Export for module systems if available
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeManager, THEMES };
  }

})();