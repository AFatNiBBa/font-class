
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=duotone chess-bishop}
 * @preview ![chess-bishop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4OS40QzAgNTAxLjkgMTAuMSA1MTIgMjIuNiA1MTJsMjc0LjcgMGMxMi41IDAgMjIuNi0xMC4xIDIyLjYtMjIuNmMwLTYtMi40LTExLjgtNi42LTE2bC0zMi0zMmMtNi02LTE0LjEtOS40LTIyLjYtOS40bC0yLjcgMEw2NCA0MzJsLTIuNyAwYy04LjUgMC0xNi42IDMuNC0yMi42IDkuNGwtMzIgMzJjLTQuMiA0LjItNi42IDEwLTYuNiAxNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDMyYzAtMTcuNyAxNC4zLTMyIDMyLTMybDY0IDBjMTcuNyAwIDMyIDE0LjMgMzIgMzJjMCAxNi4xLTExLjkgMjkuNC0yNy40IDMxLjdjMjIuNCAyMS40IDUxIDUyLjggNzQuMiA5MC45TDE2NC43IDI2MC43Yy02LjIgNi4yLTYuMiAxNi40IDAgMjIuNnMxNi40IDYuMiAyMi42IDBsOTkuNC05OS40QzMwMS44IDIxNS42IDMxMiAyNTAuNyAzMTIgMjg4YzAgNDcuNC0zMC44IDcyLjMtNTYgODQuN2wwIDU5LjNMNjQgNDMybDAtNTkuM0MzOC44IDM2MC4zIDggMzM1LjQgOCAyODhDOCAxOTAgNzguNCAxMDYuOCAxMjMuNCA2My43QzEwNy45IDYxLjQgOTYgNDguMSA5NiAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 489.4C0 501.9 10.1 512 22.6 512l274.7 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16l-32-32c-6-6-14.1-9.4-22.6-9.4l-2.7 0L64 432l-2.7 0c-8.5 0-16.6 3.4-22.6 9.4l-32 32c-4.2 4.2-6.6 10-6.6 16z" />
            <path d="M96 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32c0 16.1-11.9 29.4-27.4 31.7c22.4 21.4 51 52.8 74.2 90.9L164.7 260.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l99.4-99.4C301.8 215.6 312 250.7 312 288c0 47.4-30.8 72.3-56 84.7l0 59.3L64 432l0-59.3C38.8 360.3 8 335.4 8 288C8 190 78.4 106.8 123.4 63.7C107.9 61.4 96 48.1 96 32z" />
    </Icon>
);

export default ChessBishop;