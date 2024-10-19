
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-rotate-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-rotate-left?s=sharp-duotone-solid arrow-rotate-left}
 * @preview ![arrow-rotate-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik04MCAxMTUuMkw4MCAxNjBsNDUuNyAwIDE3LjEtMTcuMWM2Mi41LTYyLjUgMTYzLjgtNjIuNSAyMjYuMyAwczYyLjUgMTYzLjggMCAyMjYuM3MtMTYzLjggNjIuNS0yMjYuMyAwTDk3LjYgNDE0LjRDMTQxLjMgNDU4LjEgMTk4LjcgNDgwIDI1NiA0ODBzMTE0LjctMjEuOSAxNTguNC02NS42UzQ4MCAzMTMuMyA0ODAgMjU2cy0yMS45LTExNC43LTY1LjYtMTU4LjRTMzEzLjMgMzIgMjU2IDMyUzE0MS4zIDUzLjkgOTcuNiA5Ny42TDgwIDExNS4yeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTYgMjI0bDMyIDAgMTI4IDAgMzIgMCAwLTY0LTMyIDAtOTYgMCAwLTk2IDAtMzJMMTYgMzJsMCAzMiAwIDEyOCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M80 115.2L80 160l45.7 0 17.1-17.1c62.5-62.5 163.8-62.5 226.3 0s62.5 163.8 0 226.3s-163.8 62.5-226.3 0L97.6 414.4C141.3 458.1 198.7 480 256 480s114.7-21.9 158.4-65.6S480 313.3 480 256s-21.9-114.7-65.6-158.4S313.3 32 256 32S141.3 53.9 97.6 97.6L80 115.2z" />
            <path d="M16 224l32 0 128 0 32 0 0-64-32 0-96 0 0-96 0-32L16 32l0 32 0 128 0 32z" />
    </Icon>
);

export default ArrowRotateLeft;