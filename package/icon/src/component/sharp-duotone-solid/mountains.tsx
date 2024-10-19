
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mountains` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountains?s=sharp-duotone-solid mountains}
 * @preview ![mountains](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTIuOSAyNjcuNGMzMyA0OS42IDY2LjEgOTkuMSA5OS4xIDE0OC42bDAgNjQgMTI4IDAgMC02NEw0ODAgMTYwIDQxMi45IDI2Ny40eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCA0MTZMMjU2IDMyIDUxMiA0MTZ2NjRIMFY0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Mountains: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M412.9 267.4c33 49.6 66.1 99.1 99.1 148.6l0 64 128 0 0-64L480 160 412.9 267.4z" />
            <path d="M0 416L256 32 512 416v64H0V416z" />
    </Icon>
);

export default Mountains;