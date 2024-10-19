
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-arrow-up-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up-right?s=sharp-duotone-solid message-arrow-up-right}
 * @preview ![message-arrow-up-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTUwLjEgMjgwTDE4NCAzMTMuOWwxNy0xNyA4Ny04NyAwIDU0LjEgMCAyNCA0OCAwIDAtMjQgMC0xMTIgMC0yNC0yNCAwLTExMiAwLTI0IDAgMCA0OCAyNCAwIDU0LjEgMC04NyA4Ny0xNyAxN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE3NiAxMjhsMjQgMCAxMTIgMCAyNCAwIDAgMjQgMCAxMTIgMCAyNC00OCAwIDAtMjQgMC01NC4xLTg3IDg3LTE3IDE3TDE1MC4xIDI4MGwxNy0xNyA4Ny04N0wyMDAgMTc2bC0yNCAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM150.1 280L184 313.9l17-17 87-87 0 54.1 0 24 48 0 0-24 0-112 0-24-24 0-112 0-24 0 0 48 24 0 54.1 0-87 87-17 17z" />
            <path d="M176 128l24 0 112 0 24 0 0 24 0 112 0 24-48 0 0-24 0-54.1-87 87-17 17L150.1 280l17-17 87-87L200 176l-24 0 0-48z" />
    </Icon>
);

export default MessageArrowUpRight;