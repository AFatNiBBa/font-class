
import { Icon, generic } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=sharp-duotone-solid exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0MTZsNjQgMCAwIDY0LTY0IDAgMC02NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDMybDAgMzIgMCAyNTYgMCAzMi02NCAwIDAtMzJMMzIgNjRsMC0zMiA2NCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path class={generic.secondary} d="M32 416l64 0 0 64-64 0 0-64z" />
            <path d="M96 32l0 32 0 256 0 32-64 0 0-32L32 64l0-32 64 0z" />
    </Icon>
);

export default Exclamation;