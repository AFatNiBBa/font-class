
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user?s=sharp-duotone-solid user}
 * @preview ![user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxMjhhMTI4IDEyOCAwIDEgMCAyNTYgMEExMjggMTI4IDAgMSAwIDk2IDEyOHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDMwNEgzODRsNjQgMjA4SDBMNjQgMzA0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const User: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M64 304H384l64 208H0L64 304z" />
    </Icon>
);

export default User;