
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=duotone circle-down}
 * @preview ![circle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOCAyMi4zYzAtMTIuMyAxMC0yMi4zIDIyLjMtMjIuM2w1Ny43IDAgMC05NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgOTYgNTcuNyAwYzEyLjMgMCAyMi4zIDEwIDIyLjMgMjIuM2MwIDYuMi0yLjYgMTIuMS03LjEgMTYuM2MtMzUuNyAzMy4zLTcxLjQgNjYuNi0xMDcuMSA5OS45Yy0zLjggMy41LTguNyA1LjUtMTMuOCA1LjVzLTEwLjEtMi0xMy44LTUuNUwxMzUuMSAyOTQuNmMtNC41LTQuMi03LjEtMTAuMS03LjEtMTYuM3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI0Mi4yIDM5NC41TDEzNS4xIDI5NC42Yy00LjUtNC4yLTcuMS0xMC4xLTcuMS0xNi4zYzAtMTIuMyAxMC0yMi4zIDIyLjMtMjIuM2w1Ny43IDAgMC05NmMwLTE3LjcgMTQuMy0zMiAzMi0zMmwzMiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgOTYgNTcuNyAwYzEyLjMgMCAyMi4zIDEwIDIyLjMgMjIuM2MwIDYuMi0yLjYgMTIuMS03LjEgMTYuM0wyNjkuOCAzOTQuNWMtMy44IDMuNS04LjcgNS41LTEzLjggNS41cy0xMC4xLTItMTMuOC01LjV6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 22.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3c-35.7 33.3-71.4 66.6-107.1 99.9c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3z" />
            <path d="M242.2 394.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5z" />
    </Icon>
);

export default CircleDown;