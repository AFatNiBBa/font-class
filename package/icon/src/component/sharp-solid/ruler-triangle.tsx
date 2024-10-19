
import { Icon } from "../../index";

/**
 * A component that renders the `ruler-triangle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ruler-triangle?s=sharp-solid ruler-triangle}
 * @preview ![ruler-triangle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAwTDAgNTEybDUxMiAwIDAtNDgtNjAuNy02MC43LTI0IDI0TDQxNiA0MzguNiAzOTMuNCA0MTZsMTEuMy0xMS4zIDI0LTI0LTU3LjQtNTcuNC0yNCAyNEwzMzYgMzU4LjYgMzEzLjQgMzM2bDExLjMtMTEuMyAyNC0yNC01Ny40LTU3LjQtMjQgMjRMMjU2IDI3OC42IDIzMy40IDI1NmwxMS4zLTExLjMgMjQtMjQtNTcuNC01Ny40LTI0IDI0TDE3NiAxOTguNiAxNTMuNCAxNzZsMTEuMy0xMS4zIDI0LTI0TDEzMS4zIDgzLjNsLTI0IDI0TDk2IDExOC42IDczLjQgOTYgODQuNyA4NC43bDI0LTI0TDQ4IDAgMCAwek0xMjggMjU2TDI1NiAzODRsLTEyOCAwIDAtMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const RulerTriangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L0 512l512 0 0-48-60.7-60.7-24 24L416 438.6 393.4 416l11.3-11.3 24-24-57.4-57.4-24 24L336 358.6 313.4 336l11.3-11.3 24-24-57.4-57.4-24 24L256 278.6 233.4 256l11.3-11.3 24-24-57.4-57.4-24 24L176 198.6 153.4 176l11.3-11.3 24-24L131.3 83.3l-24 24L96 118.6 73.4 96 84.7 84.7l24-24L48 0 0 0zM128 256L256 384l-128 0 0-128z" />
    </Icon>
);

export default RulerTriangle;