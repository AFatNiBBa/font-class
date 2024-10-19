
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `music-note` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/music-note?s=solid music-note}
 * @preview ![music-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzkuMTI1IDYuMzI0QzM0Ny4yNSAxMi4zMjQgMzUyIDIxLjgyNSAzNTIgMzEuOTUxVjk1Ljk1OEMzNTIgMTEwLjIwOSAzNDIuNjI1IDEyMi43MSAzMjkgMTI2LjcxMUwyNTYgMTQ4LjA4OFY0MzEuOTkyQzI1NiA0NzYuMTIxIDIwNS44NzUgNTEyIDE0NCA1MTJTMzIgNDc2LjEyMSAzMiA0MzEuOTkyUzgyLjEyNSAzNTEuOTg0IDE0NCAzNTEuOTg0QzE2MC4zNzUgMzUxLjk4NCAxNzYuNSAzNTQuNzM0IDE5MiAzNTkuOTg1VjYwLjMyOUMxOTIgNDYuMzI4IDIwMS4xMjUgMzMuOTUxIDIxNC4zNzUgMjkuODI2TDMxMSAxLjMyM0MzMjAuNjI1IC0xLjU1MiAzMzEuMTI1IDAuMzIzIDMzOS4xMjUgNi4zMjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MusicNote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M339.125 6.324C347.25 12.324 352 21.825 352 31.951V95.958C352 110.209 342.625 122.71 329 126.711L256 148.088V431.992C256 476.121 205.875 512 144 512S32 476.121 32 431.992S82.125 351.984 144 351.984C160.375 351.984 176.5 354.734 192 359.985V60.329C192 46.328 201.125 33.951 214.375 29.826L311 1.323C320.625 -1.552 331.125 0.323 339.125 6.324Z" />
        </Icon>
    </>
}