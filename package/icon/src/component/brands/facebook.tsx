
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `facebook` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/facebook?s=brands facebook}
 * @preview ![facebook](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDQgMjU2QzUwNCAxMTkgMzkzIDggMjU2IDhTOCAxMTkgOCAyNTZjMCAxMjMuNzggOTAuNjkgMjI2LjM4IDIwOS4yNSAyNDVWMzI3LjY5aC02M1YyNTZoNjN2LTU0LjY0YzAtNjIuMTUgMzctOTYuNDggOTMuNjctOTYuNDggMjcuMTQgMCA1NS41MiA0Ljg0IDU1LjUyIDQuODR2NjFoLTMxLjI4Yy0zMC44IDAtNDAuNDEgMTkuMTItNDAuNDEgMzguNzNWMjU2aDY4Ljc4bC0xMSA3MS42OWgtNTcuNzhWNTAxQzQxMy4zMSA0ODIuMzggNTA0IDM3OS43OCA1MDQgMjU2eiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Facebook(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
        </Icon>
    </>
}