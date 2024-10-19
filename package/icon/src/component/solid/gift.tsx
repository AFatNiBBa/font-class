
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gift` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=solid gift}
 * @preview ![gift](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiA0ODBDMzIgNDk3LjcwMyA0Ni4zMTIgNTEyIDY0IDUxMkgyMjRWMjg4SDMyVjQ4MFpNNDgwIDEyOEg0MzcuODU0QzQ0OS44MTggMTA1LjA4MiA0NTIuODcxIDc3LjQ1MyA0MzcuODI0IDQ2LjYwMkM0MjMuMzg1IDE2Ljk5MiAzOTIuNTYyIC0wLjAxNiAzNTkuNDg0IDBDMzE3LjcwMyAwLjAxNiAyOTAuNjY2IDIxLjMxNiAyNTYgNjguMjk3QzIyMS4zMzQgMjEuMzE2IDE5NC4yOTcgMC4wMTYgMTUyLjUxNiAwQzExOS40MzggLTAuMDE2IDg4LjYxNSAxNi45OTIgNzQuMTc2IDQ2LjYwMkM1OS4xMjkgNzcuNDUzIDYyLjE4MiAxMDUuMDgyIDc0LjE0NiAxMjhIMzJDMTQuMzI2IDEyOCAwIDE0Mi4zMjggMCAxNjBWMjI0QzAgMjQxLjYwMiAxNC40IDI1NiAzMiAyNTZINDgwQzQ5Ny42IDI1NiA1MTIgMjQxLjYwMiA1MTIgMjI0VjE2MEM1MTIgMTQyLjMyOCA0OTcuNjc0IDEyOCA0ODAgMTI4Wk0xNTMuOTA2IDEyOEMxMzEuODEyIDEyOCAxMTMuOTA2IDExMC4wOTQgMTEzLjkwNiA4OFMxMzEuODEyIDQ4IDE1My45MDYgNDhDMTczLjgxMiA0OCAxODguNSA1MS4yOTcgMjQwIDEyOEgxNTMuOTA2Wk0zNTguMDk0IDEyOEgyNzJDMzIzLjUgNTEuMjk3IDMzOC4xODggNDggMzU4LjA5NCA0OEMzODAuMTg4IDQ4IDM5OC4wOTQgNjUuOTA2IDM5OC4wOTQgODhTMzgwLjE4OCAxMjggMzU4LjA5NCAxMjhaTTI4OCA1MTJINDQ4QzQ2NS42ODggNTEyIDQ4MCA0OTcuNzAzIDQ4MCA0ODBWMjg4SDI4OFY1MTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Gift(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M32 480C32 497.703 46.312 512 64 512H224V288H32V480ZM480 128H437.854C449.818 105.082 452.871 77.453 437.824 46.602C423.385 16.992 392.562 -0.016 359.484 0C317.703 0.016 290.666 21.316 256 68.297C221.334 21.316 194.297 0.016 152.516 0C119.438 -0.016 88.615 16.992 74.176 46.602C59.129 77.453 62.182 105.082 74.146 128H32C14.326 128 0 142.328 0 160V224C0 241.602 14.4 256 32 256H480C497.6 256 512 241.602 512 224V160C512 142.328 497.674 128 480 128ZM153.906 128C131.812 128 113.906 110.094 113.906 88S131.812 48 153.906 48C173.812 48 188.5 51.297 240 128H153.906ZM358.094 128H272C323.5 51.297 338.188 48 358.094 48C380.188 48 398.094 65.906 398.094 88S380.188 128 358.094 128ZM288 512H448C465.688 512 480 497.703 480 480V288H288V512Z" />
        </Icon>
    </>
}