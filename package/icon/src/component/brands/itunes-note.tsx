
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `itunes-note` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/itunes-note?s=brands itunes-note}
 * @preview ![itunes-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODEuOSAzODguMmMtNi40IDI3LjQtMjcuMiA0Mi44LTU1LjEgNDgtMjQuNSA0LjUtNDQuOSA1LjYtNjQuNS0xMC4yLTIzLjktMjAuMS0yNC4yLTUzLjQtMi43LTc0LjQgMTctMTYuMiA0MC45LTE5LjUgNzYuOC0yNS44IDYtMS4xIDExLjItMi41IDE1LjYtNy40IDYuNC03LjIgNC40LTQuMSA0LjQtMTYzLjIgMC0xMS4yLTUuNS0xNC4zLTE3LTEyLjMtOC4yIDEuNC0xODUuNyAzNC42LTE4NS43IDM0LjYtMTAuMiAyLjItMTMuNCA1LjItMTMuNCAxNi43IDAgMjM0LjcgMS4xIDIyMy45LTIuNSAyMzkuNS00LjIgMTguMi0xNS40IDMxLjktMzAuMiAzOS41LTE2LjggOS4zLTQ3LjIgMTMuNC02My40IDEwLjQtNDMuMi04LjEtNTguNC01OC0yOS4xLTg2LjYgMTctMTYuMiA0MC45LTE5LjUgNzYuOC0yNS44IDYtMS4xIDExLjItMi41IDE1LjYtNy40IDEwLjEtMTEuNSAxLjgtMjU2LjYgNS4yLTI3MC4yLjgtNS4yIDMtOS42IDcuMS0xMi45IDQuMi0zLjUgMTEuOC01LjUgMTMuNC01LjUgMjA0LTM4LjIgMjI4LjktNDMuMSAyMzIuNC00My4xIDExLjUtLjggMTguMSA2IDE4LjEgMTcuNi4yIDM0NC41IDEuMSAzMjYtMS44IDMzOC41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ItunesNote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M381.9 388.2c-6.4 27.4-27.2 42.8-55.1 48-24.5 4.5-44.9 5.6-64.5-10.2-23.9-20.1-24.2-53.4-2.7-74.4 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 6.4-7.2 4.4-4.1 4.4-163.2 0-11.2-5.5-14.3-17-12.3-8.2 1.4-185.7 34.6-185.7 34.6-10.2 2.2-13.4 5.2-13.4 16.7 0 234.7 1.1 223.9-2.5 239.5-4.2 18.2-15.4 31.9-30.2 39.5-16.8 9.3-47.2 13.4-63.4 10.4-43.2-8.1-58.4-58-29.1-86.6 17-16.2 40.9-19.5 76.8-25.8 6-1.1 11.2-2.5 15.6-7.4 10.1-11.5 1.8-256.6 5.2-270.2.8-5.2 3-9.6 7.1-12.9 4.2-3.5 11.8-5.5 13.4-5.5 204-38.2 228.9-43.1 232.4-43.1 11.5-.8 18.1 6 18.1 17.6.2 344.5 1.1 326-1.8 338.5z" />
        </Icon>
    </>
}