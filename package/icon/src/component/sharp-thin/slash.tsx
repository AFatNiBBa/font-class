
import { Icon } from "../../index";

/**
 * A component that renders the `slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash?s=sharp-thin slash}
 * @preview ![slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOS45IDBsNi4zIDVMNjMzLjcgNDk0LjVsNi4zIDVMNjMwLjEgNTEybC02LjMtNUw2LjMgMTcuNSAwIDEyLjUgOS45IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Slash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M9.9 0l6.3 5L633.7 494.5l6.3 5L630.1 512l-6.3-5L6.3 17.5 0 12.5 9.9 0z" />
    </Icon>
);

export default Slash;