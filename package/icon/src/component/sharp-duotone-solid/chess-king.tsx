
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-king` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-king?s=sharp-duotone-solid chess-king}
 * @preview ![chess-king](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0ODBsNDgtNDggMjg4IDAgNDggNDggMCAzMkwzMiA1MTJsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAzMmwwLTMyTDE5MiAwbDAgMzIgMCAxNi0xNiAwLTMyIDAgMCA2NCAzMiAwIDE2IDAgMCA0OEwwIDE2MGwwIDQ4TDgwIDQzMmwyODggMCA4MC0yMjQgMC00OC0xOTIgMCAwLTQ4IDE2IDAgMzIgMCAwLTY0LTMyIDAtMTYgMCAwLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessKing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 480l48-48 288 0 48 48 0 32L32 512l0-32z" />
            <path d="M256 32l0-32L192 0l0 32 0 16-16 0-32 0 0 64 32 0 16 0 0 48L0 160l0 48L80 432l288 0 80-224 0-48-192 0 0-48 16 0 32 0 0-64-32 0-16 0 0-16z" />
    </Icon>
);

export default ChessKing;