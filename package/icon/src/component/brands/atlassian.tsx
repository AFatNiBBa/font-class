
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `atlassian` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/atlassian?s=brands atlassian}
 * @preview ![atlassian](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTIuMiAyMzYuNGMtNy43LTguMi0xOS43LTcuNy0yNC44IDIuOEwxLjYgNDkwLjJjLTUgMTAgMi40IDIxLjcgMTMuNCAyMS43aDE3NWM1LjguMSAxMS0zLjIgMTMuNC04LjQgMzcuOS03Ny44IDE1LjEtMTk2LjMtNTEuMi0yNjcuMXpNMjQ0LjQgOC4xYy0xMjIuMyAxOTMuNC04LjUgMzQ4LjYgNjUgNDk1LjUgMi41IDUuMSA3LjcgOC40IDEzLjQgOC40SDQ5N2MxMS4yIDAgMTguNC0xMS44IDEzLjQtMjEuNyAwIDAtMjM0LjUtNDcwLjYtMjQwLjQtNDgyLjMtNS4zLTEwLjYtMTguOC0xMC44LTI1LjYuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Atlassian(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M152.2 236.4c-7.7-8.2-19.7-7.7-24.8 2.8L1.6 490.2c-5 10 2.4 21.7 13.4 21.7h175c5.8.1 11-3.2 13.4-8.4 37.9-77.8 15.1-196.3-51.2-267.1zM244.4 8.1c-122.3 193.4-8.5 348.6 65 495.5 2.5 5.1 7.7 8.4 13.4 8.4H497c11.2 0 18.4-11.8 13.4-21.7 0 0-234.5-470.6-240.4-482.3-5.3-10.6-18.8-10.8-25.6.1z" />
        </Icon>
    </>
}