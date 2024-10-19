
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `microphone-lines` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/microphone-lines?s=solid microphone-lines}
 * @preview ![microphone-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTIgMzUyQzI0NS4wMzEgMzUyIDI4OCAzMDkuMDMxIDI4OCAyNTZIMjA4QzE5OS4xNjQgMjU2IDE5MiAyNDguODM2IDE5MiAyNDBTMTk5LjE2NCAyMjQgMjA4IDIyNEgyODhWMTkySDIwOEMxOTkuMTY0IDE5MiAxOTIgMTg0LjgzNiAxOTIgMTc2UzE5OS4xNjQgMTYwIDIwOCAxNjBIMjg4VjEyOEgyMDhDMTk5LjE2NCAxMjggMTkyIDEyMC44MzYgMTkyIDExMlMxOTkuMTY0IDk2IDIwOCA5NkgyODhDMjg4IDQyLjk2OSAyNDUuMDMxIDAgMTkyIDBTOTYgNDIuOTY5IDk2IDk2VjI1NkM5NiAzMDkuMDMxIDEzOC45NjkgMzUyIDE5MiAzNTJaTTM0NCAxOTJIMzQ0QzMzMC43NDUgMTkyIDMyMCAyMDIuNzQ1IDMyMCAyMTZWMjU2QzMyMCAzMjkuMzI5IDI1OC4wMzQgMzg4LjQyNSAxODMuNzQ2IDM4My43MzhDMTE3LjY2NCAzNzkuNTY5IDY0IDMxNy4xNDQgNjQgMjUwLjkzVjIxNkM2NCAyMDIuNzQ1IDUzLjI1NSAxOTIgNDAgMTkySDQwQzI2Ljc0NSAxOTIgMTYgMjAyLjc0NSAxNiAyMTZWMjQ4LjE1NkMxNiAzMzcuODEyIDc5Ljk2OSA0MTcuNzE5IDE2OCA0MjkuODQ0VjQ2NEgxMjhDMTA5LjgwNyA0NjQgOTUuMTU4IDQ3OS4xODMgOTYuMDM4IDQ5Ny41NzFDOTYuNDMxIDUwNS43ODQgMTAzLjc3OCA1MTIgMTEyIDUxMkgyNzJDMjgwLjIyMiA1MTIgMjg3LjU3IDUwNS43ODQgMjg3Ljk2MiA0OTcuNTcxQzI4OC44NDEgNDc5LjE4MyAyNzQuMTk1IDQ2NCAyNTYgNDY0SDIxNlY0MzAuMjE5QzMwMS43MTkgNDE4LjQ2OSAzNjggMzQ0LjkwNiAzNjggMjU2VjIxNkMzNjggMjAyLjc0NSAzNTcuMjU1IDE5MiAzNDQgMTkyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MicrophoneLines(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M192 352C245.031 352 288 309.031 288 256H208C199.164 256 192 248.836 192 240S199.164 224 208 224H288V192H208C199.164 192 192 184.836 192 176S199.164 160 208 160H288V128H208C199.164 128 192 120.836 192 112S199.164 96 208 96H288C288 42.969 245.031 0 192 0S96 42.969 96 96V256C96 309.031 138.969 352 192 352ZM344 192H344C330.745 192 320 202.745 320 216V256C320 329.329 258.034 388.425 183.746 383.738C117.664 379.569 64 317.144 64 250.93V216C64 202.745 53.255 192 40 192H40C26.745 192 16 202.745 16 216V248.156C16 337.812 79.969 417.719 168 429.844V464H128C109.807 464 95.158 479.183 96.038 497.571C96.431 505.784 103.778 512 112 512H272C280.222 512 287.57 505.784 287.962 497.571C288.841 479.183 274.195 464 256 464H216V430.219C301.719 418.469 368 344.906 368 256V216C368 202.745 357.255 192 344 192Z" />
        </Icon>
    </>
}