
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hryvnia-sign` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hryvnia-sign?s=duotone hryvnia-sign}
 * @preview ![hryvnia-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDI0MEgxNDEuNjhMMjM4LjM5MSAxODAuNDg0QzI0MC40NjUgMTc5LjIwOSAyNDIuMjE3IDE3Ny42MDQgMjQzLjk2MSAxNzZIMzJDMTQuMzI4IDE3NiAwIDE5MC4zMjggMCAyMDhTMTQuMzI4IDI0MCAzMiAyNDBaTTM4NCAyMDhDMzg0IDE5MC4zMjggMzY5LjY3MiAxNzYgMzUyIDE3NkgzMzIuNjQxQzMyNi42MTcgMjAxLjAwMiAzMTIuNTUzIDIyMy43MDkgMjkyLjQ1NyAyNDBIMzUyQzM2OS42NzIgMjQwIDM4NCAyMjUuNjcyIDM4NCAyMDhaTTM1MiAyNzJIMjQyLjMyTDE0NS42MDkgMzMxLjUxNkMxNDMuNTM1IDMzMi43OTEgMTQxLjc4NSAzMzQuMzk2IDE0MC4wNDEgMzM2SDM1MkMzNjkuNjcyIDMzNiAzODQgMzIxLjY3MiAzODQgMzA0UzM2OS42NzIgMjcyIDM1MiAyNzJaTTAgMzA0QzAgMzIxLjY3MiAxNC4zMjggMzM2IDMyIDMzNkg1MS4zNTlDNTcuMzgzIDMxMC45OTggNzEuNDQ3IDI4OC4yOTEgOTEuNTQzIDI3MkgzMkMxNC4zMjggMjcyIDAgMjg2LjMyOCAwIDMwNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjAyLjc1IDQ4MEgxNjQuOTg0QzEwMC40ODQgNDgwIDQ4IDQyNy41MzEgNDggMzYzLjAxNkM0OCAzMjIuNzAzIDY5LjMyOCAyODQuNTMxIDEwMy42NzIgMjYzLjM5MUwyMzguMzkxIDE4MC40ODRDMjQ5LjQyMiAxNzMuNzAzIDI1NiAxNjEuOTIyIDI1NiAxNDguOTg0QzI1NiAxMjguNTk0IDIzOS40MDYgMTEyIDIxOS4wMTYgMTEySDE4MS4yNUMxNjMuMDE2IDExMiAxNDUuMTcyIDExOS4zOTEgMTMyLjI4MSAxMzIuMjgxQzExNi42NTYgMTQ3LjkwNiA5MS4zNDQgMTQ3LjkwNiA3NS43MTkgMTMyLjI4MVM2MC4wOTQgOTEuMzQ0IDc1LjcxOSA3NS43MTlDMTAzLjkwNiA0Ny41MzEgMTQxLjM5MSAzMiAxODEuMjUgMzJIMjE5LjAxNkMyODMuNTE2IDMyIDMzNiA4NC40ODQgMzM2IDE0OC45ODRDMzM2IDE4OS4yOTcgMzE0LjY3MiAyMjcuNDY5IDI4MC4zMjggMjQ4LjYwOUwxNDUuNjA5IDMzMS41MTZDMTM0LjU3OCAzMzguMjk3IDEyOCAzNTAuMDc4IDEyOCAzNjMuMDE2QzEyOCAzODMuNDA2IDE0NC41OTQgNDAwIDE2NC45ODQgNDAwSDIwMi43NUMyMjEuMjUgNDAwIDIzOC42NDEgMzkyLjgxMiAyNTEuNzAzIDM3OS43MTlDMjY3LjMyOCAzNjQuMDk0IDI5Mi42NTYgMzY0LjA5NCAzMDguMjgxIDM3OS43MTlDMzIzLjkwNiAzOTUuMzEyIDMyMy45MDYgNDIwLjY1NiAzMDguMjk3IDQzNi4yODFDMjgwLjEyNSA0NjQuNDY5IDI0Mi42NDEgNDgwIDIwMi43NSA0ODBaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HryvniaSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M32 240H141.68L238.391 180.484C240.465 179.209 242.217 177.604 243.961 176H32C14.328 176 0 190.328 0 208S14.328 240 32 240ZM384 208C384 190.328 369.672 176 352 176H332.641C326.617 201.002 312.553 223.709 292.457 240H352C369.672 240 384 225.672 384 208ZM352 272H242.32L145.609 331.516C143.535 332.791 141.785 334.396 140.041 336H352C369.672 336 384 321.672 384 304S369.672 272 352 272ZM0 304C0 321.672 14.328 336 32 336H51.359C57.383 310.998 71.447 288.291 91.543 272H32C14.328 272 0 286.328 0 304Z" />
            <path d="M202.75 480H164.984C100.484 480 48 427.531 48 363.016C48 322.703 69.328 284.531 103.672 263.391L238.391 180.484C249.422 173.703 256 161.922 256 148.984C256 128.594 239.406 112 219.016 112H181.25C163.016 112 145.172 119.391 132.281 132.281C116.656 147.906 91.344 147.906 75.719 132.281S60.094 91.344 75.719 75.719C103.906 47.531 141.391 32 181.25 32H219.016C283.516 32 336 84.484 336 148.984C336 189.297 314.672 227.469 280.328 248.609L145.609 331.516C134.578 338.297 128 350.078 128 363.016C128 383.406 144.594 400 164.984 400H202.75C221.25 400 238.641 392.812 251.703 379.719C267.328 364.094 292.656 364.094 308.281 379.719C323.906 395.312 323.906 420.656 308.297 436.281C280.125 464.469 242.641 480 202.75 480Z" />
        </Icon>
    </>
}