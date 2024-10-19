
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=sharp-duotone-solid arrow-progress}
 * @preview ![arrow-progress](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NEwwIDUxMmwxMjggMCAwLTMyIDMyIDAgMCAzMiAyNCAwIDcyLTY0LTcyLTY0LTI0IDAgMCAzMi0zMiAwIDAtMzJMMCAzODR6TTM4NCAwbDAgMTI4IDEyOCAwTDUxMiAwIDM4NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDEyOGwwLTMyTDY0IDk2bDAgMTI4IDQxNiAwIDMyIDAgMCAzMiAwIDE5MiAwIDMyLTMyIDAtNjQgMCAwIDMyLTEyOCAwIDAtMTI4IDEyOCAwIDAgMzIgMzIgMCAwLTEyOEwzMiAyODggMCAyODhsMC0zMkwwIDY0IDAgMzJsMzIgMCAyMjQgMCAwLTMyIDI0IDAgNzIgNjQtNzIgNjQtMjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 384L0 512l128 0 0-32 32 0 0 32 24 0 72-64-72-64-24 0 0 32-32 0 0-32L0 384zM384 0l0 128 128 0L512 0 384 0z" />
            <path d="M256 128l0-32L64 96l0 128 416 0 32 0 0 32 0 192 0 32-32 0-64 0 0 32-128 0 0-128 128 0 0 32 32 0 0-128L32 288 0 288l0-32L0 64 0 32l32 0 224 0 0-32 24 0 72 64-72 64-24 0z" />
    </Icon>
);

export default ArrowProgress;