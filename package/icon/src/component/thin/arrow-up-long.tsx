
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-up-long` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=thin arrow-up-long}
 * @preview ![arrow-up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjUuNjU2IDBDMTYyLjUzMSAtMy4xMjUgMTU3LjQ2OSAtMy4xMjUgMTU0LjM0NCAwTDIuMzQ0IDE1MkMwLjc4MSAxNTMuNTYyIDAgMTU1LjU5NCAwIDE1Ny42NTZTMC43ODEgMTYxLjc1IDIuMzQ0IDE2My4zMTJDNS40NjkgMTY2LjQzNyAxMC41MzEgMTY2LjQzNyAxMy42NTYgMTYzLjMxMkwxNTIgMjQuOTY5VjUwMS42NTZDMTUyIDUwNi4wNjIgMTU1LjU3OCA1MDkuNjU2IDE2MCA1MDkuNjU2UzE2OCA1MDYuMDYyIDE2OCA1MDEuNjU2VjI0Ljk2OUwzMDYuMzQ0IDE2My4zMTJDMzA5LjQ2OSAxNjYuNDM3IDMxNC41MzEgMTY2LjQzNyAzMTcuNjU2IDE2My4zMTJTMzIwLjc4MSAxNTUuMTI1IDMxNy42NTYgMTUyTDE2NS42NTYgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowUpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M165.656 0C162.531 -3.125 157.469 -3.125 154.344 0L2.344 152C0.781 153.562 0 155.594 0 157.656S0.781 161.75 2.344 163.312C5.469 166.437 10.531 166.437 13.656 163.312L152 24.969V501.656C152 506.062 155.578 509.656 160 509.656S168 506.062 168 501.656V24.969L306.344 163.312C309.469 166.437 314.531 166.437 317.656 163.312S320.781 155.125 317.656 152L165.656 0Z" />
        </Icon>
    </>
}