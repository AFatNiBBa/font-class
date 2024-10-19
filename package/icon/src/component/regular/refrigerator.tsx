
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `refrigerator` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/refrigerator?s=regular refrigerator}
 * @preview ![refrigerator](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMEg5NkM0Mi45OCAwIDAgNDIuOTggMCA5NlY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDMyMEMzNTUuMzQ2IDUxMiAzODQgNDgzLjM0NiAzODQgNDQ4Vjk2QzM4NCA0Mi45OCAzNDEuMDIgMCAyODggMFpNMzM2IDQ0OEMzMzYgNDU2LjgyMiAzMjguODIyIDQ2NCAzMjAgNDY0SDY0QzU1LjE3OCA0NjQgNDggNDU2LjgyMiA0OCA0NDhWMjA4SDI0MFYzNDRDMjQwIDM1Ny4yNSAyNTAuNzUgMzY4IDI2NCAzNjhTMjg4IDM1Ny4yNSAyODggMzQ0VjIwOEgzMzZWNDQ4Wk0zMzYgMTYwSDI4OFYxMjBDMjg4IDEwNi43NSAyNzcuMjUgOTYgMjY0IDk2UzI0MCAxMDYuNzUgMjQwIDEyMFYxNjBINDhWOTZDNDggNjkuNTMzIDY5LjUzMyA0OCA5NiA0OEgyODhDMzE0LjQ2NyA0OCAzMzYgNjkuNTMzIDMzNiA5NlYxNjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Refrigerator(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M288 0H96C42.98 0 0 42.98 0 96V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V96C384 42.98 341.02 0 288 0ZM336 448C336 456.822 328.822 464 320 464H64C55.178 464 48 456.822 48 448V208H240V344C240 357.25 250.75 368 264 368S288 357.25 288 344V208H336V448ZM336 160H288V120C288 106.75 277.25 96 264 96S240 106.75 240 120V160H48V96C48 69.533 69.533 48 96 48H288C314.467 48 336 69.533 336 96V160Z" />
        </Icon>
    </>
}