
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar?s=duotone calendar}
 * @preview ![calendar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5Mmw0NDggMCAwIDI3MmMwIDI2LjUtMjEuNSA0OC00OCA0OEw0OCA1MTJjLTI2LjUgMC00OC0yMS41LTQ4LTQ4TDAgMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDMyYzAtMTcuNy0xNC4zLTMyLTMyLTMyUzk2IDE0LjMgOTYgMzJsMCAzMkw0OCA2NEMyMS41IDY0IDAgODUuNSAwIDExMmwwIDgwIDQ0OCAwIDAtODBjMC0yNi41LTIxLjUtNDgtNDgtNDhsLTQ4IDAgMC0zMmMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMmwwIDMyTDE2MCA2NGwwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Calendar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192z" />
            <path d="M160 32c0-17.7-14.3-32-32-32S96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 80 448 0 0-80c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32z" />
    </Icon>
);

export default Calendar;