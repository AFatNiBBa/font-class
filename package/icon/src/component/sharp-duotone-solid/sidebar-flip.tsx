
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sidebar-flip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sidebar-flip?s=sharp-duotone-solid sidebar-flip}
 * @preview ![sidebar-flip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDI4OCAwIDAgNDQ4TDAgNDgwIDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMzJsMjI0IDAgMCA0NDgtMjI0IDAgMC00NDh6bTY0IDY0bDAgNDggOTYgMCAwLTQ4LTk2IDB6bTk2IDk2bC05NiAwIDAgNDggOTYgMCAwLTQ4em0tOTYgOTZsMCA0OCA5NiAwIDAtNDgtOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SidebarFlip: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l288 0 0 448L0 480 0 32z" />
            <path d="M288 32l224 0 0 448-224 0 0-448zm64 64l0 48 96 0 0-48-96 0zm96 96l-96 0 0 48 96 0 0-48zm-96 96l0 48 96 0 0-48-96 0z" />
    </Icon>
);

export default SidebarFlip;