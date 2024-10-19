
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rhombus` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rhombus?s=duotone rhombus}
 * @preview ![rhombus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ0Mi4xODkgMjQwLjI2NUM0NDYuMDYzIDI0NC43NjUgNDQ4IDI1MC4zNTkgNDQ4IDI1NS45NTNDNDQ4IDI2MS41NDcgNDQ2LjA2MyAyNjcuMTQxIDQ0Mi4xODkgMjcxLjY0MkwyNDIuMjQ1IDUwMy42NTZDMjM3LjQzNCA1MDkuMjE5IDIzMC43MTcgNTEyIDIyNCA1MTJTMjEwLjU2NiA1MDkuMjE5IDIwNS43NTUgNTAzLjY1Nkw1LjgxMSAyNzEuNjQyQzEuOTM3IDI2Ny4xNDEgMCAyNjEuNTQ3IDAgMjU1Ljk1M0MwIDI1MC4zNTkgMS45MzcgMjQ0Ljc2NSA1LjgxMSAyNDAuMjY1TDIwNS43NTUgOC4yNUMyMTAuNTY2IDIuNzUgMjE3LjI4MyAwIDIyNCAwUzIzNy40MzQgMi43NSAyNDIuMjQ1IDguMjVMNDQyLjE4OSAyNDAuMjY1WiAiIGNsYXNzPSJmYS1zZWNvbmRhcnkiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function Rhombus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M442.189 240.265C446.063 244.765 448 250.359 448 255.953C448 261.547 446.063 267.141 442.189 271.642L242.245 503.656C237.434 509.219 230.717 512 224 512S210.566 509.219 205.755 503.656L5.811 271.642C1.937 267.141 0 261.547 0 255.953C0 250.359 1.937 244.765 5.811 240.265L205.755 8.25C210.566 2.75 217.283 0 224 0S237.434 2.75 242.245 8.25L442.189 240.265Z " />
        </Icon>
    </>
}