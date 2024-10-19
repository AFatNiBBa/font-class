
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sterling-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=sharp-duotone-solid sterling-sign}
 * @preview ![sterling-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDIyNGwwIDY0IDQ4IDAgMC02NEwwIDIyNHptMTEyIDBsMCA2NCAxNDQgMCAwLTY0LTE0NCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTczLjkgOTZjLTM0LjIgMC02MS45IDI3LjctNjEuOSA2MS45TDExMiAzNDRsMCA3LjYtMy40IDYuOEw3OS44IDQxNiAyODggNDE2bDMyIDAgMCA2NC0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTMyIDAtOCAwLTcuNiAzLjQtNi44TDQ4IDMzNi40bDAtMTc4LjVDNDggODguNCAxMDQuNCAzMiAxNzMuOSAzMmMxNiAwIDMxLjkgMy4xIDQ2LjggOWw2My4yIDI1LjMgMjkuNyAxMS45LTIzLjggNTkuNC0yOS43LTExLjktNjMuMi0yNS4zYy03LjMtMi45LTE1LjEtNC40LTIzLTQuNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const SterlingSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 48 0 0-64L0 224zm112 0l0 64 144 0 0-64-144 0z" />
            <path d="M173.9 96c-34.2 0-61.9 27.7-61.9 61.9L112 344l0 7.6-3.4 6.8L79.8 416 288 416l32 0 0 64-32 0L32 480 0 480l0-32 0-8 0-7.6 3.4-6.8L48 336.4l0-178.5C48 88.4 104.4 32 173.9 32c16 0 31.9 3.1 46.8 9l63.2 25.3 29.7 11.9-23.8 59.4-29.7-11.9-63.2-25.3c-7.3-2.9-15.1-4.4-23-4.4z" />
    </Icon>
);

export default SterlingSign;