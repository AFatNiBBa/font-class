
import { Icon } from "../../index";

/**
 * A component that renders the `spinner` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner?s=regular spinner}
 * @preview ![spinner](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjg4IDMyYTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6bTAgNDQ4YTMyIDMyIDAgMSAwIC02NCAwIDMyIDMyIDAgMSAwIDY0IDB6TTQ0OCAyNTZhMzIgMzIgMCAxIDAgNjQgMCAzMiAzMiAwIDEgMCAtNjQgMHpNMzIgMjg4YTMyIDMyIDAgMSAwIDAtNjQgMzIgMzIgMCAxIDAgMCA2NHpNNzUgNDM3YTMyIDMyIDAgMSAwIDQ1LjMtNDUuM0EzMiAzMiAwIDEgMCA3NSA0Mzd6bTMxNi44IDBBMzIgMzIgMCAxIDAgNDM3IDM5MS44IDMyIDMyIDAgMSAwIDM5MS44IDQzN3pNNzUgNzVhMzIgMzIgMCAxIDAgNDUuMyA0NS4zQTMyIDMyIDAgMSAwIDc1IDc1eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Spinner: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM448 256a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM32 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM75 437a32 32 0 1 0 45.3-45.3A32 32 0 1 0 75 437zm316.8 0A32 32 0 1 0 437 391.8 32 32 0 1 0 391.8 437zM75 75a32 32 0 1 0 45.3 45.3A32 32 0 1 0 75 75z" />
    </Icon>
);

export default Spinner;