
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=sharp-solid chalkboard}
 * @preview ![chalkboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJMMzIgMzJsMCAzMiAwIDMyMCA2NCAwTDk2IDk2bDM4NCAwIDAgMjg4IDY0IDAgMC0zMjAgMC0zMi0zMiAwTDY0IDMyek0yMjQgMzUybDAgNjRMMzIgNDE2IDAgNDE2bDAgNjQgMzIgMCA1MTIgMCAzMiAwIDAtNjQtMzIgMC0xMjggMCAwLTY0LTE5MiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 32L32 32l0 32 0 320 64 0L96 96l384 0 0 288 64 0 0-320 0-32-32 0L64 32zM224 352l0 64L32 416 0 416l0 64 32 0 512 0 32 0 0-64-32 0-128 0 0-64-192 0z" />
    </Icon>
);

export default Chalkboard;