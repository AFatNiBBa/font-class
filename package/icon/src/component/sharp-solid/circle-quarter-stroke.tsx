
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=sharp-solid circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMjU2bDE5MiAwIDAtMTkyYzEwNiAwIDE5MiA4NiAxOTIgMTkycy04NiAxOTItMTkyIDE5MlM2NCAzNjIgNjQgMjU2ek0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 256l192 0 0-192c106 0 192 86 192 192s-86 192-192 192S64 362 64 256zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z" />
    </Icon>
);

export default CircleQuarterStroke;