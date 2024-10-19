
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-movie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-movie?s=sharp-duotone-solid camera-movie}
 * @preview ![camera-movie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmwwIDY0IDMyIDAgMzIgMCAwIDE5MiAzODQgMCAwLTY0IDAtMTI4IDAtNjQtOTYgMC0xOTIgMC0zMiAwLTY0IDAtMzIgMEwwIDI1NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCA2NGE2NCA2NCAwIDEgMCAwIDEyOCA2NCA2NCAwIDEgMCAwLTEyOHpNMzUyIDI1NmwtMjI0IDBDNTcuMyAyNTYgMCAxOTguNyAwIDEyOFM1Ny4zIDAgMTI4IDBjNDguMiAwIDkwLjIgMjYuNiAxMTIgNjZDMjYxLjggMjYuNiAzMDMuOCAwIDM1MiAwYzcwLjcgMCAxMjggNTcuMyAxMjggMTI4cy01Ny4zIDEyOC0xMjggMTI4em0wLTE5MmE2NCA2NCAwIDEgMCAwIDEyOCA2NCA2NCAwIDEgMCAwLTEyOHpNNTc2IDI1NmwwIDI1Nkw0NDggNDQ4bDAtMTI4IDEyOC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const CameraMovie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256l0 64 32 0 32 0 0 192 384 0 0-64 0-128 0-64-96 0-192 0-32 0-64 0-32 0L0 256z" />
            <path d="M128 64a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM352 256l-224 0C57.3 256 0 198.7 0 128S57.3 0 128 0c48.2 0 90.2 26.6 112 66C261.8 26.6 303.8 0 352 0c70.7 0 128 57.3 128 128s-57.3 128-128 128zm0-192a64 64 0 1 0 0 128 64 64 0 1 0 0-128zM576 256l0 256L448 448l0-128 128-64z" />
    </Icon>
);

export default CameraMovie;