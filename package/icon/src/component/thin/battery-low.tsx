
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `battery-low` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-low?s=thin battery-low}
 * @preview ![battery-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMTkySDUyOFYxNjBDNTI4IDEyNC42NTQgNDk5LjM0NCA5NiA0NjQgOTZINjRDMjguNjU2IDk2IDAgMTI0LjY1NCAwIDE2MFYzNTJDMCAzODcuMzQ2IDI4LjY1NiA0MTYgNjQgNDE2SDQ2NEM0OTkuMzQ0IDQxNiA1MjggMzg3LjM0NiA1MjggMzUyVjMyMEg1NDRDNTYxLjY3MiAzMjAgNTc2IDMwNS42NzQgNTc2IDI4OFYyMjRDNTc2IDIwNi4zMjYgNTYxLjY3MiAxOTIgNTQ0IDE5MlpNNTEyIDM1MkM1MTIgMzc4LjQ2NyA0OTAuNDY5IDQwMCA0NjQgNDAwSDY0QzM3LjUzMSA0MDAgMTYgMzc4LjQ2NyAxNiAzNTJWMTYwQzE2IDEzMy41MzMgMzcuNTMxIDExMiA2NCAxMTJINDY0QzQ5MC40NjkgMTEyIDUxMiAxMzMuNTMzIDUxMiAxNjBWMzUyWk01NjAgMjg4QzU2MCAyOTYuODIyIDU1Mi44MiAzMDQgNTQ0IDMwNEg1MjhWMjA4SDU0NEM1NTIuODIgMjA4IDU2MCAyMTUuMTc4IDU2MCAyMjRWMjg4Wk0xMjggMTYwSDk2Qzc4LjMyOCAxNjAgNjQgMTc0LjMyNiA2NCAxOTJWMzIwQzY0IDMzNy42NzQgNzguMzI4IDM1MiA5NiAzNTJIMTI4QzE0NS42NzIgMzUyIDE2MCAzMzcuNjc0IDE2MCAzMjBWMTkyQzE2MCAxNzQuMzI2IDE0NS42NzIgMTYwIDEyOCAxNjBaTTE0NCAzMjBDMTQ0IDMyOC44MjIgMTM2LjgyIDMzNiAxMjggMzM2SDk2Qzg3LjE4IDMzNiA4MCAzMjguODIyIDgwIDMyMFYxOTJDODAgMTgzLjE3OCA4Ny4xOCAxNzYgOTYgMTc2SDEyOEMxMzYuODIgMTc2IDE0NCAxODMuMTc4IDE0NCAxOTJWMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BatteryLow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 192H528V160C528 124.654 499.344 96 464 96H64C28.656 96 0 124.654 0 160V352C0 387.346 28.656 416 64 416H464C499.344 416 528 387.346 528 352V320H544C561.672 320 576 305.674 576 288V224C576 206.326 561.672 192 544 192ZM512 352C512 378.467 490.469 400 464 400H64C37.531 400 16 378.467 16 352V160C16 133.533 37.531 112 64 112H464C490.469 112 512 133.533 512 160V352ZM560 288C560 296.822 552.82 304 544 304H528V208H544C552.82 208 560 215.178 560 224V288ZM128 160H96C78.328 160 64 174.326 64 192V320C64 337.674 78.328 352 96 352H128C145.672 352 160 337.674 160 320V192C160 174.326 145.672 160 128 160ZM144 320C144 328.822 136.82 336 128 336H96C87.18 336 80 328.822 80 320V192C80 183.178 87.18 176 96 176H128C136.82 176 144 183.178 144 192V320Z" />
        </Icon>
    </>
}