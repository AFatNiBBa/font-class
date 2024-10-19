
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monitor-waveform` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monitor-waveform?s=duotone monitor-waveform}
 * @preview ![monitor-waveform](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA5NmwwIDE2MCAxMjggMGM2LjEgMCAxMS42IDMuNCAxNC4zIDguOEwyMjQgMzAwLjJsNDkuNy05OS40YzIuNy01LjQgOC4zLTguOCAxNC4zLTguOHMxMS42IDMuNCAxNC4zIDguOEwzMjkuOSAyNTZsNzAuMSAwYzguOCAwIDE2IDcuMiAxNiAxNnMtNy4yIDE2LTE2IDE2bC04MCAwYy02LjEgMC0xMS42LTMuNC0xNC4zLTguOEwyODggMjQzLjhsLTQ5LjcgOTkuNGMtMi43IDUuNC04LjMgOC44LTE0LjMgOC44cy0xMS42LTMuNC0xNC4zLTguOEwxODIuMSAyODggNjQgMjg4bDAgMTI4IDQ0OCAwIDAtMzIwTDY0IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMzJDMjguNyAzMiAwIDYwLjcgMCA5NkwwIDQxNmMwIDM1LjMgMjguNyA2NCA2NCA2NGw0NDggMGMzNS4zIDAgNjQtMjguNyA2NC02NGwwLTMyMGMwLTM1LjMtMjguNy02NC02NC02NEw2NCAzMnpNNTEyIDk2bDAgMzIwTDY0IDQxNiA2NCA5Nmw0NDggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MonitorWaveform: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 96l0 160 128 0c6.1 0 11.6 3.4 14.3 8.8L224 300.2l49.7-99.4c2.7-5.4 8.3-8.8 14.3-8.8s11.6 3.4 14.3 8.8L329.9 256l70.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0c-6.1 0-11.6-3.4-14.3-8.8L288 243.8l-49.7 99.4c-2.7 5.4-8.3 8.8-14.3 8.8s-11.6-3.4-14.3-8.8L182.1 288 64 288l0 128 448 0 0-320L64 96z" />
            <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM512 96l0 320L64 416 64 96l448 0z" />
    </Icon>
);

export default MonitorWaveform;