
import { Icon } from "../../index";

/**
 * A component that renders the `scrubber` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/scrubber?s=solid scrubber}
 * @preview ![scrubber](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ2MSAxNiAxNiAxMjMuNDIgMTYgMjU2UzEyMy40NjEgNDk2IDI1NiA0OTZTNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41MzkgMTYgMjU2IDE2Wk0yNTYgMzIwQzIyMC42NzQgMzIwIDE5MiAyOTEuMjUgMTkyIDI1NlMyMjAuNjc0IDE5MiAyNTYgMTkyUzMyMCAyMjAuNzUgMzIwIDI1NlMyOTEuMzI2IDMyMCAyNTYgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Scrubber: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.461 16 16 123.42 16 256S123.461 496 256 496S496 388.58 496 256S388.539 16 256 16ZM256 320C220.674 320 192 291.25 192 256S220.674 192 256 192S320 220.75 320 256S291.326 320 256 320Z" />
    </Icon>
);

export default Scrubber;