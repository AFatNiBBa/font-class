
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `note-medical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=duotone note-medical}
 * @preview ![note-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwMCAzMkg0OEMyMS40OSAzMiAwIDUzLjQ5IDAgODBWNDMyQzAgNDU4LjUxIDIxLjQ5IDQ4MCA0OCA0ODBIMzIwVjM1Mkg0NDhWODBDNDQ4IDUzLjQ5IDQyNi41MSAzMiA0MDAgMzJaTTMyMCAyNDhDMzIwIDI1Mi4zNzUgMzE2LjM3NSAyNTYgMzEyIDI1NkgyNTZWMzEyQzI1NiAzMTYuMzc1IDI1Mi4zNzUgMzIwIDI0OCAzMjBIMjAwQzE5NS42MjUgMzIwIDE5MiAzMTYuMzc1IDE5MiAzMTJWMjU2SDEzNkMxMzEuNjI1IDI1NiAxMjggMjUyLjM3NSAxMjggMjQ4VjIwMEMxMjggMTk1LjYyNSAxMzEuNjI1IDE5MiAxMzYgMTkySDE5MlYxMzZDMTkyIDEzMS42MjUgMTk1LjYyNSAxMjggMjAwIDEyOEgyNDhDMjUyLjM3NSAxMjggMjU2IDEzMS42MjUgMjU2IDEzNlYxOTJIMzEyQzMxNi4zNzUgMTkyIDMyMCAxOTUuNjI1IDMyMCAyMDBWMjQ4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjAgMjAwQzMyMCAxOTUuNjI1IDMxNi4zNzUgMTkyIDMxMiAxOTJIMjU2VjEzNkMyNTYgMTMxLjYyNSAyNTIuMzc1IDEyOCAyNDggMTI4SDIwMEMxOTUuNjI1IDEyOCAxOTIgMTMxLjYyNSAxOTIgMTM2VjE5MkgxMzZDMTMxLjYyNSAxOTIgMTI4IDE5NS42MjUgMTI4IDIwMFYyNDhDMTI4IDI1Mi4zNzUgMTMxLjYyNSAyNTYgMTM2IDI1NkgxOTJWMzEyQzE5MiAzMTYuMzc1IDE5NS42MjUgMzIwIDIwMCAzMjBIMjQ4QzI1Mi4zNzUgMzIwIDI1NiAzMTYuMzc1IDI1NiAzMTJWMjU2SDMxMkMzMTYuMzc1IDI1NiAzMjAgMjUyLjM3NSAzMjAgMjQ4VjIwMFpNMzIwIDM1MlY0ODBMNDQ4IDM1MkgzMjBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function NoteMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M400 32H48C21.49 32 0 53.49 0 80V432C0 458.51 21.49 480 48 480H320V352H448V80C448 53.49 426.51 32 400 32ZM320 248C320 252.375 316.375 256 312 256H256V312C256 316.375 252.375 320 248 320H200C195.625 320 192 316.375 192 312V256H136C131.625 256 128 252.375 128 248V200C128 195.625 131.625 192 136 192H192V136C192 131.625 195.625 128 200 128H248C252.375 128 256 131.625 256 136V192H312C316.375 192 320 195.625 320 200V248Z" />
            <path d="M320 200C320 195.625 316.375 192 312 192H256V136C256 131.625 252.375 128 248 128H200C195.625 128 192 131.625 192 136V192H136C131.625 192 128 195.625 128 200V248C128 252.375 131.625 256 136 256H192V312C192 316.375 195.625 320 200 320H248C252.375 320 256 316.375 256 312V256H312C316.375 256 320 252.375 320 248V200ZM320 352V480L448 352H320Z" />
        </Icon>
    </>
}