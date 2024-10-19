
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `creative-commons-remix` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/creative-commons-remix?s=brands creative-commons-remix}
 * @preview ![creative-commons-remix](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDcuNiA4QzM4OS40IDggNDk2IDExOC4xIDQ5NiAyNTZjMCAxNDcuMS0xMTguNSAyNDgtMjQ4LjQgMjQ4QzExMy42IDUwNCAwIDM5NC41IDAgMjU2IDAgMTIzLjEgMTA0LjcgOCAyNDcuNiA4em0uOCA0NC43QzEzMC4yIDUyLjcgNDQuNyAxNTAuNiA0NC43IDI1NmMwIDEwOS44IDkxLjIgMjAyLjggMjAzLjcgMjAyLjggMTAzLjIgMCAyMDIuOC04MS4xIDIwMi44LTIwMi44LjEtMTEzLjgtOTAuMi0yMDMuMy0yMDIuOC0yMDMuM3ptMTYxLjcgMjA3LjdsNC45IDIuMnY3MGMtNy4yIDMuNi02My40IDI3LjUtNjcuMyAyOC44LTYuNS0xLjgtMTEzLjctNDYuOC0xMzcuMy01Ni4ybC02NC4yIDI2LjYtNjMuMy0yNy41di02My44bDU5LjMtMjQuOGMtLjctLjctLjQgNS0uNC03MC40bDY3LjMtMjkuN0wzNjEgMTc4LjV2NjEuNmw0OS4xIDIwLjN6bS03MC40IDgxLjV2LTQzLjhoLS40di0xLjhsLTExMy44LTQ2LjVWMjk1bDExMy44IDQ2Ljl2LS40bC40LjR6bTcuNS01Ny42bDM5LjktMTYuNC0zNi44LTE1LjUtMzkgMTYuNCAzNS45IDE1LjV6bTUyLjMgMzguMXYtNDNMMzU1LjIgMjk4djQzLjRsNDQuMy0xOXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CreativeCommonsRemix(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 496 512" {...props}>
            <path d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zm161.7 207.7l4.9 2.2v70c-7.2 3.6-63.4 27.5-67.3 28.8-6.5-1.8-113.7-46.8-137.3-56.2l-64.2 26.6-63.3-27.5v-63.8l59.3-24.8c-.7-.7-.4 5-.4-70.4l67.3-29.7L361 178.5v61.6l49.1 20.3zm-70.4 81.5v-43.8h-.4v-1.8l-113.8-46.5V295l113.8 46.9v-.4l.4.4zm7.5-57.6l39.9-16.4-36.8-15.5-39 16.4 35.9 15.5zm52.3 38.1v-43L355.2 298v43.4l44.3-19z" />
        </Icon>
    </>
}