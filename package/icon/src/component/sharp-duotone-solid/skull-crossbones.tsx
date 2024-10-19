
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=sharp-duotone-solid skull-crossbones}
 * @preview ![skull-crossbones](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0tMTAuNiAzMDMuM2wyOSAxMy42IDEzMC41IDYxLjRMMTguNCA0MzkuOGwtMjkgMTMuNiAyNy4zIDU3LjkgMjktMTMuNiAxNzguNC04NCAxNzguNCA4NCAyOSAxMy42IDI3LjMtNTcuOS0yOS0xMy42TDI5OS4xIDM3OC40IDQyOS42IDMxN2wyOS0xMy42LTI3LjMtNTcuOS0yOSAxMy42TDIyNCAzNDMgNDUuNiAyNTlsLTI5LTEzLjYtMjcuMyA1Ny45eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzA0IDIzNC40YzM4LjYtMjMgNjQtNjIuMSA2NC0xMDYuNEMzNjggNTcuMyAzMDMuNSAwIDIyNCAwUzgwIDU3LjMgODAgMTI4YzAgNDQuNCAyNS40IDgzLjUgNjQgMTA2LjRsMCA1My42IDE2MCAwIDAtNTMuNnpNMTM2IDE0NGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwem0xNDQtMzJhMzIgMzIgMCAxIDEgMCA2NCAzMiAzMiAwIDEgMSAwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M-10.6 303.3l29 13.6 130.5 61.4L18.4 439.8l-29 13.6 27.3 57.9 29-13.6 178.4-84 178.4 84 29 13.6 27.3-57.9-29-13.6L299.1 378.4 429.6 317l29-13.6-27.3-57.9-29 13.6L224 343 45.6 259l-29-13.6-27.3 57.9z" />
            <path d="M304 234.4c38.6-23 64-62.1 64-106.4C368 57.3 303.5 0 224 0S80 57.3 80 128c0 44.4 25.4 83.5 64 106.4l0 53.6 160 0 0-53.6zM136 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm144-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SkullCrossbones;