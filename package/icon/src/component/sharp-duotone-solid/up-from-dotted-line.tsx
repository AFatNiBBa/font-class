
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-from-dotted-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-from-dotted-line?s=sharp-duotone-solid up-from-dotted-line}
 * @preview ![up-from-dotted-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmw2NCAwIDAgNjRMMCA0ODBsMC02NHptOTYgMGw2NCAwIDAgNjQtNjQgMCAwLTY0em05NiAwbDY0IDAgMCA2NC02NCAwIDAtNjR6bTk2IDBsNjQgMCAwIDY0LTY0IDAgMC02NHptOTYgMGw2NCAwIDAgNjQtNjQgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDMyTDY0IDE5MmwwIDMyIDk2IDAgMCAxNjAgMTI4IDAgMC0xNjAgOTYgMCAwLTMyTDIyNCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const UpFromDottedLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 416l64 0 0 64L0 480l0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
            <path d="M224 32L64 192l0 32 96 0 0 160 128 0 0-160 96 0 0-32L224 32z" />
    </Icon>
);

export default UpFromDottedLine;