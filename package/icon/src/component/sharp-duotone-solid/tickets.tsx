
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets?s=sharp-duotone-solid tickets}
 * @preview ![tickets](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzMmwwIDEyOGMyNi41IDAgNDggMjEuNSA0OCA0OHMtMjEuNSA0OC00OCA0OGwwIDEyOCA1NDQgMCAwLTEyOGMtMjYuNSAwLTQ4LTIxLjUtNDgtNDhzMjEuNS00OCA0OC00OGwwLTEyOEw5NiAzMnptOTYgNjRsMzIgMCAyODggMCAzMiAwIDAgMzIgMCAxNjAgMCAzMi0zMiAwLTI4OCAwLTMyIDAgMC0zMiAwLTE2MCAwLTMyem0zMiAzMmwwIDE2MCAyODggMCAwLTE2MC0yODggMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTQ4IDEyMGwwLTI0TDAgOTZsMCAyNEwwIDQ1NmwwIDI0IDI0IDAgNDk2IDAgMjQgMCAwLTQ4LTI0IDBMNDggNDMybDAtMzEyem0xNzYgOGwyODggMCAwIDE2MC0yODggMCAwLTE2MHpNMTkyIDk2bDAgMzIgMCAxNjAgMCAzMiAzMiAwIDI4OCAwIDMyIDAgMC0zMiAwLTE2MCAwLTMyLTMyIDBMMjI0IDk2bC0zMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Tickets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 128c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 128 544 0 0-128c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-128L96 32zm96 64l32 0 288 0 32 0 0 32 0 160 0 32-32 0-288 0-32 0 0-32 0-160 0-32zm32 32l0 160 288 0 0-160-288 0z" />
            <path d="M48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312zm176 8l288 0 0 160-288 0 0-160zM192 96l0 32 0 160 0 32 32 0 288 0 32 0 0-32 0-160 0-32-32 0L224 96l-32 0z" />
    </Icon>
);

export default Tickets;