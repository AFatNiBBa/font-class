
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `indent` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/indent?s=solid indent}
 * @preview ![indent](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik05LjIxOSAzNTAuNUMxMS4zNzUgMzUxLjUgMTMuNjg4IDM1MiAxNiAzNTJDMTkuNjg4IDM1MiAyMy4zMTIgMzUwLjc1IDI2LjI1IDM0OC4yODFMMTIyLjI1IDI2OC4yODFDMTI1LjkwNiAyNjUuMjUgMTI4IDI2MC43NSAxMjggMjU2UzEyNS45MDYgMjQ2Ljc1IDEyMi4yNSAyNDMuNzE5TDI2LjI1IDE2My43MTlDMjEuNDY5IDE1OS43MTkgMTQuODQ0IDE1OC45MzcgOS4yMTkgMTYxLjVDMy41OTQgMTY0LjE1NiAwIDE2OS43ODEgMCAxNzZWMzM2QzAgMzQyLjIxOSAzLjU5NCAzNDcuODQ0IDkuMjE5IDM1MC41Wk0zMiA5Nkg0MTZDNDMzLjY3NCA5NiA0NDggODEuNjc0IDQ0OCA2NFM0MzMuNjc0IDMyIDQxNiAzMkgzMkMxNC4zMjYgMzIgMCA0Ni4zMjYgMCA2NFMxNC4zMjYgOTYgMzIgOTZaTTQxNiA0MTZIMzJDMTQuMzI2IDQxNiAwIDQzMC4zMjYgMCA0NDhTMTQuMzI2IDQ4MCAzMiA0ODBINDE2QzQzMy42NzQgNDgwIDQ0OCA0NjUuNjc0IDQ0OCA0NDhTNDMzLjY3NCA0MTYgNDE2IDQxNlpNNDE2IDI4OEgyMjRDMjA2LjMyNiAyODggMTkyIDMwMi4zMjYgMTkyIDMyMFMyMDYuMzI2IDM1MiAyMjQgMzUySDQxNkM0MzMuNjc0IDM1MiA0NDggMzM3LjY3NCA0NDggMzIwUzQzMy42NzQgMjg4IDQxNiAyODhaTTQxNiAxNjBIMjI0QzIwNi4zMjYgMTYwIDE5MiAxNzQuMzI2IDE5MiAxOTJTMjA2LjMyNiAyMjQgMjI0IDIyNEg0MTZDNDMzLjY3NCAyMjQgNDQ4IDIwOS42NzQgNDQ4IDE5MlM0MzMuNjc0IDE2MCA0MTYgMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Indent(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M9.219 350.5C11.375 351.5 13.688 352 16 352C19.688 352 23.312 350.75 26.25 348.281L122.25 268.281C125.906 265.25 128 260.75 128 256S125.906 246.75 122.25 243.719L26.25 163.719C21.469 159.719 14.844 158.937 9.219 161.5C3.594 164.156 0 169.781 0 176V336C0 342.219 3.594 347.844 9.219 350.5ZM32 96H416C433.674 96 448 81.674 448 64S433.674 32 416 32H32C14.326 32 0 46.326 0 64S14.326 96 32 96ZM416 416H32C14.326 416 0 430.326 0 448S14.326 480 32 480H416C433.674 480 448 465.674 448 448S433.674 416 416 416ZM416 288H224C206.326 288 192 302.326 192 320S206.326 352 224 352H416C433.674 352 448 337.674 448 320S433.674 288 416 288ZM416 160H224C206.326 160 192 174.326 192 192S206.326 224 224 224H416C433.674 224 448 209.674 448 192S433.674 160 416 160Z" />
        </Icon>
    </>
}