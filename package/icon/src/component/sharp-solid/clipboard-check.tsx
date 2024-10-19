
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-check?s=sharp-solid clipboard-check}
 * @preview ![clipboard-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDBjLTQxLjggMC03Ny40IDI2LjctOTAuNSA2NEwwIDY0IDAgNTEybDM4NCAwIDAtNDQ4TDI4Mi41IDY0QzI2OS40IDI2LjcgMjMzLjggMCAxOTIgMHptMCA2NGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6TTI5NyAyNzNMMTg1IDM4NWwtMTcgMTctMTctMTdMODcgMzIxbC0xNy0xN0wxMDQgMjcwLjFsMTcgMTcgNDcgNDcgOTUtOTUgMTctMTdMMzEzLjkgMjU2bC0xNyAxN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const ClipboardCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L0 64 0 512l384 0 0-448L282.5 64C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM297 273L185 385l-17 17-17-17L87 321l-17-17L104 270.1l17 17 47 47 95-95 17-17L313.9 256l-17 17z" />
    </Icon>
);

export default ClipboardCheck;