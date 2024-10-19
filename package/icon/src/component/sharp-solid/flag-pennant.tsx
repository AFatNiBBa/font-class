
import { Icon } from "../../index";

/**
 * A component that renders the `flag-pennant` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag-pennant?s=sharp-solid flag-pennant}
 * @preview ![flag-pennant](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgMzJMNjQgMCAwIDAgMCAzMiAwIDQ4MGwwIDMyIDY0IDAgMC0zMiAwLTEyOEw0NDggMTkyIDY0IDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const FlagPennant: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32L64 0 0 0 0 32 0 480l0 32 64 0 0-32 0-128L448 192 64 32z" />
    </Icon>
);

export default FlagPennant;