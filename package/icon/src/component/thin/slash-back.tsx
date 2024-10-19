
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=thin slash-back}
 * @preview ![slash-back](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMy44IDEuMkMuMSAzLjUtMS4xIDguNCAxLjIgMTIuMmwzMDQgNDk2YzIuMyAzLjggNy4yIDUgMTEgMi42czQuOS03LjIgMi42LTExTDE0LjggMy44QzEyLjUgLjEgNy42LTEuMSAzLjggMS4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M3.8 1.2C.1 3.5-1.1 8.4 1.2 12.2l304 496c2.3 3.8 7.2 5 11 2.6s4.9-7.2 2.6-11L14.8 3.8C12.5 .1 7.6-1.1 3.8 1.2z" />
    </Icon>
);

export default SlashBack;