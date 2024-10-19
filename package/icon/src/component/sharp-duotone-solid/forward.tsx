
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward?s=sharp-duotone-solid forward}
 * @preview ![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDI1NiAyNTYgMCA0NDggMCA2NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI1NiA2NFY0NDhMNTEyIDI1NiAyNTYgNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Forward: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L256 256 0 448 0 64z" />
            <path d="M256 64V448L512 256 256 64z" />
    </Icon>
);

export default Forward;