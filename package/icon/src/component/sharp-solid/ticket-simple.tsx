
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=sharp-solid ticket-simple}
 * @preview ![ticket-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NGw1NzYgMCAwIDE0NGMtMjYuNSAwLTQ4IDIxLjUtNDggNDhzMjEuNSA0OCA0OCA0OGwwIDE0NEwwIDQ0OCAwIDMwNGMyNi41IDAgNDgtMjEuNSA0OC00OHMtMjEuNS00OC00OC00OEwwIDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64l576 0 0 144c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 144L0 448 0 304c26.5 0 48-21.5 48-48s-21.5-48-48-48L0 64z" />
    </Icon>
);

export default TicketSimple;