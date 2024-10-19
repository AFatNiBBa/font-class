
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cabin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabin?s=sharp-duotone-solid cabin}
 * @preview ![cabin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyNTZsMTYwIDAgMCA2NEwzMiAzMjBsMC02NHptMCA5NmwxNjAgMCAwIDY0TDMyIDQxNmwwLTY0em0wIDk2bDE2MCAwIDAgNjRMMzIgNTEybDAtNjR6TTMyMCAyNTZsMTYwIDAgMCA2NC0xNjAgMCAwLTY0em0wIDk2bDE2MCAwIDAgNjQtMTYwIDAgMC02NHptMCA5NmwxNjAgMCAwIDY0LTE2MCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDE3NmwwIDQ4IDM4NCAwIDk2IDAgMzIgMCAwLTQ4LTMyLTIyIDAtMTIyLTk2IDAgMCA1NkwyNTYgMCAwIDE3NnpNMjU2IDk2YTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cabin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 256l160 0 0 64L32 320l0-64zm0 96l160 0 0 64L32 416l0-64zm0 96l160 0 0 64L32 512l0-64zM320 256l160 0 0 64-160 0 0-64zm0 96l160 0 0 64-160 0 0-64zm0 96l160 0 0 64-160 0 0-64z" />
            <path d="M0 176l0 48 384 0 96 0 32 0 0-48-32-22 0-122-96 0 0 56L256 0 0 176zM256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Cabin;