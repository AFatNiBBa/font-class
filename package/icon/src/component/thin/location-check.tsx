
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-check` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-check?s=thin location-check}
 * @preview ![location-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzguMzQ0IDEzOC4zNDFMMTY0IDI1Mi42ODZMMTA1LjY1NiAxOTQuMzQxQzEwMi41MzEgMTkxLjIxNiA5Ny40NjkgMTkxLjIxNiA5NC4zNDQgMTk0LjM0MUM5MS4yMTkgMTk3LjQ2NiA5MS4yMTkgMjAyLjUyOSA5NC4zNDQgMjA1LjY1NEwxNTguMzQ0IDI2OS42NTRDMTU5LjkwNiAyNzEuMjE3IDE2MS45MzggMjcxLjk5OCAxNjQgMjcxLjk5OFMxNjguMDk0IDI3MS4yMTcgMTY5LjY1NiAyNjkuNjU0TDI4OS42NTYgMTQ5LjY1M0MyOTIuNzgxIDE0Ni41MjggMjkyLjc4MSAxNDEuNDY2IDI4OS42NTYgMTM4LjM0MUMyODYuNTMxIDEzNS4yMTYgMjgxLjQ2OSAxMzUuMjE2IDI3OC4zNDQgMTM4LjM0MVpNMTkyIDBDODUuOTY5IDAgMCA4NS45NjkgMCAxOTIuMDAxQzAgMjY5LjQwOCAyNi45NjkgMjkxLjAzMyAxNzIuMjgxIDUwMS42NzZDMTc3LjA0NyA1MDguNTU5IDE4NC41MjMgNTEyIDE5MiA1MTJTMjA2Ljk1MyA1MDguNTU5IDIxMS43MTkgNTAxLjY3NkMzNTcuMDMxIDI5MS4wMzMgMzg0IDI2OS40MDggMzg0IDE5Mi4wMDFDMzg0IDg1Ljk2OSAyOTguMDMxIDAgMTkyIDBaTTE5OC41NjQgNDkyLjU2NkMxOTYuNDk2IDQ5NS41NTMgMTkzLjU2NCA0OTYgMTkyIDQ5NlMxODcuNTA0IDQ5NS41NTMgMTg1LjQ1MSA0OTIuNTlDMTU5LjUyIDQ1NSAxMzcuMzUyIDQyMy40MjEgMTE4LjQzMiAzOTYuNDY4QzMxLjYzOSAyNzIuODMyIDE2IDI1MC41NTMgMTYgMTkyLjAwMUMxNiA5NC45NTQgOTQuOTUzIDE2IDE5MiAxNlMzNjggOTQuOTU0IDM2OCAxOTIuMDAxQzM2OCAyNTAuNTUzIDM1Mi4zNjEgMjcyLjgzMiAyNjUuNTY4IDM5Ni40NjhDMjQ2LjY0OCA0MjMuNDIxIDIyNC40OCA0NTUgMTk4LjU2NCA0OTIuNTY2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function LocationCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M278.344 138.341L164 252.686L105.656 194.341C102.531 191.216 97.469 191.216 94.344 194.341C91.219 197.466 91.219 202.529 94.344 205.654L158.344 269.654C159.906 271.217 161.938 271.998 164 271.998S168.094 271.217 169.656 269.654L289.656 149.653C292.781 146.528 292.781 141.466 289.656 138.341C286.531 135.216 281.469 135.216 278.344 138.341ZM192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM198.564 492.566C196.496 495.553 193.564 496 192 496S187.504 495.553 185.451 492.59C159.52 455 137.352 423.421 118.432 396.468C31.639 272.832 16 250.553 16 192.001C16 94.954 94.953 16 192 16S368 94.954 368 192.001C368 250.553 352.361 272.832 265.568 396.468C246.648 423.421 224.48 455 198.564 492.566Z" />
        </Icon>
    </>
}