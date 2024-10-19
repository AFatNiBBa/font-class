
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-to-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-to-dotted-line?s=sharp-duotone-solid up-to-dotted-line}
 * @preview ![up-to-dotted-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDY0IDAgMCA2NEwwIDk2IDAgMzJ6bTk2IDBsNjQgMCAwIDY0TDk2IDk2bDAtNjR6bTk2IDBsNjQgMCAwIDY0LTY0IDAgMC02NHptOTYgMGw2NCAwIDAgNjQtNjQgMCAwLTY0em05NiAwbDY0IDAgMCA2NC02NCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMTI4TDY0IDI4OGwwIDMyIDk2IDAgMCAxNjAgMTI4IDAgMC0xNjAgOTYgMCAwLTMyTDIyNCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const UpToDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l64 0 0 64L0 96 0 32zm96 0l64 0 0 64L96 96l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
            <path d="M224 128L64 288l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 128z" />
    </Icon>
);

export default UpToDottedLine;