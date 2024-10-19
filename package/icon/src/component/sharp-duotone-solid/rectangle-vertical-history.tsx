
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=sharp-duotone-solid rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2TDAgNDE2bDQ4IDBMNDggOTYgMCA5NnpNOTYgNDhsMCA0MTYgNDggMCAwLTQxNkw5NiA0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAwSDU3NlY1MTJIMTkyVjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const RectangleVerticalHistory: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416l48 0L48 96 0 96zM96 48l0 416 48 0 0-416L96 48z" />
            <path d="M192 0H576V512H192V0z" />
    </Icon>
);

export default RectangleVerticalHistory;