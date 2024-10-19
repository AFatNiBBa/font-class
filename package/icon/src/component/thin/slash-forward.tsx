
import { Icon } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=thin slash-forward}
 * @preview ![slash-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzE2LjIgMS4yYzMuOCAyLjMgNC45IDcuMiAyLjYgMTFsLTMwNCA0OTZjLTIuMyAzLjgtNy4yIDUtMTEgMi42cy00LjktNy4yLTIuNi0xMWwzMDQtNDk2YzIuMy0zLjggNy4yLTQuOSAxMS0yLjZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M316.2 1.2c3.8 2.3 4.9 7.2 2.6 11l-304 496c-2.3 3.8-7.2 5-11 2.6s-4.9-7.2-2.6-11l304-496c2.3-3.8 7.2-4.9 11-2.6z" />
    </Icon>
);

export default SlashForward;