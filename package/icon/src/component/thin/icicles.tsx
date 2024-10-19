
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `icicles` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/icicles?s=thin icicles}
 * @preview ![icicles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTAuMTIzIDIuODc1QzUwOC42MDcgMS4wNjIgNTA2LjM1NyAwIDUwMy45OTggMEg4LjAwNEM1LjQ4OCAwIDMuMTEzIDEuMTg4IDEuNjEzIDMuMTg4QzAuMDk4IDUuMjE5IC0wLjM4NyA3LjgxMiAwLjMxNiAxMC4yMTlMODguMzE1IDMxNC4yMTlDODkuMyAzMTcuNjI1IDkyLjQwOSAzMTkuOTY5IDk1Ljk0IDMyMEg5Ni4wMDNDOTkuNTE4IDMyMCAxMDIuNjI4IDMxNy43MTkgMTAzLjY1OSAzMTQuMzQ0TDEzOS4yMzcgMTk3LjkwNkwxODQuMjM2IDM3Ny45MzhDMTg2LjAxNyAzODUuMDYyIDE5Ny45ODYgMzg1LjA2MiAxOTkuNzY3IDM3Ny45MzhMMjQ0Ljc2NyAxOTcuOTA2TDI4MC4zNDQgMzE0LjM0NEMyODIuNDA3IDMyMS4wMzEgMjkzLjU5NCAzMjEuMDMxIDI5NS42NTcgMzE0LjM0NEwzNDQuMDQ3IDE1NS45MzhMNDA4LjEyNCA1MDUuNDM4QzQwOC44MjcgNTA5LjI1IDQxMi4xNCA1MTIgNDE1Ljk5OSA1MTJINDE2LjAxNUM0MTkuODkgNTEyIDQyMy4yMDIgNTA5LjIxOSA0MjMuODc0IDUwNS40MDZMNTExLjg3MyA5LjQwNkM1MTIuMjk1IDcuMDYyIDUxMS42NTQgNC42ODggNTEwLjEyMyAyLjg3NVpNNDE1Ljg3NCA0NTguOTM4TDM1My44NzUgMTIwLjc1QzM1My4yMDMgMTE3LjEyNSAzNTAuMTQgMTE0LjQwNiAzNDYuNDUzIDExNC4xODhIMzQ2QzM0Mi41IDExNC4xODggMzM5LjM3NSAxMTYuNDY5IDMzOC4zNDQgMTE5Ljg0NEwyODguMDAxIDI4NC42MjVMMjUxLjY1NyAxNjUuNjU2QzI1MC42MSAxNjIuMjE5IDI0Ny4xNTcgMTU5Ljg0NCAyNDMuNzk4IDE2MEMyNDAuMjA0IDE2MC4wOTQgMjM3LjExMSAxNjIuNTYyIDIzNi4yMzYgMTY2LjA2MkwxOTIuMDAyIDM0M0wxNDcuNzY4IDE2Ni4wNjJDMTQ2Ljg5MyAxNjIuNTYyIDE0My43OTkgMTYwLjA5NCAxNDAuMjA1IDE2MEMxMzcuMDQ5IDE1OS43NSAxMzMuMzkzIDE2Mi4yMTkgMTMyLjM0NiAxNjUuNjU2TDk2LjIwNiAyODMuOTM4TDE4LjY0NCAxNkg0OTQuNDUxTDQxNS44NzQgNDU4LjkzOFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Icicles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M510.123 2.875C508.607 1.062 506.357 0 503.998 0H8.004C5.488 0 3.113 1.188 1.613 3.188C0.098 5.219 -0.387 7.812 0.316 10.219L88.315 314.219C89.3 317.625 92.409 319.969 95.94 320H96.003C99.518 320 102.628 317.719 103.659 314.344L139.237 197.906L184.236 377.938C186.017 385.062 197.986 385.062 199.767 377.938L244.767 197.906L280.344 314.344C282.407 321.031 293.594 321.031 295.657 314.344L344.047 155.938L408.124 505.438C408.827 509.25 412.14 512 415.999 512H416.015C419.89 512 423.202 509.219 423.874 505.406L511.873 9.406C512.295 7.062 511.654 4.688 510.123 2.875ZM415.874 458.938L353.875 120.75C353.203 117.125 350.14 114.406 346.453 114.188H346C342.5 114.188 339.375 116.469 338.344 119.844L288.001 284.625L251.657 165.656C250.61 162.219 247.157 159.844 243.798 160C240.204 160.094 237.111 162.562 236.236 166.062L192.002 343L147.768 166.062C146.893 162.562 143.799 160.094 140.205 160C137.049 159.75 133.393 162.219 132.346 165.656L96.206 283.938L18.644 16H494.451L415.874 458.938Z" />
        </Icon>
    </>
}