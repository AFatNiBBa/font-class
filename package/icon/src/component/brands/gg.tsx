
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `gg` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gg?s=brands gg}
 * @preview ![gg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzkuMiAyMzAuNGwxMDIuNCAxMDIuNC0xMDIuNCAxMDIuNEwwIDI1NiAxNzkuMiA3Ni44bDQ0LjggNDQuOC0yNS42IDI1LjYtMTkuMi0xOS4yLTEyOCAxMjggMTI4IDEyOCA1MS41LTUxLjUtNzcuMS03Ni41IDI1LjYtMjUuNnpNMzMyLjggNzYuOEwyMzAuNCAxNzkuMmwxMDIuNCAxMDIuNCAyNS42LTI1LjYtNzcuMS03Ni41IDUxLjUtNTEuNSAxMjggMTI4LTEyOCAxMjgtMTkuMi0xOS4yLTI1LjYgMjUuNiA0NC44IDQ0LjhMNTEyIDI1NiAzMzIuOCA3Ni44eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gg(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M179.2 230.4l102.4 102.4-102.4 102.4L0 256 179.2 76.8l44.8 44.8-25.6 25.6-19.2-19.2-128 128 128 128 51.5-51.5-77.1-76.5 25.6-25.6zM332.8 76.8L230.4 179.2l102.4 102.4 25.6-25.6-77.1-76.5 51.5-51.5 128 128-128 128-19.2-19.2-25.6 25.6 44.8 44.8L512 256 332.8 76.8z" />
        </Icon>
    </>
}