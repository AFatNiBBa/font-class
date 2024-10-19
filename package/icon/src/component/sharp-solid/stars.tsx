
import { Icon } from "../../index";

/**
 * A component that renders the `stars` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=sharp-solid stars}
 * @preview ![stars](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzU2IDYwTDMzNiAwIDMxNiA2MCAyNTYgODBsNjAgMjAgMjAgNjAgMjAtNjAgNjAtMjBMMzU2IDYwek00NjQgMjA4bC0xNi00OC0xNiA0OC00OCAxNiA0OCAxNiAxNiA0OCAxNi00OCA0OC0xNi00OC0xNnpNMjUzLjMgMjY1LjFMMTkzLjUgMTQ0IDEzMy43IDI2NS4xIDAgMjg0LjZsOTYuNyA5NC4zTDczLjkgNTEybDExOS42LTYyLjlMMzEzIDUxMiAyOTAuMiAzNzguOWw5Ni43LTk0LjNMMjUzLjMgMjY1LjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const Stars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M356 60L336 0 316 60 256 80l60 20 20 60 20-60 60-20L356 60zM464 208l-16-48-16 48-48 16 48 16 16 48 16-48 48-16-48-16zM253.3 265.1L193.5 144 133.7 265.1 0 284.6l96.7 94.3L73.9 512l119.6-62.9L313 512 290.2 378.9l96.7-94.3L253.3 265.1z" />
    </Icon>
);

export default Stars;