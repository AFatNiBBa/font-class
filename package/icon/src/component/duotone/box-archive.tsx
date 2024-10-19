
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=duotone box-archive}
 * @preview ![box-archive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDQzMkMzMiA0NTguNTEgNTMuNDkgNDgwIDgwIDQ4MEg0MzJDNDU4LjUxIDQ4MCA0ODAgNDU4LjUxIDQ4MCA0MzJWMTI4SDMyVjQzMlpNMTYwIDIwOEMxNjAgMTk5LjIgMTY3LjIgMTkyIDE3NiAxOTJIMzM2QzM0NC44IDE5MiAzNTIgMTk5LjIgMzUyIDIwOFYyNDBDMzUyIDI0OC44IDM0NC44IDI1NiAzMzYgMjU2SDE3NkMxNjcuMiAyNTYgMTYwIDI0OC44IDE2MCAyNDBWMjA4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MTIgNjRWMTEyQzUxMiAxMjAuODEyIDUwNC44MTIgMTI4IDQ5NiAxMjhIMTZDNy4xODggMTI4IDAgMTIwLjgxMiAwIDExMlY2NEMwIDQ2LjMxMiAxNC4zMTIgMzIgMzIgMzJINDgwQzQ5Ny42ODggMzIgNTEyIDQ2LjMxMiA1MTIgNjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BoxArchive(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M32 432C32 458.51 53.49 480 80 480H432C458.51 480 480 458.51 480 432V128H32V432ZM160 208C160 199.2 167.2 192 176 192H336C344.8 192 352 199.2 352 208V240C352 248.8 344.8 256 336 256H176C167.2 256 160 248.8 160 240V208Z" />
            <path d="M512 64V112C512 120.812 504.812 128 496 128H16C7.188 128 0 120.812 0 112V64C0 46.312 14.312 32 32 32H480C497.688 32 512 46.312 512 64Z" />
        </Icon>
    </>
}