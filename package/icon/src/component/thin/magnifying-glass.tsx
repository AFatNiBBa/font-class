
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=thin magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDAwIDIwOEExOTIgMTkyIDAgMSAwIDE2IDIwOGExOTIgMTkyIDAgMSAwIDM4NCAwek0zNDkuMyAzNjAuNkMzMTIuMiAzOTUgMjYyLjYgNDE2IDIwOCA0MTZDOTMuMSA0MTYgMCAzMjIuOSAwIDIwOFM5My4xIDAgMjA4IDBTNDE2IDkzLjEgNDE2IDIwOGMwIDU0LjYtMjEgMTA0LjItNTUuNCAxNDEuM2wxNDkgMTQ5YzMuMSAzLjEgMy4xIDguMiAwIDExLjNzLTguMiAzLjEtMTEuMyAwbC0xNDktMTQ5eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const MagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 208A192 192 0 1 0 16 208a192 192 0 1 0 384 0zM349.3 360.6C312.2 395 262.6 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 54.6-21 104.2-55.4 141.3l149 149c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-149-149z" />
    </Icon>
);

export default MagnifyingGlass;