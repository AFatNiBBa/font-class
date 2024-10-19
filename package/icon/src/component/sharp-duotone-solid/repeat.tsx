
import { Icon, generic } from "../../index";

/**
 * A component that renders the `repeat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/repeat?s=sharp-duotone-solid repeat}
 * @preview ![repeat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MTZsOTYgOTYgMzIgMCAwLTY0IDI4OCAwIDMyIDAgMC0zMiAwLTEyOCAwLTMyLTY0IDAgMCAzMiAwIDk2LTI1NiAwIDAtNjQtMzIgMEw2NCA0MTZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDk2TDAgMjI0bDAgMzIgNjQgMCAwLTMyIDAtOTYgMjU2IDAgMCA2NCAzMiAwIDk2LTk2TDM1MiAwIDMyMCAwbDAgNjRMMzIgNjQgMCA2NCAwIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Repeat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 416l96 96 32 0 0-64 288 0 32 0 0-32 0-128 0-32-64 0 0 32 0 96-256 0 0-64-32 0L64 416z" />
            <path d="M0 96L0 224l0 32 64 0 0-32 0-96 256 0 0 64 32 0 96-96L352 0 320 0l0 64L32 64 0 64 0 96z" />
    </Icon>
);

export default Repeat;