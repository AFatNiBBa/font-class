
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=sharp-duotone-solid clipboard}
 * @preview ![clipboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDgwIDAgMCA3MiAwIDI0IDExMiAwIDg4IDAgMjQgMCAwLTcyIDAtMjQgODAgMCAwIDQ0OEwwIDUxMiAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzA0IDY0bC0zMy42IDBDMjYzIDI3LjUgMjMwLjcgMCAxOTIgMHMtNzEgMjcuNS03OC40IDY0TDgwIDY0bDAgOTYgMTEyIDAgMTEyIDAgMC05NnpNMTkyIDU2YTI0IDI0IDAgMSAxIDAgNDggMjQgMjQgMCAxIDEgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-72 0-24 80 0 0 448L0 512 0 64z" />
            <path d="M304 64l-33.6 0C263 27.5 230.7 0 192 0s-71 27.5-78.4 64L80 64l0 96 112 0 112 0 0-96zM192 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Clipboard;