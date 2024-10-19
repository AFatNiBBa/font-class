
import { Icon } from "../../index";

/**
 * A component that renders the `hyphen` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hyphen?s=thin hyphen}
 * @preview ![hyphen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZjMC00LjQgMy42LTggOC04bDMwNCAwYzQuNCAwIDggMy42IDggOHMtMy42IDgtOCA4TDggMjY0Yy00LjQgMC04LTMuNi04LTh6Ii8+PC9zdmc+|width=32|height=32)
 */
const Hyphen: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 256c0-4.4 3.6-8 8-8l304 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Hyphen;