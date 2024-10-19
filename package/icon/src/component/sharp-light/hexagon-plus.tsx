
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-plus?s=sharp-light hexagon-plus}
 * @preview ![hexagon-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzYuOSAyNTZMMTQ2LjYgNjRsMjE4LjkgMEw0NzUuMSAyNTYgMzY1LjQgNDQ4bC0yMTguOSAwTDM2LjkgMjU2ek0xMjggMzJMMCAyNTYgMTI4IDQ4MGwyNTYgMEw1MTIgMjU2IDM4NCAzMiAxMjggMzJ6TTI3MiAxNjBsLTMyIDAgMCAxNiAwIDY0LTY0IDAtMTYgMCAwIDMyIDE2IDAgNjQgMCAwIDY0IDAgMTYgMzIgMCAwLTE2IDAtNjQgNjQgMCAxNiAwIDAtMzItMTYgMC02NCAwIDAtNjQgMC0xNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HexagonPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M36.9 256L146.6 64l218.9 0L475.1 256 365.4 448l-218.9 0L36.9 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM272 160l-32 0 0 16 0 64-64 0-16 0 0 32 16 0 64 0 0 64 0 16 32 0 0-16 0-64 64 0 16 0 0-32-16 0-64 0 0-64 0-16z" />
    </Icon>
);

export default HexagonPlus;