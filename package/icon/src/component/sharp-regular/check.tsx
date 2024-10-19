
import { Icon } from "../../index";

/**
 * A component that renders the `check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check?s=sharp-regular check}
 * @preview ![check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDEzMEw0MzEgMTQ3IDE3Ny41IDM5OS4ybC0xNi45IDE2LjktMTYuOS0xNi45TDE3IDI3My4xIDAgMjU2LjJsMzMuOS0zNCAxNyAxNi45TDE2MC42IDM0OC4zIDM5Ny4xIDExMi45bDE3LTE2LjlMNDQ4IDEzMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Check: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 130L431 147 177.5 399.2l-16.9 16.9-16.9-16.9L17 273.1 0 256.2l33.9-34 17 16.9L160.6 348.3 397.1 112.9l17-16.9L448 130z" />
    </Icon>
);

export default Check;