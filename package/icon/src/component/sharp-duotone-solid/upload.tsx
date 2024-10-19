
import { Icon, generic } from "../../index";

/**
 * A component that renders the `upload` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/upload?s=sharp-duotone-solid upload}
 * @preview ![upload](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MkwwIDUxMmw1MTIgMCAwLTE2MC0yMjQgMCAwIDMyIDAgMzItNjQgMCAwLTMyIDAtMzJMMCAzNTJ6bTQ1NiA4MGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjg4IDQxNmwwLTMyIDAtMjU4LjcgNjUuNCA2NS40TDM3NiAyMTMuMyA0MjEuMyAxNjhsLTIyLjYtMjIuNi0xMjAtMTIwTDI1NiAyLjcgMjMzLjQgMjUuNGwtMTIwIDEyMEw5MC43IDE2OCAxMzYgMjEzLjNsMjIuNi0yMi42TDIyNCAxMjUuMyAyMjQgMzg0bDAgMzIgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Upload: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 512l512 0 0-160-224 0 0 32 0 32-64 0 0-32 0-32L0 352zm456 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M288 416l0-32 0-258.7 65.4 65.4L376 213.3 421.3 168l-22.6-22.6-120-120L256 2.7 233.4 25.4l-120 120L90.7 168 136 213.3l22.6-22.6L224 125.3 224 384l0 32 64 0z" />
    </Icon>
);

export default Upload;