
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=sharp-solid circle-exclamation}
 * @preview ![circle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6bTI0LTM4NGwwIDI0IDAgMTEyIDAgMjQtNDggMCAwLTI0IDAtMTEyIDAtMjQgNDggMHpNMjMyIDM2OGwwLTQ4IDQ4IDAgMCA0OC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm24-384l0 24 0 112 0 24-48 0 0-24 0-112 0-24 48 0zM232 368l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default CircleExclamation;