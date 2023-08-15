import { ComponentsOverrides, Theme } from '@mui/material';

const ButtonBaseStyles: ComponentsOverrides<Theme>['MuiButtonBase'] = {
  root: () => ({
    overflow: 'hidden',
  }),
};

export default ButtonBaseStyles;
