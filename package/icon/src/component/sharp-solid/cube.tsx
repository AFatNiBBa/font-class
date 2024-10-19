
import { Icon } from "../../index";

/**
 * A component that renders the `cube` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=sharp-solid cube}
 * @preview ![cube](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDZsMTAuOCAzLjggMjI0IDgwTDUxMiA5Ny40bDAgMjIuNiAwIDI3MiAwIDIyLjYtMjEuMiA3LjYtMjI0IDgwTDI1NiA1MDZsLTEwLjgtMy44LTIyNC04MEwwIDQxNC42IDAgMzkyIDAgMTIwIDAgOTcuNGwyMS4yLTcuNiAyMjQtODBMMjU2IDZ6bTMyIDQyMC42bDE2MC01Ny4xIDAtMTgwTDI4OCAyNDYuNmwwIDE4MHpNMjU2IDc0TDkzLjUgMTMyIDI1NiAxOTBsMTYyLjUtNThMMjU2IDc0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 6l10.8 3.8 224 80L512 97.4l0 22.6 0 272 0 22.6-21.2 7.6-224 80L256 506l-10.8-3.8-224-80L0 414.6 0 392 0 120 0 97.4l21.2-7.6 224-80L256 6zm32 420.6l160-57.1 0-180L288 246.6l0 180zM256 74L93.5 132 256 190l162.5-58L256 74z" />
    </Icon>
);

export default Cube;