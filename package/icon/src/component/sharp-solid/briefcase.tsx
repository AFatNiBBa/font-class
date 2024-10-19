
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=sharp-solid briefcase}
 * @preview ![briefcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDBsMjQgMEwzNjAgMGwyNCAwIDAgMjQgMCA3MiAxMjggMCAwIDE2MC0xOTIgMC0xMjggMEwwIDI1NiAwIDk2bDEyOCAwIDAtNzIgMC0yNHpNMCAyODhsMTkyIDAgMCA2NCAxMjggMCAwLTY0IDE5MiAwIDAgMTkyTDAgNDgwIDAgMjg4ek0zMzYgNDhMMTc2IDQ4bDAgNDggMTYwIDAgMC00OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l24 0L360 0l24 0 0 24 0 72 128 0 0 160-192 0-128 0L0 256 0 96l128 0 0-72 0-24zM0 288l192 0 0 64 128 0 0-64 192 0 0 192L0 480 0 288zM336 48L176 48l0 48 160 0 0-48z" />
    </Icon>
);

export default Briefcase;