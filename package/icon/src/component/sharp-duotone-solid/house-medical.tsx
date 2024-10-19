
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-medical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-medical?s=sharp-duotone-solid house-medical}
 * @preview ![house-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAyNzJsLjEgMjQwIDQ0OC41IDAtLjUtMjI0Yy0uMS01LjMtLjEtMTAuNy0uMS0xNkwyODggODhDMjEzLjMgMTQ5LjMgMTM4LjcgMjEwLjYgNjQgMjcyem0xMjggMTZsNjQgMCAwLTY0IDY0IDAgMCA2NCA2NCAwIDAgNjQtNjQgMCAwIDY0LTY0IDAgMC02NC02NCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yODggMEwwIDI0MGwwIDMyIDY0IDBMMjg4IDg4IDUxMiAyNzJsNjQgMCAwLTMyTDI4OCAwek0yNTYgMjg4bC02NCAwIDAgNjQgNjQgMCAwIDY0IDY0IDAgMC02NCA2NCAwIDAtNjQtNjQgMCAwLTY0LTY0IDAgMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const HouseMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0-.5-224c-.1-5.3-.1-10.7-.1-16L288 88C213.3 149.3 138.7 210.6 64 272zm128 16l64 0 0-64 64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64z" />
            <path d="M288 0L0 240l0 32 64 0L288 88 512 272l64 0 0-32L288 0zM256 288l-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default HouseMedical;