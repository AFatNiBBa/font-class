
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell?s=sharp-duotone-solid bell}
 * @preview ![bell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2OGwwIDQ4IDQ0OCAwIDAtNDgtNjQtNzIgMC04OGMwLTc3LjQtNTUtMTQyLTEyOC0xNTYuOEwyNTYgMCAxOTIgMGwwIDUxLjJDMTE5IDY2IDY0IDEzMC42IDY0IDIwOGwwIDg4TDAgMzY4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDQ0OGMwIDE3LTYuNyAzMy4zLTE4LjcgNDUuM3MtMjguMyAxOC43LTQ1LjMgMTguN3MtMzMuMy02LjctNDUuMy0xOC43cy0xOC43LTI4LjMtMTguNy00NS4zbDY0IDBoNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Bell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L256 0 192 0l0 51.2C119 66 64 130.6 64 208l0 88L0 368z" />
            <path d="M288 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0h64z" />
    </Icon>
);

export default Bell;