
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `magnifying-glass` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnifying-glass?s=light magnifying-glass}
 * @preview ![magnifying-glass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMzEyIDQ4NC42ODhMMzY1Ljg1IDM0My4yMjdDMzk3LjA0MSAzMDYuODQ4IDQxNiAyNTkuNjc2IDQxNiAyMDhDNDE2IDkzLjEyNSAzMjIuODc1IDAgMjA4IDBTMCA5My4xMjUgMCAyMDhTOTMuMTI1IDQxNiAyMDggNDE2QzI1OS42NzYgNDE2IDMwNi44NDggMzk3LjAzOSAzNDMuMjI1IDM2NS44NTJMNDg0LjY4NyA1MDcuMzEyQzQ4Ny44MTIgNTEwLjQzOCA0OTEuOTA2IDUxMiA0OTYgNTEyUzUwNC4xODggNTEwLjQzOCA1MDcuMzEyIDUwNy4zMTJDNTEzLjU2MiA1MDEuMDYyIDUxMy41NjIgNDkwLjkzOCA1MDcuMzEyIDQ4NC42ODhaTTIwOCAzODRDMTEwLjk1MyAzODQgMzIgMzA1LjA0NyAzMiAyMDhTMTEwLjk1MyAzMiAyMDggMzJTMzg0IDExMC45NTMgMzg0IDIwOFMzMDUuMDQ3IDM4NCAyMDggMzg0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MagnifyingGlass(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.312 484.688L365.85 343.227C397.041 306.848 416 259.676 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C259.676 416 306.848 397.039 343.225 365.852L484.687 507.312C487.812 510.438 491.906 512 496 512S504.188 510.438 507.312 507.312C513.562 501.062 513.562 490.938 507.312 484.688ZM208 384C110.953 384 32 305.047 32 208S110.953 32 208 32S384 110.953 384 208S305.047 384 208 384Z" />
        </Icon>
    </>
}