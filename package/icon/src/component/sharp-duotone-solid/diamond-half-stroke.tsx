
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half-stroke?s=sharp-duotone-solid diamond-half-stroke}
 * @preview ![diamond-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgMGwwIDkwLjVMNDIxLjUgMjU2IDI1NiA0MjEuNWwwIDkwLjUgNDUuMy00NS4zTDQ2Ni43IDMwMS4zIDUxMiAyNTZsLTQ1LjMtNDUuM0wzMDEuMyA0NS4zIDI1NiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDBMMCAyNTYgMjU2IDUxMiAyNTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const DiamondHalfStroke: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M256 0l0 90.5L421.5 256 256 421.5l0 90.5 45.3-45.3L466.7 301.3 512 256l-45.3-45.3L301.3 45.3 256 0z" />
            <path d="M256 0L0 256 256 512 256 0z" />
    </Icon>
);

export default DiamondHalfStroke;