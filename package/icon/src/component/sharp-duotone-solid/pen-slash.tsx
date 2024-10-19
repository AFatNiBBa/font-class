
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=sharp-duotone-solid pen-slash}
 * @preview ![pen-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA1MTJsMTYwLTMyTDM0MC4xIDM2My45IDE5Ni45IDI1MS4xIDk2IDM1MiA2NCA1MTJ6TTI2NSAxODNjNDggMzcuMyA5Ni4xIDc0LjYgMTQ0LjEgMTExLjlsNzUuNi03NS42LTEyOC0xMjhMMjY1IDE4M3pNMzc5LjMgNjguN2wxMjggMTI4TDU3NiAxMjggNDQ4IDAgMzc5LjMgNjguN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5LjQgLjFsMTkgMTQuN0w2MjAuOSA0NTkuM2wxOSAxNC43LTI5LjQgMzcuOS0xOS0xNC43TDE5IDUyLjcgMCAzOCAyOS40IC4xeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PenSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 512l160-32L340.1 363.9 196.9 251.1 96 352 64 512zM265 183c48 37.3 96.1 74.6 144.1 111.9l75.6-75.6-128-128L265 183zM379.3 68.7l128 128L576 128 448 0 379.3 68.7z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PenSlash;