
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ellipsis-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis-vertical?s=sharp-duotone-solid ellipsis-vertical}
 * @preview ![ellipsis-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAyMDhsOTYgMCAwIDk2LTk2IDAgMC05NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTExMiA0OEwxNiA0OGwwIDk2IDk2IDAgMC05NnptMCAzMjBsLTk2IDAgMCA5NiA5NiAwIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const EllipsisVertical: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path class={generic.secondary} d="M16 208l96 0 0 96-96 0 0-96z" />
            <path d="M112 48L16 48l0 96 96 0 0-96zm0 320l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default EllipsisVertical;