
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `creative-commons-zero` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/creative-commons-zero?s=brands creative-commons-zero}
 * @preview ![creative-commons-zero](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDcuNiA4QzM4OS40IDggNDk2IDExOC4xIDQ5NiAyNTZjMCAxNDcuMS0xMTguNSAyNDgtMjQ4LjQgMjQ4QzExMy42IDUwNCAwIDM5NC41IDAgMjU2IDAgMTIzLjEgMTA0LjcgOCAyNDcuNiA4em0uOCA0NC43QzEzMC4yIDUyLjcgNDQuNyAxNTAuNiA0NC43IDI1NmMwIDEwOS44IDkxLjIgMjAyLjggMjAzLjcgMjAyLjggMTAzLjIgMCAyMDIuOC04MS4xIDIwMi44LTIwMi44LjEtMTEzLjgtOTAuMi0yMDMuMy0yMDIuOC0yMDMuM3ptLS40IDYwLjVjLTgxLjkgMC0xMDIuNSA3Ny4zLTEwMi41IDE0Mi44IDAgNjUuNSAyMC42IDE0Mi44IDEwMi41IDE0Mi44UzM1MC41IDMyMS41IDM1MC41IDI1NmMwLTY1LjUtMjAuNi0xNDIuOC0xMDIuNS0xNDIuOHptMCA1My45YzMuMyAwIDYuNC41IDkuMiAxLjIgNS45IDUuMSA4LjggMTIuMSAzLjEgMjEuOWwtNTQuNSAxMDAuMmMtMS43LTEyLjctMS45LTI1LjEtMS45LTM0LjQgMC0yOC44IDItODguOSA0NC4xLTg4Ljl6bTQwLjggNDYuMmMyLjkgMTUuNCAzLjMgMzEuNCAzLjMgNDIuNyAwIDI4LjktMiA4OC45LTQ0LjEgODguOS0xMy41IDAtMzIuNi03LjctMjAuMS0yNi40bDYwLjktMTA1LjJ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function CreativeCommonsZero(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zm-.4 60.5c-81.9 0-102.5 77.3-102.5 142.8 0 65.5 20.6 142.8 102.5 142.8S350.5 321.5 350.5 256c0-65.5-20.6-142.8-102.5-142.8zm0 53.9c3.3 0 6.4.5 9.2 1.2 5.9 5.1 8.8 12.1 3.1 21.9l-54.5 100.2c-1.7-12.7-1.9-25.1-1.9-34.4 0-28.8 2-88.9 44.1-88.9zm40.8 46.2c2.9 15.4 3.3 31.4 3.3 42.7 0 28.9-2 88.9-44.1 88.9-13.5 0-32.6-7.7-20.1-26.4l60.9-105.2z" />
        </Icon>
    </>
}