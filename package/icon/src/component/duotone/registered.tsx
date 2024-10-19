
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `registered` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=duotone registered}
 * @preview ![registered](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwNCAyMTYuMzc1QzMwNCAyMjkuODEzIDI5My4wNjIgMjQwLjcxOSAyNzkuNjI1IDI0MC43MTlIMjI0VjE5MkgyNzkuNjI1QzI5My4wNjIgMTkyIDMwNCAyMDIuOTM4IDMwNCAyMTYuMzc1Wk00OTYgMjU2QzQ5NiAzODguNTc4IDM4OC41ODIgNDk2IDI1NiA0OTZDMTIzLjQyIDQ5NiAxNiAzODguNTc4IDE2IDI1NlMxMjMuNDIgMTYgMjU2IDE2QzM4OC41ODIgMTYgNDk2IDEyMy40MjIgNDk2IDI1NlpNMzI4LjQ2MSAyODkuOTAyQzM1Mi4yNTYgMjc0LjA1NSAzNjggMjQ3LjAzOSAzNjggMjE2LjM3NUMzNjggMTY3LjY1NiAzMjguMzQ0IDEyOCAyNzkuNjI1IDEyOEgxOTJDMTc0LjMxMiAxMjggMTYwIDE0Mi4zMTIgMTYwIDE2MFYzNTJDMTYwIDM2OS42ODggMTc0LjMxMiAzODQgMTkyIDM4NFMyMjQgMzY5LjY4OCAyMjQgMzUyVjMwNC43MTlIMjY0Ljc0NEwyOTMuMTg4IDM2NS41NjJDMjk4LjY1NiAzNzcuMTg4IDMxMC4xNTYgMzg0IDMyMi4yMTkgMzg0QzMyNi43NSAzODQgMzMxLjM3NSAzODMuMDMxIDMzNS43NSAzODAuOTY5QzM1MS43NSAzNzMuNSAzNTguNjU2IDM1NC40MzcgMzUxLjE4OCAzMzguNDM3TDMyOC40NjEgMjg5LjkwMloiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzI4LjQ2MSAyODkuOTAyQzM1Mi4yNTYgMjc0LjA1NSAzNjggMjQ3LjAzOSAzNjggMjE2LjM3NUMzNjggMTY3LjY1NiAzMjguMzQ0IDEyOCAyNzkuNjI1IDEyOEgxOTJDMTc0LjMxMiAxMjggMTYwIDE0Mi4zMTIgMTYwIDE2MFYzNTJDMTYwIDM2OS42ODggMTc0LjMxMiAzODQgMTkyIDM4NFMyMjQgMzY5LjY4OCAyMjQgMzUyVjMwNC43MTlIMjY0Ljc0NEwyOTMuMTg4IDM2NS41NjJDMjk4LjY1NiAzNzcuMTg4IDMxMC4xNTYgMzg0IDMyMi4yMTkgMzg0QzMyNi43NSAzODQgMzMxLjM3NSAzODMuMDMxIDMzNS43NSAzODAuOTY5QzM1MS43NSAzNzMuNSAzNTguNjU2IDM1NC40MzcgMzUxLjE4OCAzMzguNDM3TDMyOC40NjEgMjg5LjkwMlpNMjc5LjYyNSAyNDAuNzE5SDIyNFYxOTJIMjc5LjYyNUMyOTMuMDYyIDE5MiAzMDQgMjAyLjkzOCAzMDQgMjE2LjM3NVMyOTMuMDYyIDI0MC43MTkgMjc5LjYyNSAyNDAuNzE5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Registered(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M304 216.375C304 229.813 293.062 240.719 279.625 240.719H224V192H279.625C293.062 192 304 202.938 304 216.375ZM496 256C496 388.578 388.582 496 256 496C123.42 496 16 388.578 16 256S123.42 16 256 16C388.582 16 496 123.422 496 256ZM328.461 289.902C352.256 274.055 368 247.039 368 216.375C368 167.656 328.344 128 279.625 128H192C174.312 128 160 142.312 160 160V352C160 369.688 174.312 384 192 384S224 369.688 224 352V304.719H264.744L293.188 365.562C298.656 377.188 310.156 384 322.219 384C326.75 384 331.375 383.031 335.75 380.969C351.75 373.5 358.656 354.437 351.188 338.437L328.461 289.902Z" />
            <path d="M328.461 289.902C352.256 274.055 368 247.039 368 216.375C368 167.656 328.344 128 279.625 128H192C174.312 128 160 142.312 160 160V352C160 369.688 174.312 384 192 384S224 369.688 224 352V304.719H264.744L293.188 365.562C298.656 377.188 310.156 384 322.219 384C326.75 384 331.375 383.031 335.75 380.969C351.75 373.5 358.656 354.437 351.188 338.437L328.461 289.902ZM279.625 240.719H224V192H279.625C293.062 192 304 202.938 304 216.375S293.062 240.719 279.625 240.719Z" />
        </Icon>
    </>
}