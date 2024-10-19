
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=regular message-check}
 * @preview ![message-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTEuMjgxIDEzNi4zNTlMMjMyLjE1NiAyMjguNzAzTDIwMi40NjkgMTk5LjAxNkMxOTMuMDk0IDE4OS42NDEgMTc3LjkwNiAxODkuNjQxIDE2OC41MzEgMTk5LjAxNlMxNTkuMTU2IDIyMy41NzggMTY4LjUzMSAyMzIuOTUzTDIxNi41MzEgMjgwLjk1M0MyMjEuMDMxIDI4NS40NTMgMjI3LjE1NiAyODcuOTg0IDIzMy41IDI4Ny45ODRDMjMzLjgxMiAyODcuOTg0IDIzNC4xMjUgMjg3Ljk4NCAyMzQuNDA2IDI4Ny45NTNDMjQxLjA5NCAyODcuNzAzIDI0Ny4zNzUgMjg0LjY3MiAyNTEuNzE5IDI3OS42MDlMMzQ3LjcxOSAxNjcuNjA5QzM1Ni4zNDQgMTU3LjU0NyAzNTUuMTg3IDE0Mi4zOTEgMzQ1LjEyNSAxMzMuNzY2QzMzNS4wOTQgMTI1LjE3MiAzMTkuOTM4IDEyNi4yOTcgMzExLjI4MSAxMzYuMzU5Wk00NDggMEg2NEMyOC43NSAwIDAgMjguNzUgMCA2NFYzNTIuMDAyQzAgMzg3LjI1MiAyOC43NSA0MTYuMDAyIDY0IDQxNi4wMDJIMTYwVjUwMC4wMDJDMTYwIDUwOS44MzggMTcxLjAyMyA1MTUuNDc5IDE3OS4xMjUgNTA5LjYyN0wzMDQgNDE2LjAwMkg0NDhDNDgzLjI1IDQxNi4wMDIgNTEyIDM4Ny4yNTIgNTEyIDM1Mi4wMDJWNjRDNTEyIDI4Ljc1IDQ4My4yNSAwIDQ0OCAwWk00NjQgMzUyLjAwMkM0NjQgMzYwLjc1MiA0NTYuNzUgMzY4LjAwMiA0NDggMzY4LjAwMkgyODhMMjA4IDQyOC4wMDJWMzY4LjAwMkg2NEM1NS4yNSAzNjguMDAyIDQ4IDM2MC43NTIgNDggMzUyLjAwMlY2NEM0OCA1NS4yNSA1NS4yNSA0OCA2NCA0OEg0NDhDNDU2Ljc1IDQ4IDQ2NCA1NS4yNSA0NjQgNjRWMzUyLjAwMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MessageCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M311.281 136.359L232.156 228.703L202.469 199.016C193.094 189.641 177.906 189.641 168.531 199.016S159.156 223.578 168.531 232.953L216.531 280.953C221.031 285.453 227.156 287.984 233.5 287.984C233.812 287.984 234.125 287.984 234.406 287.953C241.094 287.703 247.375 284.672 251.719 279.609L347.719 167.609C356.344 157.547 355.187 142.391 345.125 133.766C335.094 125.172 319.938 126.297 311.281 136.359ZM448 0H64C28.75 0 0 28.75 0 64V352.002C0 387.252 28.75 416.002 64 416.002H160V500.002C160 509.838 171.023 515.479 179.125 509.627L304 416.002H448C483.25 416.002 512 387.252 512 352.002V64C512 28.75 483.25 0 448 0ZM464 352.002C464 360.752 456.75 368.002 448 368.002H288L208 428.002V368.002H64C55.25 368.002 48 360.752 48 352.002V64C48 55.25 55.25 48 64 48H448C456.75 48 464 55.25 464 64V352.002Z" />
        </Icon>
    </>
}