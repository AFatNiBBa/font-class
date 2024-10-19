
import { Icon } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=sharp-solid heart-crack}
 * @preview ![heart-crack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjI0IDIwOGw2NCAxMTJMMTYwIDIwOGw4MC04MEwxNzUuNyAzOGMtMTIuOC00LTI2LjMtNi00MC02QzYwLjggMzIgMCA5Mi44IDAgMTY3LjhjMCAzNiAxNC4zIDcwLjUgMzkuOCA5Nkw2NCAyODggMjU2IDQ4MCA0NDggMjg4bDI0LjItMjQuMmMyNS41LTI1LjUgMzkuOC02MCAzOS44LTk2QzUxMiA5Mi44IDQ1MS4yIDMyIDM3Ni4yIDMyYy0yNy42IDAtNTQuNCA4LjQtNzYuOCAyMy44TDMyMCAxMjhsLTk2IDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HeartCrack: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 208l64 112L160 208l80-80L175.7 38c-12.8-4-26.3-6-40-6C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-27.6 0-54.4 8.4-76.8 23.8L320 128l-96 80z" />
    </Icon>
);

export default HeartCrack;