
import { Icon, generic } from "../../index";

/**
 * A component that renders the `train-tunnel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tunnel?s=sharp-duotone-solid train-tunnel}
 * @preview ![train-tunnel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NkwwIDUxMmwxMDUuNCAwIDY0LTY0TDExMiA0NDhsMC0zMjAgMjg4IDAgMCAzMjAtNTcuNCAwIDY0IDY0TDUxMiA1MTJsMC0yNTZDNTEyIDExNC42IDM5Ny40IDAgMjU2IDBTMCAxMTQuNiAwIDI1NnpNMTUwLjYgNTEybDIxMC43IDAtNjQtNjQtODIuNyAwLTY0IDY0ek0xNjAgMTkybDAgMTI4IDE5MiAwIDAtMTI4LTE5MiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTEyIDEyOGwyODggMCAwIDMyMC0yODggMCAwLTMyMHptNDggNjRsMCAxMjggMTkyIDAgMC0xMjgtMTkyIDB6bTk2IDIyNGEzMiAzMiAwIDEgMCAwLTY0IDMyIDMyIDAgMSAwIDAgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const TrainTunnel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256L0 512l105.4 0 64-64L112 448l0-320 288 0 0 320-57.4 0 64 64L512 512l0-256C512 114.6 397.4 0 256 0S0 114.6 0 256zM150.6 512l210.7 0-64-64-82.7 0-64 64zM160 192l0 128 192 0 0-128-192 0z" />
            <path d="M112 128l288 0 0 320-288 0 0-320zm48 64l0 128 192 0 0-128-192 0zm96 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default TrainTunnel;