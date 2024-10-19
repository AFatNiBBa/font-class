
import { Icon, generic } from "../../index";

/**
 * A component that renders the `percent` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=duotone percent}
 * @preview ![percent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQxNmMwIDguMiAzLjEgMTYuNCA5LjQgMjIuNmMxMi41IDEyLjUgMzIuOCAxMi41IDQ1LjMgMGwzMjAtMzIwYzYuMi02LjIgOS40LTE0LjQgOS40LTIyLjZzLTMuMS0xNi40LTkuNC0yMi42Yy0xMi41LTEyLjUtMzIuOC0xMi41LTQ1LjMgMGwtMzIwIDMyMEMzLjEgMzk5LjYgMCA0MDcuOCAwIDQxNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDE5MkE2NCA2NCAwIDEgMCA2NCA2NGE2NCA2NCAwIDEgMCAwIDEyOHpNMzIwIDQ0OGE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l320-320c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6c-12.5-12.5-32.8-12.5-45.3 0l-320 320C3.1 399.6 0 407.8 0 416z" />
            <path d="M64 192A64 64 0 1 0 64 64a64 64 0 1 0 0 128zM320 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Percent;