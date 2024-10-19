
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-tree-map` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-tree-map?s=sharp-duotone-solid chart-tree-map}
 * @preview ![chart-tree-map](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI3MkwwIDQ4MGwyMjQgMCAwLTIwOEwwIDI3MnptMjU2LTgwbDAgMTI4IDI1NiAwIDAtMTI4LTI1NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAzMmwyMjQgMCAwIDIwOEwwIDI0MCAwIDMyem0yNTYgMGwyNTYgMCAwIDEyOC0yNTYgMCAwLTEyOHpNNTEyIDM1MmwwIDEyOC0yNTYgMCAwLTEyOCAyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChartTreeMap: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272L0 480l224 0 0-208L0 272zm256-80l0 128 256 0 0-128-256 0z" />
            <path d="M0 32l224 0 0 208L0 240 0 32zm256 0l256 0 0 128-256 0 0-128zM512 352l0 128-256 0 0-128 256 0z" />
    </Icon>
);

export default ChartTreeMap;