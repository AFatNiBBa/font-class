
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-clock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-clock?s=sharp-duotone-solid chess-clock}
 * @preview ![chess-clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDQ4IDU2IDAgMCA0OCA0OCAwIDAtNDggNTYgMCAwLTQ4TDk2IDMyem02NCAxOTJsMCAxNiAwIDY0IDAgMTYgMzIgMCAwLTE2IDAtNjQgMC0xNi0zMiAwek0zODQgOTZsMCAzMiAxNjAgMCAwLTMyTDM4NCA5NnptNTcuNCAyMDhMNDY0IDMyNi42bDExLjMtMTEuMyA0OC00OEw1MzQuNiAyNTYgNTEyIDIzMy40bC0xMS4zIDExLjMtNDggNDhMNDQxLjQgMzA0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxMjhsNjQwIDAgMCAzNTJMMCA0ODAgMCAxMjh6TTI4OCAzMDRBMTEyIDExMiAwIDEgMCA2NCAzMDRhMTEyIDExMiAwIDEgMCAyMjQgMHpNNDY0IDQxNmExMTIgMTEyIDAgMSAwIDAtMjI0IDExMiAxMTIgMCAxIDAgMCAyMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChessClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 48 56 0 0 48 48 0 0-48 56 0 0-48L96 32zm64 192l0 16 0 64 0 16 32 0 0-16 0-64 0-16-32 0zM384 96l0 32 160 0 0-32L384 96zm57.4 208L464 326.6l11.3-11.3 48-48L534.6 256 512 233.4l-11.3 11.3-48 48L441.4 304z" />
            <path d="M0 128l640 0 0 352L0 480 0 128zM288 304A112 112 0 1 0 64 304a112 112 0 1 0 224 0zM464 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
    </Icon>
);

export default ChessClock;