
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `seedling` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=duotone seedling}
 * @preview ![seedling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4wOTggMzJDNTEyLjA5OCAxNTUuNzUgNDExLjg0OCAyNTYgMjg4LjA5OCAyNTZWMzIwQzI4OC4wOTggMjY2LjQ4NCAyNjkuMjg5IDIxNy40MTIgMjM4IDE3OC44OTNDMjY5LjQ0OSA5My4yMTUgMzUxLjQ5IDMyIDQ0OC4wOTggMzJINTEyLjA5OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNjQgOTZIMEMwIDIxOS43NSAxMDAuMjUgMzIwIDIyNCAzMjBWNDQ4QzIyNCA0NjUuNiAyMzguNCA0ODAgMjU2IDQ4MEgyNTZDMjczLjYgNDgwIDI4OCA0NjUuNiAyODggNDQ4VjMyMEMyODggMTk2LjI4OCAxODcuNzEyIDk2IDY0IDk2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Seedling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M512.098 32C512.098 155.75 411.848 256 288.098 256V320C288.098 266.484 269.289 217.412 238 178.893C269.449 93.215 351.49 32 448.098 32H512.098Z" />
            <path d="M64 96H0C0 219.75 100.25 320 224 320V448C224 465.6 238.4 480 256 480H256C273.6 480 288 465.6 288 448V320C288 196.288 187.712 96 64 96Z" />
        </Icon>
    </>
}