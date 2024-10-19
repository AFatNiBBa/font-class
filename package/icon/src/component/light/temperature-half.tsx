
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `temperature-half` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-half?s=light temperature-half}
 * @preview ![temperature-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMDguMDAxIDM4NEMyMDguMDAxIDQxMC41IDE4Ni41MDEgNDMyIDE2MC4wMDEgNDMyUzExMi4wMDEgNDEwLjUgMTEyLjAwMSAzODRDMTEyLjAwMSAzNjMuMTI1IDEyNS4zNzYgMzQ1LjM3NSAxNDQuMDAxIDMzOC43NVYyMDhDMTQ0LjAwMSAxOTkuMTI1IDE1MS4xMjYgMTkyIDE2MC4wMDEgMTkyUzE3Ni4wMDEgMTk5LjEyNSAxNzYuMDAxIDIwOFYzMzguNzVDMTk0LjYyNiAzNDUuMzc1IDIwOC4wMDEgMzYzLjEyNSAyMDguMDAxIDM4NFpNMjU2IDI5OS4zNzVDMjc1Ljg3NSAzMjEuODc1IDI4OCAzNTEuNSAyODggMzg0QzI4OCA0NTQuNzUgMjMwLjc1IDUxMiAxNjAuMDAxIDUxMkMxNTkuNzUxIDUxMiAxNTkuMzc2IDUxMiAxNTkuMTI2IDUxMkM4OC43NTEgNTExLjUgMzEuNjI3IDQ1My42MjUgMzIuMDAyIDM4My4zNzVDMzIuMTI3IDM1MS4xMjUgNDQuMjUyIDMyMS43NSA2NC4wMDIgMjk5LjM3NVY5NkM2NC4wMDIgNDMgMTA3LjAwMSAwIDE2MC4wMDEgMFMyNTYgNDMgMjU2IDk2VjI5OS4zNzVaTTI1NiAzODRDMjU2IDM0NC4xMjUgMjMzLjEyNSAzMjEuODc1IDIyNCAzMTEuNVY5NkMyMjQgNjAuNzUgMTk1LjI1MSAzMiAxNjAuMDAxIDMyUzk2LjAwMSA2MC43NSA5Ni4wMDEgOTZWMzExLjVDODYuNTAxIDMyMi4xMjUgNjQuMjUyIDM0NCA2NC4wMDIgMzgzLjVDNjMuNzUyIDQzNi4yNSAxMDYuNjI2IDQ3OS42MjUgMTU5LjM3NiA0ODBIMTYwLjAwMUMyMTIuODc2IDQ4MCAyNTYgNDM2Ljg3NSAyNTYgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TemperatureHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M208.001 384C208.001 410.5 186.501 432 160.001 432S112.001 410.5 112.001 384C112.001 363.125 125.376 345.375 144.001 338.75V208C144.001 199.125 151.126 192 160.001 192S176.001 199.125 176.001 208V338.75C194.626 345.375 208.001 363.125 208.001 384ZM256 299.375C275.875 321.875 288 351.5 288 384C288 454.75 230.75 512 160.001 512C159.751 512 159.376 512 159.126 512C88.751 511.5 31.627 453.625 32.002 383.375C32.127 351.125 44.252 321.75 64.002 299.375V96C64.002 43 107.001 0 160.001 0S256 43 256 96V299.375ZM256 384C256 344.125 233.125 321.875 224 311.5V96C224 60.75 195.251 32 160.001 32S96.001 60.75 96.001 96V311.5C86.501 322.125 64.252 344 64.002 383.5C63.752 436.25 106.626 479.625 159.376 480H160.001C212.876 480 256 436.875 256 384Z" />
        </Icon>
    </>
}