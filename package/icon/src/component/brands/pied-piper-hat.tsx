
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `pied-piper-hat` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pied-piper-hat?s=brands pied-piper-hat}
 * @preview ![pied-piper-hat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02NDAgMjQuOWMtODAuOCA1My42LTg5LjQgOTIuNS05Ni40IDEwNC40LTYuNyAxMi4yLTExLjcgNjAuMy0yMy4zIDgzLjYtMTEuNyAyMy42LTU0LjIgNDIuMi02Ni4xIDUwLTExLjcgNy44LTI4LjMgMzguMS00MS45IDY0LjItMTA4LjEtNC40LTE2Ny40IDM4LjgtMjU5LjIgOTMuNiAyOS40LTkuNyA0My4zLTE2LjcgNDMuMy0xNi43IDk0LjItMzYgMTM5LjMtNjguMyAyODEuMS00OS4yIDEuMSAwIDEuOS42IDIuOC44IDMuOSAyLjIgNS4zIDYuOSAzLjEgMTAuOGwtNTMuOSA5NS44Yy0yLjUgNC43LTcuOCA3LjItMTMuMSA2LjEtMTI2LjgtMjMuOC0yMjYuOSAxNy4zLTMxOC45IDE4LjZDMjQuMSA0ODggMCA0NTMuNCAwIDQ1MS44YzAtMS4xLjYtMS43IDEuNy0xLjcgMCAwIDM4LjMgMCAxMDMuMS0xNS4zQzE3OC40IDI5NC41IDI0NCAyNDUuNCAzMTUuNCAyNDUuNGMwIDAgNzEuNyAwIDkwLjYgNjEuOSAyMi44LTM5LjcgMjguMy00OS4yIDI4LjMtNDkuMiA1LjMtOS40IDM1LTc3LjIgODYuNC0xNDEuNCA1MS41LTY0IDkwLjQtNzkuOSAxMTkuMy05MS44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PiedPiperHat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M640 24.9c-80.8 53.6-89.4 92.5-96.4 104.4-6.7 12.2-11.7 60.3-23.3 83.6-11.7 23.6-54.2 42.2-66.1 50-11.7 7.8-28.3 38.1-41.9 64.2-108.1-4.4-167.4 38.8-259.2 93.6 29.4-9.7 43.3-16.7 43.3-16.7 94.2-36 139.3-68.3 281.1-49.2 1.1 0 1.9.6 2.8.8 3.9 2.2 5.3 6.9 3.1 10.8l-53.9 95.8c-2.5 4.7-7.8 7.2-13.1 6.1-126.8-23.8-226.9 17.3-318.9 18.6C24.1 488 0 453.4 0 451.8c0-1.1.6-1.7 1.7-1.7 0 0 38.3 0 103.1-15.3C178.4 294.5 244 245.4 315.4 245.4c0 0 71.7 0 90.6 61.9 22.8-39.7 28.3-49.2 28.3-49.2 5.3-9.4 35-77.2 86.4-141.4 51.5-64 90.4-79.9 119.3-91.8z" />
        </Icon>
    </>
}