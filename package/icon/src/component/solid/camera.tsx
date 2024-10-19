
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=solid camera}
 * @preview ![camera](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgOTZIMzc2TDM2My42MjUgNjMuMTI1QzM1Ni42MjUgNDQuMzc1IDMzOC43NSAzMiAzMTguNzUgMzJIMTkzLjI1QzE3My4yNSAzMiAxNTUuMjUgNDQuMzc1IDE0OC4yNSA2My4xMjVMMTM2IDk2SDQ4QzIxLjUgOTYgMCAxMTcuNSAwIDE0NFY0MzJDMCA0NTguNSAyMS41IDQ4MCA0OCA0ODBINDY0QzQ5MC41IDQ4MCA1MTIgNDU4LjUgNTEyIDQzMlYxNDRDNTEyIDExNy41IDQ5MC41IDk2IDQ2NCA5NlpNMjU2IDM4NEMyMDMgMzg0IDE2MCAzNDEgMTYwIDI4OFMyMDMgMTkyIDI1NiAxOTJTMzUyIDIzNSAzNTIgMjg4UzMwOSAzODQgMjU2IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Camera(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 96H376L363.625 63.125C356.625 44.375 338.75 32 318.75 32H193.25C173.25 32 155.25 44.375 148.25 63.125L136 96H48C21.5 96 0 117.5 0 144V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM256 384C203 384 160 341 160 288S203 192 256 192S352 235 352 288S309 384 256 384Z" />
        </Icon>
    </>
}