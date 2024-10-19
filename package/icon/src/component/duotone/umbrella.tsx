
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `umbrella` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella?s=duotone umbrella}
 * @preview ![umbrella](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyMC4yNjQgMjY0LjAyVjQzMS45ODRDMzIwLjI2NCA0NzYuMDg2IDI4NC4zNTYgNTEyIDI0MC4yNiA1MTJDMjA2LjQ0NiA1MTIgMTc2LjA2OSA0OTAuNTkgMTY0Ljg0OCA0NTguNjc4QzE1OC45NDIgNDQyLjA4IDE2Ny42NiA0MjMuNzY0IDE4NC4zNSA0MTcuODg5QzIwMS4wNjkgNDExLjk4IDIxOS4yNTggNDIwLjY3IDIyNS4xNjQgNDM3LjM5M0MyMjcuMDcxIDQ0Mi43NjggMjMyLjQ0NiA0NDguMDgyIDI0MC4yNiA0NDguMDgyQzI0OS4wNzIgNDQ4LjA4MiAyNTYuMjYgNDQwLjg5MyAyNTYuMjYgNDMyLjA3OFYyNjMuMjc5QzI2NS42OSAyNTguNzc3IDI3Ni4yMDkgMjU2LjA0NyAyODguMjYyIDI1Ni4wNDdDMzAwLjIzNSAyNTYuMDQ3IDMxMC42OTIgMjU5LjM5OCAzMjAuMjY0IDI2NC4wMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTc1LjcwMSAyODAuODY0QzU0Ny4xMDcgMTQ0LjUyNiA0MzcuMzE4IDYyLjYwNiAzMjAgNDkuOTE1VjMyLjAwNkMzMjAgMTQuMzE1IDMwNS42ODggMC4wMDEgMjg3Ljk5OCAwLjAwMVMyNTUuOTk2IDE0LjMxNSAyNTUuOTk2IDMyLjAwNlY0OS45MTVDMTM4LjMwMyA2Mi42MDYgMjkuNDgyIDE0NC41MjYgMC4yOTUgMjgwLjg2NEMtMS45MjYgMjkwLjk2IDguNzk1IDMwMi4xNDkgMTguOTgyIDI5Mi4yNDFDNzAuOTg2IDIzNy4yMzEgMTI2LjY3NiAyMzkuODU2IDE3Ny41ODYgMzI5LjI0OUMxODIuODk4IDMzOC43NTEgMTkyLjQ5MiAzMzcuODc0IDE5Ny4zMDUgMzI5LjI0OUMyMTcuNDk0IDI5My44NjYgMjQyLjE4NCAyNTYuMDQ3IDI4Ny45OTggMjU2LjA0N0MzNDYuNTAyIDI1Ni4wNDcgMzc2LjE5MSAzMjQuODcyIDM3OC42OTEgMzI5LjI0OUMzODMuNTA0IDMzNy44NzQgMzkzLjA5OCAzMzguNzUxIDM5OC40MSAzMjkuMjQ5QzQ0OS40MTQgMjM5LjczMSA1MDUuNTEgMjM3Ljg1NiA1NTcuMDE0IDI5Mi4yNDFDNTY3LjMyNiAzMDIuMjQzIDU3Ny45MjIgMjkwLjk2IDU3NS43MDEgMjgwLjg2NFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Umbrella(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M320.264 264.02V431.984C320.264 476.086 284.356 512 240.26 512C206.446 512 176.069 490.59 164.848 458.678C158.942 442.08 167.66 423.764 184.35 417.889C201.069 411.98 219.258 420.67 225.164 437.393C227.071 442.768 232.446 448.082 240.26 448.082C249.072 448.082 256.26 440.893 256.26 432.078V263.279C265.69 258.777 276.209 256.047 288.262 256.047C300.235 256.047 310.692 259.398 320.264 264.02Z" />
            <path d="M575.701 280.864C547.107 144.526 437.318 62.606 320 49.915V32.006C320 14.315 305.688 0.001 287.998 0.001S255.996 14.315 255.996 32.006V49.915C138.303 62.606 29.482 144.526 0.295 280.864C-1.926 290.96 8.795 302.149 18.982 292.241C70.986 237.231 126.676 239.856 177.586 329.249C182.898 338.751 192.492 337.874 197.305 329.249C217.494 293.866 242.184 256.047 287.998 256.047C346.502 256.047 376.191 324.872 378.691 329.249C383.504 337.874 393.098 338.751 398.41 329.249C449.414 239.731 505.51 237.856 557.014 292.241C567.326 302.243 577.922 290.96 575.701 280.864Z" />
        </Icon>
    </>
}