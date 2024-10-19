
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-arrow-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-arrow-up?s=sharp-duotone-solid trash-arrow-up}
 * @preview ![trash-arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1NiA1MTJsMzM2IDBMNDE2IDk2IDMyIDk2em03OC4xIDE2OGwxNy0xNyA4MC04MCAxNy0xNyAxNyAxNyA4MCA4MCAxNyAxN0wzMDQgMjk3LjlsLTE3LTE3LTM5LTM5TDI0OCAzNzZsMCAyNC00OCAwIDAtMjQgMC0xMzQuMS0zOSAzOS0xNyAxN0wxMTAuMSAyNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDQgMEwxMjggMzIgMCAzMiAwIDk2bDQ0OCAwIDAtNjRMMzIwIDMyIDMwNCAwIDE0NCAwem05NyAxNjdsLTE3LTE3LTE3IDE3LTgwIDgwLTE3IDE3TDE0NCAyOTcuOWwxNy0xNyAzOS0zOUwyMDAgMzc2bDAgMjQgNDggMCAwLTI0IDAtMTM0LjEgMzkgMzkgMTcgMTdMMzM3LjkgMjY0bC0xNy0xNy04MC04MHoiLz48L3N2Zz4=|width=32|height=32)
 */
const TrashArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96zm78.1 168l17-17 80-80 17-17 17 17 80 80 17 17L304 297.9l-17-17-39-39L248 376l0 24-48 0 0-24 0-134.1-39 39-17 17L110.1 264z" />
            <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zm97 167l-17-17-17 17-80 80-17 17L144 297.9l17-17 39-39L200 376l0 24 48 0 0-24 0-134.1 39 39 17 17L337.9 264l-17-17-80-80z" />
    </Icon>
);

export default TrashArrowUp;