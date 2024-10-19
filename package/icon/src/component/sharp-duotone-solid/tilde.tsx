
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tilde` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=sharp-duotone-solid tilde}
 * @preview ![tilde](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDEyOGwzMiAwIDk2IDAgMTMuMyAwIDkuNCA5LjRMMzMzLjMgMzIwbDUwLjcgMCAwLTEyOCAwLTMyIDY0IDAgMCAzMiAwIDE2MCAwIDMyLTMyIDAtOTYgMC0xMy4zIDAtOS40LTkuNEwxMTQuNyAxOTIgNjQgMTkybDAgMTI4IDAgMzJMMCAzNTJsMC0zMkwwIDE2MGwwLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSIiLz48L3N2Zz4=|width=32|height=32)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 128l32 0 96 0 13.3 0 9.4 9.4L333.3 320l50.7 0 0-128 0-32 64 0 0 32 0 160 0 32-32 0-96 0-13.3 0-9.4-9.4L114.7 192 64 192l0 128 0 32L0 352l0-32L0 160l0-32z" />
    </Icon>
);

export default Tilde;