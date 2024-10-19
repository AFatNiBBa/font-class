
import { Icon, generic } from "../../index";

/**
 * A component that renders the `divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=sharp-duotone-solid divide}
 * @preview ![divide](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNiAyMjRsMCA2NCAzMiAwIDM1MiAwIDMyIDAgMC02NC0zMiAwTDQ4IDIyNGwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI3MiA0OGwtOTYgMCAwIDk2IDk2IDAgMC05NnptMCAzMjBsLTk2IDAgMCA5NiA5NiAwIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 224l0 64 32 0 352 0 32 0 0-64-32 0L48 224l-32 0z" />
            <path d="M272 48l-96 0 0 96 96 0 0-96zm0 320l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default Divide;