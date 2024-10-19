
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cube` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=solid cube}
 * @preview ![cube](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODEuMTA5IDgxLjQ0OUwyNzguNDczIDQuMTQ1QzI3MS4yMjcgMS4zODMgMjYzLjYxMyAwIDI1NiAwUzI0MC43NzMgMS4zODMgMjMzLjUyNyA0LjE0NUwzMC44OTEgODEuNDQ5QzEyLjI5IDg4LjU0NSAwIDEwNi4zODggMCAxMjYuMjk2VjM4NS43MDRDMCA0MDUuNjEzIDEyLjI5IDQyMy40NTUgMzAuODkxIDQzMC41NTFMMjMzLjUyNyA1MDcuODU1QzI0MC43NzMgNTEwLjYxNyAyNDguMzg3IDUxMiAyNTYgNTEyUzI3MS4yMjcgNTEwLjYxNyAyNzguNDczIDUwNy44NTVMNDgxLjEwOSA0MzAuNTUxQzQ5OS43MSA0MjMuNDU1IDUxMiA0MDUuNjEyIDUxMiAzODUuNzA0VjEyNi4yOTZDNTEyIDEwNi4zODggNDk5LjcxIDg4LjU0NSA0ODEuMTA5IDgxLjQ0OVpNMjU2IDY0LjA3TDQyMi4yMjkgMTI3LjQ4NEwyNTYgMTg5LjgyOEw4OS43NzEgMTI3LjQ4NEwyNTYgNjQuMDdaTTI4OCA0MzUuOTQxVjI0Ni4xODJMNDQ4IDE4Ni4xODJWMzc0LjcwN0wyODggNDM1Ljk0MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Cube(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M481.109 81.449L278.473 4.145C271.227 1.383 263.613 0 256 0S240.773 1.383 233.527 4.145L30.891 81.449C12.29 88.545 0 106.388 0 126.296V385.704C0 405.613 12.29 423.455 30.891 430.551L233.527 507.855C240.773 510.617 248.387 512 256 512S271.227 510.617 278.473 507.855L481.109 430.551C499.71 423.455 512 405.612 512 385.704V126.296C512 106.388 499.71 88.545 481.109 81.449ZM256 64.07L422.229 127.484L256 189.828L89.771 127.484L256 64.07ZM288 435.941V246.182L448 186.182V374.707L288 435.941Z" />
        </Icon>
    </>
}