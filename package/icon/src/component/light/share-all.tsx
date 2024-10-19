
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `share-all` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=light share-all}
 * @preview ![share-all](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDQwMC4wMDFWNDMyQzAgNDQwLjg0NCA3LjE1NiA0NDggMTYgNDQ4UzMyIDQ0MC44NDQgMzIgNDMyVjQwMC4wMDFDMzIgMzIwLjU5NSA5Ni41OTQgMjU2LjAwMiAxNzYgMjU2LjAwMkgzODcuODAxTDIyOS43NSAzODcuNzJDMjIyLjk2OSAzOTMuMzc2IDIyMi4wNjIgNDAzLjQ2OSAyMjcuNzE5IDQxMC4yNUMyMzAuODc1IDQxNC4wMzIgMjM1LjQzOCA0MTYgMjQwIDQxNkMyNDMuNjI1IDQxNiAyNDcuMjUgNDE0Ljc4MiAyNTAuMjUgNDEyLjI4Mkw0NDIuMjUgMjUyLjI4NEM0NDUuOTA2IDI0OS4yNTIgNDQ4IDI0NC43NTMgNDQ4IDI0MC4wMDNTNDQ1LjkwNiAyMzAuNzUzIDQ0Mi4yNSAyMjcuNzIxTDI1MC4yNSA2Ny43MjdDMjQzLjUgNjIuMDcxIDIzMy40MDYgNjIuOTQ2IDIyNy43MTkgNjkuNzU5QzIyMi4wNjIgNzYuNTQgMjIyLjk2OSA4Ni42MzMgMjI5Ljc1IDkyLjI5TDM4Ny44MDEgMjI0LjAwM0gxNzZDNzguOTY5IDIyNC4wMDMgMCAzMDIuOTcxIDAgNDAwLjAwMVpNMzU3Ljc1IDM4Ny43MkMzNTAuOTY5IDM5My4zNzYgMzUwLjA2MiA0MDMuNDY5IDM1NS43MTkgNDEwLjI1QzM1OC44NzUgNDE0LjAzMiAzNjMuNDM3IDQxNiAzNjggNDE2QzM3MS42MjUgNDE2IDM3NS4yNSA0MTQuNzgyIDM3OC4yNSA0MTIuMjgyTDU3MC4yNSAyNTIuMjg0QzU3My45MDYgMjQ5LjI1MiA1NzYgMjQ0Ljc1MyA1NzYgMjQwLjAwM1M1NzMuOTA2IDIzMC43NTMgNTcwLjI1IDIyNy43MjFMMzc4LjI1IDY3LjcyM0MzNzEuNDY5IDYyLjA2NyAzNjEuMzc1IDYyLjk0MiAzNTUuNzE5IDY5Ljc1NUMzNTAuMDYyIDc2LjUzNiAzNTAuOTY5IDg2LjYzIDM1Ny43NSA5Mi4yODZMNTM1IDI0MC4wMDNMMzU3Ljc1IDM4Ny43MloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ShareAll(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M0 400.001V432C0 440.844 7.156 448 16 448S32 440.844 32 432V400.001C32 320.595 96.594 256.002 176 256.002H387.801L229.75 387.72C222.969 393.376 222.062 403.469 227.719 410.25C230.875 414.032 235.438 416 240 416C243.625 416 247.25 414.782 250.25 412.282L442.25 252.284C445.906 249.252 448 244.753 448 240.003S445.906 230.753 442.25 227.721L250.25 67.727C243.5 62.071 233.406 62.946 227.719 69.759C222.062 76.54 222.969 86.633 229.75 92.29L387.801 224.003H176C78.969 224.003 0 302.971 0 400.001ZM357.75 387.72C350.969 393.376 350.062 403.469 355.719 410.25C358.875 414.032 363.437 416 368 416C371.625 416 375.25 414.782 378.25 412.282L570.25 252.284C573.906 249.252 576 244.753 576 240.003S573.906 230.753 570.25 227.721L378.25 67.723C371.469 62.067 361.375 62.942 355.719 69.755C350.062 76.536 350.969 86.63 357.75 92.286L535 240.003L357.75 387.72Z" />
        </Icon>
    </>
}