
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `avocado` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/avocado?s=duotone avocado}
 * @preview ![avocado](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM3MS40NjUgLTAuMDAyQzMzMi4yNiAtMC4wMDIgMjkyLjc0OCAxNS43MzYgMjYzLjQwNiA0NS4xNzRMMjYzLjI0IDQ1LjM0QzIzMi4yMDMgNzYuNDc5IDE5Mi45NzcgOTcuMzAzIDE1MC42MzMgMTA4LjkwOEMxMTUuMzYzIDExOC41NzQgMCAxNzAuODI4IDAgMzA2LjcwNUMwIDQyMC4xMTMgOTIuMzU0IDUxMS45OTggMjA1LjA2MiA1MTEuOTk4QzI1Ny40MzIgNTExLjk5OCAzMDkuNzk5IDQ5MS45NTcgMzQ5Ljc1NCA0NTEuODcxQzQxNy40MDIgMzg0LjAwOCAzOTIuMzEyIDMyMS44NTQgNDY1LjczNiAyNDguMTg5TDQ3MC4wOTQgMjQzLjgxOEM0OTguMDMxIDIxNS43ODkgNTEyIDE3OS4wNTMgNTEyIDE0Mi4zMThDNTEyIDcwLjI2NiA0NTUuNTU3IC0wLjAwMiAzNzEuNDY1IC0wLjAwMlpNMjAwLjQyMiAzODMuOTk4QzE0NS45MDggMzgzLjk5OCAxMjcuOTI4IDM0MC40MTQgMTI3LjkyOCAzMTEuMzRDMTI3LjkyOCAyNTAuNTg4IDE4Ni41NjQgMTkxLjk5OCAyNDcgMTkxLjk5OEMzMDEuNTE2IDE5MS45OTggMzE5LjQ5OCAyMzUuNTg2IDMxOS40OTggMjY0LjY2QzMxOS40OTggMzI1LjM5NSAyNjAuODY3IDM4My45OTggMjAwLjQyMiAzODMuOTk4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMTkuNTcxIDI2NC42NkMzMTkuNTcxIDMyNS4zOTYgMjYwLjkzOSAzODMuOTk5IDIwMC40OTUgMzgzLjk5OUMxNDUuOTgxIDM4My45OTkgMTI4IDM0MC40MTQgMTI4IDMxMS4zNDFDMTI4IDI1MC41ODggMTg2LjYzNyAxOTEuOTk5IDI0Ny4wNzMgMTkxLjk5OUMzMDEuNTg4IDE5MS45OTkgMzE5LjU3MSAyMzUuNTg2IDMxOS41NzEgMjY0LjY2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Avocado(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M371.465 -0.002C332.26 -0.002 292.748 15.736 263.406 45.174L263.24 45.34C232.203 76.479 192.977 97.303 150.633 108.908C115.363 118.574 0 170.828 0 306.705C0 420.113 92.354 511.998 205.062 511.998C257.432 511.998 309.799 491.957 349.754 451.871C417.402 384.008 392.312 321.854 465.736 248.189L470.094 243.818C498.031 215.789 512 179.053 512 142.318C512 70.266 455.557 -0.002 371.465 -0.002ZM200.422 383.998C145.908 383.998 127.928 340.414 127.928 311.34C127.928 250.588 186.564 191.998 247 191.998C301.516 191.998 319.498 235.586 319.498 264.66C319.498 325.395 260.867 383.998 200.422 383.998Z" />
            <path d="M319.571 264.66C319.571 325.396 260.939 383.999 200.495 383.999C145.981 383.999 128 340.414 128 311.341C128 250.588 186.637 191.999 247.073 191.999C301.588 191.999 319.571 235.586 319.571 264.66Z" />
        </Icon>
    </>
}