
import { Icon } from "../../index";

/**
 * A component that renders the `diamond` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond?s=sharp-regular diamond}
 * @preview ![diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMCAyNTZsMzMuOSAzMy45TDIyMi4xIDQ3OC4xIDI1NiA1MTJsMzMuOS0zMy45TDQ3OC4xIDI4OS45IDUxMiAyNTZsLTMzLjktMzMuOUwyODkuOSAzMy45IDI1NiAwIDIyMi4xIDMzLjkgMzMuOSAyMjIuMSAwIDI1NnpNMjU2IDQ0NC4xTDY3LjkgMjU2IDI1NiA2Ny45IDQ0NC4xIDI1NiAyNTYgNDQ0LjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const Diamond: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256l33.9 33.9L222.1 478.1 256 512l33.9-33.9L478.1 289.9 512 256l-33.9-33.9L289.9 33.9 256 0 222.1 33.9 33.9 222.1 0 256zM256 444.1L67.9 256 256 67.9 444.1 256 256 444.1z" />
    </Icon>
);

export default Diamond;