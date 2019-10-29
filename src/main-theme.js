import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#ffffff",
            main: "#ffffff",
            dark: "#c70044",
            contrastText: "#000000"
        },
        secondary: {
            light: "#ff87b0",
            main: "#FF3399",
            dark: "#c70044",
            contrastText: "#ffffff"
        },
        error: {
            main: "#ff0000",
            light: "#ff0000",
            dark: "#ff0000",
            contrastText: "#ff0000"
        }
    },
    typography: {
        // Use the system font.
        fontFamily: "Open Sans, sans-serif"
    },
    error: {
        main: "#ff0000",
        light: "#ff0000",
        dark: "#ff0000",
        contrastText: "#ff0000"
    },
    overrides: {
        MuiInput: {
            root: {
                border: "1px solid #efefef",
                // padding: 7,
                borderRadius: 4,
                fontSize: 14,
                "&:before": {
                    border: "none !important"
                },
                backgroundColor: '#fff'
            },
            input: {
                padding: "12px"
            },
            inputMarginDense: {
                paddingTop: 12
            },
            focused: {
                boxShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
                transform: "transition: transform 200ms cubic-bezier(0.0, 0, 0.2, ) 0ms;",
            },
            error: {
                backgroundColor: "#ffcdd2",
                border: "2px solid #FF0000 !important"
            },
        },
        MuiInputLabel: {
            formControl: {
                transform: "translate(0, 0px) scale(0.9)"
            },
            marginDense: {
                transform: "translate(0, 0px) scale(0.9)"
            },
            shrink: {
                transform: "translate(0, 0px) scale(0.9)"
            }
        },
        MuiInputAdornment: {
            root: {
                maxHeight: "auto",
            },
            positionStart: {
                marginRight: 0,
                padding: "8px 0px 8px 8px",
            }
        },
        MuiPaper: {
            elevation2: {
                boxShadow: "0 0px 3px rgba(0, 0, 0, 0.2)"
            }
        },
        MuiTableRow: {
            head: {
                height: 40
            }
        },
        MuiButton: {
            root:{
                
            },
            label:{
                fontFamily: "Open Sans, sans-serif",
                fontSize: "13px",
                fontWeight: "900 !important"
            }
        },
        MuiTypography: {
            root: {
                fontFamily: "Roboto, sans-serif"
            },
            h1: {
                fontFamily: "Roboto, sans-serif",
            },
            h2: {
                fontFamily: "Roboto, sans-serif",
            },
            h3: {
                fontFamily: "Roboto, sans-serif",
            },
            h4: {
                fontFamily: "Roboto, sans-serif",
            },
            h5: {
                fontFamily: "Roboto, sans-serif",
                fontSize: 21
            },
            h6: {
                fontFamily: "Roboto, sans-serif",
            },
            subtitle1: {
                fontFamily: "Roboto, sans-serif",
            },
            subtitle2: {
                fontFamily: "Roboto, sans-serif",
            }
        },
        MuiTableCell: {
            root: {
                fontFamily: "Arial, Helvetica, sans-serif",
                color: "#707070"
            },
            head: {
                fontSize: 10,
            },
            body: {
                fontSize: 12,
            }
        },
        MuiDrawer: {
            root: {
                fontFamily: "Roboto, sans-serif !important",
                fontSize: 14
            }
        },
        MuiCard: {
            root: {
                boxShadow: "1px 2px 4px 1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)"
            },
        },
        MuiCardHeader: {
            root: {
                color: "#FF3399",
                fontSize: "28px !important",
                fontWeight: 700,
                fontFamily: "Roboto, sans-serif !important",
                borderBottom: "1px solid #000 !important",
                padding: "12px 16px 8px 16px"
            }
        },
        MuiDialogTitle: {
            root: {
                color: "#FF3399",
                fontSize: "28px !important",fontWeight: 700,
                fontFamily: "Roboto, sans-serif !important",
                padding: "12px 16px 8px 16px"
            }
        }
    }
});

export default theme;