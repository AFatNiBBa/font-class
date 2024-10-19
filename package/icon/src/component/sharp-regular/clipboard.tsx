
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=sharp-regular clipboard}
 * @preview ![clipboard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMzA0IDY0bDMyIDAgNDggMCAwIDQ4IDAgMzUyIDAgNDgtNDggMEw0OCA1MTIgMCA1MTJsMC00OEwwIDExMiAwIDY0bDQ4IDAgMzIgMCAzMy42IDBDMTIxIDI3LjUgMTUzLjMgMCAxOTIgMHM3MSAyNy41IDc4LjQgNjRMMzA0IDY0ek00OCAxMTJsMCAzNTIgMjg4IDAgMC0zNTItMzIgMCAwIDQ4LTExMiAwTDgwIDE2MGwwLTQ4LTMyIDB6bTE0NC04YTI0IDI0IDAgMSAwIDAtNDggMjQgMjQgMCAxIDAgMCA0OHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M304 64l32 0 48 0 0 48 0 352 0 48-48 0L48 512 0 512l0-48L0 112 0 64l48 0 32 0 33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64L304 64zM48 112l0 352 288 0 0-352-32 0 0 48-112 0L80 160l0-48-32 0zm144-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Clipboard;