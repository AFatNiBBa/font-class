
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-angle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-angle?s=sharp-duotone-solid handshake-angle}
 * @preview ![handshake-angle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgNjRsMCA2NCAwIDk2YzAgMjYuNyAwIDUzLjMgMCA4MGw5NiAwIDAtMTEyIDE5MiAwIDAgMTEyIDAtMzIgMzItMzIgOTYtOTZMNDk2IDAgNDMyIDY0IDIyNCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIyNCAxMjhMOTYgMTI4bDAgMTQ0TDAgMzY4IDE0NCA1MTJsNjQtNjQgMjI0IDAgMC02NCA0OCAwIDAtODAgMzIgMCAwLTExMi0xOTIgMCAwIDExMi05NiAwIDAtMTc2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandshakeAngle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 64l0 64 0 96c0 26.7 0 53.3 0 80l96 0 0-112 192 0 0 112 0-32 32-32 96-96L496 0 432 64 224 64z" />
            <path d="M224 128L96 128l0 144L0 368 144 512l64-64 224 0 0-64 48 0 0-80 32 0 0-112-192 0 0 112-96 0 0-176z" />
    </Icon>
);

export default HandshakeAngle;