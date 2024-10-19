
import { Icon } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=sharp-solid object-subtract}
 * @preview ![object-subtract](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTEyIDUxMmwtMzUyIDAgMC0xNjAtOTYgMEwwIDM1MmwwLTY0TDAgNjQgMCAwIDY0IDAgMjg4IDBsNjQgMCAwIDY0IDAgOTYgMTYwIDAgMCAzNTJ6TTI4OCAyODhsMC0yMjRMNjQgNjRsMCAyMjQgMjI0IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512l-352 0 0-160-96 0L0 352l0-64L0 64 0 0 64 0 288 0l64 0 0 64 0 96 160 0 0 352zM288 288l0-224L64 64l0 224 224 0z" />
    </Icon>
);

export default ObjectSubtract;