
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-minus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-minus?s=sharp-regular hexagon-minus}
 * @preview ![hexagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTUuMyAyNTZMMTU1LjkgODBsMjAwLjMgMEw0NTYuNyAyNTYgMzU2LjEgNDMybC0yMDAuMyAwTDU1LjMgMjU2ek0xMjggMzJMMCAyNTYgMTI4IDQ4MGwyNTYgMEw1MTIgMjU2IDM4NCAzMiAxMjggMzJ6bTU2IDIwMGwtMjQgMCAwIDQ4IDI0IDAgMTQ0IDAgMjQgMCAwLTQ4LTI0IDAtMTQ0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HexagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M55.3 256L155.9 80l200.3 0L456.7 256 356.1 432l-200.3 0L55.3 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zm56 200l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default HexagonMinus;