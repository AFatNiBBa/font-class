
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-left?s=sharp-duotone-solid align-left}
 * @preview ![align-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgOTZsMjg4IDAgMC02NEwwIDMyek0wIDI4OGwwIDY0IDI4OCAwIDAtNjRMMCAyODh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDQ4MGw0NDggMCAwLTY0TDAgNDE2bDAgNjR6TTAgMjI0bDQ0OCAwIDAtNjRMMCAxNjBsMCA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const AlignLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l288 0 0-64L0 32zM0 288l0 64 288 0 0-64L0 288z" />
            <path d="M0 480l448 0 0-64L0 416l0 64zM0 224l448 0 0-64L0 160l0 64z" />
    </Icon>
);

export default AlignLeft;