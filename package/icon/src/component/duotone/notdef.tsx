
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=duotone notdef}
 * @preview ![notdef](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDM5MC4zMTJMMTUzLjU0MSAyNTZMNjQgMTIxLjY4OFY2NEgxMDIuNDU5TDE5MiAxOTguMzEyTDI4MS41NDEgNjRIMzIwVjEyMS42ODhMMjMwLjQ1OSAyNTZMMzIwIDM5MC4zMTJWNDQ4SDI4MS41NDFMMTkyIDMxMy42ODhMMTAyLjQ1OSA0NDhINjRWMzkwLjMxMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzM2IDBINDhDMjEuNDkgMCAwIDIxLjQ5IDAgNDhWNDY0QzAgNDkwLjUxIDIxLjQ5IDUxMiA0OCA1MTJIMzM2QzM2Mi41MSA1MTIgMzg0IDQ5MC41MSAzODQgNDY0VjQ4QzM4NCAyMS40OSAzNjIuNTEgMCAzMzYgMFpNMzIwIDQ0OEg2NFY2NEgzMjBWNDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Notdef(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M64 390.312L153.541 256L64 121.688V64H102.459L192 198.312L281.541 64H320V121.688L230.459 256L320 390.312V448H281.541L192 313.688L102.459 448H64V390.312Z" />
            <path d="M336 0H48C21.49 0 0 21.49 0 48V464C0 490.51 21.49 512 48 512H336C362.51 512 384 490.51 384 464V48C384 21.49 362.51 0 336 0ZM320 448H64V64H320V448Z" />
        </Icon>
    </>
}