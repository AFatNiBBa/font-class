
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-cctv` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-cctv?s=sharp-duotone-solid camera-cctv}
 * @preview ![camera-cctv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM1MmwwIDMyIDAgNDggMCA0OCAwIDMyIDY0IDAgMC0zMiAwLTE2IDk2IDAgMjIuMSAwIDcuOS0yMC42IDQ3LjQtMTI0LjUtNTkuNC0yMy44TDEzNy45IDQwMCA2NCA0MDBsMC0xNiAwLTMyTDAgMzUyem0zNTIuNy0yMi41TDUyMCA0MDBsNTYtMTM2LTgxLjgtMzEuOGMtNDcuMiAzMi40LTk0LjQgNjQuOS0xNDEuNiA5Ny4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMCAyMjRMMTI4IDAgNTc2IDE3NiAzMjAgMzUyIDAgMjI0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CameraCctv: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 32 0 48 0 48 0 32 64 0 0-32 0-16 96 0 22.1 0 7.9-20.6 47.4-124.5-59.4-23.8L137.9 400 64 400l0-16 0-32L0 352zm352.7-22.5L520 400l56-136-81.8-31.8c-47.2 32.4-94.4 64.9-141.6 97.3z" />
            <path d="M0 224L128 0 576 176 320 352 0 224z" />
    </Icon>
);

export default CameraCctv;