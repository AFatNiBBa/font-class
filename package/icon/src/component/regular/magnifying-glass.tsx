
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `magnifying-glass` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=regular magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQuOTY5IDQ3MS4wMzFMMzcwLjk1OSAzMzcuMDIzQzM5OS4wODQgMzAxLjU0NyA0MTYgMjU2Ljc4NSA0MTYgMjA4QzQxNiA5My4xMjUgMzIyLjg3NSAwIDIwOCAwUzAgOTMuMTI1IDAgMjA4UzkzLjEyNSA0MTYgMjA4IDQxNkMyNTYuNzg1IDQxNiAzMDEuNTQ5IDM5OS4wODYgMzM3LjAyMSAzNzAuOTYxTDQ3MS4wMzEgNTA0Ljk2OUM0NzUuNzE5IDUwOS42NTYgNDgxLjg1OSA1MTIgNDg4IDUxMlM1MDAuMjgxIDUwOS42NTYgNTA0Ljk2OSA1MDQuOTY5QzUxNC4zNDQgNDk1LjU5NCA1MTQuMzQ0IDQ4MC40MDYgNTA0Ljk2OSA0NzEuMDMxWk00OCAyMDhDNDggMTE5Ljc3NyAxMTkuNzc1IDQ4IDIwOCA0OFMzNjggMTE5Ljc3NyAzNjggMjA4UzI5Ni4yMjUgMzY4IDIwOCAzNjhTNDggMjk2LjIyMyA0OCAyMDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MagnifyingGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504.969 471.031L370.959 337.023C399.084 301.547 416 256.785 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C256.785 416 301.549 399.086 337.021 370.961L471.031 504.969C475.719 509.656 481.859 512 488 512S500.281 509.656 504.969 504.969C514.344 495.594 514.344 480.406 504.969 471.031ZM48 208C48 119.777 119.775 48 208 48S368 119.777 368 208S296.225 368 208 368S48 296.223 48 208Z" />
        </Icon>
    </>
}