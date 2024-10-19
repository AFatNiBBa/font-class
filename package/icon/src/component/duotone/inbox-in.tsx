
import { Icon, generic } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=duotone inbox-in}
 * @preview ![inbox-in](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM2OGwwIDk2YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4bDQxNiAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtOTZjMC0yNi41LTIxLjUtNDgtNDgtNDhsLTc2LjIgMGMtMTIuMSAwLTIzLjIgNi44LTI4LjYgMTcuN2wtMTQuMyAyOC42Yy01LjQgMTAuOC0xNi41IDE3LjctMjguNiAxNy43bC0xMjAuNCAwYy0xMi4xIDAtMjMuMi02LjgtMjguNi0xNy43bC0xNC4zLTI4LjZjLTUuNC0xMC44LTE2LjUtMTcuNy0yOC42LTE3LjdMNDggMzIwYy0yNi41IDAtNDggMjEuNS00OCA0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTc4LjcgNDEuNC00MS40YzEyLjUtMTIuNSAzMi44LTEyLjUgNDUuMyAwczEyLjUgMzIuOCAwIDQ1LjNsLTk2IDk2Yy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMGwtOTYtOTZjLTEyLjUtMTIuNS0xMi41LTMyLjggMC00NS4zczMyLjgtMTIuNSA0NS4zIDBMMjI0IDIxMC43IDIyNCAzMmMwLTE3LjcgMTQuMy0zMiAzMi0zMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 368l0 96c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-76.2 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L48 320c-26.5 0-48 21.5-48 48z" />
            <path d="M256 0c17.7 0 32 14.3 32 32l0 178.7 41.4-41.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0l-96-96c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 224 32c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default InboxIn;