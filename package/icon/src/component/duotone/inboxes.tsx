
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `inboxes` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/inboxes?s=duotone inboxes}
 * @preview ![inboxes](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAzNTJIMzg0TDM1MiA0MTZIMTYwTDEyOCAzNTJIMzJDMTQuMzI2IDM1MiAwIDM2Ni4zMjggMCAzODRWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDQ2NEM0OTAuNTEgNTEyIDUxMiA0OTAuNTA4IDUxMiA0NjRWMzg0QzUxMiAzNjYuMzI4IDQ5Ny42NzQgMzUyIDQ4MCAzNTJaTTE2MCAyMjRIMzUyTDM4NCAxNjBINDMyLjczNEwzOTQuMzQ0IDY0SDExNy42NTZMNzkuMjY2IDE2MEgxMjhMMTYwIDIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTA3LjcxMyAxODAuODgzTDQ0NS43MTkgMjAuMTI1QzQ0MC44NDQgNy45NjkgNDI5LjA5NCAwIDQxNiAwSDk2QzgyLjkwNiAwIDcxLjE1NiA3Ljk2OSA2Ni4yODEgMjAuMTI1TDQuMjg3IDE4MC44ODNDMS40NTMgMTg4LjIzIDAgMTk2LjAzOSAwIDIwMy45MTRWMjcyQzAgMjk4LjUwOCAyMS40OSAzMjAgNDggMzIwSDQ2NEM0OTAuNTEgMzIwIDUxMiAyOTguNTA4IDUxMiAyNzJWMjAzLjkxNEM1MTIgMTk2LjAzOSA1MTAuNTQ3IDE4OC4yMyA1MDcuNzEzIDE4MC44ODNaTTM4NCAxNjBMMzUyIDIyNEgxNjBMMTI4IDE2MEg3OS4yNjZMMTE3LjY1NiA2NEgzOTQuMzQ0TDQzMi43MzQgMTYwSDM4NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Inboxes(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M480 352H384L352 416H160L128 352H32C14.326 352 0 366.328 0 384V464C0 490.508 21.49 512 48 512H464C490.51 512 512 490.508 512 464V384C512 366.328 497.674 352 480 352ZM160 224H352L384 160H432.734L394.344 64H117.656L79.266 160H128L160 224Z" />
            <path d="M507.713 180.883L445.719 20.125C440.844 7.969 429.094 0 416 0H96C82.906 0 71.156 7.969 66.281 20.125L4.287 180.883C1.453 188.23 0 196.039 0 203.914V272C0 298.508 21.49 320 48 320H464C490.51 320 512 298.508 512 272V203.914C512 196.039 510.547 188.23 507.713 180.883ZM384 160L352 224H160L128 160H79.266L117.656 64H394.344L432.734 160H384Z" />
        </Icon>
    </>
}