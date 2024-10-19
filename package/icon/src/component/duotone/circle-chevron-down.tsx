
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-down?s=duotone circle-chevron-down}
 * @preview ![circle-chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC0zMmMwLTYuMSAyLjMtMTIuMyA3LTE3czEwLjgtNyAxNy03czEyLjMgMi4zIDE3IDdsODcgODcgODctODdjNC43LTQuNyAxMC44LTcgMTctN3MxMi4zIDIuMyAxNyA3czcgMTAuOCA3IDE3cy0yLjMgMTIuMy03IDE3TDI3MyAzNDVjLTQuNyA0LjctMTAuOCA3LTE3IDdzLTEyLjMtMi4zLTE3LTdMMTM1IDI0MWMtNC43LTQuNy03LTEwLjgtNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzOSAzNDVjOS40IDkuNCAyNC42IDkuNCAzMy45IDBMMzc3IDI0MWM5LjQtOS40IDkuNC0yNC42IDAtMzMuOXMtMjQuNi05LjQtMzMuOSAwbC04NyA4Ny04Ny04N2MtOS40LTkuNC0yNC42LTkuNC0zMy45IDBzLTkuNCAyNC42IDAgMzMuOUwyMzkgMzQ1eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleChevronDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-32c0-6.1 2.3-12.3 7-17s10.8-7 17-7s12.3 2.3 17 7l87 87 87-87c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17L273 345c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L135 241c-4.7-4.7-7-10.8-7-17z" />
            <path d="M239 345c9.4 9.4 24.6 9.4 33.9 0L377 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 345z" />
    </Icon>
);

export default CircleChevronDown;