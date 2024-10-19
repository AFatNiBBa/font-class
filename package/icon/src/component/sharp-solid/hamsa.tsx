
import { Icon } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=sharp-solid hamsa}
 * @preview ![hamsa](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyODhsOTYgMEw5NiAzMmw4MCAwIDAgMTkyIDQwIDBMMjE2IDBsODAgMCAwIDIyNCA0MCAwIDAtMTkyIDgwIDAgMCAyNTYgOTYgMCAwIDQ4TDQxNi42IDQ0MWMtNDEuMSA0NS4yLTk5LjQgNzEtMTYwLjYgNzFzLTExOS40LTI1LjgtMTYwLjYtNzFMMCAzMzZsMC00OHptMjU2IDBjLTQ4IDAtOTYgNjQtOTYgNjRzNDggNjQgOTYgNjRzOTYtNjQgOTYtNjRzLTQ4LTY0LTk2LTY0em0wIDMyYTMyIDMyIDAgMSAxIDAgNjQgMzIgMzIgMCAxIDEgMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288l96 0L96 32l80 0 0 192 40 0L216 0l80 0 0 224 40 0 0-192 80 0 0 256 96 0 0 48L416.6 441c-41.1 45.2-99.4 71-160.6 71s-119.4-25.8-160.6-71L0 336l0-48zm256 0c-48 0-96 64-96 64s48 64 96 64s96-64 96-64s-48-64-96-64zm0 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hamsa;