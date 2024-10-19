
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `scroll` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scroll?s=thin scroll}
 * @preview ![scroll](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjggMzM2SDI4MEMyNzUuNTc4IDMzNiAyNzIgMzM5LjU5NCAyNzIgMzQ0VjQwMEMyNzIgNDM1LjI4MSAyNDMuMjk3IDQ2NCAyMDggNDY0UzE0NCA0MzUuMjgxIDE0NCA0MDBWMTA0QzE0NCA4MS4yNzEgMTMzLjE5OSA2MS4yMDcgMTE2LjY4OSA0OEg0MDBDNDM1LjI5NyA0OCA0NjQgNzYuNzE5IDQ2NCAxMTJWMjk2QzQ2NCAzMDAuNDA2IDQ2Ny41NzggMzA0IDQ3MiAzMDRTNDgwIDMwMC40MDYgNDgwIDI5NlYxMTJDNDgwIDY3Ljg3NSA0NDQuMTA5IDMyIDQwMCAzMkg3MkMzMi4yOTcgMzIgMCA2NC4zMTIgMCAxMDRWMTY4QzAgMTcyLjQwNiAzLjU3OCAxNzYgOCAxNzZIODhDOTIuNDIyIDE3NiA5NiAxNzIuNDA2IDk2IDE2OFM5Mi40MjIgMTYwIDg4IDE2MEgxNlYxMDRDMTYgNzMuMTI1IDQxLjEyNSA0OCA3MiA0OFMxMjggNzMuMTI1IDEyOCAxMDRWNDAwQzEyOCA0NDQuMTI1IDE2My44OTEgNDgwIDIwOCA0ODBINDk2QzU0MC4xMDkgNDgwIDU3NiA0NDQuMTI1IDU3NiA0MDBWMzQ0QzU3NiAzMzkuNTk0IDU3Mi40MjIgMzM2IDU2OCAzMzZaTTU2MCA0MDBDNTYwIDQzNS4yODEgNTMxLjI5NyA0NjQgNDk2IDQ2NEgyNTUuOTUzQzI3NS4zOTEgNDQ5LjQwNiAyODggNDI2LjEyNSAyODggNDAwVjM1Mkg1NjBWNDAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Scroll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M568 336H280C275.578 336 272 339.594 272 344V400C272 435.281 243.297 464 208 464S144 435.281 144 400V104C144 81.271 133.199 61.207 116.689 48H400C435.297 48 464 76.719 464 112V296C464 300.406 467.578 304 472 304S480 300.406 480 296V112C480 67.875 444.109 32 400 32H72C32.297 32 0 64.312 0 104V168C0 172.406 3.578 176 8 176H88C92.422 176 96 172.406 96 168S92.422 160 88 160H16V104C16 73.125 41.125 48 72 48S128 73.125 128 104V400C128 444.125 163.891 480 208 480H496C540.109 480 576 444.125 576 400V344C576 339.594 572.422 336 568 336ZM560 400C560 435.281 531.297 464 496 464H255.953C275.391 449.406 288 426.125 288 400V352H560V400Z" />
        </Icon>
    </>
}