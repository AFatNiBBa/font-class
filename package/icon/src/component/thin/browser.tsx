
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=thin browser}
 * @preview ![browser](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTI4IDQ4bDAgNDggMCA0OCAzNjggMCAwLTQ4YzAtMjYuNS0yMS41LTQ4LTQ4LTQ4TDEyOCA0OHptLTE2IDBMNjQgNDhDMzcuNSA0OCAxNiA2OS41IDE2IDk2bDAgNDggOTYgMCAwLTQ4IDAtNDh6TTE2IDE2MGwwIDI1NmMwIDI2LjUgMjEuNSA0OCA0OCA0OGwzODQgMGMyNi41IDAgNDgtMjEuNSA0OC00OGwwLTI1Ni0zNzYgMEwxNiAxNjB6TTAgOTZDMCA2MC43IDI4LjcgMzIgNjQgMzJsMzg0IDBjMzUuMyAwIDY0IDI4LjcgNjQgNjRsMCAzMjBjMCAzNS4zLTI4LjcgNjQtNjQgNjRMNjQgNDgwYy0zNS4zIDAtNjQtMjguNy02NC02NEwwIDk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 48l0 48 0 48 368 0 0-48c0-26.5-21.5-48-48-48L128 48zm-16 0L64 48C37.5 48 16 69.5 16 96l0 48 96 0 0-48 0-48zM16 160l0 256c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-256-376 0L16 160zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default Browser;