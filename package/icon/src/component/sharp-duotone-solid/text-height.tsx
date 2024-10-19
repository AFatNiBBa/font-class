
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-height` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-height?s=sharp-duotone-solid text-height}
 * @preview ![text-height](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgOTYgMCA2NCAwIDk2IDAgMzIgMCAwIDMyIDAgNjQgMCAzMi02NCAwIDAtMzIgMC0zMi02NCAwIDAgMzIwIDMyIDAgMzIgMCAwIDY0LTMyIDBMOTYgNDgwbC0zMiAwIDAtNjQgMzIgMCAzMiAwIDAtMzIwTDY0IDk2bDAgMzIgMCAzMkwwIDE2MGwwLTMyTDAgNjQgMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTM4NCAxMjhsOTYtOTYgOTYgOTYgMCAzMi02NCAwIDAgMTkyIDY0IDAgMCAzMi05NiA5Ni05Ni05NiAwLTMyIDY0IDAgMC0xOTItNjQgMCAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TextHeight: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 96 0 64 0 96 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32-64 0 0 320 32 0 32 0 0 64-32 0L96 480l-32 0 0-64 32 0 32 0 0-320L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
            <path d="M384 128l96-96 96 96 0 32-64 0 0 192 64 0 0 32-96 96-96-96 0-32 64 0 0-192-64 0 0-32z" />
    </Icon>
);

export default TextHeight;