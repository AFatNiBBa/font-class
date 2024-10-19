
import { Icon } from "../../index";

/**
 * A component that renders the `mattress-pillow` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mattress-pillow?s=sharp-solid mattress-pillow}
 * @preview ![mattress-pillow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDY0TDAgNjQgMCA0NDhsMjU2IDAgMC0zODR6bTMyIDM4NGwzNTIgMCAwLTM4NEwyODggNjRsMCAzODR6TTY0IDEyOGwxMjggMCAwIDI1Nkw2NCAzODRsMC0yNTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const MattressPillow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 64L0 64 0 448l256 0 0-384zm32 384l352 0 0-384L288 64l0 384zM64 128l128 0 0 256L64 384l0-256z" />
    </Icon>
);

export default MattressPillow;