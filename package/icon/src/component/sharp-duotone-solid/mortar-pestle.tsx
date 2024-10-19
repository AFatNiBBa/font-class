
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mortar-pestle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mortar-pestle?s=sharp-duotone-solid mortar-pestle}
 * @preview ![mortar-pestle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDkuMyAxOTJjMS40LTEuMiAyLjgtMi40IDQuNC0zLjVMNDY5LjUgMGw0MC42IDQ3LjJMMzY1LjMgMTkybC0xNTUuOSAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAxOTJsMzIgMCA0NDggMCAzMiAwIDAgNjQtMzIgMGMwIDgyLjUtNDMuNCAxNDcuNy0xMjMuOSAxNzYuMkMzNzMuNiA0NTQuMSAzODQgNDgxLjggMzg0IDUxMmwtMjU2IDBjMC0zMC4yIDEwLjQtNTcuOSAyNy45LTc5LjhDNzUuNCA0MDMuNyAzMiAzMzguNSAzMiAyNTZMMCAyNTZsMC02NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MortarPestle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M209.3 192c1.4-1.2 2.8-2.4 4.4-3.5L469.5 0l40.6 47.2L365.3 192l-155.9 0z" />
            <path d="M0 192l32 0 448 0 32 0 0 64-32 0c0 82.5-43.4 147.7-123.9 176.2C373.6 454.1 384 481.8 384 512l-256 0c0-30.2 10.4-57.9 27.9-79.8C75.4 403.7 32 338.5 32 256L0 256l0-64z" />
    </Icon>
);

export default MortarPestle;