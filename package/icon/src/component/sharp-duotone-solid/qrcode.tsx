
import { Icon, generic } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=sharp-duotone-solid qrcode}
 * @preview ![qrcode](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMyTDAgMjI0bDE5MiAwIDAtMTkyTDAgMzJ6TTAgMjg4TDAgNDgwbDE5MiAwIDAtMTkyTDAgMjg4ek02NCA5Nmw2NCAwIDAgNjQtNjQgMCAwLTY0em0wIDI1Nmw2NCAwIDAgNjQtNjQgMCAwLTY0ek0yNTYgMzJsMCAxOTIgMTkyIDAgMC0xOTJMMjU2IDMyem02NCA2NGw2NCAwIDAgNjQtNjQgMCAwLTY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDI4OGw5NiAwIDAgMzIgNjQgMCAwLTMyIDMyIDAgMCAzMiAwIDk2LTk2IDAgMC0zMi0zMiAwIDAgOTYtNjQgMCAwLTk2IDAtOTZ6TTM4NCA0NDhsMCAzMi0zMiAwIDAtMzIgMzIgMHptNjQgMGwwIDMyLTMyIDAgMC0zMiAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 224l192 0 0-192L0 32zM0 288L0 480l192 0 0-192L0 288zM64 96l64 0 0 64-64 0 0-64zm0 256l64 0 0 64-64 0 0-64zM256 32l0 192 192 0 0-192L256 32zm64 64l64 0 0 64-64 0 0-64z" />
            <path d="M256 288l96 0 0 32 64 0 0-32 32 0 0 32 0 96-96 0 0-32-32 0 0 96-64 0 0-96 0-96zM384 448l0 32-32 0 0-32 32 0zm64 0l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default Qrcode;