
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vial-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-circle-check?s=duotone vial-circle-check}
 * @preview ![vial-circle-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0QzAgODEuNyAxNC4zIDk2IDMyIDk2bDAgMjg4YzAgNTMgNDMgOTYgOTYgOTZjMzIuNiAwIDYxLjUtMTYuMyA3OC44LTQxLjJDMTk3LjMgNDE3LjEgMTkyIDM5My4yIDE5MiAzNjhjMC0zNy43IDExLjgtNzIuNiAzMi0xMDEuMkwyMjQgOTZjMTcuNyAwIDMyLTE0LjMgMzItMzJzLTE0LjMtMzItMzItMzJsLTY0IDBMOTYgMzIgMzIgMzJDMTQuMyAzMiAwIDQ2LjMgMCA2NHpNOTYgOTZsNjQgMCAwIDk2LTY0IDAgMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM2OCA1MTJhMTQ0IDE0NCAwIDEgMCAwLTI4OCAxNDQgMTQ0IDAgMSAwIDAgMjg4em02Ny4zLTE2NC43bC03MiA3MmMtNi4yIDYuMi0xNi40IDYuMi0yMi42IDBsLTQwLTQwYy02LjItNi4yLTYuMi0xNi40IDAtMjIuNnMxNi40LTYuMiAyMi42IDBMMzUyIDM4NS40bDYwLjctNjAuN2M2LjItNi4yIDE2LjQtNi4yIDIyLjYgMHM2LjIgMTYuNCAwIDIyLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const VialCircleCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 81.7 14.3 96 32 96l0 288c0 53 43 96 96 96c32.6 0 61.5-16.3 78.8-41.2C197.3 417.1 192 393.2 192 368c0-37.7 11.8-72.6 32-101.2L224 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0L96 32 32 32C14.3 32 0 46.3 0 64zM96 96l64 0 0 96-64 0 0-96z" />
            <path d="M368 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L352 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default VialCircleCheck;