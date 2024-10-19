
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-triangle-square` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-triangle-square?s=duotone arrow-up-triangle-square}
 * @preview ![arrow-up-triangle-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0Ny45OTUgMjc0LjIzNEgzMTkuOTkzQzMwMi4zMTkgMjc0LjIzNCAyODcuOTkzIDI4OC41NjIgMjg3Ljk5MyAzMDYuMjM0VjQzNC4yMTlDMjg3Ljk5MyA0NTEuODkxIDMwMi4zMTkgNDY2LjIxOSAzMTkuOTkzIDQ2Ni4yMTlINDQ3Ljk5NUM0NjUuNjY5IDQ2Ni4yMTkgNDc5Ljk5NSA0NTEuODkxIDQ3OS45OTUgNDM0LjIxOVYzMDYuMjM0QzQ3OS45OTUgMjg4LjU2MiA0NjUuNjY5IDI3NC4yMzQgNDQ3Ljk5NSAyNzQuMjM0Wk00OTIuMTIgMTY5LjExM0w0MDguOTkzIDMyQzM5Ny44NjggMTMuNjI1IDM3MC4yNDMgMTMuNjI1IDM1OS4xMTggMzJMMjc1Ljg2OCAxNjkuMTEzQzI2NC44NjggMTg3LjM2MyAyNzguNjE4IDIxMC4yMzQgMzAwLjg2OCAyMTAuMjM0SDQ2Ny4xMThDNDg5LjM3IDIxMC4yMzQgNTAzLjEyIDE4Ny4zNjMgNDkyLjEyIDE2OS4xMTNaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTIzOS41OTEgMTM4LjAzOUMyNTEuNTI3IDE1MS4wODYgMjUwLjY1MiAxNzEuMzUyIDIzNy42MjMgMTgzLjMwNUMyMjQuMDMxIDE5NS43NjYgMjAzLjgyNiAxOTMuNzg1IDE5Mi40MDQgMTgxLjMzMkwxNjAgMTQ1LjkzOFY0NDcuOTY5QzE2MCA0NjUuNjcyIDE0NS42NzEgNDgwIDEyOCA0ODBTOTYgNDY1LjY3MiA5NiA0NDcuOTY5VjE0NS45MzhMNjMuNTk1IDE4MS4zMzJDNTEuNjQyIDE5NC4zNDQgMzEuMzkyIDE5NS4yNSAxOC4zNzcgMTgzLjMwNUM1LjM0NyAxNzEuMzUyIDQuNDcyIDE1MS4wODYgMTYuNDA4IDEzOC4wMzlMMTA0LjQwNiA0MS45NDVDMTE2LjUzMSAyOC42ODQgMTM5LjQ2OCAyOC42ODQgMTUxLjU5MyA0MS45NDVMMjM5LjU5MSAxMzguMDM5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowUpTriangleSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M447.995 274.234H319.993C302.319 274.234 287.993 288.562 287.993 306.234V434.219C287.993 451.891 302.319 466.219 319.993 466.219H447.995C465.669 466.219 479.995 451.891 479.995 434.219V306.234C479.995 288.562 465.669 274.234 447.995 274.234ZM492.12 169.113L408.993 32C397.868 13.625 370.243 13.625 359.118 32L275.868 169.113C264.868 187.363 278.618 210.234 300.868 210.234H467.118C489.37 210.234 503.12 187.363 492.12 169.113Z" />
            <path d="M239.591 138.039C251.527 151.086 250.652 171.352 237.623 183.305C224.031 195.766 203.826 193.785 192.404 181.332L160 145.938V447.969C160 465.672 145.671 480 128 480S96 465.672 96 447.969V145.938L63.595 181.332C51.642 194.344 31.392 195.25 18.377 183.305C5.347 171.352 4.472 151.086 16.408 138.039L104.406 41.945C116.531 28.684 139.468 28.684 151.593 41.945L239.591 138.039Z" />
        </Icon>
    </>
}