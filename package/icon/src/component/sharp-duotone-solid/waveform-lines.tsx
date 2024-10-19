
import { Icon, generic } from "../../index";

/**
 * A component that renders the `waveform-lines` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/waveform-lines?s=sharp-duotone-solid waveform-lines}
 * @preview ![waveform-lines](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxOTJsMCAzMiAwIDY0IDAgMzIgNjQgMCAwLTMyIDAtNjQgMC0zMi02NCAwek0yODggMGwwIDMyIDAgNDQ4IDAgMzIgNjQgMCAwLTMyIDAtNDQ4IDAtMzJMMjg4IDB6TTQ4MCA2NGwwIDMyIDAgMzIwIDAgMzIgNjQgMCAwLTMyIDAtMzIwIDAtMzItNjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAxMjhsMC0zMi02NCAwIDAgMzIgMCAyNTYgMCAzMiA2NCAwIDAtMzIgMC0yNTZ6bTE5MiAzMmwwLTMyLTY0IDAgMCAzMiAwIDE5MiAwIDMyIDY0IDAgMC0zMiAwLTE5MnpNMCAyMjRsMCA2NCA2NCAwIDAtNjRMMCAyMjR6bTU3NiAwbDAgNjQgNjQgMCAwLTY0LTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const WaveformLines: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 192l0 32 0 64 0 32 64 0 0-32 0-64 0-32-64 0zM288 0l0 32 0 448 0 32 64 0 0-32 0-448 0-32L288 0zM480 64l0 32 0 320 0 32 64 0 0-32 0-320 0-32-64 0z" />
            <path d="M256 128l0-32-64 0 0 32 0 256 0 32 64 0 0-32 0-256zm192 32l0-32-64 0 0 32 0 192 0 32 64 0 0-32 0-192zM0 224l0 64 64 0 0-64L0 224zm576 0l0 64 64 0 0-64-64 0z" />
    </Icon>
);

export default WaveformLines;