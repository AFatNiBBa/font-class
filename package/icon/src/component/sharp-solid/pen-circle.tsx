
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-solid pen-circle}
 * @preview ![pen-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTE0NCAyODhMMjUyLjcgMTc5LjNsODAgODBMMjI0IDM2OGwtOTYgMTYgMTYtOTZ6bTI1Ni05NmwtNDQuNyA0NC43LTgwLTgwTDMyMCAxMTJsODAgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM144 288L252.7 179.3l80 80L224 368l-96 16 16-96zm256-96l-44.7 44.7-80-80L320 112l80 80z" />
    </Icon>
);

export default PenCircle;