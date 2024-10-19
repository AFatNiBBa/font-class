
import { Icon } from "../../index";

/**
 * A component that renders the `clock` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock?s=solid clock}
 * @preview ![clock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDBhMjU2IDI1NiAwIDEgMSAwIDUxMkEyNTYgMjU2IDAgMSAxIDI1NiAwek0yMzIgMTIwbDAgMTM2YzAgOCA0IDE1LjUgMTAuNyAyMGw5NiA2NGMxMSA3LjQgMjUuOSA0LjQgMzMuMy02LjdzNC40LTI1LjktNi43LTMzLjNMMjgwIDI0My4yIDI4MCAxMjBjMC0xMy4zLTEwLjctMjQtMjQtMjRzLTI0IDEwLjctMjQgMjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Clock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
    </Icon>
);

export default Clock;