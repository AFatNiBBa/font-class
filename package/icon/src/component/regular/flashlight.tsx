
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `flashlight` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=regular flashlight}
 * @preview ![flashlight](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MDggOTZINTc2QzUxMy4zNzUgOTYgNDUyLjI1IDExNC41IDQwMC4xMjUgMTQ5LjI1TDM4NCAxNjBINDhDMjEuNSAxNjAgMCAxODEuNSAwIDIwOFYzMDRDMCAzMzAuNSAyMS41IDM1MiA0OCAzNTJIMzg0TDQwMC4xMjUgMzYyLjc1QzQ1Mi4yNSAzOTcuNSA1MTMuMzc1IDQxNiA1NzYgNDE2SDYwOEM2MjUuNjI1IDQxNiA2NDAgNDAxLjYyNSA2NDAgMzg0VjEyOEM2NDAgMTEwLjM3NSA2MjUuNjI1IDk2IDYwOCA5NlpNNTQ0IDM2NS42MjVDNTAyLjEyNSAzNjAuODc1IDQ2MS44NzUgMzQ2LjEyNSA0MjYuNzUgMzIyLjc1TDM5OC41IDMwNEg0OFYyMDhIMzk4LjVMNDI2Ljc1IDE4OS4yNUM0NjEuODc1IDE2NS44NzUgNTAyLjEyNSAxNTEuMjUgNTQ0IDE0Ni4zNzVWMzY1LjYyNVpNMjg0IDIzMkgyNjBDMjQ2Ljc1IDIzMiAyMzYgMjQyLjc1IDIzNiAyNTZDMjM2IDI2OS4yNSAyNDYuNzUgMjgwIDI2MCAyODBIMjg0QzI5Ny4yNSAyODAgMzA4IDI2OS4yNSAzMDggMjU2QzMwOCAyNDIuNzUgMjk3LjI1IDIzMiAyODQgMjMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Flashlight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M608 96H576C513.375 96 452.25 114.5 400.125 149.25L384 160H48C21.5 160 0 181.5 0 208V304C0 330.5 21.5 352 48 352H384L400.125 362.75C452.25 397.5 513.375 416 576 416H608C625.625 416 640 401.625 640 384V128C640 110.375 625.625 96 608 96ZM544 365.625C502.125 360.875 461.875 346.125 426.75 322.75L398.5 304H48V208H398.5L426.75 189.25C461.875 165.875 502.125 151.25 544 146.375V365.625ZM284 232H260C246.75 232 236 242.75 236 256C236 269.25 246.75 280 260 280H284C297.25 280 308 269.25 308 256C308 242.75 297.25 232 284 232Z" />
        </Icon>
    </>
}