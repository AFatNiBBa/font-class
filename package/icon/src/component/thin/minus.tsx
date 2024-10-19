
import { Icon } from "../../index";

/**
 * A component that renders the `minus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/minus?s=thin minus}
 * @preview ![minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNCAyNjRINDI0QzQyOC40MDYgMjY0IDQzMiAyNjAuNDIyIDQzMiAyNTZTNDI4LjQwNiAyNDggNDI0IDI0OEgyNEMxOS41OTQgMjQ4IDE2IDI1MS41NzggMTYgMjU2UzE5LjU5NCAyNjQgMjQgMjY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Minus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 264H424C428.406 264 432 260.422 432 256S428.406 248 424 248H24C19.594 248 16 251.578 16 256S19.594 264 24 264Z" />
    </Icon>
);

export default Minus;