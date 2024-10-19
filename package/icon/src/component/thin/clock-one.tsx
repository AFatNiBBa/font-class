
import { Icon } from "../../index";

/**
 * A component that renders the `clock-one` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-one?s=thin clock-one}
 * @preview ![clock-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk2IDI1NkEyNDAgMjQwIDAgMSAwIDE2IDI1NmEyNDAgMjQwIDAgMSAwIDQ4MCAwek0wIDI1NmEyNTYgMjU2IDAgMSAxIDUxMiAwQTI1NiAyNTYgMCAxIDEgMCAyNTZ6TTI2NCAxMDRsMCAxMjUuNiA0OS4zLTc0YzIuNS0zLjcgNy40LTQuNyAxMS4xLTIuMnM0LjcgNy40IDIuMiAxMS4xbC02NCA5NmMtMiAyLjktNS42IDQuMi05IDMuMnMtNS43LTQuMS01LjctNy43bDAtMTUyYzAtNC40IDMuNi04IDgtOHM4IDMuNiA4IDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ClockOne: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM264 104l0 125.6 49.3-74c2.5-3.7 7.4-4.7 11.1-2.2s4.7 7.4 2.2 11.1l-64 96c-2 2.9-5.6 4.2-9 3.2s-5.7-4.1-5.7-7.7l0-152c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default ClockOne;