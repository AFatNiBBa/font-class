
import { Icon } from "../../index";

/**
 * A component that renders the `chess-queen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chess-queen?s=sharp-solid chess-queen}
 * @preview ![chess-queen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjAwIDU2YTU2IDU2IDAgMSAxIDExMiAwQTU2IDU2IDAgMSAxIDIwMCA1NnpNNjQgNDgwbDQ4LTQ4IDI4OCAwIDQ4IDQ4IDAgMzJMNjQgNTEybDAtMzJ6TTQyNCAxOTJjMjAuNiAwIDM5LTkuNyA1MC43LTI0LjlMNTEyIDE5MiA0MDAgNDAwbC0yODggMEwwIDE5MmwzNy4zLTI0LjlDNDkgMTgyLjMgNjcuNCAxOTIgODggMTkyYzM1LjMgMCA2NC0yOC43IDY0LTY0bDQyIDBjNi4yIDI0IDI2IDQyLjYgNTAuNyA0N2MzLjQgLjYgNy4yIDEgMTEuMyAxczcuOC0uMyAxMS4zLTFjMjQuNy00LjQgNDQuNS0yMyA1MC43LTQ3bDQyIDBjMCAzNS4zIDI4LjcgNjQgNjQgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChessQueen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M200 56a56 56 0 1 1 112 0A56 56 0 1 1 200 56zM64 480l48-48 288 0 48 48 0 32L64 512l0-32zM424 192c20.6 0 39-9.7 50.7-24.9L512 192 400 400l-288 0L0 192l37.3-24.9C49 182.3 67.4 192 88 192c35.3 0 64-28.7 64-64l42 0c6.2 24 26 42.6 50.7 47c3.4 .6 7.2 1 11.3 1s7.8-.3 11.3-1c24.7-4.4 44.5-23 50.7-47l42 0c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default ChessQueen;