
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up?s=sharp-duotone-solid message-arrow-up}
 * @preview ![message-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTUwLjEgMTkyTDE4NCAyMjUuOWwxNy0xNyAzMS0zMUwyMzIgMjk2bDAgMjQgNDggMCAwLTI0IDAtMTE4LjEgMzEgMzEgMTcgMTdMMzYxLjkgMTkybC0xNy0xNy03Mi03Mi0xNy0xNy0xNyAxNy03MiA3Mi0xNyAxN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4MCAzMjBsMC0yNCAwLTExOC4xIDMxIDMxIDE3IDE3TDM2MS45IDE5MmwtMTctMTctNzItNzItMTctMTctMTcgMTctNzIgNzItMTcgMTdMMTg0IDIyNS45bDE3LTE3IDMxLTMxTDIzMiAyOTZsMCAyNCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MessageArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM150.1 192L184 225.9l17-17 31-31L232 296l0 24 48 0 0-24 0-118.1 31 31 17 17L361.9 192l-17-17-72-72-17-17-17 17-72 72-17 17z" />
            <path d="M280 320l0-24 0-118.1 31 31 17 17L361.9 192l-17-17-72-72-17-17-17 17-72 72-17 17L184 225.9l17-17 31-31L232 296l0 24 48 0z" />
    </Icon>
);

export default MessageArrowUp;