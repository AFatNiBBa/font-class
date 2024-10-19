
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-caret-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-down?s=sharp-duotone-solid circle-caret-down}
 * @preview ![circle-caret-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC00OGwyNTYgMCAwIDMyTDI1NiAzNjggMTI4IDI0MGwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDIwOHYzMkwyNTYgMzY4IDM4NCAyNDBWMjA4SDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleCaretDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-48l256 0 0 32L256 368 128 240l0-32z" />
            <path d="M128 208v32L256 368 384 240V208H128z" />
    </Icon>
);

export default CircleCaretDown;