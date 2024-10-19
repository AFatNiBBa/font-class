
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=sharp-duotone-solid flashlight}
 * @preview ![flashlight](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMjI0bDAgNjQgOTYgMCAwLTY0LTk2IDB6TTU3NiA5NmwwIDMyMCAzMiAwYzE3LjcgMCAzMi0xNC4zIDMyLTMybDAtMjU2YzAtMTcuNy0xNC4zLTMyLTMyLTMybC0zMiAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDM1MnM4MCA2NCAxOTIgNjRsMC0zMjBjLTExMiAwLTE5MiA2NC0xOTIgNjRMMCAxNjAgMCAzNTJsMzg0IDB6TTMyMCAyMjRsMCA2NC05NiAwIDAtNjQgOTYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 224l0 64 96 0 0-64-96 0zM576 96l0 320 32 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-32 0z" />
            <path d="M384 352s80 64 192 64l0-320c-112 0-192 64-192 64L0 160 0 352l384 0zM320 224l0 64-96 0 0-64 96 0z" />
    </Icon>
);

export default Flashlight;