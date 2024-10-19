
import { Icon, generic } from "../../index";

/**
 * A component that renders the `expand-wide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand-wide?s=sharp-duotone-solid expand-wide}
 * @preview ![expand-wide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDMyIDAgOTYgMCAzMiAzMiAwIDk2IDAgMzIgMCAwLTY0LTMyIDAtNjQgMCAwLTY0IDAtMzJMMCAyODh6TTM1MiA2NGwwIDY0IDMyIDAgNjQgMCAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtOTYgMC0zMi0zMiAwLTk2IDAtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMTkybDAgMzIgNjQgMCAwLTMyIDAtNjQgNjQgMCAzMiAwIDAtNjQtMzIgMEwzMiA2NCAwIDY0IDAgOTZsMCA5NnpNNTEyIDMyMGwwLTMyLTY0IDAgMCAzMiAwIDY0LTY0IDAtMzIgMCAwIDY0IDMyIDAgOTYgMCAzMiAwIDAtMzIgMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ExpandWide: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64 0-32L0 288zM352 64l0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0-32 0z" />
            <path d="M0 192l0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 64 0 64 0 96l0 96zM512 320l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z" />
    </Icon>
);

export default ExpandWide;