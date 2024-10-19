
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-terminal` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-terminal?s=sharp-duotone-solid square-terminal}
 * @preview ![square-terminal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDQ0OCAwIDAgNDQ4TDAgNDgwIDAgMzJ6TTYyLjEgMTc2bDE3IDE3IDYzIDYzTDc5IDMxOWwtMTcgMTdjMTEuMyAxMS4zIDIyLjYgMjIuNiAzMy45IDMzLjljNS43LTUuNyAxMS4zLTExLjMgMTctMTdjMjYuNy0yNi43IDUzLjMtNTMuMyA4MC04MGM1LjctNS43IDExLjMtMTEuMyAxNy0xN2wtMTctMTctODAtODAtMTctMTdDODQuNyAxNTMuNCA3My40IDE2NC43IDYyLjEgMTc2ek0xOTIgMzM2YzAgMTYgMCAzMiAwIDQ4bDI0IDAgMTQ0IDAgMjQgMCAwLTQ4LTI0IDAtMTQ0IDAtMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTc5IDE5M2wtMTctMTdMOTYgMTQyLjFsMTcgMTcgODAgODAgMTcgMTctMTcgMTctODAgODAtMTcgMTdMNjIuMSAzMzZsMTctMTcgNjMtNjNMNzkgMTkzek0yMTYgMzM2bDE0NCAwIDI0IDAgMCA0OC0yNCAwLTE0NCAwLTI0IDAgMC00OCAyNCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareTerminal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32l448 0 0 448L0 480 0 32zM62.1 176l17 17 63 63L79 319l-17 17c11.3 11.3 22.6 22.6 33.9 33.9c5.7-5.7 11.3-11.3 17-17c26.7-26.7 53.3-53.3 80-80c5.7-5.7 11.3-11.3 17-17l-17-17-80-80-17-17C84.7 153.4 73.4 164.7 62.1 176zM192 336c0 16 0 32 0 48l24 0 144 0 24 0 0-48-24 0-144 0-24 0z" />
            <path d="M79 193l-17-17L96 142.1l17 17 80 80 17 17-17 17-80 80-17 17L62.1 336l17-17 63-63L79 193zM216 336l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default SquareTerminal;