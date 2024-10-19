
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rhombus` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=regular rhombus}
 * @preview ![rhombus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDguMDAxIDI1NS45NTNDNDQ4LjAwMSAyNTAuMzU5IDQ0Ni4wNjQgMjQ0Ljc2NSA0NDIuMTkgMjQwLjI2NEwyNDIuMjQ1IDguMjVDMjM3LjQzNCAyLjc1IDIzMC43MTcgMCAyMjQgMFMyMTAuNTY3IDIuNzUgMjA1Ljc1NiA4LjI1TDUuODExIDI0MC4yNjRDMS45MzcgMjQ0Ljc2NSAwIDI1MC4zNTkgMCAyNTUuOTUzUzEuOTM3IDI2Ny4xNDEgNS44MTEgMjcxLjY0MUwyMDUuNzU2IDUwMy42NTRDMjEwLjU2NyA1MDkuMjE5IDIxNy4yODQgNTEyIDIyNCA1MTJTMjM3LjQzNCA1MDkuMjE5IDI0Mi4yNDUgNTAzLjY1NEw0NDIuMTkgMjcxLjY0MUM0NDYuMDY0IDI2Ny4xNDEgNDQ4LjAwMSAyNjEuNTQ3IDQ0OC4wMDEgMjU1Ljk1M1pNMjI0IDQ1MS4yOTlMNTUuNjU3IDI1NS45NTNMMjI0IDYwLjYwNUwzOTIuMzQ0IDI1NS45NTNMMjI0IDQ1MS4yOTlaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
export default function Rhombus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448.001 255.953C448.001 250.359 446.064 244.765 442.19 240.264L242.245 8.25C237.434 2.75 230.717 0 224 0S210.567 2.75 205.756 8.25L5.811 240.264C1.937 244.765 0 250.359 0 255.953S1.937 267.141 5.811 271.641L205.756 503.654C210.567 509.219 217.284 512 224 512S237.434 509.219 242.245 503.654L442.19 271.641C446.064 267.141 448.001 261.547 448.001 255.953ZM224 451.299L55.657 255.953L224 60.605L392.344 255.953L224 451.299Z " />
        </Icon>
    </>
}