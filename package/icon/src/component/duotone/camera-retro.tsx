
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `camera-retro` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=duotone camera-retro}
 * @preview ![camera-retro](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ2NCAzMkgyNzEuMTA3QzI2MS4xNzIgMzIgMjUxLjM3MyAzNC4zMTIgMjQyLjQ4NiAzOC43NTZMMTkyIDY0SDQ4QzIxLjQ5IDY0IDAgODUuNDkgMCAxMTJWMTYwSDUxMlY4MEM1MTIgNTMuNDkgNDkwLjUxIDMyIDQ2NCAzMlpNMjU2IDIyNEMyMTEuOTA4IDIyNCAxNzYgMjU5LjkwOCAxNzYgMzA0QzE3NiAzNDguMDkgMjExLjkwOCAzODQgMjU2IDM4NFMzMzYgMzQ4LjA5IDMzNiAzMDRDMzM2IDI1OS45MDggMzAwLjA5MiAyMjQgMjU2IDIyNFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTYwIDQ4QzE2MCAzOS4xNjIgMTUyLjgzNiAzMiAxNDQgMzJIODBDNzEuMTY0IDMyIDY0IDM5LjE2MiA2NCA0OFY2NEgxNjBWNDhaTTAgMTYwVjQzMkMwIDQ1OC41MSAyMS40OSA0ODAgNDggNDgwSDQ2NEM0OTAuNTEgNDgwIDUxMiA0NTguNTEgNTEyIDQzMlYxNjBIMFpNMjU2IDQxNkMxOTQuMjczIDQxNiAxNDQgMzY1LjcyNyAxNDQgMzA0QzE0NCAyNDIuMjcxIDE5NC4yNzMgMTkyIDI1NiAxOTJTMzY4IDI0Mi4yNzEgMzY4IDMwNEMzNjggMzY1LjcyNyAzMTcuNzI3IDQxNiAyNTYgNDE2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function CameraRetro(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M464 32H271.107C261.172 32 251.373 34.312 242.486 38.756L192 64H48C21.49 64 0 85.49 0 112V160H512V80C512 53.49 490.51 32 464 32ZM256 224C211.908 224 176 259.908 176 304C176 348.09 211.908 384 256 384S336 348.09 336 304C336 259.908 300.092 224 256 224Z" />
            <path d="M160 48C160 39.162 152.836 32 144 32H80C71.164 32 64 39.162 64 48V64H160V48ZM0 160V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V160H0ZM256 416C194.273 416 144 365.727 144 304C144 242.271 194.273 192 256 192S368 242.271 368 304C368 365.727 317.727 416 256 416Z" />
        </Icon>
    </>
}