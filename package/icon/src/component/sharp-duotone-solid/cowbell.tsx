
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=sharp-duotone-solid cowbell}
 * @preview ![cowbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ0OGwxNjAgMCAxMjggMCAxNjAgMEwzODQgOTZsLTY0IDAgMC03MiAwLTI0TDI5NiAwIDE1MiAwIDEyOCAwbDAgMjQgMCA3Mkw2NCA5NiAwIDQ0OHpNMTc2IDQ4bDk2IDAgMCA0OC05NiAwIDAtNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgNTEyYzM1LjMgMCA2NC0yOC43IDY0LTY0SDE2MGMwIDM1LjMgMjguNyA2NCA2NCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 448l160 0 128 0 160 0L384 96l-64 0 0-72 0-24L296 0 152 0 128 0l0 24 0 72L64 96 0 448zM176 48l96 0 0 48-96 0 0-48z" />
            <path d="M224 512c35.3 0 64-28.7 64-64H160c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Cowbell;