
import { Icon } from "../../index";

/**
 * A component that renders the `phone-rotary` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-rotary?s=sharp-regular phone-rotary}
 * @preview ![phone-rotary](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyMDhWMTI4czk2LTk2IDI1Ni05NnMyNTYgOTYgMjU2IDk2djgwSDQxNmwtMzItODBzLTQ4LTI0LTEyOC0yNHMtMTI4IDI0LTEyOCAyNEw5NiAyMDhIMHpNMjU2IDM4NGE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHpNMzIgNDgwbDAtOTZMMTYwIDE2MGwxOTIgMEw0ODAgMzg0bDAgOTZMMzIgNDgwem00MDAtNDhsMC0zNS4zTDMyNC4xIDIwOGwtMTM2LjMgMEw4MCAzOTYuNyA4MCA0MzJsMzUyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PhoneRotary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 208V128s96-96 256-96s256 96 256 96v80H416l-32-80s-48-24-128-24s-128 24-128 24L96 208H0zM256 384a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM32 480l0-96L160 160l192 0L480 384l0 96L32 480zm400-48l0-35.3L324.1 208l-136.3 0L80 396.7 80 432l352 0z" />
    </Icon>
);

export default PhoneRotary;