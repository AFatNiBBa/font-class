
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=sharp-duotone-solid arrow-down-to-line}
 * @preview ![arrow-down-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmwwIDY0IDMyIDAgMzIwIDAgMzIgMCAwLTY0LTMyIDBMMzIgNDE2IDAgNDE2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDM2NS4zbDIyLjYtMjIuNiAxMjgtMTI4TDM2NS4zIDE5MiAzMjAgMTQ2LjdsLTIyLjYgMjIuNkwyMjQgMjQyLjcgMjI0IDY0bDAtMzItNjQgMCAwIDMyIDAgMTc4LjdMODYuNiAxNjkuNCA2NCAxNDYuNyAxOC43IDE5MmwyMi42IDIyLjYgMTI4IDEyOEwxOTIgMzY1LjN6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0 320 0 32 0 0-64-32 0L32 416 0 416z" />
            <path d="M192 365.3l22.6-22.6 128-128L365.3 192 320 146.7l-22.6 22.6L224 242.7 224 64l0-32-64 0 0 32 0 178.7L86.6 169.4 64 146.7 18.7 192l22.6 22.6 128 128L192 365.3z" />
    </Icon>
);

export default ArrowDownToLine;