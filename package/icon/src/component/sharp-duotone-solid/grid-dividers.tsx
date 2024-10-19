
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-dividers` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-dividers?s=sharp-duotone-solid grid-dividers}
 * @preview ![grid-dividers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwwIDEyOCAxMjggMCAwLTEyOEwzMiA5NnptMCAyODhsMCAxMjggMTI4IDAgMC0xMjhMMzIgMzg0ek0xOTIgOTZsMCAxMjggMTI4IDAgMC0xMjhMMTkyIDk2em0wIDI4OGwwIDEyOCAxMjggMCAwLTEyOC0xMjggMHpNMzUyIDk2bDAgMTI4IDEyOCAwIDAtMTI4TDM1MiA5NnptMCAyODhsMCAxMjggMTI4IDAgMC0xMjgtMTI4IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MTIgMEwwIDAgMCA0OGw1MTIgMCAwLTQ4em0wIDI4OEwwIDI4OGwwIDQ4IDUxMiAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const GridDividers: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 96l0 128 128 0 0-128L32 96zm0 288l0 128 128 0 0-128L32 384zM192 96l0 128 128 0 0-128L192 96zm0 288l0 128 128 0 0-128-128 0zM352 96l0 128 128 0 0-128L352 96zm0 288l0 128 128 0 0-128-128 0z" />
            <path d="M512 0L0 0 0 48l512 0 0-48zm0 288L0 288l0 48 512 0 0-48z" />
    </Icon>
);

export default GridDividers;