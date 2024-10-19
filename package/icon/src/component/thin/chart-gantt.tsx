
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `chart-gantt` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/chart-gantt?s=thin chart-gantt}
 * @preview ![chart-gantt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDQgMTc2SDI3MkMyODAuODI4IDE3NiAyODggMTY4LjgyOCAyODggMTYwVjEyOEMyODggMTE5LjE0MSAyODAuODI4IDExMiAyNzIgMTEySDE0NEMxMzUuMTcyIDExMiAxMjggMTE5LjE0MSAxMjggMTI4VjE2MEMxMjggMTY4LjgyOCAxMzUuMTcyIDE3NiAxNDQgMTc2Wk0xNDQgMTI4SDI3MlYxNjBIMTQ0VjEyOFpNMzM2IDM2OEg0NjRDNDcyLjgyOCAzNjggNDgwIDM2MC44MjggNDgwIDM1MlYzMjBDNDgwIDMxMS4xNDEgNDcyLjgyOCAzMDQgNDY0IDMwNEgzMzZDMzI3LjE3MiAzMDQgMzIwIDMxMS4xNDEgMzIwIDMyMFYzNTJDMzIwIDM2MC44MjggMzI3LjE3MiAzNjggMzM2IDM2OFpNMzM2IDMyMEg0NjRWMzUySDMzNlYzMjBaTTUwNCA0NjRINzJDNDEuMTI1IDQ2NCAxNiA0MzguODc1IDE2IDQwOFY0MEMxNiAzNS41NzggMTIuNDIyIDMyIDggMzJTMCAzNS41NzggMCA0MFY0MDhDMCA0NDcuNjg4IDMyLjMxMiA0ODAgNzIgNDgwSDUwNEM1MDguNDIyIDQ4MCA1MTIgNDc2LjQyMiA1MTIgNDcyUzUwOC40MjIgNDY0IDUwNCA0NjRaTTIwOCAyNzJIMzY4QzM3Ni44MjggMjcyIDM4NCAyNjQuODI4IDM4NCAyNTZWMjI0QzM4NCAyMTUuMTQxIDM3Ni44MjggMjA4IDM2OCAyMDhIMjA4QzE5OS4xNzIgMjA4IDE5MiAyMTUuMTQxIDE5MiAyMjRWMjU2QzE5MiAyNjQuODI4IDE5OS4xNzIgMjcyIDIwOCAyNzJaTTIwOCAyMjRIMzY4VjI1NkgyMDhWMjI0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ChartGantt(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M144 176H272C280.828 176 288 168.828 288 160V128C288 119.141 280.828 112 272 112H144C135.172 112 128 119.141 128 128V160C128 168.828 135.172 176 144 176ZM144 128H272V160H144V128ZM336 368H464C472.828 368 480 360.828 480 352V320C480 311.141 472.828 304 464 304H336C327.172 304 320 311.141 320 320V352C320 360.828 327.172 368 336 368ZM336 320H464V352H336V320ZM504 464H72C41.125 464 16 438.875 16 408V40C16 35.578 12.422 32 8 32S0 35.578 0 40V408C0 447.688 32.312 480 72 480H504C508.422 480 512 476.422 512 472S508.422 464 504 464ZM208 272H368C376.828 272 384 264.828 384 256V224C384 215.141 376.828 208 368 208H208C199.172 208 192 215.141 192 224V256C192 264.828 199.172 272 208 272ZM208 224H368V256H208V224Z" />
        </Icon>
    </>
}