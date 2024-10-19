
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `servicestack` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/servicestack?s=brands servicestack}
 * @preview ![servicestack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik04OCAyMTZjODEuNyAxMC4yIDI3My43IDEwMi4zIDMwNCAyMzJIMGM5OS41LTguMSAxODQuNS0xMzcgODgtMjMyem0zMi0xNTJjMzIuMyAzNS42IDQ3LjcgODMuOSA0Ni40IDEzMy42QzI0OS4zIDIzMS4zIDM3My43IDMyMS4zIDQwMCA0NDhoOTZDNDU1LjMgMjMxLjkgMjIyLjggNzkuNSAxMjAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Servicestack(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M88 216c81.7 10.2 273.7 102.3 304 232H0c99.5-8.1 184.5-137 88-232zm32-152c32.3 35.6 47.7 83.9 46.4 133.6C249.3 231.3 373.7 321.3 400 448h96C455.3 231.9 222.8 79.5 120 64z" />
        </Icon>
    </>
}