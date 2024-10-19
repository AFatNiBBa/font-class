
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `podcast` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/podcast?s=light podcast}
 * @preview ![podcast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMzEyQzE5MS4xMjUgMzEyIDE2MCAzMjAuNjI1IDE2MCAzNTUuNzVDMTYwIDM4OC44NzUgMTcyLjg3NSA0NjAuMTI1IDE4MC42MjUgNDg4LjVDMTg1Ljc1IDUwNy42MjUgMjA1LjEyNSA1MTIgMjI0IDUxMlMyNjIuMjUgNTA3LjYyNSAyNjcuMzc1IDQ4OC42MjVDMjc1LjEyNSA0NTkuODc1IDI4OCAzODguNzUgMjg4IDM1NS43NUMyODggMzIwLjYyNSAyNTYuODc1IDMxMiAyMjQgMzEyWk0yMzcgNDc4LjVDMjMxIDQ4MC41IDIxNyA0ODAuNSAyMTEgNDc4LjVDMjAzLjUgNDQ5LjUgMTkyIDM4My4zNzUgMTkyIDM1NS43NUMxOTIgMzM5LjUgMjU2IDMzOS4zNzUgMjU2IDM1NS43NUMyNTYgMzgzLjM3NSAyNDQuNSA0NDkuNjI1IDIzNyA0NzguNVpNMjI0IDE2MEMxODguNjI1IDE2MCAxNjAgMTg4LjYyNSAxNjAgMjI0UzE4OC42MjUgMjg4IDIyNCAyODhTMjg4IDI1OS4zNzUgMjg4IDIyNFMyNTkuMzc1IDE2MCAyMjQgMTYwWk0yMjQgMjU2QzIwNi4zNzUgMjU2IDE5MiAyNDEuNjI1IDE5MiAyMjRTMjA2LjM3NSAxOTIgMjI0IDE5MlMyNTYgMjA2LjM3NSAyNTYgMjI0UzI0MS42MjUgMjU2IDIyNCAyNTZaTTIyNCAwQzEwMC41IDAgMCAxMDAuNDg0IDAgMjI0QzAgMjkzLjM5MSAzMS40MDYgMzU3Ljc1IDg2LjE1NiA0MDAuNTc4QzkzLjAzMSA0MDUuOTg0IDEwMy4xMjUgNDA0Ljc4MSAxMDguNTk0IDM5Ny44MjhDMTE0LjA2MiAzOTAuODU5IDExMi44MTIgMzgwLjgxMiAxMDUuODQ0IDM3NS4zNTlDNTguOTA2IDMzOC42NTYgMzIgMjgzLjQ4NCAzMiAyMjRDMzIgMTE4LjEyNSAxMTguMTI1IDMyIDIyNCAzMlM0MTYgMTE4LjEyNSA0MTYgMjI0QzQxNiAyODMuNDg0IDM4OS4wOTQgMzM4LjY1NiAzNDIuMTU2IDM3NS4zNTlDMzM1LjE4OCAzODAuODEzIDMzMy45MzggMzkwLjg1OSAzMzkuNDA2IDM5Ny44MjhDMzQyLjU2MiA0MDEuODU5IDM0Ny4yNSA0MDMuOTY5IDM1MiA0MDMuOTY5QzM1NS40NjkgNDAzLjk2OSAzNTguOTM4IDQwMi44NTkgMzYxLjg0NCA0MDAuNTc4QzQxNi41OTQgMzU3Ljc1IDQ0OCAyOTMuMzkxIDQ0OCAyMjRDNDQ4IDEwMC40ODQgMzQ3LjUgMCAyMjQgMFpNMzY4IDIyNEMzNjggMTQ0LjU5NCAzMDMuNDA2IDgwIDIyNCA4MFM4MCAxNDQuNTk0IDgwIDIyNEM4MCAyNDkuMzQ0IDg2LjY1NiAyNzQuMjUgOTkuMjgxIDI5Ni4wMTZDMTAzLjcxOSAzMDMuNjg4IDExMy41MzEgMzA2LjIxOSAxMjEuMTU2IDMwMS44NDRDMTI4Ljc4MSAyOTcuNDIyIDEzMS40MDYgMjg3LjYyNSAxMjYuOTY5IDI3OS45ODRDMTE3LjE4OCAyNjMuMDc4IDExMiAyNDMuNzE5IDExMiAyMjRDMTEyIDE2Mi4yNSAxNjIuMjUgMTEyIDIyNCAxMTJTMzM2IDE2Mi4yNSAzMzYgMjI0QzMzNiAyNDMuNzE5IDMzMC44MTIgMjYzLjA3OCAzMjEuMDMxIDI3OS45ODRDMzE2LjU5NCAyODcuNjI1IDMxOS4yMTkgMjk3LjQyMiAzMjYuODQ0IDMwMS44NDRDMzI5LjM3NSAzMDMuMzEyIDMzMi4xMjUgMzA0IDMzNC44NzUgMzA0QzM0MC4zNzUgMzA0IDM0NS43NSAzMDEuMTQxIDM0OC43MTkgMjk2LjAxNkMzNjEuMzQ0IDI3NC4yNSAzNjggMjQ5LjM0NCAzNjggMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Podcast(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 312C191.125 312 160 320.625 160 355.75C160 388.875 172.875 460.125 180.625 488.5C185.75 507.625 205.125 512 224 512S262.25 507.625 267.375 488.625C275.125 459.875 288 388.75 288 355.75C288 320.625 256.875 312 224 312ZM237 478.5C231 480.5 217 480.5 211 478.5C203.5 449.5 192 383.375 192 355.75C192 339.5 256 339.375 256 355.75C256 383.375 244.5 449.625 237 478.5ZM224 160C188.625 160 160 188.625 160 224S188.625 288 224 288S288 259.375 288 224S259.375 160 224 160ZM224 256C206.375 256 192 241.625 192 224S206.375 192 224 192S256 206.375 256 224S241.625 256 224 256ZM224 0C100.5 0 0 100.484 0 224C0 293.391 31.406 357.75 86.156 400.578C93.031 405.984 103.125 404.781 108.594 397.828C114.062 390.859 112.812 380.812 105.844 375.359C58.906 338.656 32 283.484 32 224C32 118.125 118.125 32 224 32S416 118.125 416 224C416 283.484 389.094 338.656 342.156 375.359C335.188 380.813 333.938 390.859 339.406 397.828C342.562 401.859 347.25 403.969 352 403.969C355.469 403.969 358.938 402.859 361.844 400.578C416.594 357.75 448 293.391 448 224C448 100.484 347.5 0 224 0ZM368 224C368 144.594 303.406 80 224 80S80 144.594 80 224C80 249.344 86.656 274.25 99.281 296.016C103.719 303.688 113.531 306.219 121.156 301.844C128.781 297.422 131.406 287.625 126.969 279.984C117.188 263.078 112 243.719 112 224C112 162.25 162.25 112 224 112S336 162.25 336 224C336 243.719 330.812 263.078 321.031 279.984C316.594 287.625 319.219 297.422 326.844 301.844C329.375 303.312 332.125 304 334.875 304C340.375 304 345.75 301.141 348.719 296.016C361.344 274.25 368 249.344 368 224Z" />
        </Icon>
    </>
}