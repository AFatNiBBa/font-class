
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `book-blank` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/book-blank?s=solid book-blank}
 * @preview ![book-blank](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzYwVjI0QzQ0OCAxMC43NDQgNDM3LjI1NCAwIDQyNCAwSDk2QzQyLjk4IDAgMCA0Mi45OCAwIDk2VjQxNkMwIDQ2OS4wMiA0Mi45OCA1MTIgOTYgNTEySDQyNEM0MzcuMjU0IDUxMiA0NDggNTAxLjI1NCA0NDggNDg4VjQ3MkM0NDggNDYxLjU4MiA0NDEuMjc1IDQ1Mi45MzYgNDMyIDQ0OS42MTVWMzgyLjM4NUM0NDEuMjc1IDM3OS4wNjQgNDQ4IDM3MC40MTYgNDQ4IDM2MFpNNjQgNDE2QzY0IDM5OC4zMjYgNzguMzI2IDM4NCA5NiAzODRIMzg0VjQ0OEg5NkM3OC4zMjYgNDQ4IDY0IDQzMy42NzIgNjQgNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BookBlank(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M448 360V24C448 10.744 437.254 0 424 0H96C42.98 0 0 42.98 0 96V416C0 469.02 42.98 512 96 512H424C437.254 512 448 501.254 448 488V472C448 461.582 441.275 452.936 432 449.615V382.385C441.275 379.064 448 370.416 448 360ZM64 416C64 398.326 78.326 384 96 384H384V448H96C78.326 448 64 433.672 64 416Z" />
        </Icon>
    </>
}