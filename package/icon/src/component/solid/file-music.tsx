
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-music` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-music?s=solid file-music}
 * @preview ![file-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTI4VjBINDhDMjEuNDkgMCAwIDIxLjQ5MiAwIDQ4VjQ2NEMwIDQ5MC41MDggMjEuNDkgNTEyIDQ4IDUxMkgzMzZDMzYyLjUxIDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyNiAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNMjgxLjUgMjExLjEyNUMyODUuNjI1IDIxNC4xMjUgMjg4IDIxOC44NzUgMjg4IDIyNFYzODRDMjg4IDQwMS42MjUgMjY2LjUgNDE2IDI0MCA0MTZTMTkyIDQwMS42MjUgMTkyIDM4NFMyMTMuNSAzNTIgMjQwIDM1MkMyNDUuMzc1IDM1MiAyNTAuNzUgMzUyLjc1IDI1NiAzNTQuMDAxVjI3Ny42MjVMMTYwIDMxNS4xMjVWNDE2QzE2MCA0MzMuNjI1IDEzOC41IDQ0OCAxMTIgNDQ4UzY0IDQzMy42MjUgNjQgNDE2Uzg1LjUgMzg0IDExMiAzODRDMTE3LjM3NSAzODQgMTIyLjc1IDM4NC43NSAxMjggMzg2LjAwMVYyNzEuMjVDMTI4IDI2NC4yNSAxMzIuNSAyNTguMTI1IDEzOS4yNSAyNTZMMjY3LjI1IDIwOC43NUMyNzIgMjA3LjI1IDI3Ny4zNzUgMjA4LjEyNSAyODEuNSAyMTEuMTI1Wk0yNTYgMFYxMjhIMzg0TDI1NiAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FileMusic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM281.5 211.125C285.625 214.125 288 218.875 288 224V384C288 401.625 266.5 416 240 416S192 401.625 192 384S213.5 352 240 352C245.375 352 250.75 352.75 256 354.001V277.625L160 315.125V416C160 433.625 138.5 448 112 448S64 433.625 64 416S85.5 384 112 384C117.375 384 122.75 384.75 128 386.001V271.25C128 264.25 132.5 258.125 139.25 256L267.25 208.75C272 207.25 277.375 208.125 281.5 211.125ZM256 0V128H384L256 0Z" />
        </Icon>
    </>
}