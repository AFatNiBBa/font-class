
import { Icon } from "../../index";

/**
 * A component that renders the `battery-empty` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/battery-empty?s=light battery-empty}
 * @preview ![battery-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZINjRDMjguNjU0IDk2IDAgMTI0LjY1NCAwIDE2MFYzNTJDMCAzODcuMzQ2IDI4LjY1NCA0MTYgNjQgNDE2SDQ0OEM0ODMuMzQ2IDQxNiA1MTIgMzg3LjM0NiA1MTIgMzUyVjE2MEM1MTIgMTI0LjY1NCA0ODMuMzQ2IDk2IDQ0OCA5NlpNNDgwIDM1MkM0ODAgMzY5LjY0NSA0NjUuNjQ1IDM4NCA0NDggMzg0SDY0QzQ2LjM1NSAzODQgMzIgMzY5LjY0NSAzMiAzNTJWMTYwQzMyIDE0Mi4zNTUgNDYuMzU1IDEyOCA2NCAxMjhINDQ4QzQ2NS42NDUgMTI4IDQ4MCAxNDIuMzU1IDQ4MCAxNjBWMzUyWk01NjAgMTkyQzU1MS4xNTYgMTkyIDU0NCAxOTkuMTU2IDU0NCAyMDhWMzA0QzU0NCAzMTIuODQ0IDU1MS4xNTYgMzIwIDU2MCAzMjBTNTc2IDMxMi44NDQgNTc2IDMwNFYyMDhDNTc2IDE5OS4xNTYgNTY4Ljg0NCAxOTIgNTYwIDE5MloiLz48L3N2Zz4=|width=32|height=32)
 */
const BatteryEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 96H64C28.654 96 0 124.654 0 160V352C0 387.346 28.654 416 64 416H448C483.346 416 512 387.346 512 352V160C512 124.654 483.346 96 448 96ZM480 352C480 369.645 465.645 384 448 384H64C46.355 384 32 369.645 32 352V160C32 142.355 46.355 128 64 128H448C465.645 128 480 142.355 480 160V352ZM560 192C551.156 192 544 199.156 544 208V304C544 312.844 551.156 320 560 320S576 312.844 576 304V208C576 199.156 568.844 192 560 192Z" />
    </Icon>
);

export default BatteryEmpty;