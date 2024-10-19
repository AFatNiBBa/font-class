
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon-check?s=sharp-regular hexagon-check}
 * @preview ![hexagon-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTUuMyAyNTZMMTU1LjkgODBsMjAwLjMgMEw0NTYuNyAyNTYgMzU2LjEgNDMybC0yMDAuMyAwTDU1LjMgMjU2ek0xMjggMzJMMCAyNTYgMTI4IDQ4MGwyNTYgMEw1MTIgMjU2IDM4NCAzMiAxMjggMzJ6TTM2OSAyMDlsMTctMTdMMzUyIDE1OC4xbC0xNyAxNy0xMTEgMTExLTQ3LTQ3LTE3LTE3TDEyNi4xIDI1NmwxNyAxNyA2NCA2NCAxNyAxNyAxNy0xN0wzNjkgMjA5eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HexagonCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M55.3 256L155.9 80l200.3 0L456.7 256 356.1 432l-200.3 0L55.3 256zM128 32L0 256 128 480l256 0L512 256 384 32 128 32zM369 209l17-17L352 158.1l-17 17-111 111-47-47-17-17L126.1 256l17 17 64 64 17 17 17-17L369 209z" />
    </Icon>
);

export default HexagonCheck;