
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cube` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=sharp-duotone-solid cube}
 * @preview ![cube](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxODkuNGM1My4zIDE5IDEwNi43IDM4LjEgMTYwIDU3LjFsMCAxODBjLTUzLjMtMTktMTA2LjctMzguMS0xNjAtNTcuMWwwLTE4MHptMjI0IDU3LjFjNTMuMy0xOSAxMDYuNy0zOC4xIDE2MC01Ny4xbDAgMTgwTDI4OCA0MjYuNmwwLTE4MHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA2bDEwLjggMy44IDIyNCA4MEw1MTIgOTcuNGwwIDIyLjYgMCAyNzIgMCAyMi42LTIxLjIgNy42LTIyNCA4MEwyNTYgNTA2bC0xMC44LTMuOC0yMjQtODBMMCA0MTQuNiAwIDM5MiAwIDEyMCAwIDk3LjRsMjEuMi03LjYgMjI0LTgwTDI1NiA2ek02NCAzNjkuNGwxNjAgNTcuMSAwLTE4MEw2NCAxODkuNGwwIDE4MHptMjI0IDU3LjFsMTYwLTU3LjEgMC0xODBMMjg4IDI0Ni42bDAgMTgwek0yNTYgNzRMOTMuNSAxMzIgMjU2IDE5MGwxNjIuNS01OEwyNTYgNzR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 189.4c53.3 19 106.7 38.1 160 57.1l0 180c-53.3-19-106.7-38.1-160-57.1l0-180zm224 57.1c53.3-19 106.7-38.1 160-57.1l0 180L288 426.6l0-180z" />
            <path d="M256 6l10.8 3.8 224 80L512 97.4l0 22.6 0 272 0 22.6-21.2 7.6-224 80L256 506l-10.8-3.8-224-80L0 414.6 0 392 0 120 0 97.4l21.2-7.6 224-80L256 6zM64 369.4l160 57.1 0-180L64 189.4l0 180zm224 57.1l160-57.1 0-180L288 246.6l0 180zM256 74L93.5 132 256 190l162.5-58L256 74z" />
    </Icon>
);

export default Cube;