
import { Icon } from "../../index";

/**
 * A component that renders the `circle-star` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-star?s=sharp-solid circle-star}
 * @preview ![circle-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6bTQ3LTMyMC43bDEwNS4xIDE1LjMtNzYuMSA3NC4yIDE4IDEwNC43TDI1NiAzMzZsLTk0IDQ5LjQgMTgtMTA0LjctNzYuMS03NC4yTDIwOSAxOTEuMyAyNTYgOTZsNDcgOTUuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleStar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm47-320.7l105.1 15.3-76.1 74.2 18 104.7L256 336l-94 49.4 18-104.7-76.1-74.2L209 191.3 256 96l47 95.3z" />
    </Icon>
);

export default CircleStar;