
import { Icon, generic } from "../../index";

/**
 * A component that renders the `send-back` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/send-back?s=sharp-duotone-solid send-back}
 * @preview ![send-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNjQgMCAxOTIgMGw2NCAwIDAgNjQgMCAzMiAwIDk2IDAgNjQtNjQgMC0zMiAwLTk2IDBMMCAyNTZsMC02NEwwIDY0IDAgMHpNNjQgNjRsMCAxMjggMTI4IDAgMC0xMjhMNjQgNjR6TTM4NCAyNTZsNjQgMCAzMiAwIDk2IDAgNjQgMCAwIDY0IDAgMTI4IDAgNjQtNjQgMC0xMjggMC02NCAwIDAtNjQgMC0zMiAwLTk2IDAtNjR6bTY0IDY0bDAgMTI4IDEyOCAwIDAtMTI4LTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDQxNmwwLTE2MCA5NiAwIDAtMTYwIDIyNCAwIDAgMTYwLTk2IDAgMCAxNjAtMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SendBack: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 0 192 0l64 0 0 64 0 32 0 96 0 64-64 0-32 0-96 0L0 256l0-64L0 64 0 0zM64 64l0 128 128 0 0-128L64 64zM384 256l64 0 32 0 96 0 64 0 0 64 0 128 0 64-64 0-128 0-64 0 0-64 0-32 0-96 0-64zm64 64l0 128 128 0 0-128-128 0z" />
            <path d="M160 416l0-160 96 0 0-160 224 0 0 160-96 0 0 160-224 0z" />
    </Icon>
);

export default SendBack;