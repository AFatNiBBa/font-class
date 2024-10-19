
import { Icon, generic } from "../../index";

/**
 * A component that renders the `staff` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff?s=sharp-duotone-solid staff}
 * @preview ![staff](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAyODhsNjAuMSAwYy0yMCAyMC00MC4xIDQwLjEtNjAuMSA2MC4xTDk2IDI4OHptMjY1LjEtLjdjMjcuNS03LjkgNTUuMS0xNS43IDgyLjYtMjMuNkw0MTMuNyAzMTdsLTUyLjYtMjkuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMwNi4zIDBMMzM2IDAgNDY0IDBsNDggMCAwIDQ4IDAgMTYwIDAgMzYuMi0zNC44IDkuOS0yMTIgNjAuNkwxMDUuOSA0NzMuOSA3MiA1MDcuOSA0LjEgNDQwbDMzLjktMzMuOSAxNjgtMTY4IDguOC04LjggMTItMy40TDQxNiAxNzEuOCA0MTYgOTZsLTUwLjMgMC0yLjcgNS41LTIxLjUgNDIuOS04NS45LTQyLjkgMjEuNS00Mi45IDE2LTMyTDMwNi4zIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Staff: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 288l60.1 0c-20 20-40.1 40.1-60.1 60.1L96 288zm265.1-.7c27.5-7.9 55.1-15.7 82.6-23.6L413.7 317l-52.6-29.7z" />
            <path d="M306.3 0L336 0 464 0l48 0 0 48 0 160 0 36.2-34.8 9.9-212 60.6L105.9 473.9 72 507.9 4.1 440l33.9-33.9 168-168 8.8-8.8 12-3.4L416 171.8 416 96l-50.3 0-2.7 5.5-21.5 42.9-85.9-42.9 21.5-42.9 16-32L306.3 0z" />
    </Icon>
);

export default Staff;