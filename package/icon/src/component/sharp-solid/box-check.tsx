
import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=sharp-solid box-check}
 * @preview ![box-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjA4IDMybDAgMTI4TDAgMTYwIDY0IDMybDE0NCAwem0zMiAwbDE0NCAwIDY0IDEyOC0yMDggMCAwLTEyOHpNMCAxOTJsNDQ4IDAgMCAyODhMMCA0ODAgMCAxOTJ6bTMzNyA4OWwxNy0xN0wzMjAgMjMwLjFsLTE3IDE3LTExMSAxMTEtNDctNDctMTctMTdMOTQuMSAzMjhsMTcgMTcgNjQgNjQgMTcgMTcgMTctMTdMMzM3IDI4MXoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M208 32l0 128L0 160 64 32l144 0zm32 0l144 0 64 128-208 0 0-128zM0 192l448 0 0 288L0 480 0 192zm337 89l17-17L320 230.1l-17 17-111 111-47-47-17-17L94.1 328l17 17 64 64 17 17 17-17L337 281z" />
    </Icon>
);

export default BoxCheck;