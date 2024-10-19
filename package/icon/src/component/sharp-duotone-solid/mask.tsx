
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=sharp-duotone-solid mask}
 * @preview ![mask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI3MkMwIDM4NCA4MCA0NDggMTc2IDQ0OGw0OCAwIDMyLTk2IDY0IDAgMzIgOTYgNDggMGM5NiAwIDE3Ni02NCAxNzYtMTc2cy02NC0yMDgtMjg4LTIwOFMwIDE2MCAwIDI3MnptMjI0LTE2QTY0IDY0IDAgMSAxIDk2IDI1NmE2NCA2NCAwIDEgMSAxMjggMHptMjU2IDBhNjQgNjQgMCAxIDEgLTEyOCAwIDY0IDY0IDAgMSAxIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYwIDMyMGE2NCA2NCAwIDEgMCAwLTEyOCA2NCA2NCAwIDEgMCAwIDEyOHptMjU2IDBhNjQgNjQgMCAxIDAgMC0xMjggNjQgNjQgMCAxIDAgMCAxMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 272C0 384 80 448 176 448l48 0 32-96 64 0 32 96 48 0c96 0 176-64 176-176s-64-208-288-208S0 160 0 272zm224-16A64 64 0 1 1 96 256a64 64 0 1 1 128 0zm256 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M160 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm256 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Mask;