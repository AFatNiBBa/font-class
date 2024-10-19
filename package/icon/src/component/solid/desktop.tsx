
import { Icon } from "../../index";

/**
 * A component that renders the `desktop` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/desktop?s=solid desktop}
 * @preview ![desktop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggMEg0OEMyMS41IDAgMCAyMS41IDAgNDhWMzY4QzAgMzk0LjUgMjEuNSA0MTYgNDggNDE2SDI0MEwyMjQgNDY0SDE1MkMxMzguNzUgNDY0IDEyOCA0NzQuNzUgMTI4IDQ4OFMxMzguNzUgNTEyIDE1MiA1MTJINDI0QzQzNy4yNSA1MTIgNDQ4IDUwMS4yNSA0NDggNDg4UzQzNy4yNSA0NjQgNDI0IDQ2NEgzNTJMMzM2IDQxNkg1MjhDNTU0LjUgNDE2IDU3NiAzOTQuNSA1NzYgMzY4VjQ4QzU3NiAyMS41IDU1NC41IDAgNTI4IDBaTTUxMiAyODhINjRWNjRINTEyVjI4OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Desktop: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 0H48C21.5 0 0 21.5 0 48V368C0 394.5 21.5 416 48 416H240L224 464H152C138.75 464 128 474.75 128 488S138.75 512 152 512H424C437.25 512 448 501.25 448 488S437.25 464 424 464H352L336 416H528C554.5 416 576 394.5 576 368V48C576 21.5 554.5 0 528 0ZM512 288H64V64H512V288Z" />
    </Icon>
);

export default Desktop;