
import { Icon } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=sharp-solid apostrophe}
 * @preview ![apostrophe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNzIgMzUyYzY2LjMgMCAxMjAtNTMuNyAxMjAtMTIwbDAtOCAwLTk2IDAtOTZMMCAzMiAwIDIyNGwxMjggMCAwIDhjMCAzMC45LTI1LjEgNTYtNTYgNTZsLTggMC0zMiAwIDAgNjQgMzIgMCA4IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 352c66.3 0 120-53.7 120-120l0-8 0-96 0-96L0 32 0 224l128 0 0 8c0 30.9-25.1 56-56 56l-8 0-32 0 0 64 32 0 8 0z" />
    </Icon>
);

export default Apostrophe;