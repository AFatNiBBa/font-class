
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-exclamation?s=sharp-duotone-solid bell-exclamation}
 * @preview ![bell-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2OGwwIDQ4IDQ0OCAwIDAtNDgtNjQtNzIgMC04OGMwLTc3LjQtNTUtMTQyLTEyOC0xNTYuOEwyNTYgMCAxOTIgMGwwIDUxLjJDMTE5IDY2IDY0IDEzMC42IDY0IDIwOGwwIDg4TDAgMzY4ek0yMDAgMTEybDQ4IDAgMCAyNCAwIDk2IDAgMjQtNDggMCAwLTI0IDAtOTYgMC0yNHptMCAxODRsNDggMCAwIDQ4LTQ4IDAgMC00OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0OCAxMTJsMCAyNCAwIDk2IDAgMjQtNDggMCAwLTI0IDAtOTYgMC0yNCA0OCAwem00MCAzMzZjMCAxNy02LjcgMzMuMy0xOC43IDQ1LjNzLTI4LjMgMTguNy00NS4zIDE4LjdzLTMzLjMtNi43LTQ1LjMtMTguN3MtMTguNy0yOC4zLTE4LjctNDUuM2w2NCAwIDY0IDB6TTI0OCAyOTZsMCA0OC00OCAwIDAtNDggNDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BellExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L256 0 192 0l0 51.2C119 66 64 130.6 64 208l0 88L0 368zM200 112l48 0 0 24 0 96 0 24-48 0 0-24 0-96 0-24zm0 184l48 0 0 48-48 0 0-48z" />
            <path d="M248 112l0 24 0 96 0 24-48 0 0-24 0-96 0-24 48 0zm40 336c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0 64 0zM248 296l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default BellExclamation;