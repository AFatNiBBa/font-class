
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-left?s=duotone circle-chevron-left}
 * @preview ![circle-chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTE2MCAwYzAtNi4xIDIuMy0xMi4zIDctMTdMMjcxIDEzNWM0LjctNC43IDEwLjgtNyAxNy03czEyLjMgMi4zIDE3IDdzNyAxMC44IDcgMTdzLTIuMyAxMi4zLTcgMTdsLTg3IDg3IDg3IDg3YzQuNyA0LjcgNyAxMC44IDcgMTdzLTIuMyAxMi4zLTcgMTdzLTEwLjggNy0xNyA3cy0xMi4zLTIuMy0xNy03TDE2NyAyNzNjLTQuNy00LjctNy0xMC44LTctMTd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNjcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyNzEgMTM1YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwczkuNCAyNC42IDAgMzMuOWwtODcgODcgODcgODdjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlzLTI0LjYgOS40LTMzLjkgMEwxNjcgMjczeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleChevronLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160 0c0-6.1 2.3-12.3 7-17L271 135c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7s7 10.8 7 17s-2.3 12.3-7 17l-87 87 87 87c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7L167 273c-4.7-4.7-7-10.8-7-17z" />
            <path d="M167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273z" />
    </Icon>
);

export default CircleChevronLeft;