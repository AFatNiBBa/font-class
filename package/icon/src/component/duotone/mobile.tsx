
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mobile` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile?s=duotone mobile}
 * @preview ![mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDM4NFY0NjRDMzIgNDkwLjUgNTMuNSA1MTIgODAgNTEySDMwNEMzMzAuNSA1MTIgMzUyIDQ5MC41IDM1MiA0NjRWMzg0SDMyWk0yNDAgNDQ4QzI0MCA0NTYuODM3IDIzMi44MzcgNDY0IDIyNCA0NjRIMTYwQzE1MS4xNjMgNDY0IDE0NCA0NTYuODM3IDE0NCA0NDhWNDQ4QzE0NCA0MzkuMTYzIDE1MS4xNjMgNDMyIDE2MCA0MzJIMjI0QzIzMi44MzcgNDMyIDI0MCA0MzkuMTYzIDI0MCA0NDhWNDQ4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTIgNDhWMzg0SDMyVjQ4QzMyIDIxLjUgNTMuNSAwIDgwIDBIMzA0QzMzMC41IDAgMzUyIDIxLjUgMzUyIDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Mobile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M32 384V464C32 490.5 53.5 512 80 512H304C330.5 512 352 490.5 352 464V384H32ZM240 448C240 456.837 232.837 464 224 464H160C151.163 464 144 456.837 144 448V448C144 439.163 151.163 432 160 432H224C232.837 432 240 439.163 240 448V448Z" />
            <path d="M352 48V384H32V48C32 21.5 53.5 0 80 0H304C330.5 0 352 21.5 352 48Z" />
        </Icon>
    </>
}