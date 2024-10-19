
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-from-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-from-dotted-line?s=sharp-duotone-solid down-from-dotted-line}
 * @preview ![down-from-dotted-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZsNjQgMCAwLTY0TDAgMzJ6bTk2IDBsMCA2NCA2NCAwIDAtNjRMOTYgMzJ6bTk2IDBsMCA2NCA2NCAwIDAtNjQtNjQgMHptOTYgMGwwIDY0IDY0IDAgMC02NC02NCAwem05NiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgNDgwTDY0IDMyMGwwLTMyIDk2IDAgMC0xNjAgMTI4IDAgMCAxNjAgOTYgMCAwIDMyTDIyNCA0ODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const DownFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l64 0 0-64L0 32zm96 0l0 64 64 0 0-64L96 32zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0zm96 0l0 64 64 0 0-64-64 0z" />
            <path d="M224 480L64 320l0-32 96 0 0-160 128 0 0 160 96 0 0 32L224 480z" />
    </Icon>
);

export default DownFromDottedLine;