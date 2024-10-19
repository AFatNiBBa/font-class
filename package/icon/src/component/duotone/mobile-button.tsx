
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-button` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-button?s=duotone mobile-button}
 * @preview ![mobile-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDM4NFY0NjRDMzIgNDkwLjUwOCA1My40OSA1MTIgODAgNTEySDMwNEMzMzAuNTEgNTEyIDM1MiA0OTAuNTA4IDM1MiA0NjRWMzg0SDMyWk0xOTIgNDgwQzE3NC4yNSA0ODAgMTYwIDQ2NS43NSAxNjAgNDQ4UzE3NC4yNSA0MTYgMTkyIDQxNlMyMjQgNDMwLjI1IDIyNCA0NDhTMjA5Ljc1IDQ4MCAxOTIgNDgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNTIgNDhWMzg0SDMyVjQ4QzMyIDIxLjQ5MiA1My40OSAwIDgwIDBIMzA0QzMzMC41MSAwIDM1MiAyMS40OTIgMzUyIDQ4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function MobileButton(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M32 384V464C32 490.508 53.49 512 80 512H304C330.51 512 352 490.508 352 464V384H32ZM192 480C174.25 480 160 465.75 160 448S174.25 416 192 416S224 430.25 224 448S209.75 480 192 480Z" />
            <path d="M352 48V384H32V48C32 21.492 53.49 0 80 0H304C330.51 0 352 21.492 352 48Z" />
        </Icon>
    </>
}