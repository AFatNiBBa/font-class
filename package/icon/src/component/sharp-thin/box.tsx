
import { Icon } from "../../index";

/**
 * A component that renders the `box` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box?s=sharp-thin box}
 * @preview ![box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNzQuNCA0OEwyMTYgNDhsMCAxMjhMMTcuNSAxNzYgNzQuNCA0OHpNMjMyIDE3NmwwLTEyOCAxNDEuNiAwIDU2LjkgMTI4TDIzMiAxNzZ6bTIwMCAxNmwwIDI3MkwxNiA0NjRsMC0yNzIgNDE2IDB6TTM4NCAzMkw2NCAzMiAwIDE3NiAwIDQ2NGwwIDE2IDE2IDAgNDE2IDAgMTYgMCAwLTE2IDAtMjg4TDM4NCAzMnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Box: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M74.4 48L216 48l0 128L17.5 176 74.4 48zM232 176l0-128 141.6 0 56.9 128L232 176zm200 16l0 272L16 464l0-272 416 0zM384 32L64 32 0 176 0 464l0 16 16 0 416 0 16 0 0-16 0-288L384 32z" />
    </Icon>
);

export default Box;