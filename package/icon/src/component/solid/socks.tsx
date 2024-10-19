
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `socks` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=solid socks}
 * @preview ![socks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODcuOTk0IDMyQzI4Ny45OTQgMjEgMjkxLjExOSAxMC43NSAyOTUuOTk0IDEuNjI1QzI5My4zNjkgMC44NzUgMjkwLjg2OSAwIDI4Ny45OTQgMEgxNTkuOTlDMTQyLjM2NSAwIDEyNy45OSAxNC4zNzUgMTI3Ljk5IDMyVjY0SDI4Ny45OTRWMzJaTTIxNC42MTcgMzExTDI4Ny45OTQgMjU2Vjk2SDEyNy45OVYyNzJMNDEuMzYzIDMzNi42MjVDMS45ODYgMzY2LjEyNSAtMTIuNTE0IDQyMSAxMi4xMTEgNDYzLjYyNUMzMC4zNjMgNDk1LjI1IDYzLjIzOCA1MTIgOTYuMTE1IDUxMkMxMTYuMTE1IDUxMiAxMzYuMzY1IDUwNS43NSAxNTMuNjE1IDQ5Mi43NUwxNzUuNDkyIDQ3Ni4zNzVDMTQ1LjYxNSA0MjEgMTYxLjg2NyAzNTAuNjI1IDIxNC42MTcgMzExWk0zMTkuOTk2IDI3MkwyMzMuODY3IDMzNi42MjVDMTk0LjQ5MiAzNjYuMTI1IDE3OS45OTIgNDIxIDIwNC42MTcgNDYzLjYyNUMyMjIuODY3IDQ5NS4yNSAyNTUuMjQ0IDUxMiAyODguMTE5IDUxMkMzMDguMTE5IDUxMiAzMjguMzcxIDUwNS43NSAzNDUuNjIxIDQ5Mi43NUw0NjAuNzUgNDA2LjM3NUM0OTMgMzgyLjI1IDUxMiAzNDQuMjUgNTEyIDMwNFY5NkgzMTkuOTk2VjI3MlpNNDgwIDBIMzUxLjk5NkMzMzQuMzcxIDAgMzE5Ljk5NiAxNC4zNzUgMzE5Ljk5NiAzMlY2NEg1MTJWMzJDNTEyIDE0LjM3NSA0OTcuNjI1IDAgNDgwIDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Socks(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M287.994 32C287.994 21 291.119 10.75 295.994 1.625C293.369 0.875 290.869 0 287.994 0H159.99C142.365 0 127.99 14.375 127.99 32V64H287.994V32ZM214.617 311L287.994 256V96H127.99V272L41.363 336.625C1.986 366.125 -12.514 421 12.111 463.625C30.363 495.25 63.238 512 96.115 512C116.115 512 136.365 505.75 153.615 492.75L175.492 476.375C145.615 421 161.867 350.625 214.617 311ZM319.996 272L233.867 336.625C194.492 366.125 179.992 421 204.617 463.625C222.867 495.25 255.244 512 288.119 512C308.119 512 328.371 505.75 345.621 492.75L460.75 406.375C493 382.25 512 344.25 512 304V96H319.996V272ZM480 0H351.996C334.371 0 319.996 14.375 319.996 32V64H512V32C512 14.375 497.625 0 480 0Z" />
        </Icon>
    </>
}