
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `battery-half` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-half?s=thin battery-half}
 * @preview ![battery-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMTkySDUyOFYxNjBDNTI4IDEyNC42NTQgNDk5LjM0NCA5NiA0NjQgOTZINjRDMjguNjU2IDk2IDAgMTI0LjY1NCAwIDE2MFYzNTJDMCAzODcuMzQ2IDI4LjY1NiA0MTYgNjQgNDE2SDQ2NEM0OTkuMzQ0IDQxNiA1MjggMzg3LjM0NiA1MjggMzUyVjMyMEg1NDRDNTYxLjY3MiAzMjAgNTc2IDMwNS42NzQgNTc2IDI4OFYyMjRDNTc2IDIwNi4zMjYgNTYxLjY3MiAxOTIgNTQ0IDE5MlpNNTEyIDM1MkM1MTIgMzc4LjQ2NyA0OTAuNDY5IDQwMCA0NjQgNDAwSDY0QzM3LjUzMSA0MDAgMTYgMzc4LjQ2NyAxNiAzNTJWMTYwQzE2IDEzMy41MzMgMzcuNTMxIDExMiA2NCAxMTJINDY0QzQ5MC40NjkgMTEyIDUxMiAxMzMuNTMzIDUxMiAxNjBWMzUyWk01NjAgMjg4QzU2MCAyOTYuODIyIDU1Mi44MiAzMDQgNTQ0IDMwNEg1MjhWMjA4SDU0NEM1NTIuODIgMjA4IDU2MCAyMTUuMTc4IDU2MCAyMjRWMjg4Wk0yNTYgMTYwSDk2Qzc4LjMyOCAxNjAgNjQgMTc0LjMyNiA2NCAxOTJWMzIwQzY0IDMzNy42NzQgNzguMzI4IDM1MiA5NiAzNTJIMjU2QzI3My42NzIgMzUyIDI4OCAzMzcuNjc0IDI4OCAzMjBWMTkyQzI4OCAxNzQuMzI2IDI3My42NzIgMTYwIDI1NiAxNjBaTTI3MiAzMjBDMjcyIDMyOC44MjIgMjY0LjgyIDMzNiAyNTYgMzM2SDk2Qzg3LjE4IDMzNiA4MCAzMjguODIyIDgwIDMyMFYxOTJDODAgMTgzLjE3OCA4Ny4xOCAxNzYgOTYgMTc2SDI1NkMyNjQuODIgMTc2IDI3MiAxODMuMTc4IDI3MiAxOTJWMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BatteryHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M544 192H528V160C528 124.654 499.344 96 464 96H64C28.656 96 0 124.654 0 160V352C0 387.346 28.656 416 64 416H464C499.344 416 528 387.346 528 352V320H544C561.672 320 576 305.674 576 288V224C576 206.326 561.672 192 544 192ZM512 352C512 378.467 490.469 400 464 400H64C37.531 400 16 378.467 16 352V160C16 133.533 37.531 112 64 112H464C490.469 112 512 133.533 512 160V352ZM560 288C560 296.822 552.82 304 544 304H528V208H544C552.82 208 560 215.178 560 224V288ZM256 160H96C78.328 160 64 174.326 64 192V320C64 337.674 78.328 352 96 352H256C273.672 352 288 337.674 288 320V192C288 174.326 273.672 160 256 160ZM272 320C272 328.822 264.82 336 256 336H96C87.18 336 80 328.822 80 320V192C80 183.178 87.18 176 96 176H256C264.82 176 272 183.178 272 192V320Z" />
        </Icon>
    </>
}