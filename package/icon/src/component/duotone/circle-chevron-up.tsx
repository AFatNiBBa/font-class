
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-up?s=duotone circle-chevron-up}
 * @preview ![circle-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOCAzMmMwLTYuMSAyLjMtMTIuMyA3LTE3TDIzOSAxNjdjNC43LTQuNyAxMC44LTcgMTctN3MxMi4zIDIuMyAxNyA3TDM3NyAyNzFjNC43IDQuNyA3IDEwLjggNyAxN3MtMi4zIDEyLjMtNyAxN3MtMTAuOCA3LTE3IDdzLTEyLjMtMi4zLTE3LTdsLTg3LTg3LTg3IDg3Yy00LjcgNC43LTEwLjggNy0xNyA3cy0xMi4zLTIuMy0xNy03cy03LTEwLjgtNy0xN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIzOSAxNjdjOS40LTkuNCAyNC42LTkuNCAzMy45IDBMMzc3IDI3MWM5LjQgOS40IDkuNCAyNC42IDAgMzMuOXMtMjQuNiA5LjQtMzMuOSAwbC04Ny04Ny04NyA4N2MtOS40IDkuNC0yNC42IDkuNC0zMy45IDBzLTkuNC0yNC42IDAtMzMuOUwyMzkgMTY3eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleChevronUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128 32c0-6.1 2.3-12.3 7-17L239 167c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7L377 271c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7l-87-87-87 87c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7s-7-10.8-7-17z" />
            <path d="M239 167c9.4-9.4 24.6-9.4 33.9 0L377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167z" />
    </Icon>
);

export default CircleChevronUp;