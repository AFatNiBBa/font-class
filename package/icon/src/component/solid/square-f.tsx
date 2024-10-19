
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-f` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-f?s=solid square-f}
 * @preview ![square-f](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjU0IDMyIDAgNjAuNjU0IDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEgzODRDNDE5LjM0OCA0ODAgNDQ4IDQ1MS4zNDYgNDQ4IDQxNlY5NkM0NDggNjAuNjU0IDQxOS4zNDggMzIgMzg0IDMyWk0yOTYgMTc2SDE3NlYyNDBIMjY0QzI3Ny4yNSAyNDAgMjg4IDI1MC43NSAyODggMjY0UzI3Ny4yNSAyODggMjY0IDI4OEgxNzZWMzYwQzE3NiAzNzMuMjUgMTY1LjI1IDM4NCAxNTIgMzg0UzEyOCAzNzMuMjUgMTI4IDM2MFYxNTJDMTI4IDEzOC43NSAxMzguNzUgMTI4IDE1MiAxMjhIMjk2QzMwOS4yNSAxMjggMzIwIDEzOC43NSAzMjAgMTUyUzMwOS4yNSAxNzYgMjk2IDE3NloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SquareF(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM296 176H176V240H264C277.25 240 288 250.75 288 264S277.25 288 264 288H176V360C176 373.25 165.25 384 152 384S128 373.25 128 360V152C128 138.75 138.75 128 152 128H296C309.25 128 320 138.75 320 152S309.25 176 296 176Z" />
        </Icon>
    </>
}