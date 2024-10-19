
import { Icon, generic } from "../../index";

/**
 * A component that renders the `slider` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slider?s=sharp-duotone-solid slider}
 * @preview ![slider](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDMyIDAgMTkyIDAgMC02NEwzMiAyMjQgMCAyMjR6bTQxNiAwbDAgNjQgNjQgMCAzMiAwIDAtNjQtMzIgMC02NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDE2MGwwIDE5Mi0zMiAwIDAtMTkyIDMyIDB6TTMyMCA5NmwtNjQgMCAwIDY0IDAgMTkyIDAgNjQgNjQgMCAzMiAwIDY0IDAgMC02NCAwLTE5MiAwLTY0LTY0IDAtMzIgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Slider: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 192 0 0-64L32 224 0 224zm416 0l0 64 64 0 32 0 0-64-32 0-64 0z" />
            <path d="M352 160l0 192-32 0 0-192 32 0zM320 96l-64 0 0 64 0 192 0 64 64 0 32 0 64 0 0-64 0-192 0-64-64 0-32 0z" />
    </Icon>
);

export default Slider;