
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=sharp-solid print}
 * @preview ![print](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNOTYgMEwzNjggMGwxMy4zIDAgOS40IDkuNCA0OCA0OCA5LjQgOS40TDQ0OCA4MGwwIDgwLTY0IDAgMC02Ni43TDM1NC43IDY0IDEyOCA2NGwwIDk2LTY0IDBMNjQgMzIgNjQgMCA5NiAwek02NCAzODRMMCAzODQgMCAxOTJsNTEyIDAgMCAxOTItNjQgMCAwIDk2IDAgMzItMzIgMEw5NiA1MTJsLTMyIDAgMC0zMiAwLTk2em02NCAwbDAgNjQgMjU2IDAgMC02NCAwLTMyLTI1NiAwIDAgMTYgMCAxNnpNNDA4IDI0OGwwIDQ4IDQ4IDAgMC00OC00OCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Print: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0L368 0l13.3 0 9.4 9.4 48 48 9.4 9.4L448 80l0 80-64 0 0-66.7L354.7 64 128 64l0 96-64 0L64 32 64 0 96 0zM64 384L0 384 0 192l512 0 0 192-64 0 0 96 0 32-32 0L96 512l-32 0 0-32 0-96zm64 0l0 64 256 0 0-64 0-32-256 0 0 16 0 16zM408 248l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default Print;