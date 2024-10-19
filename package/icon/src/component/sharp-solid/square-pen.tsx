
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=sharp-solid square-pen}
 * @preview ![square-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDQ4IDMyTDAgMzIgMCA0ODBsNDQ4IDAgMC00NDh6TTExMiAyODhMMjIwLjcgMTc5LjNsODAgODBMMTkyIDM2OCA5NiAzODRsMTYtOTZ6bTI1Ni05NmwtNDQuNyA0NC43LTgwLTgwTDI4OCAxMTJsODAgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM112 288L220.7 179.3l80 80L192 368 96 384l16-96zm256-96l-44.7 44.7-80-80L288 112l80 80z" />
    </Icon>
);

export default SquarePen;