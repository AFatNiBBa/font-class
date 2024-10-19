
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chevron-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chevron-down?s=sharp-duotone-solid chevron-down}
 * @preview ![chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgNDI5LjNsLTIyLjYtMjIuNi0xOTItMTkyTDE4LjcgMTkyIDY0IDE0Ni43bDIyLjYgMjIuNkwyNTYgMzM4LjcgNDI1LjQgMTY5LjQgNDQ4IDE0Ni43IDQ5My4zIDE5MmwtMjIuNiAyMi42LTE5MiAxOTJMMjU2IDQyOS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const ChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 429.3l-22.6-22.6-192-192L18.7 192 64 146.7l22.6 22.6L256 338.7 425.4 169.4 448 146.7 493.3 192l-22.6 22.6-192 192L256 429.3z" />
    </Icon>
);

export default ChevronDown;