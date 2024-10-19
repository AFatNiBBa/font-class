
import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward-step` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=duotone forward-step}
 * @preview ![forward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNTYgOTZsMCAxNDUgMCAzMCAwIDE0NWMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMybDAtMzIwYzAtMTcuNy0xNC4zLTMyLTMyLTMycy0zMiAxNC4zLTMyIDMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTguNCA0NDVjMTEuMiA1LjMgMjQuNSAzLjYgMzQuMS00LjRsMTkyLTE2MEwyNTYgMjcxbDAtMzAtMTEuNS05LjYtMTkyLTE2MGMtOS41LTcuOS0yMi44LTkuNy0zNC4xLTQuNFMwIDgzLjYgMCA5NkwwIDQxNmMwIDEyLjQgNy4yIDIzLjcgMTguNCAyOXoiLz48L3N2Zz4=|width=32|height=32)
 */
const ForwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M256 96l0 145 0 30 0 145c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
            <path d="M18.4 445c11.2 5.3 24.5 3.6 34.1-4.4l192-160L256 271l0-30-11.5-9.6-192-160c-9.5-7.9-22.8-9.7-34.1-4.4S0 83.6 0 96L0 416c0 12.4 7.2 23.7 18.4 29z" />
    </Icon>
);

export default ForwardStep;