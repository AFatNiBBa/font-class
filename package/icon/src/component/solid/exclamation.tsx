
import { Icon } from "../../index";

/**
 * A component that renders the `exclamation` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/exclamation?s=solid exclamation}
 * @preview ![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgNjRjMC0xNy43LTE0LjMtMzItMzItMzJTMzIgNDYuMyAzMiA2NGwwIDI1NmMwIDE3LjcgMTQuMyAzMiAzMiAzMnMzMi0xNC4zIDMyLTMyTDk2IDY0ek02NCA0ODBhNDAgNDAgMCAxIDAgMC04MCA0MCA0MCAwIDEgMCAwIDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Exclamation: typeof Icon = x => (
    <Icon viewBox="0 0 128 512" {...x}>
        <path d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Exclamation;