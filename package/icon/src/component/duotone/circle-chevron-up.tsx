
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-chevron-up` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=duotone circle-chevron-up}
 * @preview ![circle-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDIgMTYgMTYgMTIzLjQxOCAxNiAyNTZDMTYgMzg4LjU3OCAxMjMuNDIgNDk2IDI1NiA0OTZTNDk2IDM4OC41NzggNDk2IDI1NkM0OTYgMTIzLjQxOCAzODguNTggMTYgMjU2IDE2Wk0zOTAuNjI1IDMxMC42MjVDMzc4LjEyNSAzMjMuMTI1IDM1Ny44NzUgMzIzLjEyNSAzNDUuMzc1IDMxMC42MjVMMjU2IDIyMS4yNUwxNjYuNjI1IDMxMC42MjVDMTU0LjEyNSAzMjMuMTI1IDEzMy44NzUgMzIzLjEyNSAxMjEuMzc1IDMxMC42MjVTMTA4Ljg3NSAyNzcuODc1IDEyMS4zNzUgMjY1LjM3NUwyMzMuMzc1IDE1My4zNzVDMjM5LjYyNSAxNDcuMTI1IDI0Ny44MTIgMTQ0IDI1NiAxNDRTMjcyLjM3NSAxNDcuMTI1IDI3OC42MjUgMTUzLjM3NUwzOTAuNjI1IDI2NS4zNzVDNDAzLjEyNSAyNzcuODc1IDQwMy4xMjUgMjk4LjEyNSAzOTAuNjI1IDMxMC42MjVaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM5MC41MDkgMzEwLjYyNUMzNzguMDA5IDMyMy4xMjUgMzU3Ljc1OSAzMjMuMTI1IDM0NS4yNTkgMzEwLjYyNUwyNTUuODg0IDIyMS4yNUwxNjYuNTA5IDMxMC42MjVDMTU0LjAwOSAzMjMuMTI1IDEzMy43NTkgMzIzLjEyNSAxMjEuMjU5IDMxMC42MjVTMTA4Ljc1OSAyNzcuODc1IDEyMS4yNTkgMjY1LjM3NUwyMzMuMjU5IDE1My4zNzVDMjM5LjUwOSAxNDcuMTI1IDI0Ny42OTcgMTQ0IDI1NS44ODQgMTQ0UzI3Mi4yNTkgMTQ3LjEyNSAyNzguNTA5IDE1My4zNzVMMzkwLjUwOSAyNjUuMzc1QzQwMy4wMDkgMjc3Ljg3NSA0MDMuMDA5IDI5OC4xMjUgMzkwLjUwOSAzMTAuNjI1WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CircleChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.42 16 16 123.418 16 256C16 388.578 123.42 496 256 496S496 388.578 496 256C496 123.418 388.58 16 256 16ZM390.625 310.625C378.125 323.125 357.875 323.125 345.375 310.625L256 221.25L166.625 310.625C154.125 323.125 133.875 323.125 121.375 310.625S108.875 277.875 121.375 265.375L233.375 153.375C239.625 147.125 247.812 144 256 144S272.375 147.125 278.625 153.375L390.625 265.375C403.125 277.875 403.125 298.125 390.625 310.625Z" />
            <path d="M390.509 310.625C378.009 323.125 357.759 323.125 345.259 310.625L255.884 221.25L166.509 310.625C154.009 323.125 133.759 323.125 121.259 310.625S108.759 277.875 121.259 265.375L233.259 153.375C239.509 147.125 247.697 144 255.884 144S272.259 147.125 278.509 153.375L390.509 265.375C403.009 277.875 403.009 298.125 390.509 310.625Z" />
        </Icon>
    </>
}