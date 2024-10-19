
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chess-knight` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-knight?s=sharp-duotone-solid chess-knight}
 * @preview ![chess-knight](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiA0ODBsNDgtNDggMzIwIDAgNDggNDggMCAzMkwxNiA1MTJsMC0zMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDgwTDk2IDQ4IDY0IDMyIDY0IDAgMjA3LjkgMEMzMjIuOCAwIDQxNiA5My4yIDQxNiAyMDguMWMwIDEwLjYtLjggMjEuMi0yLjQgMzEuNkwzODQgNDMyIDY0IDQzMmwwLTgwTDIyNCAyNDhsMC00MEwxMTIgMjgwIDY0IDI0MCA2NCA4MHptNzYgNTZhMjAgMjAgMCAxIDAgMC00MCAyMCAyMCAwIDEgMCAwIDQweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ChessKnight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 480l48-48 320 0 48 48 0 32L16 512l0-32z" />
            <path d="M64 80L96 48 64 32 64 0 207.9 0C322.8 0 416 93.2 416 208.1c0 10.6-.8 21.2-2.4 31.6L384 432 64 432l0-80L224 248l0-40L112 280 64 240 64 80zm76 56a20 20 0 1 0 0-40 20 20 0 1 0 0 40z" />
    </Icon>
);

export default ChessKnight;