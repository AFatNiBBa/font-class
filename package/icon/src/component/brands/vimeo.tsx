
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `vimeo` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/vimeo?s=brands vimeo}
 * @preview ![vimeo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDMuMiAzMkg0NC44QzIwLjEgMzIgMCA1Mi4xIDAgNzYuOHYzNTguNEMwIDQ1OS45IDIwLjEgNDgwIDQ0LjggNDgwaDM1OC40YzI0LjcgMCA0NC44LTIwLjEgNDQuOC00NC44Vjc2LjhjMC0yNC43LTIwLjEtNDQuOC00NC44LTQ0Ljh6TTM3NyAxODAuOGMtMS40IDMxLjUtMjMuNCA3NC43LTY2IDEyOS40LTQ0IDU3LjItODEuMyA4NS44LTExMS43IDg1LjgtMTguOSAwLTM0LjgtMTcuNC00Ny45LTUyLjMtMjUuNS05My4zLTM2LjQtMTQ4LTU3LjQtMTQ4LTIuNCAwLTEwLjkgNS4xLTI1LjQgMTUuMmwtMTUuMi0xOS42YzM3LjMtMzIuOCA3Mi45LTY5LjIgOTUuMi03MS4yIDI1LjItMi40IDQwLjcgMTQuOCA0Ni41IDUxLjcgMjAuNyAxMzEuMiAyOS45IDE1MSA2Ny42IDkxLjYgMTMuNS0yMS40IDIwLjgtMzcuNyAyMS44LTQ4LjkgMy41LTMzLjItMjUuOS0zMC45LTQ1LjgtMjIuNCAxNS45LTUyLjEgNDYuMy03Ny40IDkxLjItNzYgMzMuMy45IDQ5IDIyLjUgNDcuMSA2NC43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Vimeo(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3.9 49 22.5 47.1 64.7z" />
        </Icon>
    </>
}