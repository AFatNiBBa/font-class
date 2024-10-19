
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-p` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-p?s=solid square-p}
 * @preview ![square-p](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNDggMTc2SDE3NlYyNTZIMjQ4QzI3MC4wNjIgMjU2IDI4OCAyMzguMDYyIDI4OCAyMTZTMjcwLjA2MiAxNzYgMjQ4IDE3NlpNMzg0IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDggNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NCA0MTkuMzQ4IDMyIDM4NCAzMlpNMjQ4IDMwNEgxNzZWMzYwQzE3NiAzNzMuMjUgMTY1LjI1IDM4NCAxNTIgMzg0UzEyOCAzNzMuMjUgMTI4IDM2MFYxNTJDMTI4IDEzOC43NSAxMzguNzUgMTI4IDE1MiAxMjhIMjQ4QzI5Ni41MzEgMTI4IDMzNiAxNjcuNDY5IDMzNiAyMTZTMjk2LjUzMSAzMDQgMjQ4IDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareP(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M248 176H176V256H248C270.062 256 288 238.062 288 216S270.062 176 248 176ZM384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM248 304H176V360C176 373.25 165.25 384 152 384S128 373.25 128 360V152C128 138.75 138.75 128 152 128H248C296.531 128 336 167.469 336 216S296.531 304 248 304Z" />
        </Icon>
    </>
}