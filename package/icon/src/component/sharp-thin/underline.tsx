
import { Icon } from "../../index";

/**
 * A component that renders the `underline` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=sharp-thin underline}
 * @preview ![underline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAzMmw4IDAgMTI4IDAgOCAwIDAgMTYtOCAwTDgwIDQ4bDAgMTkyYzAgNzkuNSA2NC41IDE0NCAxNDQgMTQ0czE0NC02NC41IDE0NC0xNDRsMC0xOTItNTYgMC04IDAgMC0xNiA4IDAgMTI4IDAgOCAwIDAgMTYtOCAwLTU2IDAgMCAxOTJjMCA4OC40LTcxLjYgMTYwLTE2MCAxNjBzLTE2MC03MS42LTE2MC0xNjBMNjQgNDggOCA0OCAwIDQ4IDAgMzJ6TTAgNDY0bDggMCA0MzIgMCA4IDAgMCAxNi04IDBMOCA0ODBsLTggMCAwLTE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l8 0 128 0 8 0 0 16-8 0L80 48l0 192c0 79.5 64.5 144 144 144s144-64.5 144-144l0-192-56 0-8 0 0-16 8 0 128 0 8 0 0 16-8 0-56 0 0 192c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 48 8 48 0 48 0 32zM0 464l8 0 432 0 8 0 0 16-8 0L8 480l-8 0 0-16z" />
    </Icon>
);

export default Underline;