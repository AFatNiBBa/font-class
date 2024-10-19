
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-area` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=regular chart-area}
 * @preview ![chart-area](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjAgMzg0SDQ1NkM0NjkuMjUgMzg0IDQ4MCAzNzMuMjUgNDgwIDM2MFYyNDBDNDgwIDIzNC40NjkgNDc4LjA5NCAyMjkuMDk0IDQ3NC41NjIgMjI0LjgxMkw0MDIuNTYyIDEzNi44MTJDMzk4LjI4MSAxMzEuNTYyIDM5MS45NjkgMTI4LjM3NSAzODUuMTg3IDEyOC4wMzFDMzc4LjUzMSAxMjcuNTMxIDM3MS44MTIgMTMwLjI1IDM2Ny4wMzEgMTM1LjAzMUwzMjAuNzUgMTgxLjMxMkwyNDkuNjg4IDEwMy43ODFDMjQ1LjE1NiA5OC44NDQgMjM4LjgxMiA5Ni4wMzEgMjMyLjA5NCA5NkgyMzJDMjI1LjM0NCA5NiAyMTkgOTguNzUgMjE0LjQ2OSAxMDMuNjI1TDEwMi40NjkgMjIzLjYyNUM5OC4zMTIgMjI4LjA2MiA5NiAyMzMuOTA2IDk2IDI0MFYzNjBDOTYgMzczLjI1IDEwNi43NSAzODQgMTIwIDM4NFpNMTQ0IDI0OS40NjlMMjMxLjg0NCAxNTUuMzQ0TDMwMi4zMTIgMjMyLjIxOUMzMDYuNzE5IDIzNy4wMzEgMzEyLjkzOCAyMzkuODQ0IDMxOS40NjkgMjQwQzMyNi42MjUgMjQwLjA2MiAzMzIuMzEyIDIzNy42MjUgMzM2Ljk2OSAyMzIuOTY5TDM4Mi4yMTkgMTg3LjcxOUw0MzIgMjQ4LjU2MlYzMzZIMTQ0VjI0OS40NjlaTTQ4OCA0MzJINDhWNTZDNDggNDIuNzQ0IDM3LjI1NCAzMiAyNCAzMlMwIDQyLjc0NCAwIDU2VjQ0OEMwIDQ2NS42IDE0LjQgNDgwIDMyIDQ4MEg0ODhDNTAxLjI1NCA0ODAgNTEyIDQ2OS4yNTQgNTEyIDQ1NkM1MTIgNDQyLjc0NCA1MDEuMjU0IDQzMiA0ODggNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartArea(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M120 384H456C469.25 384 480 373.25 480 360V240C480 234.469 478.094 229.094 474.562 224.812L402.562 136.812C398.281 131.562 391.969 128.375 385.187 128.031C378.531 127.531 371.812 130.25 367.031 135.031L320.75 181.312L249.688 103.781C245.156 98.844 238.812 96.031 232.094 96H232C225.344 96 219 98.75 214.469 103.625L102.469 223.625C98.312 228.062 96 233.906 96 240V360C96 373.25 106.75 384 120 384ZM144 249.469L231.844 155.344L302.312 232.219C306.719 237.031 312.938 239.844 319.469 240C326.625 240.062 332.312 237.625 336.969 232.969L382.219 187.719L432 248.562V336H144V249.469ZM488 432H48V56C48 42.744 37.254 32 24 32S0 42.744 0 56V448C0 465.6 14.4 480 32 480H488C501.254 480 512 469.254 512 456C512 442.744 501.254 432 488 432Z" />
        </Icon>
    </>
}