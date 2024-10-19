
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-check` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-check?s=sharp-duotone-solid trash-check}
 * @preview ![trash-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5Nkw1NiA1MTJsMzM2IDBMNDE2IDk2IDMyIDk2ek05NC4xIDI4OEwxMjggMjU0LjFsMTcgMTcgNDcgNDdMMzAzIDIwN2wxNy0xN0wzNTMuOSAyMjRsLTE3IDE3TDIwOSAzNjlsLTE3IDE3LTE3LTE3LTY0LTY0LTE3LTE3eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTQ0IDBMMTI4IDMyIDAgMzIgMCA5Nmw0NDggMCAwLTY0TDMyMCAzMiAzMDQgMCAxNDQgMHpNMzM3IDI0MWwxNy0xN0wzMjAgMTkwLjFsLTE3IDE3LTExMSAxMTEtNDctNDctMTctMTdMOTQuMSAyODhsMTcgMTcgNjQgNjQgMTcgMTcgMTctMTdMMzM3IDI0MXoiLz48L3N2Zz4=|width=32|height=32)
 */
const TrashCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96L56 512l336 0L416 96 32 96zM94.1 288L128 254.1l17 17 47 47L303 207l17-17L353.9 224l-17 17L209 369l-17 17-17-17-64-64-17-17z" />
            <path d="M144 0L128 32 0 32 0 96l448 0 0-64L320 32 304 0 144 0zM337 241l17-17L320 190.1l-17 17-111 111-47-47-17-17L94.1 288l17 17 64 64 17 17 17-17L337 241z" />
    </Icon>
);

export default TrashCheck;