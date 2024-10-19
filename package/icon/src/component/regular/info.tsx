
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=regular info}
 * @preview ![info](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTYgNzJhNDAgNDAgMCAxIDEgODAgMEE0MCA0MCAwIDEgMSA1NiA3MnpNMTYgMjAwYzAtMTMuMyAxMC43LTI0IDI0LTI0bDU2IDBjMTMuMyAwIDI0IDEwLjcgMjQgMjRsMCAyNjQgNDggMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEwyNCA1MTJjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjRsNDggMCAwLTI0MC0zMiAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M56 72a40 40 0 1 1 80 0A40 40 0 1 1 56 72zM16 200c0-13.3 10.7-24 24-24l56 0c13.3 0 24 10.7 24 24l0 264 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-240-32 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Info;