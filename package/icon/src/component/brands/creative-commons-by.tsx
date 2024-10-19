
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `creative-commons-by` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/creative-commons-by?s=brands creative-commons-by}
 * @preview ![creative-commons-by](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTQuOSAxOTQuNHYxMDEuNGgtMjguM3YxMjAuNWgtNzcuMVYyOTUuOWgtMjguM1YxOTQuNGMwLTQuNCAxLjYtOC4yIDQuNi0xMS4zIDMuMS0zLjEgNi45LTQuNyAxMS4zLTQuN0gyOTljNC4xIDAgNy44IDEuNiAxMS4xIDQuNyAzLjEgMy4yIDQuOCA2LjkgNC44IDExLjN6bS0xMDEuNS02My43YzAtMjMuMyAxMS41LTM1IDM0LjUtMzVzMzQuNSAxMS43IDM0LjUgMzVjMCAyMy0xMS41IDM0LjUtMzQuNSAzNC41cy0zNC41LTExLjUtMzQuNS0zNC41ek0yNDcuNiA4QzM4OS40IDggNDk2IDExOC4xIDQ5NiAyNTZjMCAxNDcuMS0xMTguNSAyNDgtMjQ4LjQgMjQ4QzExMy42IDUwNCAwIDM5NC41IDAgMjU2IDAgMTIzLjEgMTA0LjcgOCAyNDcuNiA4em0uOCA0NC43QzEzMC4yIDUyLjcgNDQuNyAxNTAuNiA0NC43IDI1NmMwIDEwOS44IDkxLjIgMjAyLjggMjAzLjcgMjAyLjggMTAzLjIgMCAyMDIuOC04MS4xIDIwMi44LTIwMi44LjEtMTEzLjgtOTAuMi0yMDMuMy0yMDIuOC0yMDMuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CreativeCommonsBy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M314.9 194.4v101.4h-28.3v120.5h-77.1V295.9h-28.3V194.4c0-4.4 1.6-8.2 4.6-11.3 3.1-3.1 6.9-4.7 11.3-4.7H299c4.1 0 7.8 1.6 11.1 4.7 3.1 3.2 4.8 6.9 4.8 11.3zm-101.5-63.7c0-23.3 11.5-35 34.5-35s34.5 11.7 34.5 35c0 23-11.5 34.5-34.5 34.5s-34.5-11.5-34.5-34.5zM247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3z" />
        </Icon>
    </>
}