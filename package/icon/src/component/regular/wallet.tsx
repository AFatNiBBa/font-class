
import { Icon } from "../../index";

/**
 * A component that renders the `wallet` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wallet?s=regular wallet}
 * @preview ![wallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNODggMzJDMzkuNCAzMiAwIDcxLjQgMCAxMjBMMCAzOTJjMCA0OC42IDM5LjQgODggODggODhsMzM2IDBjNDguNiAwIDg4LTM5LjQgODgtODhsMC0xNzZjMC00OC42LTM5LjQtODgtODgtODhsLTMwNCAwYy0xMy4zIDAtMjQgMTAuNy0yNCAyNHMxMC43IDI0IDI0IDI0bDMwNCAwYzIyLjEgMCA0MCAxNy45IDQwIDQwbDAgMTc2YzAgMjIuMS0xNy45IDQwLTQwIDQwTDg4IDQzMmMtMjIuMSAwLTQwLTE3LjktNDAtNDBsMC0yNzJjMC0yMi4xIDE3LjktNDAgNDAtNDBsMzY4IDBjMTMuMyAwIDI0LTEwLjcgMjQtMjRzLTEwLjctMjQtMjQtMjRMODggMzJ6TTM4NCAzMzZhMzIgMzIgMCAxIDAgMC02NCAzMiAzMiAwIDEgMCAwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Wallet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M88 32C39.4 32 0 71.4 0 120L0 392c0 48.6 39.4 88 88 88l336 0c48.6 0 88-39.4 88-88l0-176c0-48.6-39.4-88-88-88l-304 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l304 0c22.1 0 40 17.9 40 40l0 176c0 22.1-17.9 40-40 40L88 432c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 32zM384 336a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Wallet;