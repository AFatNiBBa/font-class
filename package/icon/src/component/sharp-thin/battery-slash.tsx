
import { Icon } from "../../index";

/**
 * A component that renders the `battery-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-slash?s=sharp-thin battery-slash}
 * @preview ![battery-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYuMiA1TDkuOSAwIDAgMTIuNWw2LjMgNUw2MjMuOCA1MDdsNi4zIDUgOS45LTEyLjUtNi4zLTVMMTYuMiA1em0zNzAgMzk1TDQ4IDQwMGwwLTI2N0wzMiAxMjAuNCAzMiA0MDBsMCAxNiAxNiAwIDM1OC41IDAtMjAuMy0xNnpNNTQ0IDk2TDIzMy41IDk2bDIwLjMgMTZMNTQ0IDExMmwwIDgwIDAgMTYgMCA5NiAwIDE2IDAgMjEuMSAxNiAxMi42IDAtMzMuNyAzMiAwIDE2IDAgMC0xNiAwLTk2IDAtMTYtMTYgMC0zMiAwIDAtODAgMC0xNi0xNiAwem0xNiAxMTJsMzIgMCAwIDk2LTMyIDAgMC05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const BatterySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5zm370 395L48 400l0-267L32 120.4 32 400l0 16 16 0 358.5 0-20.3-16zM544 96L233.5 96l20.3 16L544 112l0 80 0 16 0 96 0 16 0 21.1 16 12.6 0-33.7 32 0 16 0 0-16 0-96 0-16-16 0-32 0 0-80 0-16-16 0zm16 112l32 0 0 96-32 0 0-96z" />
    </Icon>
);

export default BatterySlash;