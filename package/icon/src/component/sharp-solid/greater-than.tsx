
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=sharp-solid greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCA2NC41bDUgMi4yIDM2MCAxNjAgMTkgOC40IDAgNDEuNi0xOSA4LjRMNSA0NDUuMmwtNSAyLjIgMC03MEwyNzMuMiAyNTYgMCAxMzQuNmwwLTcweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const GreaterThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 64.5l5 2.2 360 160 19 8.4 0 41.6-19 8.4L5 445.2l-5 2.2 0-70L273.2 256 0 134.6l0-70z" />
    </Icon>
);

export default GreaterThan;