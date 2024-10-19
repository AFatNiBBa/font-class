
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-exclamation` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-exclamation?s=regular comment-exclamation}
 * @preview ![comment-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDMzIDMyQzExNC42NzggMzIgMC4wNjggMTI1LjEyNSAwLjA2OCAyNDBDMC4wNjggMjg3LjYyNSAxOS45NDEgMzMxLjI1IDUyLjkzNSAzNjYuMjVDMzguMDYyIDQwNS43NSA3LjA2NiA0MzkuMTI1IDYuNTY2IDQzOS41Qy0wLjA1NyA0NDYuNSAtMS44MDcgNDU2Ljc1IDEuOTQzIDQ2NS41QzUuODE2IDQ3NC4yNSAxNC40NDEgNDgwIDI0LjA2NCA0ODBDODUuNTU2IDQ4MCAxMzQuMDUxIDQ1NC4yNSAxNjMuMTcyIDQzMy43NUMxOTIuMDQzIDQ0Mi43NSAyMjMuMjg5IDQ0OCAyNTYuMDMzIDQ0OEMzOTcuMzkgNDQ4IDUxMiAzNTQuODc1IDUxMiAyNDBTMzk3LjM5IDMyIDI1Ni4wMzMgMzJaTTI1Ni4wMzMgNDAwQzIyOS4yODcgNDAwIDIwMi45MTYgMzk1Ljg3NSAxNzcuNjcgMzg3Ljg3NUwxNTQuOTIyIDM4MC43NUwxMzUuNDI2IDM5NC41QzEyMS4xNzggNDA0LjYyNSAxMDEuNTU1IDQxNS44NzUgNzcuOTMzIDQyMy41Qzg1LjMwNiA0MTEuMzc1IDkyLjMwNiAzOTcuNzUgOTcuODA1IDM4My4yNUwxMDguNDI4IDM1NS4yNUw4Ny44MDYgMzMzLjM3NUM2OS44MDggMzE0LjEyNSA0OC4wNjIgMjgyLjI1IDQ4LjA2MiAyNDBDNDguMDYyIDE1MS43NSAxNDEuMjk5IDgwIDI1Ni4wMzMgODBDMzcwLjc2OSA4MCA0NjQuMDA2IDE1MS43NSA0NjQuMDA2IDI0MFMzNzAuNzY5IDQwMCAyNTYuMDMzIDQwMFpNMjU2IDMwNEMyMzguMzI4IDMwNCAyMjQgMzE4LjMyOCAyMjQgMzM2UzIzOC4zMjggMzY4IDI1NiAzNjhDMjczLjY3NCAzNjggMjg4IDM1My42NzIgMjg4IDMzNlMyNzMuNjc0IDMwNCAyNTYgMzA0Wk0yNTYgMjcyQzI2OS4yNSAyNzIgMjgwIDI2MS4yNSAyODAgMjQ4VjEzNkMyODAgMTIyLjc1IDI2OS4yNSAxMTIgMjU2IDExMlMyMzIgMTIyLjc1IDIzMiAxMzZWMjQ4QzIzMiAyNjEuMjUgMjQyLjc1IDI3MiAyNTYgMjcyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentExclamation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.033 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.941 331.25 52.935 366.25C38.062 405.75 7.066 439.125 6.566 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.816 474.25 14.441 480 24.064 480C85.556 480 134.051 454.25 163.172 433.75C192.043 442.75 223.289 448 256.033 448C397.39 448 512 354.875 512 240S397.39 32 256.033 32ZM256.033 400C229.287 400 202.916 395.875 177.67 387.875L154.922 380.75L135.426 394.5C121.178 404.625 101.555 415.875 77.933 423.5C85.306 411.375 92.306 397.75 97.805 383.25L108.428 355.25L87.806 333.375C69.808 314.125 48.062 282.25 48.062 240C48.062 151.75 141.299 80 256.033 80C370.769 80 464.006 151.75 464.006 240S370.769 400 256.033 400ZM256 304C238.328 304 224 318.328 224 336S238.328 368 256 368C273.674 368 288 353.672 288 336S273.674 304 256 304ZM256 272C269.25 272 280 261.25 280 248V136C280 122.75 269.25 112 256 112S232 122.75 232 136V248C232 261.25 242.75 272 256 272Z" />
        </Icon>
    </>
}