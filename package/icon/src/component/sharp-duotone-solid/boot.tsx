
import { Icon, generic } from "../../index";

/**
 * A component that renders the `boot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot?s=sharp-duotone-solid boot}
 * @preview ![boot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDMyMCAwIDAgNjQtNDggMC0xNiAwIDAgMzIgMTYgMCA0OCAwIDAgMzItNDggMC0xNiAwIDAgMzIgMTYgMCA0OCAwIDE5MiA0OCAwIDE0NEwwIDQ0OCAwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzUyIDBMMCAwIDAgOTZsMzUyIDAgMC05NnpNMCA0NDhsMCAzMiAzMiAzMiA2NCAwIDMyLTMyIDMyIDMyIDY0IDAgMzItMzIgMzIgMzIgNjQgMCAzMi0zMiAzMiAzMiA2NCAwIDMyLTMyIDAtMzJMMCA0NDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Boot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l320 0 0 64-48 0-16 0 0 32 16 0 48 0 0 32-48 0-16 0 0 32 16 0 48 0 192 48 0 144L0 448 0 96z" />
            <path d="M352 0L0 0 0 96l352 0 0-96zM0 448l0 32 32 32 64 0 32-32 32 32 64 0 32-32 32 32 64 0 32-32 32 32 64 0 32-32 0-32L0 448z" />
    </Icon>
);

export default Boot;