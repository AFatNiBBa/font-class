
import { Icon, generic } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=sharp-duotone-solid torii-gate}
 * @preview ![torii-gate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxMjhsNjQgMCAwIDk2LTY0IDAgMC05NnptMCAxNjBsNjQgMCAwIDE5MiAwIDMyLTY0IDAgMC0zMiAwLTE5MnpNMjI0IDEyOGw2NCAwIDAgOTYtNjQgMCAwLTk2em0xNjAgMGw2NCAwIDAgOTYtNjQgMCAwLTk2em0wIDE2MGw2NCAwIDAgMTkyIDAgMzItNjQgMCAwLTMyIDAtMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNjQgMTI4bDM4NCAwIDY0LTY0IDAtNjRMNDE2IDMyIDk2IDMyIDAgMCAwIDY0bDY0IDY0ek0zMiAyMjRMMCAyMjRsMCA2NCAzMiAwIDQ0OCAwIDMyIDAgMC02NC0zMiAwTDMyIDIyNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 128l64 0 0 96-64 0 0-96zm0 160l64 0 0 192 0 32-64 0 0-32 0-192zM224 128l64 0 0 96-64 0 0-96zm160 0l64 0 0 96-64 0 0-96zm0 160l64 0 0 192 0 32-64 0 0-32 0-192z" />
            <path d="M64 128l384 0 64-64 0-64L416 32 96 32 0 0 0 64l64 64zM32 224L0 224l0 64 32 0 448 0 32 0 0-64-32 0L32 224z" />
    </Icon>
);

export default ToriiGate;