
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `caret-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/caret-left?s=light caret-left}
 * @preview ![caret-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMzgzLjk2MVYxMjguMDEyQzE5MiA5OS42NDMgMTU3LjUgODUuMjcxIDEzNy4zNzUgMTA1LjM5Mkw5LjM3NSAyMzMuMzY2Qy0zLjEyNSAyNDUuODY0IC0zLjEyNSAyNjYuMTEgOS4zNzUgMjc4LjYwN0wxMzcuMzc1IDQwNi41ODFDMTU3LjUgNDI2LjcwMiAxOTIgNDEyLjQ1NSAxOTIgMzgzLjk2MVpNMzIgMjU1Ljk4N0wxNjAgMTI4LjAxMlYzODMuOTYxTDMyIDI1NS45ODdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CaretLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 256 512" {...props}>
            <path d="M192 383.961V128.012C192 99.643 157.5 85.271 137.375 105.392L9.375 233.366C-3.125 245.864 -3.125 266.11 9.375 278.607L137.375 406.581C157.5 426.702 192 412.455 192 383.961ZM32 255.987L160 128.012V383.961L32 255.987Z" />
        </Icon>
    </>
}