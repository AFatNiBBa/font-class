
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-numeric` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-numeric?s=sharp-duotone-solid input-numeric}
 * @preview ![input-numeric](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDAgNjRMMCAzODRsMCA2NCA2NCAwIDUxMiAwIDY0IDAgMC02NCAwLTI1NiAwLTY0LTY0IDBMNjQgNjQgMCA2NHptNjQgNjRsNTEyIDAgMCAyNTZMNjQgMzg0bDAtMjU2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzI1LjQgMjExLjhjLTctOC0xOS40LTcuOS0yNi4zIC4xbC0xNi45IDE5LjctMzYuNC0zMS4yIDE2LjktMTkuN2MyNS45LTMwLjMgNzIuNy0zMC41IDk4LjktLjVsMTUuOCAxOC4xLTMuNCAzYzggMjIuMyAzLjQgNDgtMTMuNSA2Ni40TDMyNi44IDMwNGwzMy4yIDAgMjQgMCAwIDQ4LTI0IDAtODggMC0xNiAwIDAtNDIgNjkuMS03NC45YzYtNi41IDYuMi0xNi42IC4zLTIzLjN6TTEyOCAxNjBsMzIgMCAyNCAwIDAgMjQgMCAxMjAgMTYgMCAyNCAwIDAgNDgtMjQgMC04MCAwLTI0IDAgMC00OCAyNCAwIDE2IDAgMC05Ni04IDAtMjQgMCAwLTQ4IDI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const InputNumeric: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 512 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l512 0 0 256L64 384l0-256z" />
            <path d="M325.4 211.8c-7-8-19.4-7.9-26.3 .1l-16.9 19.7-36.4-31.2 16.9-19.7c25.9-30.3 72.7-30.5 98.9-.5l15.8 18.1-3.4 3c8 22.3 3.4 48-13.5 66.4L326.8 304l33.2 0 24 0 0 48-24 0-88 0-16 0 0-42 69.1-74.9c6-6.5 6.2-16.6 .3-23.3zM128 160l32 0 24 0 0 24 0 120 16 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0 16 0 0-96-8 0-24 0 0-48 24 0z" />
    </Icon>
);

export default InputNumeric;