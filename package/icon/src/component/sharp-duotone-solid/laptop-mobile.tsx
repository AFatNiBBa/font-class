
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-mobile` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-mobile?s=sharp-duotone-solid laptop-mobile}
 * @preview ![laptop-mobile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OGwwIDQ4IDQ4IDQ4IDMwNCAwIDAtOTYtMjI0IDAgMC0yMjQgMzIwIDAgMCAzMiA2NCAwIDAtNjQgMC0zMkw0ODAgMCA5NiAwIDY0IDBsMCAzMiAwIDI1NkwwIDI4OHptNDQ4LTk2bDAgMjU2IDEyOCAwIDAtMjU2LTEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTc2IDE5MmwwIDI1Ni0xMjggMCAwLTI1NiAxMjggMHpNNDQ4IDEyOGwtNjQgMCAwIDY0IDAgMjU2IDAgNjQgNjQgMCAxMjggMCA2NCAwIDAtNjQgMC0yNTYgMC02NC02NCAwLTEyOCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const LaptopMobile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 48 48 48 304 0 0-96-224 0 0-224 320 0 0 32 64 0 0-64 0-32L480 0 96 0 64 0l0 32 0 256L0 288zm448-96l0 256 128 0 0-256-128 0z" />
            <path d="M576 192l0 256-128 0 0-256 128 0zM448 128l-64 0 0 64 0 256 0 64 64 0 128 0 64 0 0-64 0-256 0-64-64 0-128 0z" />
    </Icon>
);

export default LaptopMobile;