
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=thin battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NDQgMTkySDUyOFYxNjBDNTI4IDEyNC42NTQgNDk5LjM0NiA5NiA0NjQgOTZINjRDMjguNjU0IDk2IDAgMTI0LjY1NCAwIDE2MFYzNTJDMCAzODcuMzQ2IDI4LjY1NCA0MTYgNjQgNDE2SDQ2NEM0OTkuMzQ2IDQxNiA1MjggMzg3LjM0NiA1MjggMzUyVjMyMEg1NDRDNTYxLjY3NCAzMjAgNTc2IDMwNS42NzQgNTc2IDI4OFYyMjRDNTc2IDIwNi4zMjYgNTYxLjY3NCAxOTIgNTQ0IDE5MlpNNTEyIDM1MkM1MTIgMzc4LjQ2NyA0OTAuNDY3IDQwMCA0NjQgNDAwSDY0QzM3LjUzMyA0MDAgMTYgMzc4LjQ2NyAxNiAzNTJWMTYwQzE2IDEzMy41MzMgMzcuNTMzIDExMiA2NCAxMTJINDY0QzQ5MC40NjcgMTEyIDUxMiAxMzMuNTMzIDUxMiAxNjBWMzUyWk01NjAgMjg4QzU2MCAyOTYuODIyIDU1Mi44MjIgMzA0IDU0NCAzMDRINTI4VjIwOEg1NDRDNTUyLjgyMiAyMDggNTYwIDIxNS4xNzggNTYwIDIyNFYyODhaIi8+PC9zdmc+|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 192H528V160C528 124.654 499.346 96 464 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H464C499.346 416 528 387.346 528 352V320H544C561.674 320 576 305.674 576 288V224C576 206.326 561.674 192 544 192ZM512 352C512 378.467 490.467 400 464 400H64C37.533 400 16 378.467 16 352V160C16 133.533 37.533 112 64 112H464C490.467 112 512 133.533 512 160V352ZM560 288C560 296.822 552.822 304 544 304H528V208H544C552.822 208 560 215.178 560 224V288Z" />
    </Icon>
);

export default BatteryEmpty;