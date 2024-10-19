
import { Icon, generic } from "../../index";

/**
 * A component that renders the `briefcase` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase?s=sharp-duotone-solid briefcase}
 * @preview ![briefcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDQ4MGw1MTIgMCAwLTE5Mi0xOTIgMCAwIDY0LTEyOCAwIDAtNjRMMCAyODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNTIgMEwxMjggMGwwIDI0IDAgNzJMMCA5NiAwIDI4OGw1MTIgMCAwLTE5MkwzODQgOTZsMC03MiAwLTI0TDM2MCAwIDE1MiAwek0zMzYgOTZMMTc2IDk2bDAtNDggMTYwIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Briefcase: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288L0 480l512 0 0-192-192 0 0 64-128 0 0-64L0 288z" />
            <path d="M152 0L128 0l0 24 0 72L0 96 0 288l512 0 0-192L384 96l0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48z" />
    </Icon>
);

export default Briefcase;