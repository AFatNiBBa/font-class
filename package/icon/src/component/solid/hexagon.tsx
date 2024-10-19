
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=solid hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTcuMSAyMjBjLTEyLjkgMjIuMy0xMi45IDQ5LjcgMCA3Mmw4OC4zIDE1Mi45YzEyLjkgMjIuMyAzNi42IDM2IDYyLjQgMzZsMTc2LjYgMGMyNS43IDAgNDkuNS0xMy43IDYyLjQtMzZMNDk0LjkgMjkyYzEyLjktMjIuMyAxMi45LTQ5LjcgMC03Mkw0MDYuNiA2Ny4xYy0xMi45LTIyLjMtMzYuNi0zNi02Mi40LTM2bC0xNzYuNiAwYy0yNS43IDAtNDkuNSAxMy43LTYyLjQgMzZMMTcuMSAyMjB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Hexagon: typeof Icon = x => (
    <Icon {...x}>
        <path d="M17.1 220c-12.9 22.3-12.9 49.7 0 72l88.3 152.9c12.9 22.3 36.6 36 62.4 36l176.6 0c25.7 0 49.5-13.7 62.4-36L494.9 292c12.9-22.3 12.9-49.7 0-72L406.6 67.1c-12.9-22.3-36.6-36-62.4-36l-176.6 0c-25.7 0-49.5 13.7-62.4 36L17.1 220z" />
    </Icon>
);

export default Hexagon;