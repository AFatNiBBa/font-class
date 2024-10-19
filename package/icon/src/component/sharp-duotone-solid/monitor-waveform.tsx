
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=sharp-duotone-solid monitor-waveform}
 * @preview ![monitor-waveform](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA5NmwwIDE2MCAxMjggMCA5LjkgMCA0LjQgOC44TDIyNCAzMDAuMmw0OS43LTk5LjRMMjg4IDE3Mi4ybDE0LjMgMjguNkwzMjkuOSAyNTZsNzAuMSAwIDE2IDAgMCAzMi0xNiAwLTgwIDAtOS45IDAtNC40LTguOEwyODggMjQzLjhsLTQ5LjcgOTkuNEwyMjQgMzcxLjhsLTE0LjMtMjguNkwxODIuMSAyODggNjQgMjg4bDAgMTI4IDQ0OCAwIDAtMzIwTDY0IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTc2IDMyTDAgMzIgMCA0ODBsNTc2IDAgMC00NDh6TTUxMiA5NmwwIDMyMEw2NCA0MTYgNjQgOTZsNDQ4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 160 128 0 9.9 0 4.4 8.8L224 300.2l49.7-99.4L288 172.2l14.3 28.6L329.9 256l70.1 0 16 0 0 32-16 0-80 0-9.9 0-4.4-8.8L288 243.8l-49.7 99.4L224 371.8l-14.3-28.6L182.1 288 64 288l0 128 448 0 0-320L64 96z" />
            <path d="M576 32L0 32 0 480l576 0 0-448zM512 96l0 320L64 416 64 96l448 0z" />
    </Icon>
);

export default MonitorWaveform;