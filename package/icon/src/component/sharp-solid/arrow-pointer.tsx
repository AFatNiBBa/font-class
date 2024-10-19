
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-solid arrow-pointer}
 * @preview ![arrow-pointer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzIgMzJMMCA0Ni45IDAgNDMybDI5IDMxLjggOTYuMS0xMTcuMiA0OC4yIDEwMi43IDEzLjYgMjkgNTcuOS0yNy4yLTEzLjYtMjlMMTgzLjMgMzIwIDMyMCAzMjBsLS4xLTQyTDMyIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32L0 46.9 0 432l29 31.8 96.1-117.2 48.2 102.7 13.6 29 57.9-27.2-13.6-29L183.3 320 320 320l-.1-42L32 32z" />
    </Icon>
);

export default ArrowPointer;