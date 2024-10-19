
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ankh` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ankh?s=solid ankh}
 * @preview ![ankh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgMjU2SDI1MS4zNzVDMjcyLjUgMjIyIDI4OCAxODEuNjI1IDI4OCAxNDRDMjg4IDU1LjYyNSAyMzAuNzUgMCAxNjAgMFMzMiA1NS42MjUgMzIgMTQ0QzMyIDE4MS42MjUgNDcuNSAyMjIgNjguNjI1IDI1NkgyNEMxMC43NSAyNTYgMCAyNjYuNzUgMCAyODBWMzEyQzAgMzI1LjI1IDEwLjc1IDMzNiAyNCAzMzZIMTIwVjQ4OEMxMjAgNTAxLjI1IDEzMC43NSA1MTIgMTQ0IDUxMkgxNzZDMTg5LjI1IDUxMiAyMDAgNTAxLjI1IDIwMCA0ODhWMzM2SDI5NkMzMDkuMjUgMzM2IDMyMCAzMjUuMjUgMzIwIDMxMlYyODBDMzIwIDI2Ni43NSAzMDkuMjUgMjU2IDI5NiAyNTZaTTE2MCA4MEMxODkuNjI1IDgwIDIwOCAxMDQuNSAyMDggMTQ0QzIwOCAxNzguNjI1IDE4MC44NzUgMjIyLjEyNSAxNjAgMjQ0Ljg3NUMxMzkuMTI1IDIyMi4xMjUgMTEyIDE3OC42MjUgMTEyIDE0NEMxMTIgMTA0LjUgMTMwLjM3NSA4MCAxNjAgODBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Ankh(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M296 256H251.375C272.5 222 288 181.625 288 144C288 55.625 230.75 0 160 0S32 55.625 32 144C32 181.625 47.5 222 68.625 256H24C10.75 256 0 266.75 0 280V312C0 325.25 10.75 336 24 336H120V488C120 501.25 130.75 512 144 512H176C189.25 512 200 501.25 200 488V336H296C309.25 336 320 325.25 320 312V280C320 266.75 309.25 256 296 256ZM160 80C189.625 80 208 104.5 208 144C208 178.625 180.875 222.125 160 244.875C139.125 222.125 112 178.625 112 144C112 104.5 130.375 80 160 80Z" />
        </Icon>
    </>
}