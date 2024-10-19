
import { Icon, generic } from "../../index";

/**
 * A component that renders the `piano-keyboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piano-keyboard?s=sharp-duotone-solid piano-keyboard}
 * @preview ![piano-keyboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGw2NCAwIDAgMTYwIDgwIDAgMC02NCAzMiAwIDAgNjQgOTYgMCAwLTY0IDMyIDAgMCA2NCA5NiAwIDAtNjQgMzIgMCAwIDY0IDgwIDAgMC0xNjAgNjQgMCAwIDE5MiAwIDMyLTMyIDBMMzIgNDQ4IDAgNDQ4bDAtMzJMMCAyMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01NzYgNjRMMCA2NCAwIDIyNGwxMjggMCAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtNjQgNjQgMCAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtNjQgNjQgMCAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtNjQgMTI4IDAgMC0xNjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PianoKeyboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224l64 0 0 160 80 0 0-64 32 0 0 64 96 0 0-64 32 0 0 64 96 0 0-64 32 0 0 64 80 0 0-160 64 0 0 192 0 32-32 0L32 448 0 448l0-32L0 224z" />
            <path d="M576 64L0 64 0 224l128 0 0 64 0 32 64 0 0-32 0-64 64 0 0 64 0 32 64 0 0-32 0-64 64 0 0 64 0 32 64 0 0-32 0-64 128 0 0-160z" />
    </Icon>
);

export default PianoKeyboard;