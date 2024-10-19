
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `facebook-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/facebook-square?s=brands facebook-square}
 * @preview ![facebook-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJINDhBNDggNDggMCAwIDAgMCA4MHYzNTJhNDggNDggMCAwIDAgNDggNDhoMTM3LjI1VjMyNy42OWgtNjNWMjU2aDYzdi01NC42NGMwLTYyLjE1IDM3LTk2LjQ4IDkzLjY3LTk2LjQ4IDI3LjE0IDAgNTUuNTIgNC44NCA1NS41MiA0Ljg0djYxaC0zMS4yN2MtMzAuODEgMC00MC40MiAxOS4xMi00MC40MiAzOC43M1YyNTZoNjguNzhsLTExIDcxLjY5aC01Ny43OFY0ODBINDAwYTQ4IDQ4IDAgMCAwIDQ4LTQ4VjgwYTQ4IDQ4IDAgMCAwLTQ4LTQ4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FacebookSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
        </Icon>
    </>
}