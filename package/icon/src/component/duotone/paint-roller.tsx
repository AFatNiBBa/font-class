
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paint-roller` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/paint-roller?s=duotone paint-roller}
 * @preview ![paint-roller](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMiAxMTJWMTkyQzUxMiAyNDUuMDMxIDQ2OS4wMzEgMjg4IDQxNiAyODhIMjU2VjMyMEMyNzMuNjU2IDMyMCAyODggMzM0LjM0NCAyODggMzUyVjQ4MEMyODggNDk3LjY1NiAyNzMuNjU2IDUxMiAyNTYgNTEySDE5MkMxNzQuMzQ0IDUxMiAxNjAgNDk3LjY1NiAxNjAgNDgwVjM1MkMxNjAgMzM0LjM0NCAxNzQuMzQ0IDMyMCAxOTIgMzIwVjI4OEMxOTIgMjUyLjY1NiAyMjAuNjU2IDIyNCAyNTYgMjI0SDQxNkM0MzMuNjU2IDIyNCA0NDggMjA5LjY1NiA0NDggMTkyVjExMkg0MTZWNDhINDQ4QzQ4My4zNDQgNDggNTEyIDc2LjY1NiA1MTIgMTEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik00MTYgMzJWMTI4QzQxNiAxNDUuNjU2IDQwMS42NTYgMTYwIDM4NCAxNjBIMzJDMTQuMzQ0IDE2MCAwIDE0NS42NTYgMCAxMjhWMzJDMCAxNC4zNDQgMTQuMzQ0IDAgMzIgMEgzODRDNDAxLjY1NiAwIDQxNiAxNC4zNDQgNDE2IDMyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const PaintRoller: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 112V192C512 245.031 469.031 288 416 288H256V320C273.656 320 288 334.344 288 352V480C288 497.656 273.656 512 256 512H192C174.344 512 160 497.656 160 480V352C160 334.344 174.344 320 192 320V288C192 252.656 220.656 224 256 224H416C433.656 224 448 209.656 448 192V112H416V48H448C483.344 48 512 76.656 512 112Z" />
            <path d="M416 32V128C416 145.656 401.656 160 384 160H32C14.344 160 0 145.656 0 128V32C0 14.344 14.344 0 32 0H384C401.656 0 416 14.344 416 32Z" />
    </Icon>
);

export default PaintRoller;