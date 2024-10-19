
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-chevron-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-chevron-right?s=duotone circle-chevron-right}
 * @preview ![circle-chevron-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik01MTIgMjU2QTI1NiAyNTYgMCAxIDEgMCAyNTZhMjU2IDI1NiAwIDEgMSA1MTIgMHpNMjAwIDE1MmMwIDYuMSAyLjMgMTIuMyA3IDE3bDg3IDg3LTg3IDg3Yy00LjcgNC43LTcgMTAuOC03IDE3czIuMyAxMi4zIDcgMTdzMTAuOCA3IDE3IDdzMTIuMy0yLjMgMTctN0wzNDUgMjczYzQuNy00LjcgNy0xMC44IDctMTdzLTIuMy0xMi4zLTctMTdMMjQxIDEzNWMtNC43LTQuNy0xMC44LTctMTctN3MtMTIuMyAyLjMtMTcgN3MtNyAxMC44LTcgMTd6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zNDUgMjM5YzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDI0MSAzNzdjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwcy05LjQtMjQuNiAwLTMzLjlsODctODctODctODdjLTkuNC05LjQtOS40LTI0LjYgMC0zMy45czI0LjYtOS40IDMzLjkgMEwzNDUgMjM5eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleChevronRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M512 256A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM200 152c0 6.1 2.3 12.3 7 17l87 87-87 87c-4.7 4.7-7 10.8-7 17s2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7L345 273c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17L241 135c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7s-7 10.8-7 17z" />
            <path d="M345 239c9.4 9.4 9.4 24.6 0 33.9L241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239z" />
    </Icon>
);

export default CircleChevronRight;