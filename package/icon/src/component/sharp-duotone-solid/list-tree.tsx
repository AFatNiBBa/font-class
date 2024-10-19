
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=sharp-duotone-solid list-tree}
 * @preview ![list-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNjRsMzIgMCAyODggMCAzMiAwIDAgNjQtMzIgMC0yODggMC0zMiAwIDAtNjR6TTI4OCAyMjRsMzIgMCAxNjAgMCAzMiAwIDAgNjQtMzIgMC0xNjAgMC0zMiAwIDAtNjR6bTAgMTYwbDMyIDAgMTYwIDAgMzIgMCAwIDY0LTMyIDAtMTYwIDAtMzIgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgNDhMMCA0OGwwIDk2IDI0IDAgMCAxMTIgMCAxNjAgMCAyNCAyNCAwIDgwIDAgMCAyNCA5NiAwIDAtOTYtOTYgMCAwIDI0LTU2IDAgMC0xMTIgNTYgMCAwIDI0IDk2IDAgMC05Ni05NiAwIDAgMjQtNTYgMCAwLTg4IDI0IDAgMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ListTree: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 64l32 0 288 0 32 0 0 64-32 0-288 0-32 0 0-64zM288 224l32 0 160 0 32 0 0 64-32 0-160 0-32 0 0-64zm0 160l32 0 160 0 32 0 0 64-32 0-160 0-32 0 0-64z" />
            <path d="M96 48L0 48l0 96 24 0 0 112 0 160 0 24 24 0 80 0 0 24 96 0 0-96-96 0 0 24-56 0 0-112 56 0 0 24 96 0 0-96-96 0 0 24-56 0 0-88 24 0 0-96z" />
    </Icon>
);

export default ListTree;