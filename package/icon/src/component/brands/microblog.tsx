
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `microblog` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/microblog?s=brands microblog}
 * @preview ![microblog](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTkuMzYsMzYyLjIzYzI5LjQ5LTM0LjY5LDQ3LjEtNzguMzQsNDcuMS0xMjUuNzlDNDQ2LjQ2LDEyMy40OSwzNDYuODYsMzIsMjI0LDMyUzEuNTQsMTIzLjQ5LDEuNTQsMjM2LjQ0LDEwMS4xNCw0NDAuODcsMjI0LDQ0MC44N2EyMzkuMjgsMjM5LjI4LDAsMCwwLDc5LjQ0LTEzLjQ0LDcuMTgsNy4xOCwwLDAsMSw4LjEyLDIuNTZjMTguNTgsMjUuMDksNDcuNjEsNDIuNzQsNzkuODksNDkuOTJhNC40Miw0LjQyLDAsMCwwLDUuMjItMy40Myw0LjM3LDQuMzcsMCwwLDAtLjg1LTMuNjIsODcsODcsMCwwLDEsMy42OS0xMTAuNjlaTTMyOS41MiwyMTIuNGwtNTcuMyw0My40OUwyOTMsMzI0Ljc1YTYuNSw2LjUsMCwwLDEtOS45NCw3LjIyTDIyNCwyOTAuOTIsMTY0Ljk0LDMzMmE2LjUxLDYuNTEsMCwwLDEtOS45NS03LjIybDIwLjc5LTY4Ljg2LTU3LjMtNDMuNDlhNi41LDYuNSwwLDAsMSwzLjgtMTEuNjhsNzEuODgtMS41MSwyMy42Ni02Ny45MmE2LjUsNi41LDAsMCwxLDEyLjI4LDBsMjMuNjYsNjcuOTIsNzEuODgsMS41MWE2LjUsNi41LDAsMCwxLDMuODgsMTEuNjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Microblog(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M399.36,362.23c29.49-34.69,47.1-78.34,47.1-125.79C446.46,123.49,346.86,32,224,32S1.54,123.49,1.54,236.44,101.14,440.87,224,440.87a239.28,239.28,0,0,0,79.44-13.44,7.18,7.18,0,0,1,8.12,2.56c18.58,25.09,47.61,42.74,79.89,49.92a4.42,4.42,0,0,0,5.22-3.43,4.37,4.37,0,0,0-.85-3.62,87,87,0,0,1,3.69-110.69ZM329.52,212.4l-57.3,43.49L293,324.75a6.5,6.5,0,0,1-9.94,7.22L224,290.92,164.94,332a6.51,6.51,0,0,1-9.95-7.22l20.79-68.86-57.3-43.49a6.5,6.5,0,0,1,3.8-11.68l71.88-1.51,23.66-67.92a6.5,6.5,0,0,1,12.28,0l23.66,67.92,71.88,1.51a6.5,6.5,0,0,1,3.88,11.68Z" />
        </Icon>
    </>
}