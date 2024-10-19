
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `input-pipe` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/input-pipe?s=duotone input-pipe}
 * @preview ![input-pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU3Ni4wMDIgNjRINjMuOTk4QzI4LjY1NCA2NCAwIDkyLjY1MiAwIDEyOFYzODRDMCA0MTkuMzQ2IDI4LjY1NCA0NDggNjMuOTk4IDQ0OEg1NzYuMDAyQzYxMS4zNDYgNDQ4IDY0MCA0MTkuMzQ4IDY0MCAzODRWMTI4QzY0MCA5Mi42NTQgNjExLjM0NiA2NCA1NzYuMDAyIDY0Wk01NzYuMDAyIDM4NEg2My45OThWMTI4SDU3Ni4wMDJWMzg0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0xMjggMzUyQzE0MS4yNTQgMzUyIDE1MiAzNDEuMjU0IDE1MiAzMjhWMTg0QzE1MiAxNzAuNzQ0IDE0MS4yNTQgMTYwIDEyOCAxNjBTMTA0IDE3MC43NDQgMTA0IDE4NFYzMjhDMTA0IDM0MS4yNTQgMTE0Ljc0NiAzNTIgMTI4IDM1MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function InputPipe(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M576.002 64H63.998C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 63.998 448H576.002C611.346 448 640 419.348 640 384V128C640 92.654 611.346 64 576.002 64ZM576.002 384H63.998V128H576.002V384Z" />
            <path d="M128 352C141.254 352 152 341.254 152 328V184C152 170.744 141.254 160 128 160S104 170.744 104 184V328C104 341.254 114.746 352 128 352Z" />
        </Icon>
    </>
}