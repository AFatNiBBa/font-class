
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stairs` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stairs?s=sharp-duotone-solid stairs}
 * @preview ![stairs](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMzUybDAgNjQgNjQgMCAwLTY0LTY0IDB6TTI1NiAyMjRsMCA2NCA2NCAwIDAtNjQtNjQgMHpNMzg0IDk2bDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgMzJsLTMyIDAgMCAzMiAwIDMyIDY0IDAgOTYgMCAzMiAwIDAtNjQtMzIgMEw0MTYgMzJ6TTM4NCAxNjBsLTk2IDAtMzIgMCAwIDMyIDAgMzIgNjQgMCA5NiAwIDMyIDAgMC0zMiAwLTMyLTY0IDB6TTE2MCAyODhsLTMyIDAgMCAzMiAwIDMyIDY0IDAgOTYgMCAzMiAwIDAtMzIgMC0zMi02NCAwLTk2IDB6bTMyIDEyOGwtNjQgMC05NiAwTDAgNDE2bDAgNjQgMzIgMCAxMjggMCAzMiAwIDAtMzIgMC0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Stairs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M128 352l0 64 64 0 0-64-64 0zM256 224l0 64 64 0 0-64-64 0zM384 96l0 64 64 0 0-64-64 0z" />
            <path d="M416 32l-32 0 0 32 0 32 64 0 96 0 32 0 0-64-32 0L416 32zM384 160l-96 0-32 0 0 32 0 32 64 0 96 0 32 0 0-32 0-32-64 0zM160 288l-32 0 0 32 0 32 64 0 96 0 32 0 0-32 0-32-64 0-96 0zm32 128l-64 0-96 0L0 416l0 64 32 0 128 0 32 0 0-32 0-32z" />
    </Icon>
);

export default Stairs;