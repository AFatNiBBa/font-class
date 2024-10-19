
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-bishop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-bishop?s=sharp-duotone-solid chess-bishop}
 * @preview ![chess-bishop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGw0OC00OCAxNiAwIDE5MiAwIDE2IDAgNDggNDggMCAzMkwwIDUxMmwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNOTYgMGwzMiAwIDY0IDAgMzIgMCAwIDY0LTI3IDBjMjIuMyAyMS40IDUwLjggNTIuNyA3My44IDkwLjZMMTY0LjcgMjYwLjcgMTUzLjQgMjcyIDE3NiAyOTQuNmwxMS4zLTExLjMgOTkuNC05OS40QzMwMS44IDIxNS42IDMxMiAyNTAuNyAzMTIgMjg4YzAgNDcuNC0zMC44IDcyLjMtNTYgODQuN2wwIDU5LjNMNjQgNDMybDAtNTkuM0MzOC44IDM2MC4zIDggMzM1LjQgOCAyODhDOCAxOTAuMiA3OC4xIDEwNy4yIDEyMyA2NEw5NiA2NCA5NiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessBishop: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 480l48-48 16 0 192 0 16 0 48 48 0 32L0 512l0-32z" />
            <path d="M96 0l32 0 64 0 32 0 0 64-27 0c22.3 21.4 50.8 52.7 73.8 90.6L164.7 260.7 153.4 272 176 294.6l11.3-11.3 99.4-99.4C301.8 215.6 312 250.7 312 288c0 47.4-30.8 72.3-56 84.7l0 59.3L64 432l0-59.3C38.8 360.3 8 335.4 8 288C8 190.2 78.1 107.2 123 64L96 64 96 0z" />
    </Icon>
);

export default ChessBishop;