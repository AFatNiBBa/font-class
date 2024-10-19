
import { Icon } from "../../index";

/**
 * A component that renders the `fence` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fence?s=sharp-solid fence}
 * @preview ![fence](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJMMCA5NiAwIDQ4MGwxMjggMCAwLTY0IDMyIDAgMC02NC0zMiAwIDAtMTI4IDMyIDAgMC02NC0zMiAwIDAtNjRMNjQgMzJ6TTMyMCAzNTJsMC0xMjggMzIgMCAwLTY0LTMyIDAgMC02NEwyNTYgMzIgMTkyIDk2bDAgMzg0IDEyOCAwIDAtNjQgMzIgMCAwLTY0LTMyIDB6TTQ0OCAzMkwzODQgOTZsMCAzODQgMTI4IDAgMC0zODRMNDQ4IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Fence: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32L0 96 0 480l128 0 0-64 32 0 0-64-32 0 0-128 32 0 0-64-32 0 0-64L64 32zM320 352l0-128 32 0 0-64-32 0 0-64L256 32 192 96l0 384 128 0 0-64 32 0 0-64-32 0zM448 32L384 96l0 384 128 0 0-384L448 32z" />
    </Icon>
);

export default Fence;