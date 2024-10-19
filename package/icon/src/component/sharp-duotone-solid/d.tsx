
import { Icon, generic } from "../../index";

/**
 * A component that renders the `d` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/d?s=sharp-duotone-solid d}
 * @preview ![d](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMybDMyIDAgMTI4IDBjMTIzLjcgMCAyMjQgMTAwLjMgMjI0IDIyNHMtMTAwLjMgMjI0LTIyNCAyMjRMMzIgNDgwIDAgNDgwbDAtMzJMMCA2NCAwIDMyek02NCA5NmwwIDMyMCA5NiAwYzg4LjQgMCAxNjAtNzEuNiAxNjAtMTYwcy03MS42LTE2MC0xNjAtMTYwTDY0IDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const D: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 32l32 0 128 0c123.7 0 224 100.3 224 224s-100.3 224-224 224L32 480 0 480l0-32L0 64 0 32zM64 96l0 320 96 0c88.4 0 160-71.6 160-160s-71.6-160-160-160L64 96z" />
    </Icon>
);

export default D;