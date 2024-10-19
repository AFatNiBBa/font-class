
import { Icon } from "../../index";

/**
 * A component that renders the `heading` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heading?s=sharp-light heading}
 * @preview ![heading](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmwxNiAwIDY0IDAgNjQgMCAxNiAwIDAgMzItMTYgMEw5NiA2NGwwIDE2MCAyNTYgMCAwLTE2MC00OCAwLTE2IDAgMC0zMiAxNiAwIDY0IDAgNjQgMCAxNiAwIDAgMzItMTYgMC00OCAwIDAgMTc2IDAgMjA4IDQ4IDAgMTYgMCAwIDMyLTE2IDAtMTI4IDAtMTYgMCAwLTMyIDE2IDAgNDggMCAwLTE5Mkw5NiAyNTZsMCAxOTIgNDggMCAxNiAwIDAgMzItMTYgMEwxNiA0ODAgMCA0ODBsMC0zMiAxNiAwIDQ4IDAgMC0yMDhMNjQgNjQgMTYgNjQgMCA2NCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Heading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l16 0 64 0 64 0 16 0 0 32-16 0L96 64l0 160 256 0 0-160-48 0-16 0 0-32 16 0 64 0 64 0 16 0 0 32-16 0-48 0 0 176 0 208 48 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0 48 0 0-192L96 256l0 192 48 0 16 0 0 32-16 0L16 480 0 480l0-32 16 0 48 0 0-208L64 64 16 64 0 64 0 32z" />
    </Icon>
);

export default Heading;