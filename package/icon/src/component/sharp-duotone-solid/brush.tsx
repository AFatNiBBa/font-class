
import { Icon, generic } from "../../index";

/**
 * A component that renders the `brush` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brush?s=sharp-duotone-solid brush}
 * @preview ![brush](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCAyODhsMzg0IDBMMzg0IDAgMjI0IDAgMTkyIDY0IDE2MCAwIDEyOCAwIDk2IDY0IDY0IDAgMCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyODhsMzg0IDAgMCA5Ni0xMjggMCAwIDEyOC0xMjggMCAwLTEyOEwwIDM4NGwwLTk2ek0xOTIgNDY0YTE2IDE2IDAgMSAwIDAtMzIgMTYgMTYgMCAxIDAgMCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Brush: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 288l384 0L384 0 224 0 192 64 160 0 128 0 96 64 64 0 0 0z" />
            <path d="M0 288l384 0 0 96-128 0 0 128-128 0 0-128L0 384l0-96zM192 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Brush;