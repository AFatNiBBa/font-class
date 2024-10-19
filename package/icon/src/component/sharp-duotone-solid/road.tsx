
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road?s=sharp-duotone-solid road}
 * @preview ![road](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMzJsMCA2NCAwIDMyIDY0IDAgMC0zMiAwLTY0LTY0IDB6bTAgMTYwbDAgMzIgMCA2NCAwIDMyIDY0IDAgMC0zMiAwLTY0IDAtMzItNjQgMHptMCAxOTJsMCAzMiAwIDY0IDY0IDAgMC02NCAwLTMyLTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yNTYgMzJMMTI4IDMyIDAgNDgwbDI1NiAwIDAtNjQgMC0zMiA2NCAwIDAgMzIgMCA2NCAyNTYgMEw0NDggMzIgMzIwIDMybDAgNjQgMCAzMi02NCAwIDAtMzIgMC02NHptNjQgMTkybDAgNjQgMCAzMi02NCAwIDAtMzIgMC02NCAwLTMyIDY0IDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Road: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M256 32l0 64 0 32 64 0 0-32 0-64-64 0zm0 160l0 32 0 64 0 32 64 0 0-32 0-64 0-32-64 0zm0 192l0 32 0 64 64 0 0-64 0-32-64 0z" />
            <path d="M256 32L128 32 0 480l256 0 0-64 0-32 64 0 0 32 0 64 256 0L448 32 320 32l0 64 0 32-64 0 0-32 0-64zm64 192l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32z" />
    </Icon>
);

export default Road;