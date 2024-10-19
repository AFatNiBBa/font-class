
import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=sharp-regular file-slash}
 * @preview ![file-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDY0IDQ2NGwwLTIuNCA0OCAzNy44IDAgMTIuNi00OCAwLTI4OCAwLTQ4IDAgMC00OCAwLTI2Ny4xIDQ4IDM3LjhMMTc2IDQ2NGwyODggMHptNDgtODkuM2wxMDguOSA4NC42IDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjFsMTkgMTQuN0wxMjggNzYuNiAxMjggNDhsMC00OCA0OCAwTDM4NCAwIDUxMiAxMjhsMCAyNDYuN3ptLTQ4LTM3LjNMNDY0IDE2MGwtMTEyIDAgMC0xMTJMMTc2IDQ4bDAgNjUuOUw0NjQgMzM3LjV6Ii8+PC9zdmc+|width=32|height=32)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 464l0-2.4 48 37.8 0 12.6-48 0-288 0-48 0 0-48 0-267.1 48 37.8L176 464l288 0zm48-89.3l108.9 84.6 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7L128 76.6 128 48l0-48 48 0L384 0 512 128l0 246.7zm-48-37.3L464 160l-112 0 0-112L176 48l0 65.9L464 337.5z" />
    </Icon>
);

export default FileSlash;