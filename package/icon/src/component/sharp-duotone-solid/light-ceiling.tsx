
import { Icon, generic } from "../../index";

/**
 * A component that renders the `light-ceiling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-ceiling?s=sharp-duotone-solid light-ceiling}
 * @preview ![light-ceiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xOTIgNDQ4YzAgMzUuMyAyOC43IDY0IDY0IDY0czY0LTI4LjcgNjQtNjRsLTEyOCAwek0yMjQgMGwwIDMyIDAgMTYwIDMyIDAgMzIgMCAwLTE2MCAwLTMyTDIyNCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjU2IDE5MkMxMTQuNiAxOTIgMCAzMDYuNiAwIDQ0OEg1MTJjMC0xNDEuNC0xMTQuNi0yNTYtMjU2LTI1NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const LightCeiling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 448c0 35.3 28.7 64 64 64s64-28.7 64-64l-128 0zM224 0l0 32 0 160 32 0 32 0 0-160 0-32L224 0z" />
            <path d="M256 192C114.6 192 0 306.6 0 448H512c0-141.4-114.6-256-256-256z" />
    </Icon>
);

export default LightCeiling;