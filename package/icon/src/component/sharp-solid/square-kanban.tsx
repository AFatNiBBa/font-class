
import { Icon } from "../../index";

/**
 * A component that renders the `square-kanban` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-kanban?s=sharp-solid square-kanban}
 * @preview ![square-kanban](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTI4OCAzODRsMC0yNTYgNjQgMCAwIDI1Ni02NCAwek0yNTYgMjU2bC02NCAwIDAtMTI4IDY0IDAgMCAxMjh6TTk2IDMyMGwwLTE5MiA2NCAwIDAgMTkyLTY0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquareKanban: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM288 384l0-256 64 0 0 256-64 0zM256 256l-64 0 0-128 64 0 0 128zM96 320l0-192 64 0 0 192-64 0z" />
    </Icon>
);

export default SquareKanban;