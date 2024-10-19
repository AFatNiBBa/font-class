
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=duotone person-simple}
 * @preview ![person-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA2NGE2NCA2NCAwIDEgMCAxMjggMEE2NCA2NCAwIDEgMCA2NCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEwNS42IDE2MGMtNDEuNiAwLTc2LjMgMzEuOS03OS43IDczLjRsLTQuMSA0OS4zYy0yLjUgMjkuOCAxNS43IDU2LjEgNDIuMiA2NS42TDY0IDQ2NGMwIDI2LjUgMjEuNSA0OCA0OCA0OGwzMiAwYzI2LjUgMCA0OC0yMS41IDQ4LTQ4bDAtMTE1LjdjMjYuNS05LjUgNDQuNy0zNS44IDQyLjItNjUuNmwtNC4xLTQ5LjNDMjI2LjcgMTkxLjkgMTkyIDE2MCAxNTAuNCAxNjBsLTQ0LjggMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M64 64a64 64 0 1 0 128 0A64 64 0 1 0 64 64z" />
            <path d="M105.6 160c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6L64 464c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-115.7c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3C226.7 191.9 192 160 150.4 160l-44.8 0z" />
    </Icon>
);

export default PersonSimple;