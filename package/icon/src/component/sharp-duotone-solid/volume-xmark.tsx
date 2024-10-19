
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=sharp-duotone-solid volume-xmark}
 * @preview ![volume-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zOTAuMSAyMDBsMTcgMTcgMzkgMzktMzkgMzktMTcgMTdMNDI0IDM0NS45bDE3LTE3IDM5LTM5IDM5IDM5IDE3IDE3TDU2OS45IDMxMmwtMTctMTctMzktMzkgMzktMzkgMTctMTdMNTM2IDE2Ni4xbC0xNyAxNy0zOSAzOS0zOS0zOS0xNy0xN0wzOTAuMSAyMDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDM1MlYxNjBIMTI4TDI3MiAzMmg0OFY0ODBIMjcyTDEyOCAzNTJIMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M390.1 200l17 17 39 39-39 39-17 17L424 345.9l17-17 39-39 39 39 17 17L569.9 312l-17-17-39-39 39-39 17-17L536 166.1l-17 17-39 39-39-39-17-17L390.1 200z" />
            <path d="M0 352V160H128L272 32h48V480H272L128 352H0z" />
    </Icon>
);

export default VolumeXmark;