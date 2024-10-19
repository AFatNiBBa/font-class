
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down?s=regular arrow-down}
 * @preview ![arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDkuMzcgMjk2LjU2MkwyNDEuMzcgNDcyLjU2MkMyMzYuODM5IDQ3Ny4zMTIgMjMwLjU1NyA0ODAgMjIzLjk5NSA0ODBTMjExLjE1MSA0NzcuMzEyIDIwNi42MiA0NzIuNTYyTDM4LjYyIDI5Ni41NjJDMjkuNDk1IDI4Ni45NjkgMjkuODM5IDI3MS43ODEgMzkuNDMyIDI2Mi42MjVDNDguOTMyIDI1My40NjkgNjQuMTgyIDI1My44MTIgNzMuMzcgMjYzLjQzN0wxOTkuOTk1IDM5Ni4xMDVWNTYuMDE2QzE5OS45OTUgNDIuNzY2IDIxMC43NDUgMzIuMDE2IDIyMy45OTUgMzIuMDE2UzI0Ny45OTUgNDIuNzY2IDI0Ny45OTUgNTYuMDE2VjM5Ni4xMDVMMzc0LjYyIDI2My40MzhDMzgzLjc3NiAyNTMuODEzIDM5OS4wMjYgMjUzLjQ2OSA0MDguNTU3IDI2Mi42MjVDNDE4LjE1MSAyNzEuNzgxIDQxOC40OTUgMjg2Ljk2OSA0MDkuMzcgMjk2LjU2MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M409.37 296.562L241.37 472.562C236.839 477.312 230.557 480 223.995 480S211.151 477.312 206.62 472.562L38.62 296.562C29.495 286.969 29.839 271.781 39.432 262.625C48.932 253.469 64.182 253.812 73.37 263.437L199.995 396.105V56.016C199.995 42.766 210.745 32.016 223.995 32.016S247.995 42.766 247.995 56.016V396.105L374.62 263.438C383.776 253.813 399.026 253.469 408.557 262.625C418.151 271.781 418.495 286.969 409.37 296.562Z" />
        </Icon>
    </>
}