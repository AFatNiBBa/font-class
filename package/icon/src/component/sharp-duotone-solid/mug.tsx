
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug?s=sharp-duotone-solid mug}
 * @preview ![mug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTYgNjRsMCA2NCAzMiAwYzM1LjMgMCA2NCAyOC43IDY0IDY0cy0yOC43IDY0LTY0IDY0bC0zMiAwIDAgNjQgMzIgMGM3MC43IDAgMTI4LTU3LjMgMTI4LTEyOHMtNTcuMy0xMjgtMTI4LTEyOGwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTMyIDY0SDQxNlY0NDhIMzJWNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mug: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M416 64l0 64 32 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0 64 32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-32 0z" />
            <path d="M32 64H416V448H32V64z" />
    </Icon>
);

export default Mug;