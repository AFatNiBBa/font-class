
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=duotone square-chevron-down}
 * @preview ![square-chevron-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMzIwYzAtMzUuMy0yOC43LTY0LTY0LTY0TDY0IDMyQzI4LjcgMzIgMCA2MC43IDAgOTZ6TTk2IDIyNGMwLTYuMSAyLjMtMTIuMyA3LTE3czEwLjgtNyAxNy03czEyLjMgMi4zIDE3IDdsODcgODcgODctODdjNC43LTQuNyAxMC44LTcgMTctN3MxMi4zIDIuMyAxNyA3czcgMTAuOCA3IDE3cy0yLjMgMTIuMy03IDE3TDI0MSAzNDVjLTQuNyA0LjctMTAuOCA3LTE3IDdzLTEyLjMtMi4zLTE3LTdMMTAzIDI0MWMtNC43LTQuNy03LTEwLjgtNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwNyAzNDVjOS40IDkuNCAyNC42IDkuNCAzMy45IDBMMzQ1IDI0MWM5LjQtOS40IDkuNC0yNC42IDAtMzMuOXMtMjQuNi05LjQtMzMuOSAwbC04NyA4Ny04Ny04N2MtOS40LTkuNC0yNC42LTkuNC0zMy45IDBzLTkuNCAyNC42IDAgMzMuOUwyMDcgMzQ1eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM96 224c0-6.1 2.3-12.3 7-17s10.8-7 17-7s12.3 2.3 17 7l87 87 87-87c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17L241 345c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7L103 241c-4.7-4.7-7-10.8-7-17z" />
            <path d="M207 345c9.4 9.4 24.6 9.4 33.9 0L345 241c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-87 87-87-87c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L207 345z" />
    </Icon>
);

export default SquareChevronDown;