
import { Icon, generic } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-duotone-solid frame}
 * @preview ![frame](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmw2NCAwIDAgNjQgMCA2NCAwIDE5Mi02NCAwIDAtMTkyIDAtNjQgMC02NHptMCAzODRsNjQgMCAwIDY0LTY0IDAgMC02NHpNMzIwIDMybDY0IDAgMCA2NC02NCAwIDAtNjR6bTAgMTI4bDY0IDAgMCAxOTIgMCA2NCAwIDY0LTY0IDAgMC02NCAwLTY0IDAtMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDQ4IDk2bDAgNjQtMzIwIDAgMC02NCAzMjAgMHpNMCA5Nmw2NCAwIDAgNjRMMCAxNjAgMCA5NnpNMCA0MTZsMC02NCAzMjAgMCAwIDY0TDAgNDE2em00NDggMGwtNjQgMCAwLTY0IDY0IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 32l64 0 0 64 0 64 0 192-64 0 0-192 0-64 0-64zm0 384l64 0 0 64-64 0 0-64zM320 32l64 0 0 64-64 0 0-64zm0 128l64 0 0 192 0 64 0 64-64 0 0-64 0-64 0-192z" />
            <path d="M448 96l0 64-320 0 0-64 320 0zM0 96l64 0 0 64L0 160 0 96zM0 416l0-64 320 0 0 64L0 416zm448 0l-64 0 0-64 64 0 0 64z" />
    </Icon>
);

export default Frame;