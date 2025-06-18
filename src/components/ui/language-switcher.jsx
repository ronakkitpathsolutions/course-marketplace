"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { 
  Button, 
  Menu, 
  MenuItem, 
  ListItemIcon, 
  ListItemText,
  Box
} from "@mui/material";
import { Language as LanguageIcon, ExpandMore } from "@mui/icons-material";
import { LANGUAGES } from "@/constants";
import { getClientLanguage, setLanguagePreference } from "@/helpers";

// Language display configuration
const LANGUAGE_CONFIG = {
  en: { label: "English", flag: "🇺🇸" },
  es: { label: "Español", flag: "🇪🇸" },
  fr: { label: "Français", flag: "🇫🇷" },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const open = Boolean(anchorEl);

  useEffect(() => {
    // Initialize with current language
    const detectedLanguage = getClientLanguage();
    setCurrentLanguage(detectedLanguage);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguageChange = async (language) => {    
    // Update local state immediately
    setCurrentLanguage(language);
    
    // Save preference first (both cookie and localStorage)
    setLanguagePreference(language);
    
    // Change i18n language
    await i18n.changeLanguage(language);
    
    // Close menu
    handleClose();
  };

  const currentConfig = LANGUAGE_CONFIG[currentLanguage] || LANGUAGE_CONFIG.en;

  return (
    <Box sx={{ minWidth: 150 }}>
      <Button
        id="language-button"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={<LanguageIcon />}
        endIcon={<ExpandMore />}
        sx={{ 
          minWidth: 140,
          textTransform: "none",
        }}
      >
        {currentConfig.flag} {currentConfig.label}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {LANGUAGES.map((lang) => {
          const config = LANGUAGE_CONFIG[lang];
          return (
            <MenuItem
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              selected={lang === currentLanguage}
            >
              <ListItemIcon>
                <span style={{ fontSize: "1.2em" }}>{config.flag}</span>
              </ListItemIcon>
              <ListItemText>{config.label}</ListItemText>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
