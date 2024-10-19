
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=sharp-thin circle-exclamation}
 * @preview ![circle-exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDE2YTI0MCAyNDAgMCAxIDEgMCA0ODAgMjQwIDI0MCAwIDEgMSAwLTQ4MHptMCA0OTZBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyem04LTM4NGwtMTYgMCAwIDggMCAxNjAgMCA4IDE2IDAgMC04IDAtMTYwIDAtOHpNMjQwIDM2OGwzMiAwIDAtMzItMzIgMCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm8-384l-16 0 0 8 0 160 0 8 16 0 0-8 0-160 0-8zM240 368l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default CircleExclamation;