
import { Icon, generic } from "../../index";

/**
 * A component that renders the `l` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/l?s=duotone l}
 * @preview ![l](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAzMmMxNy43IDAgMzIgMTQuMyAzMiAzMmwwIDM1MiAxOTIgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkw2NCA0ODBjLTE3LjcgMC0zMi0xNC4zLTMyLTMyTDMyIDY0YzAtMTcuNyAxNC4zLTMyIDMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const L: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 32c17.7 0 32 14.3 32 32l0 352 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default L;