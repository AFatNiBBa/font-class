
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-to-line` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-line?s=thin arrow-up-to-line}
 * @preview ![arrow-up-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTcuNjU2IDEzMC4zNDRDMTk0LjUzMSAxMjcuMjE5IDE4OS40NjkgMTI3LjIxOSAxODYuMzQ0IDEzMC4zNDRMMzQuMzQ0IDI4Mi4zNDRDMzIuNzgxIDI4My45MDYgMzIgMjg1LjkzOCAzMiAyODhTMzIuNzgxIDI5Mi4wOTQgMzQuMzQ0IDI5My42NTZDMzcuNDY5IDI5Ni43ODEgNDIuNTMxIDI5Ni43ODEgNDUuNjU2IDI5My42NTZMMTg0IDE1NS4zMTJWNDcyQzE4NCA0NzYuNDA2IDE4Ny41NzggNDgwIDE5MiA0ODBTMjAwIDQ3Ni40MDYgMjAwIDQ3MlYxNTUuMzEyTDMzOC4zNDQgMjkzLjY1NkMzNDEuNDY5IDI5Ni43ODEgMzQ2LjUzMSAyOTYuNzgxIDM0OS42NTYgMjkzLjY1NlMzNTIuNzgxIDI4NS40NjkgMzQ5LjY1NiAyODIuMzQ0TDE5Ny42NTYgMTMwLjM0NFpNMzc2IDMySDhDMy41ODIgMzIgMCAzNS41ODIgMCA0MFMzLjU4MiA0OCA4IDQ4SDM3NkMzODAuNDE4IDQ4IDM4NCA0NC40MTggMzg0IDQwUzM4MC40MTggMzIgMzc2IDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M197.656 130.344C194.531 127.219 189.469 127.219 186.344 130.344L34.344 282.344C32.781 283.906 32 285.938 32 288S32.781 292.094 34.344 293.656C37.469 296.781 42.531 296.781 45.656 293.656L184 155.312V472C184 476.406 187.578 480 192 480S200 476.406 200 472V155.312L338.344 293.656C341.469 296.781 346.531 296.781 349.656 293.656S352.781 285.469 349.656 282.344L197.656 130.344ZM376 32H8C3.582 32 0 35.582 0 40S3.582 48 8 48H376C380.418 48 384 44.418 384 40S380.418 32 376 32Z" />
        </Icon>
    </>
}