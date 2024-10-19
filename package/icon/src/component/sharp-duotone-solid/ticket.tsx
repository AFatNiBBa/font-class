
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=sharp-duotone-solid ticket}
 * @preview ![ticket](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgMjA4YzI2LjUgMCA0OCAyMS41IDQ4IDQ4cy0yMS41IDQ4LTQ4IDQ4TDAgNDQ4bDU3NiAwIDAtMTQ0Yy0yNi41IDAtNDgtMjEuNS00OC00OHMyMS41LTQ4IDQ4LTQ4bDAtMTQ0TDAgNjR6bTk2IDY0bDMyIDAgMzIwIDAgMzIgMCAwIDMyIDAgMTkyIDAgMzItMzIgMC0zMjAgMC0zMiAwIDAtMzIgMC0xOTIgMC0zMnptMzIgMzJsMCAxOTIgMzIwIDAgMC0xOTItMzIwIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMTYwbDAgMTkyLTMyMCAwIDAtMTkyIDMyMCAwek0xMjggMTI4bC0zMiAwIDAgMzIgMCAxOTIgMCAzMiAzMiAwIDMyMCAwIDMyIDAgMC0zMiAwLTE5MiAwLTMyLTMyIDAtMzIwIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 208c26.5 0 48 21.5 48 48s-21.5 48-48 48L0 448l576 0 0-144c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-144L0 64zm96 64l32 0 320 0 32 0 0 32 0 192 0 32-32 0-320 0-32 0 0-32 0-192 0-32zm32 32l0 192 320 0 0-192-320 0z" />
            <path d="M448 160l0 192-320 0 0-192 320 0zM128 128l-32 0 0 32 0 192 0 32 32 0 320 0 32 0 0-32 0-192 0-32-32 0-320 0z" />
    </Icon>
);

export default Ticket;