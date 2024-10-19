
import { Icon } from "../../index";

/**
 * A component that renders the `octagon-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/octagon-minus?s=sharp-thin octagon-minus}
 * @preview ![octagon-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTYgMzQ1LjRsMC0xNzguN0wxNjYuNiAxNmwxNzguNyAwTDQ5NiAxNjYuNmwwIDE3OC43TDM0NS40IDQ5NmwtMTc4LjcgMEwxNiAzNDUuNHpNMTYwIDBMMCAxNjAgMCAzNTIgMTYwIDUxMmwxOTIgMEw1MTIgMzUybDAtMTkyTDM1MiAwIDE2MCAwem0tOCAyNjRsMjA4IDAgMC0xNi0yMDggMCAwIDE2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const OctagonMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 345.4l0-178.7L166.6 16l178.7 0L496 166.6l0 178.7L345.4 496l-178.7 0L16 345.4zM160 0L0 160 0 352 160 512l192 0L512 352l0-192L352 0 160 0zm-8 264l208 0 0-16-208 0 0 16z" />
    </Icon>
);

export default OctagonMinus;