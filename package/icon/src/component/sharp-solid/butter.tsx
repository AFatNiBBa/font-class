
import { Icon } from "../../index";

/**
 * A component that renders the `butter` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/butter?s=sharp-solid butter}
 * @preview ![butter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNjRsMzg0IDAgMCAyMjRMNjQgMjg4IDY0IDY0ek0zMiAzMjBsNTc2IDAgMzIgMCAwIDY0LTMyIDAgMCA2NEwzMiA0NDhsMC02NEwwIDM4NGwwLTY0IDMyIDB6TTU3NiA2NGwwIDIyNC05NiAwIDAtMjI0IDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Butter: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64l384 0 0 224L64 288 64 64zM32 320l576 0 32 0 0 64-32 0 0 64L32 448l0-64L0 384l0-64 32 0zM576 64l0 224-96 0 0-224 96 0z" />
    </Icon>
);

export default Butter;