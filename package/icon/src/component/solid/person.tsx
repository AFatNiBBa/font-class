
import { Icon } from "../../index";

/**
 * A component that renders the `person` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person?s=solid person}
 * @preview ![person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMTEyIDQ4YTQ4IDQ4IDAgMSAxIDk2IDAgNDggNDggMCAxIDEgLTk2IDB6bTQwIDMwNGwwIDEyOGMwIDE3LjctMTQuMyAzMi0zMiAzMnMtMzItMTQuMy0zMi0zMmwwLTIyMy4xTDU5LjQgMzA0LjVjLTkuMSAxNS4xLTI4LjggMjAtNDMuOSAxMC45cy0yMC0yOC44LTEwLjktNDMuOWw1OC4zLTk3YzE3LjQtMjguOSA0OC42LTQ2LjYgODIuMy00Ni42bDI5LjcgMGMzMy43IDAgNjQuOSAxNy43IDgyLjMgNDYuNmw1OC4zIDk3YzkuMSAxNS4xIDQuMiAzNC44LTEwLjkgNDMuOXMtMzQuOCA0LjItNDMuOS0xMC45TDIzMiAyNTYuOSAyMzIgNDgwYzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMTI4LTE2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Person: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l29.7 0c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0z" />
    </Icon>
);

export default Person;