import { ComponentsOverrides, Theme } from '@mui/material';

const ButtonStyles: ComponentsOverrides<Theme>['MuiButton'] = {
  root: ({ theme }) => ({
    borderRadius: theme.spacing(0.25),
    textTransform: 'none',
  }),
};

export default ButtonStyles;
