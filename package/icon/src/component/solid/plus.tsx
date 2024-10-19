
import { Icon } from "../../index";

/**
 * A component that renders the `plus` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/plus?s=solid plus}
 * @preview ![plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIgMjU2QzQzMiAyNzguMDk0IDQxNC4wOTQgMjk2IDM5MiAyOTZIMjY0VjQyNEMyNjQgNDQ2LjA5NCAyNDYuMDk0IDQ2NCAyMjQgNDY0UzE4NCA0NDYuMDk0IDE4NCA0MjRWMjk2SDU2QzMzLjkwNiAyOTYgMTYgMjc4LjA5NCAxNiAyNTZTMzMuOTA2IDIxNiA1NiAyMTZIMTg0Vjg4QzE4NCA2NS45MDYgMjAxLjkwNiA0OCAyMjQgNDhTMjY0IDY1LjkwNiAyNjQgODhWMjE2SDM5MkM0MTQuMDk0IDIxNiA0MzIgMjMzLjkwNiA0MzIgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Plus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 256C432 278.094 414.094 296 392 296H264V424C264 446.094 246.094 464 224 464S184 446.094 184 424V296H56C33.906 296 16 278.094 16 256S33.906 216 56 216H184V88C184 65.906 201.906 48 224 48S264 65.906 264 88V216H392C414.094 216 432 233.906 432 256Z" />
    </Icon>
);

export default Plus;