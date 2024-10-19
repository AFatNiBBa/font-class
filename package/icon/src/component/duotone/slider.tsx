
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `slider` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=duotone slider}
 * @preview ![slider](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgMjQwVjI3MkMwIDI4OS42IDE0LjQgMzA0IDMyIDMwNEgyMjRWMjA4SDMyQzE0LjQgMjA4IDAgMjIyLjQgMCAyNDBaTTQ4MCAyMDhINDE2VjMwNEg0ODBDNDk3LjYgMzA0IDUxMiAyODkuNiA1MTIgMjcyVjI0MEM1MTIgMjIyLjQgNDk3LjYgMjA4IDQ4MCAyMDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM2OCA5NkgzMDRDMjc3LjQ5IDk2IDI1NiAxMTcuNDkgMjU2IDE0NFYzNjhDMjU2IDM5NC41MSAyNzcuNDkgNDE2IDMwNCA0MTZIMzY4QzM5NC41MSA0MTYgNDE2IDM5NC41MSA0MTYgMzY4VjE0NEM0MTYgMTE3LjQ5IDM5NC41MSA5NiAzNjggOTZaTTM1MiAzNTJIMzIwVjE2MEgzNTJWMzUyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Slider(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M0 240V272C0 289.6 14.4 304 32 304H224V208H32C14.4 208 0 222.4 0 240ZM480 208H416V304H480C497.6 304 512 289.6 512 272V240C512 222.4 497.6 208 480 208Z" />
            <path d="M368 96H304C277.49 96 256 117.49 256 144V368C256 394.51 277.49 416 304 416H368C394.51 416 416 394.51 416 368V144C416 117.49 394.51 96 368 96ZM352 352H320V160H352V352Z" />
        </Icon>
    </>
}