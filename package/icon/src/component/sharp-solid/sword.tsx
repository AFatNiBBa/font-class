
import { Icon } from "../../index";

/**
 * A component that renders the `sword` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=sharp-solid sword}
 * @preview ![sword](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDAwIDE2TDE2Ni42IDI0OS40bDk2IDk2TDQ5NiAxMTIgNTEyIDAgNDAwIDE2ek0wIDQxNmw5NiA5NiAzMi0zMi0xNi0zMiA1Ni01NiA4OCA1NiAzMi0zMkw5NiAyMjQgNjQgMjU2bDU2IDg4TDY0IDQwMCAzMiAzODQgMCA0MTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 16L166.6 249.4l96 96L496 112 512 0 400 16zM0 416l96 96 32-32-16-32 56-56 88 56 32-32L96 224 64 256l56 88L64 400 32 384 0 416z" />
    </Icon>
);

export default Sword;