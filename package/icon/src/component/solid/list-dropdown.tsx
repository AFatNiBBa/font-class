
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `list-dropdown` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/list-dropdown?s=solid list-dropdown}
 * @preview ![list-dropdown](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMjgwSDM4NEMzOTcuMjU0IDI4MCA0MDggMjY5LjI1NCA0MDggMjU2QzQwOCAyNDIuNzQ0IDM5Ny4yNTQgMjMyIDM4NCAyMzJIMTI4QzExNC43NDYgMjMyIDEwNCAyNDIuNzQ0IDEwNCAyNTZDMTA0IDI2OS4yNTQgMTE0Ljc0NiAyODAgMTI4IDI4MFpNNDQ4IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1MiAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWOTZDNTEyIDYwLjY1MiA0ODMuMzQ2IDMyIDQ0OCAzMlpNMzU5Ljk4OCA5Nkg0MzkuOTk4QzQ0Ny4xMjMgOTYgNDUwLjY4NiAxMDQuNjI1IDQ0NS42MjMgMTA5LjYyNUw0MDUuNjE5IDE0OS42MzFDNDAyLjQ5MiAxNTIuNzU2IDM5Ny40OTIgMTUyLjc1NiAzOTQuMzY3IDE0OS42MzFMMzU0LjM2MyAxMDkuNjI1QzM0OS42NzQgMTA1IDM1Mi4xNzYgOTYgMzU5Ljk4OCA5NlpNNDQ4IDQxNkg2NFYxOTJINDQ4VjQxNlpNMTI4IDM3NkgzODRDMzk3LjI1NCAzNzYgNDA4IDM2NS4yNTQgNDA4IDM1MkM0MDggMzM4Ljc0NCAzOTcuMjU0IDMyOCAzODQgMzI4SDEyOEMxMTQuNzQ2IDMyOCAxMDQgMzM4Ljc0NCAxMDQgMzUyQzEwNCAzNjUuMjU0IDExNC43NDYgMzc2IDEyOCAzNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ListDropdown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 280H384C397.254 280 408 269.254 408 256C408 242.744 397.254 232 384 232H128C114.746 232 104 242.744 104 256C104 269.254 114.746 280 128 280ZM448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM359.988 96H439.998C447.123 96 450.686 104.625 445.623 109.625L405.619 149.631C402.492 152.756 397.492 152.756 394.367 149.631L354.363 109.625C349.674 105 352.176 96 359.988 96ZM448 416H64V192H448V416ZM128 376H384C397.254 376 408 365.254 408 352C408 338.744 397.254 328 384 328H128C114.746 328 104 338.744 104 352C104 365.254 114.746 376 128 376Z" />
        </Icon>
    </>
}