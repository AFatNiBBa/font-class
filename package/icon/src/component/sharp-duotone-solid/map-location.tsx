
import { Icon, generic } from "../../index";

/**
 * A component that renders the `map-location` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/map-location?s=sharp-duotone-solid map-location}
 * @preview ![map-location](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmwxMzMtNTMuMmM1LjUgMTkuNCAxNS4xIDQwLjYgMjcgNjIuMUwxNjAgNDQ4IDAgNTEyIDAgMTkyem0xOTIgNjAuM2M0NC41IDY1LjMgOTYgMTIxIDk2IDEyMXM1MS40LTU1LjcgOTYtMTIxTDM4NCA1MTIgMTkyIDQ0OGwwLTE5NS43em0yMjQtNTEuNWMyLjEtMy44IDQuMS03LjUgNi0xMS4zTDU3NiAxMjhsMCAzMjBMNDE2IDUxMmwwLTMxMS4xeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNDA4IDEyMGMwIDcwLTEyMCAyMDAtMTIwIDIwMHMtMTIwLTEzMC0xMjAtMjAwQzE2OCA1My43IDIyMS43IDAgMjg4IDBzMTIwIDUzLjcgMTIwIDEyMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MapLocation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192l133-53.2c5.5 19.4 15.1 40.6 27 62.1L160 448 0 512 0 192zm192 60.3c44.5 65.3 96 121 96 121s51.4-55.7 96-121L384 512 192 448l0-195.7zm224-51.5c2.1-3.8 4.1-7.5 6-11.3L576 128l0 320L416 512l0-311.1z" />
            <path d="M408 120c0 70-120 200-120 200s-120-130-120-200C168 53.7 221.7 0 288 0s120 53.7 120 120z" />
    </Icon>
);

export default MapLocation;