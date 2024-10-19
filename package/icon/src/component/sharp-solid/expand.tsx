
import { Icon } from "../../index";

/**
 * A component that renders the `expand` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=sharp-solid expand}
 * @preview ![expand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJMMCAzMiAwIDY0bDAgOTYgMCAzMiA2NCAwIDAtMzIgMC02NCA2NCAwIDMyIDAgMC02NC0zMiAwTDMyIDMyek02NCAzNTJsMC0zMkwwIDMyMGwwIDMyIDAgOTYgMCAzMiAzMiAwIDk2IDAgMzIgMCAwLTY0LTMyIDAtNjQgMCAwLTY0ek0zMjAgMzJsLTMyIDAgMCA2NCAzMiAwIDY0IDAgMCA2NCAwIDMyIDY0IDAgMC0zMiAwLTk2IDAtMzItMzIgMC05NiAwek00NDggMzUybDAtMzItNjQgMCAwIDMyIDAgNjQtNjQgMC0zMiAwIDAgNjQgMzIgMCA5NiAwIDMyIDAgMC0zMiAwLTk2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 32L0 32 0 64l0 96 0 32 64 0 0-32 0-64 64 0 32 0 0-64-32 0L32 32zM64 352l0-32L0 320l0 32 0 96 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-64zM320 32l-32 0 0 64 32 0 64 0 0 64 0 32 64 0 0-32 0-96 0-32-32 0-96 0zM448 352l0-32-64 0 0 32 0 64-64 0-32 0 0 64 32 0 96 0 32 0 0-32 0-96z" />
    </Icon>
);

export default Expand;