
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-slash?s=sharp-duotone-solid music-slash}
 * @preview ![music-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0MzJjMCA0NC4yIDQzIDgwIDk2IDgwczk2LTM1LjggOTYtODBsMC0xMzQuMy02NC01MC40IDAgMTA5LjNjLTEwLTIuOS0yMC44LTQuNi0zMi00LjZjLTUzIDAtOTYgMzUuOC05NiA4MHpNMTkyIDEyMC4ybDAgNi4xTDMxNS4zIDIyMiA1MTIgMTYzbDAgMTI5LjVjLTEwLTIuOS0yMC44LTQuNi0zMi00LjZjLTIyIDAtNDIuMiA2LjItNTguNCAxNi41TDU2MC4xIDQxMi4xYzEwLTEyLjYgMTUuOS0yNy44IDE1LjktNDQuMWwwLTI0OCAwLTcyIDAtNDNMNTM0LjggMTcuNGwtMzIwIDk2TDE5MiAxMjAuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI5LjQgLjFsMTkgMTQuN0w2MjAuOSA0NTkuM2wxOSAxNC43LTI5LjQgMzcuOS0xOS0xNC43TDE4LjkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const MusicSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432c0 44.2 43 80 96 80s96-35.8 96-80l0-134.3-64-50.4 0 109.3c-10-2.9-20.8-4.6-32-4.6c-53 0-96 35.8-96 80zM192 120.2l0 6.1L315.3 222 512 163l0 129.5c-10-2.9-20.8-4.6-32-4.6c-22 0-42.2 6.2-58.4 16.5L560.1 412.1c10-12.6 15.9-27.8 15.9-44.1l0-248 0-72 0-43L534.8 17.4l-320 96L192 120.2z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default MusicSlash;