
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `battery-three-quarters` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-three-quarters?s=light battery-three-quarters}
 * @preview ![battery-three-quarters](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMTYwSDk2Qzc4LjMyNiAxNjAgNjQgMTc0LjMyNiA2NCAxOTJWMzIwQzY0IDMzNy42NzIgNzguMzI2IDM1MiA5NiAzNTJIMzIwQzMzNy42NzQgMzUyIDM1MiAzMzcuNjcyIDM1MiAzMjBWMTkyQzM1MiAxNzQuMzI2IDMzNy42NzQgMTYwIDMyMCAxNjBaTTMyMCAzMjBIOTZWMTkySDMyMFYzMjBaTTQ0OCA5Nkg2NEMyOC42NTQgOTYgMCAxMjQuNjU0IDAgMTYwVjM1MkMwIDM4Ny4zNDYgMjguNjU0IDQxNiA2NCA0MTZINDQ4QzQ4My4zNDYgNDE2IDUxMiAzODcuMzQ2IDUxMiAzNTJWMTYwQzUxMiAxMjQuNjU0IDQ4My4zNDYgOTYgNDQ4IDk2Wk00ODAgMzUyQzQ4MCAzNjkuNjQ1IDQ2NS42NDUgMzg0IDQ0OCAzODRINjRDNDYuMzU1IDM4NCAzMiAzNjkuNjQ1IDMyIDM1MlYxNjBDMzIgMTQyLjM1NSA0Ni4zNTUgMTI4IDY0IDEyOEg0NDhDNDY1LjY0NSAxMjggNDgwIDE0Mi4zNTUgNDgwIDE2MFYzNTJaTTU2MCAxOTJDNTUxLjE1NiAxOTIgNTQ0IDE5OS4xNTYgNTQ0IDIwOFYzMDRDNTQ0IDMxMi44NDQgNTUxLjE1NiAzMjAgNTYwIDMyMFM1NzYgMzEyLjg0NCA1NzYgMzA0VjIwOEM1NzYgMTk5LjE1NiA1NjguODQ0IDE5MiA1NjAgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BatteryThreeQuarters(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M320 160H96C78.326 160 64 174.326 64 192V320C64 337.672 78.326 352 96 352H320C337.674 352 352 337.672 352 320V192C352 174.326 337.674 160 320 160ZM320 320H96V192H320V320ZM448 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H448C483.346 416 512 387.346 512 352V160C512 124.654 483.346 96 448 96ZM480 352C480 369.645 465.645 384 448 384H64C46.355 384 32 369.645 32 352V160C32 142.355 46.355 128 64 128H448C465.645 128 480 142.355 480 160V352ZM560 192C551.156 192 544 199.156 544 208V304C544 312.844 551.156 320 560 320S576 312.844 576 304V208C576 199.156 568.844 192 560 192Z" />
        </Icon>
    </>
}