
import { Icon } from "../../index";

/**
 * A component that renders the `heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart?s=sharp-solid heart}
 * @preview ![heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzkuOCAyNjMuOEw2NCAyODggMjU2IDQ4MCA0NDggMjg4bDI0LjItMjQuMmMyNS41LTI1LjUgMzkuOC02MCAzOS44LTk2QzUxMiA5Mi44IDQ1MS4yIDMyIDM3Ni4yIDMyYy0zNiAwLTcwLjUgMTQuMy05NiAzOS44TDI1NiA5NiAyMzEuOCA3MS44Yy0yNS41LTI1LjUtNjAtMzkuOC05Ni0zOS44QzYwLjggMzIgMCA5Mi44IDAgMTY3LjhjMCAzNiAxNC4zIDcwLjUgMzkuOCA5NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Heart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M39.8 263.8L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-36 0-70.5 14.3-96 39.8L256 96 231.8 71.8c-25.5-25.5-60-39.8-96-39.8C60.8 32 0 92.8 0 167.8c0 36 14.3 70.5 39.8 96z" />
    </Icon>
);

export default Heart;