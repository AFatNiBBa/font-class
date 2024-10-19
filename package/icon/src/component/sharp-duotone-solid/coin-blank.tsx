
import { Icon, generic } from "../../index";

/**
 * A component that renders the `coin-blank` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coin-blank?s=sharp-duotone-solid coin-blank}
 * @preview ![coin-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIwOGMwIDc5LjUgMTE0LjYgMTQ0IDI1NiAxNDRzMjU2LTY0LjUgMjU2LTE0NHMtMTE0LjYtMTQ0LTI1Ni0xNDRTMCAxMjguNSAwIDIwOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4IDMzMWMtMTguMy0xMS41LTM0LjgtMjUuMi00OC00MC45TDAgMzIwYzAgMjcuOSAxNy44IDUzLjYgNDggNzQuNkw0OCAzMzF6bTMyIDE3LjNMODAgNDEzYzI3LjEgMTIuOCA1OS44IDIyLjcgOTYgMjguN2wwLTY0LjNjLTM1LjEtNi02Ny42LTE1LjktOTYtMjl6TTI1NiA0NDhjLTE2LjQgMC0zMi41LS44LTQ4LTIuMmwwLTY0LjFjMTUuNyAxLjYgMzEuNyAyLjQgNDggMi40czMyLjMtLjggNDgtMi40bDAgNjQuMWMtMTUuNSAxLjUtMzEuNiAyLjItNDggMi4yem04MC03MC43bDAgNjQuM2MzNi4yLTYgNjguOS0xNS45IDk2LTI4LjdsMC02NC43Yy0yOC40IDEzLjItNjAuOSAyMy05NiAyOXpNNTEyIDMyMGMwIDI3LjktMTcuOCA1My42LTQ4IDc0LjZsMC02My43YzE4LjMtMTEuNSAzNC44LTI1LjIgNDgtNDAuOWwwIDI5Ljl6Ii8+PC9zdmc+|width=32|height=32)
 */
const CoinBlank: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208c0 79.5 114.6 144 256 144s256-64.5 256-144s-114.6-144-256-144S0 128.5 0 208z" />
            <path d="M48 331c-18.3-11.5-34.8-25.2-48-40.9L0 320c0 27.9 17.8 53.6 48 74.6L48 331zm32 17.3L80 413c27.1 12.8 59.8 22.7 96 28.7l0-64.3c-35.1-6-67.6-15.9-96-29zM256 448c-16.4 0-32.5-.8-48-2.2l0-64.1c15.7 1.6 31.7 2.4 48 2.4s32.3-.8 48-2.4l0 64.1c-15.5 1.5-31.6 2.2-48 2.2zm80-70.7l0 64.3c36.2-6 68.9-15.9 96-28.7l0-64.7c-28.4 13.2-60.9 23-96 29zM512 320c0 27.9-17.8 53.6-48 74.6l0-63.7c18.3-11.5 34.8-25.2 48-40.9l0 29.9z" />
    </Icon>
);

export default CoinBlank;