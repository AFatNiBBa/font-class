
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=regular asterisk}
 * @preview ![asterisk](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTkyIDMyYzEzLjMgMCAyNCAxMC43IDI0IDI0bDAgMTU2LjkgMTMxLjQtODEuM2MxMS4zLTcgMjYuMS0zLjUgMzMgNy44czMuNSAyNi4xLTcuOCAzM0wyMzcuNiAyNTZsMTM1IDgzLjZjMTEuMyA3IDE0LjcgMjEuOCA3LjggMzNzLTIxLjggMTQuNy0zMyA3LjhMMjE2IDI5OS4xIDIxNiA0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjRsMC0xNTYuOUwzNi42IDM4MC40Yy0xMS4zIDctMjYuMSAzLjUtMzMtNy44cy0zLjUtMjYuMSA3LjgtMzNsMTM1LTgzLjYtMTM1LTgzLjZjLTExLjMtNy0xNC44LTIxLjgtNy44LTMzczIxLjgtMTQuOCAzMy03LjhMMTY4IDIxMi45IDE2OCA1NmMwLTEzLjMgMTAuNy0yNCAyNC0yNHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 32c13.3 0 24 10.7 24 24l0 156.9 131.4-81.3c11.3-7 26.1-3.5 33 7.8s3.5 26.1-7.8 33L237.6 256l135 83.6c11.3 7 14.7 21.8 7.8 33s-21.8 14.7-33 7.8L216 299.1 216 456c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-156.9L36.6 380.4c-11.3 7-26.1 3.5-33-7.8s-3.5-26.1 7.8-33l135-83.6-135-83.6c-11.3-7-14.8-21.8-7.8-33s21.8-14.8 33-7.8L168 212.9 168 56c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Asterisk;