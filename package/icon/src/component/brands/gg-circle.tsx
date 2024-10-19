
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gg-circle` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gg-circle?s=brands gg-circle}
 * @preview ![gg-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTcgOEMxMjAgOCA5IDExOSA5IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5NCA4IDI1NyA4em0tNDkuNSAzNzQuOEw4MS44IDI1Ny4xbDEyNS43LTEyNS43IDM1LjIgMzUuNC0yNC4yIDI0LjItMTEuMS0xMS4xLTc3LjIgNzcuMiA3Ny4yIDc3LjIgMjYuNi0yNi42LTUzLjEtNTIuOSAyNC40LTI0LjQgNzcuMiA3Ny4yLTc1IDc1LjJ6bTk5LTIuMmwtMzUuMi0zNS4yIDI0LjEtMjQuNCAxMS4xIDExLjEgNzcuMi03Ny4yLTc3LjItNzcuMi0yNi41IDI2LjUgNTMuMSA1Mi45LTI0LjQgMjQuNC03Ny4yLTc3LjIgNzUtNzVMNDMyLjIgMjU1IDMwNi41IDM4MC42eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GgCircle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M257 8C120 8 9 119 9 256s111 248 248 248 248-111 248-248S394 8 257 8zm-49.5 374.8L81.8 257.1l125.7-125.7 35.2 35.4-24.2 24.2-11.1-11.1-77.2 77.2 77.2 77.2 26.6-26.6-53.1-52.9 24.4-24.4 77.2 77.2-75 75.2zm99-2.2l-35.2-35.2 24.1-24.4 11.1 11.1 77.2-77.2-77.2-77.2-26.5 26.5 53.1 52.9-24.4 24.4-77.2-77.2 75-75L432.2 255 306.5 380.6z" />
        </Icon>
    </>
}