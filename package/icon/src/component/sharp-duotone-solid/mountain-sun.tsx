
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=sharp-duotone-solid mountain-sun}
 * @preview ![mountain-sun](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00ODAgODBhODAgODAgMCAxIDAgMTYwIDBBODAgODAgMCAxIDAgNDgwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDY0TDAgNDQ4bDAgNjQgMzIwIDAgMTkyIDAgMTI4IDAgMC02NEw0ODAgMTkyIDQxMi45IDI5OS40IDI1NiA2NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 80a80 80 0 1 0 160 0A80 80 0 1 0 480 80z" />
            <path d="M256 64L0 448l0 64 320 0 192 0 128 0 0-64L480 192 412.9 299.4 256 64z" />
    </Icon>
);

export default MountainSun;