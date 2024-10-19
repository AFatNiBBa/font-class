
import { Icon } from "../../index";

/**
 * A component that renders the `minimize` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/minimize?s=sharp-solid minimize}
 * @preview ![minimize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDY0bDMyLTMyIDUyIDUyTDQ1NiAwbDU2IDU2LTg0IDg0IDUyIDUyLTMyIDMyLTE2MCAwIDAtMTYwem0wIDM4NGwwLTE2MCAxNjAgMCAzMiAzMi01MiA1MiA4NCA4NC01NiA1Ni04NC04NC01MiA1Mi0zMi0zMnptLTk2IDMybC01Mi01Mkw1NiA1MTIgMCA0NTZsODQtODRMMzIgMzIwbDMyLTMyIDE2MCAwIDAgMTYwLTMyIDMyek0yMjQgNjRsMCAxNjBMNjQgMjI0IDMyIDE5Mmw1Mi01MkwwIDU2IDU2IDBsODQgODQgNTItNTIgMzIgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Minimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64l32-32 52 52L456 0l56 56-84 84 52 52-32 32-160 0 0-160zm0 384l0-160 160 0 32 32-52 52 84 84-56 56-84-84-52 52-32-32zm-96 32l-52-52L56 512 0 456l84-84L32 320l32-32 160 0 0 160-32 32zM224 64l0 160L64 224 32 192l52-52L0 56 56 0l84 84 52-52 32 32z" />
    </Icon>
);

export default Minimize;