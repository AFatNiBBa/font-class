
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `android` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/android?s=brands android}
 * @preview ![android](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MjAuNTUsMzAxLjkzYTI0LDI0LDAsMSwxLDI0LTI0LDI0LDI0LDAsMCwxLTI0LDI0bS0yNjUuMSwwYTI0LDI0LDAsMSwxLDI0LTI0LDI0LDI0LDAsMCwxLTI0LDI0bTI3My43LTE0NC40OCw0Ny45NC04M2ExMCwxMCwwLDEsMC0xNy4yNy0xMGgwbC00OC41NCw4NC4wN2EzMDEuMjUsMzAxLjI1LDAsMCwwLTI0Ni41NiwwTDExNi4xOCw2NC40NWExMCwxMCwwLDEsMC0xNy4yNywxMGgwbDQ3Ljk0LDgzQzY0LjUzLDIwMi4yMiw4LjI0LDI4NS41NSwwLDM4NEg1NzZjLTguMjQtOTguNDUtNjQuNTQtMTgxLjc4LTE0Ni44NS0yMjYuNTUiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Android(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" />
        </Icon>
    </>
}