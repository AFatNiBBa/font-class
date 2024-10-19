
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pied-piper` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pied-piper?s=brands pied-piper}
 * @preview ![pied-piper](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0ODAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NTUuOTMsMjMuMkM0MjkuMjMsMzAsMzg3Ljc5LDUxLjY5LDM0MS4zNSw5MC42NkEyMDYsMjA2LDAsMCwwLDI0MCw2NEMxMjUuMTMsNjQsMzIsMTU3LjEyLDMyLDI3MnM5My4xMywyMDgsMjA4LDIwOCwyMDgtOTMuMTMsMjA4LTIwOGEyMDcuMjUsMjA3LjI1LDAsMCwwLTU4Ljc1LTE0NC44MSwxNTUuMzUsMTU1LjM1LDAsMCwwLTE3LDI3LjRBMTc2LjE2LDE3Ni4xNiwwLDAsMSw0MTcuMSwyNzJjMCw5Ny42Ni03OS40NCwxNzcuMTEtMTc3LjA5LDE3Ny4xMWExNzUuODEsMTc1LjgxLDAsMCwxLTg3LjYzLTIzLjRjODIuOTQtMTA3LjMzLDE1MC43OS0zNy43NywxODQuMzEtMjI2LjY1LDUuNzktMzIuNjIsMjgtOTQuMjYsMTI2LjIzLTE2MC4xOEM0NzEsMzMuNDUsNDY1LjM1LDIwLjgsNDU1LjkzLDIzLjJaTTEyNSw0MDYuNEExNzYuNjYsMTc2LjY2LDAsMCwxLDYyLjksMjcyQzYyLjksMTc0LjM0LDE0Mi4zNSw5NC45LDI0MCw5NC45YTE3NCwxNzQsMCwwLDEsNzYuNjMsMTcuNzVDMjUwLjY0LDE3NC43NiwxODkuNzcsMjY1LjUyLDEyNSw0MDYuNFoiIGNsYXNzPSJjbHMtMSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PiedPiper(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 480 512" {...props}>
            <path d="M455.93,23.2C429.23,30,387.79,51.69,341.35,90.66A206,206,0,0,0,240,64C125.13,64,32,157.12,32,272s93.13,208,208,208,208-93.13,208-208a207.25,207.25,0,0,0-58.75-144.81,155.35,155.35,0,0,0-17,27.4A176.16,176.16,0,0,1,417.1,272c0,97.66-79.44,177.11-177.09,177.11a175.81,175.81,0,0,1-87.63-23.4c82.94-107.33,150.79-37.77,184.31-226.65,5.79-32.62,28-94.26,126.23-160.18C471,33.45,465.35,20.8,455.93,23.2ZM125,406.4A176.66,176.66,0,0,1,62.9,272C62.9,174.34,142.35,94.9,240,94.9a174,174,0,0,1,76.63,17.75C250.64,174.76,189.77,265.52,125,406.4Z" />
        </Icon>
    </>
}