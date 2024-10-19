
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text-size` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/text-size?s=sharp-duotone-solid text-size}
 * @preview ![text-size](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgMTI4IDAgNjQgMCAxMjggMCAzMiAwIDAgMzIgMCA2NCAwIDMyLTY0IDAgMC0zMiAwLTMyLTk2IDAgMCAzMjAgMzIgMCAzMiAwIDAgNjQtMzIgMC0xMjggMC0zMiAwIDAtNjQgMzIgMCAzMiAwIDAtMzIwTDY0IDk2bDAgMzIgMCAzMkwwIDE2MGwwLTMyTDAgNjQgMCAzMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyMCAyMjRsMzIgMCAyNTYgMCAzMiAwIDAgMzIgMCAzMiAwIDMyLTY0IDAgMC0zMi02NCAwIDAgMTI4IDE2IDAgMzIgMCAwIDY0LTMyIDAtOTYgMC0zMiAwIDAtNjQgMzIgMCAxNiAwIDAtMTI4LTY0IDAgMCAzMi02NCAwIDAtMzIgMC0zMiAwLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TextSize: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 128 0 64 0 128 0 32 0 0 32 0 64 0 32-64 0 0-32 0-32-96 0 0 320 32 0 32 0 0 64-32 0-128 0-32 0 0-64 32 0 32 0 0-320L64 96l0 32 0 32L0 160l0-32L0 64 0 32z" />
            <path d="M320 224l32 0 256 0 32 0 0 32 0 32 0 32-64 0 0-32-64 0 0 128 16 0 32 0 0 64-32 0-96 0-32 0 0-64 32 0 16 0 0-128-64 0 0 32-64 0 0-32 0-32 0-32z" />
    </Icon>
);

export default TextSize;