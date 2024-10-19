
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `gauge` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gauge?s=solid gauge}
 * @preview ![gauge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMzJDMTI5IDMyIDAgMTYxIDAgMzIwQzAgMzcyLjc1IDE0LjI1IDQyMi4yNSAzOSA0NjQuNzVDNDQuNjI1IDQ3NC4zNzUgNTUuMzc1IDQ4MCA2Ni41IDQ4MEg1MDkuNUM1MjAuNjI1IDQ4MCA1MzEuMzc1IDQ3NC4zNzUgNTM3IDQ2NC43NUM1NjEuNzUgNDIyLjI1IDU3NiAzNzIuNzUgNTc2IDMyMEM1NzYgMTYxIDQ0NyAzMiAyODggMzJaTTI4OCA5NkMzMDUuNjI1IDk2IDMyMCAxMTAuMzc1IDMyMCAxMjhTMzA1LjYyNSAxNjAgMjg4IDE2MFMyNTYgMTQ1LjYyNSAyNTYgMTI4UzI3MC4zNzUgOTYgMjg4IDk2Wk05NiAzODRDNzguMzc1IDM4NCA2NCAzNjkuNjI1IDY0IDM1MlM3OC4zNzUgMzIwIDk2IDMyMFMxMjggMzM0LjM3NSAxMjggMzUyUzExMy42MjUgMzg0IDk2IDM4NFpNMTQ0IDIyNEMxMjYuMzc1IDIyNCAxMTIgMjA5LjYyNSAxMTIgMTkyUzEyNi4zNzUgMTYwIDE0NCAxNjBTMTc2IDE3NC4zNzUgMTc2IDE5MlMxNjEuNjI1IDIyNCAxNDQgMjI0Wk0zNDMuMTI1IDQxNkgyMzIuODc1QzIyNy4zNzUgNDA2LjUgMjI0IDM5NS43NSAyMjQgMzg0QzIyNCAzNDguNjI1IDI1Mi42MjUgMzIwIDI4OCAzMjBDMjkzLjYyNSAzMjAgMjk5IDMyMSAzMDQuMjUgMzIyLjM3NUw0MTIuNzUgMTc3LjYyNUM0MjAuNzUgMTY3IDQzNS43NSAxNjQuODc1IDQ0Ni4zNzUgMTcyLjc1QzQ1NyAxODAuNzUgNDU5LjEyNSAxOTUuNzUgNDUxLjI1IDIwNi4zNzVMMzQyLjYyNSAzNTEuMTI1QzM0OC41IDM2MC43NSAzNTIgMzcxLjg3NSAzNTIgMzg0QzM1MiAzOTUuNzUgMzQ4LjYyNSA0MDYuNSAzNDMuMTI1IDQxNlpNNDgwIDM4NEM0NjIuMzc1IDM4NCA0NDggMzY5LjYyNSA0NDggMzUyUzQ2Mi4zNzUgMzIwIDQ4MCAzMjBTNTEyIDMzNC4zNzUgNTEyIDM1MlM0OTcuNjI1IDM4NCA0ODAgMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Gauge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M288 32C129 32 0 161 0 320C0 372.75 14.25 422.25 39 464.75C44.625 474.375 55.375 480 66.5 480H509.5C520.625 480 531.375 474.375 537 464.75C561.75 422.25 576 372.75 576 320C576 161 447 32 288 32ZM288 96C305.625 96 320 110.375 320 128S305.625 160 288 160S256 145.625 256 128S270.375 96 288 96ZM96 384C78.375 384 64 369.625 64 352S78.375 320 96 320S128 334.375 128 352S113.625 384 96 384ZM144 224C126.375 224 112 209.625 112 192S126.375 160 144 160S176 174.375 176 192S161.625 224 144 224ZM343.125 416H232.875C227.375 406.5 224 395.75 224 384C224 348.625 252.625 320 288 320C293.625 320 299 321 304.25 322.375L412.75 177.625C420.75 167 435.75 164.875 446.375 172.75C457 180.75 459.125 195.75 451.25 206.375L342.625 351.125C348.5 360.75 352 371.875 352 384C352 395.75 348.625 406.5 343.125 416ZM480 384C462.375 384 448 369.625 448 352S462.375 320 480 320S512 334.375 512 352S497.625 384 480 384Z" />
        </Icon>
    </>
}