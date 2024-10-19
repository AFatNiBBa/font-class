
import { Icon } from "../../index";

/**
 * A component that renders the `genderless` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/genderless?s=sharp-thin genderless}
 * @preview ![genderless](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDk2YTE2MCAxNjAgMCAxIDEgMCAzMjAgMTYwIDE2MCAwIDEgMSAwLTMyMHptMCAzMzZhMTc2IDE3NiAwIDEgMCAwLTM1MiAxNzYgMTc2IDAgMSAwIDAgMzUyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Genderless: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320zm0 336a176 176 0 1 0 0-352 176 176 0 1 0 0 352z" />
    </Icon>
);

export default Genderless;