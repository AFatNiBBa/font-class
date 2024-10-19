
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flute` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flute?s=sharp-duotone-solid flute}
 * @preview ![flute](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MEwwIDM1Mmw5NiAwIDAtMTkyTDAgMTYwem0xMjggMGwwIDE5MiA1MTIgMCAwLTE5Mi01MTIgMHptMjE2IDk2YTI0IDI0IDAgMSAxIC00OCAwIDI0IDI0IDAgMSAxIDQ4IDB6bTk2IDBhMjQgMjQgMCAxIDEgLTQ4IDAgMjQgMjQgMCAxIDEgNDggMHptOTYgMGEyNCAyNCAwIDEgMSAtNDggMCAyNCAyNCAwIDEgMSA0OCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTI4IDE2MGwtMzIgMCAwIDE5MiAzMiAwIDAtMTkyek0zMjAgMjgwYTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHptOTYgMGEyNCAyNCAwIDEgMCAwLTQ4IDI0IDI0IDAgMSAwIDAgNDh6bTEyMC0yNGEyNCAyNCAwIDEgMCAtNDggMCAyNCAyNCAwIDEgMCA0OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Flute: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160L0 352l96 0 0-192L0 160zm128 0l0 192 512 0 0-192-512 0zm216 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm96 0a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
            <path d="M128 160l-32 0 0 192 32 0 0-192zM320 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm96 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Flute;