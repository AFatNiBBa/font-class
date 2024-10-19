
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wifi-exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-exclamation?s=sharp-duotone-solid wifi-exclamation}
 * @preview ![wifi-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05LjggMTU2LjdsNDQuMyA0Ni4yYzUyLTQ5LjkgMTE4LjEtODUuNCAxOTEuNy05OS43TDI0MC41IDM5QzE1MS44IDU0LjkgNzIuMiA5Ni45IDkuOCAxNTYuN3pNMTI5LjUgMjY0bDQyLjQgNDhjMjQuOS0yMS45IDU0LjYtMzguNCA4Ny40LTQ3LjdsLTUuNC02NC43Yy00Ni45IDExLTg5LjQgMzMuNS0xMjQuNCA2NC40em0yNTEuMyAuM2MzMi44IDkuMiA2Mi41IDI1LjcgODcuNCA0Ny43bDQyLjQtNDhjLTM0LjktMzAuOC03Ny40LTUzLjMtMTI0LjQtNjQuNGwtNS40IDY0Ljd6bTEzLjQtMTYxLjJjNzMuNiAxNC40IDEzOS42IDQ5LjggMTkxLjcgOTkuN2w0NC4zLTQ2LjJDNTY3LjggOTYuOSA0ODguMiA1NC45IDM5OS41IDM5bC01LjMgNjQuMXoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5NiAzMjBMMjcyIDMybDk2IDBMMzQ0IDMyMGwtNDggMHptMjQgMzJhNjQgNjQgMCAxIDEgMCAxMjggNjQgNjQgMCAxIDEgMC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const WifiExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M9.8 156.7l44.3 46.2c52-49.9 118.1-85.4 191.7-99.7L240.5 39C151.8 54.9 72.2 96.9 9.8 156.7zM129.5 264l42.4 48c24.9-21.9 54.6-38.4 87.4-47.7l-5.4-64.7c-46.9 11-89.4 33.5-124.4 64.4zm251.3 .3c32.8 9.2 62.5 25.7 87.4 47.7l42.4-48c-34.9-30.8-77.4-53.3-124.4-64.4l-5.4 64.7zm13.4-161.2c73.6 14.4 139.6 49.8 191.7 99.7l44.3-46.2C567.8 96.9 488.2 54.9 399.5 39l-5.3 64.1z" />
            <path d="M296 320L272 32l96 0L344 320l-48 0zm24 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default WifiExclamation;