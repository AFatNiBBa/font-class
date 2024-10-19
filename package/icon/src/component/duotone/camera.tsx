
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=duotone camera}
 * @preview ![camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAzODRDMjAzIDM4NCAxNjAgMzQxIDE2MCAyODhTMjAzIDE5MiAyNTYgMTkyUzM1MiAyMzUgMzUyIDI4OFMzMDkgMzg0IDI1NiAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQ2NCA5NkgzNzZMMzYzLjYyNSA2My4xMjVDMzU2LjYyNSA0NC4zNzUgMzM4Ljc1IDMyIDMxOC43NSAzMkgxOTMuMjVDMTczLjI1IDMyIDE1NS4yNSA0NC4zNzUgMTQ4LjI1IDYzLjEyNUwxMzYgOTZINDhDMjEuNSA5NiAwIDExNy41IDAgMTQ0VjQzMkMwIDQ1OC41IDIxLjUgNDgwIDQ4IDQ4MEg0NjRDNDkwLjUgNDgwIDUxMiA0NTguNSA1MTIgNDMyVjE0NEM1MTIgMTE3LjUgNDkwLjUgOTYgNDY0IDk2Wk0yNTYgMzg0QzIwMyAzODQgMTYwIDM0MSAxNjAgMjg4UzIwMyAxOTIgMjU2IDE5MlMzNTIgMjM1IDM1MiAyODhTMzA5IDM4NCAyNTYgMzg0WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Camera(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 384C203 384 160 341 160 288S203 192 256 192S352 235 352 288S309 384 256 384Z" />
            <path d="M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM256 384C203 384 160 341 160 288S203 192 256 192S352 235 352 288S309 384 256 384Z" />
        </Icon>
    </>
}