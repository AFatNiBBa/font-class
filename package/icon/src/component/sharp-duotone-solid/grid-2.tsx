
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grid-2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grid-2?s=sharp-duotone-solid grid-2}
 * @preview ![grid-2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiAyODhsMCAxOTIgMTkyIDAgMC0xOTJMMzIgMjg4ek0yODggMzJsMCAxOTIgMTkyIDAgMC0xOTJMMjg4IDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjI0IDMyTDMyIDMybDAgMTkyIDE5MiAwIDAtMTkyek00ODAgMjg4bC0xOTIgMCAwIDE5MiAxOTIgMCAwLTE5MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Grid_2: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 288l0 192 192 0 0-192L32 288zM288 32l0 192 192 0 0-192L288 32z" />
            <path d="M224 32L32 32l0 192 192 0 0-192zM480 288l-192 0 0 192 192 0 0-192z" />
    </Icon>
);

export default Grid_2;