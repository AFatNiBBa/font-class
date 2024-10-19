
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `comment-image` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-image?s=solid comment-image}
 * @preview ![comment-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMTE0LjYyNSAzMiAwIDEyNS4xMjUgMCAyNDBDMCAyODkuNjI1IDIxLjM3NSAzMzUgNTcgMzcwLjc1QzQ0LjUgNDIxLjEyNSAyLjc1IDQ2NiAyLjI1IDQ2Ni41QzAgNDY4Ljc1IC0wLjYyNSA0NzIuMjUgMC43NSA0NzUuMjVDMiA0NzguMjUgNC43NSA0ODAgOCA0ODBDNzQuMjUgNDgwIDEyNCA0NDguMjUgMTQ4LjYyNSA0MjguNjI1QzE4MS4yNSA0NDAuODc1IDIxNy42MjUgNDQ4IDI1NiA0NDhDMzk3LjM3NSA0NDggNTEyIDM1NC44NzUgNTEyIDI0MFMzOTcuMzc1IDMyIDI1NiAzMlpNMTYwIDEyOEMxNzcuNjc0IDEyOCAxOTIgMTQyLjMyOCAxOTIgMTYwUzE3Ny42NzQgMTkyIDE2MCAxOTJTMTI4IDE3Ny42NzIgMTI4IDE2MFMxNDIuMzI2IDEyOCAxNjAgMTI4Wk00MTQuMjg5IDMxMS4xOTdDNDExLjU3IDMxNi41OTYgNDA2LjA0MyAzMjAgNDAwIDMyMEgxMTJDMTA1LjcyMyAzMjAgMTAwLjAyMyAzMTYuMzI4IDk3LjQzIDMxMC42MTFTOTUuODI0IDI5OC4xODkgOTkuOTU5IDI5My40NjVMMTU1Ljk1OSAyMjkuNDY1QzE1OC45OTggMjI1Ljk5MiAxNjMuMzg3IDIyNCAxNjggMjI0UzE3Ny4wMDQgMjI1Ljk5MiAxODAuMDQxIDIyOS40NjVMMjAyLjc0NiAyNTUuNDE0TDI4MC40NzcgMTUwLjQ3N0MyODMuNDk0IDE0Ni40MDIgMjg4LjI2NCAxNDQgMjkzLjMzNCAxNDRDMjk4LjQwMiAxNDQgMzAzLjE3MiAxNDYuNDAyIDMwNi4xODkgMTUwLjQ3N0w0MTIuODU3IDI5NC40NzdDNDE2LjQ1NSAyOTkuMzMyIDQxNy4wMDggMzA1LjgwMSA0MTQuMjg5IDMxMS4xOTdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CommentImage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 32C114.625 32 0 125.125 0 240C0 289.625 21.375 335 57 370.75C44.5 421.125 2.75 466 2.25 466.5C0 468.75 -0.625 472.25 0.75 475.25C2 478.25 4.75 480 8 480C74.25 480 124 448.25 148.625 428.625C181.25 440.875 217.625 448 256 448C397.375 448 512 354.875 512 240S397.375 32 256 32ZM160 128C177.674 128 192 142.328 192 160S177.674 192 160 192S128 177.672 128 160S142.326 128 160 128ZM414.289 311.197C411.57 316.596 406.043 320 400 320H112C105.723 320 100.023 316.328 97.43 310.611S95.824 298.189 99.959 293.465L155.959 229.465C158.998 225.992 163.387 224 168 224S177.004 225.992 180.041 229.465L202.746 255.414L280.477 150.477C283.494 146.402 288.264 144 293.334 144C298.402 144 303.172 146.402 306.189 150.477L412.857 294.477C416.455 299.332 417.008 305.801 414.289 311.197Z" />
        </Icon>
    </>
}