
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ditto` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ditto?s=duotone ditto}
 * @preview ![ditto](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDk2bDAgMi4zYzAgMy44IC4zIDcuNiAxIDExLjRMMjYuNSAyNTYuNUMyOS43IDI3NC43IDQ1LjUgMjg4IDY0IDI4OHMzNC4zLTEzLjMgMzcuNS0zMS41TDEyNyAxMDkuNmMuNy0zLjggMS03LjUgMS0xMS40bDAtMi4zYzAtMzUuMy0yOC43LTY0LTY0LTY0UzAgNjAuNyAwIDk2eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkyIDk4LjNWOTZjMC0zNS4zIDI4LjctNjQgNjQtNjRzNjQgMjguNyA2NCA2NHYyLjNjMCAzLjgtLjMgNy42LTEgMTEuNEwyOTMuNSAyNTYuNWMtMy4yIDE4LjItMTkgMzEuNS0zNy41IDMxLjVzLTM0LjMtMTMuMy0zNy41LTMxLjVMMTkzIDEwOS42Yy0uNy0zLjgtMS03LjUtMS0xMS40eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Ditto: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 96l0 2.3c0 3.8 .3 7.6 1 11.4L26.5 256.5C29.7 274.7 45.5 288 64 288s34.3-13.3 37.5-31.5L127 109.6c.7-3.8 1-7.5 1-11.4l0-2.3c0-35.3-28.7-64-64-64S0 60.7 0 96z" />
            <path d="M192 98.3V96c0-35.3 28.7-64 64-64s64 28.7 64 64v2.3c0 3.8-.3 7.6-1 11.4L293.5 256.5c-3.2 18.2-19 31.5-37.5 31.5s-34.3-13.3-37.5-31.5L193 109.6c-.7-3.8-1-7.5-1-11.4z" />
    </Icon>
);

export default Ditto;