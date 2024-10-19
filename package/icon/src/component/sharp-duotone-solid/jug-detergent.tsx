
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug-detergent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug-detergent?s=sharp-duotone-solid jug-detergent}
 * @preview ![jug-detergent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0OGwwIDQ4IDE5MiAwIDAtNDgtMzIgMCAwLTQ4TDk2IDBsMCA0OEw2NCA0OHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTEyOCAxMjhDNTcuMyAxMjggMCAxODUuMyAwIDI1NkwwIDUxMmwzODQgMCAwLTM4NC0yNTYgMHptMTkyIDk2bDAgMTYwLTY0IDAgMC0xNjAgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const JugDetergent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M64 48l0 48 192 0 0-48-32 0 0-48L96 0l0 48L64 48z" />
            <path d="M128 128C57.3 128 0 185.3 0 256L0 512l384 0 0-384-256 0zm192 96l0 160-64 0 0-160 64 0z" />
    </Icon>
);

export default JugDetergent;