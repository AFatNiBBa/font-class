
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=sharp-duotone-solid ticket-simple}
 * @preview ![ticket-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDU3NiAwIDAgMTQ0Yy0yNi41IDAtNDggMjEuNS00OCA0OHMyMS41IDQ4IDQ4IDQ4bDAgMTQ0TDAgNDQ4IDAgMzA0YzI2LjUgMCA0OC0yMS41IDQ4LTQ4cy0yMS41LTQ4LTQ4LTQ4TDAgNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l576 0 0 144c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 144L0 448 0 304c26.5 0 48-21.5 48-48s-21.5-48-48-48L0 64z" />
    </Icon>
);

export default TicketSimple;