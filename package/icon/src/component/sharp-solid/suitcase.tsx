
import { Icon } from "../../index";

/**
 * A component that renders the `suitcase` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/suitcase?s=sharp-solid suitcase}
 * @preview ![suitcase](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTUyIDBMMTI4IDBsMCAyNCAwIDcyIDAgMzIgMCAzNTIgMjU2IDAgMC0zNTIgMC0zMiAwLTcyIDAtMjRMMzYwIDAgMTUyIDB6TTMzNiA5NkwxNzYgOTZsMC00OCAxNjAgMCAwIDQ4ek0wIDk2TDAgNDgwbDk2IDBMOTYgOTYgMCA5NnpNNTEyIDQ4MGwwLTM4NC05NiAwIDAgMzg0IDk2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Suitcase: typeof Icon = x => (
    <Icon {...x}>
        <path d="M152 0L128 0l0 24 0 72 0 32 0 352 256 0 0-352 0-32 0-72 0-24L360 0 152 0zM336 96L176 96l0-48 160 0 0 48zM0 96L0 480l96 0L96 96 0 96zM512 480l0-384-96 0 0 384 96 0z" />
    </Icon>
);

export default Suitcase;