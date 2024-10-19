
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than?s=light greater-than}
 * @preview ![greater-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xLjQ0IDg5LjM3NEM0LjExMSA4My40NjggOS45MjQgNzkuOTk5IDE2LjAxOCA3OS45OTlDMTguMjIxIDc5Ljk5OSAyMC40NzEgODAuNDY4IDIyLjYyNyA4MS40MzdMMzc0LjYyNSAyNDEuNDQzQzM4MC4zMjggMjQ0LjAzNyAzODQgMjQ5LjcyNCAzODQgMjU2LjAwN0MzODQgMjYyLjI4OSAzODAuMzI4IDI2Ny45NzYgMzc0LjYyNSAyNzAuNTdMMjIuNjI3IDQzMC41NzZDMTQuNTMzIDQzNC4yMDEgNS4wNjUgNDMwLjY2OSAxLjQ0IDQyMi42MzhDLTIuMjE3IDQxNC41NzYgMS4zMyA0MDUuMTA3IDkuMzc3IDQwMS40NDlMMzI5LjMyOCAyNTYuMDA3TDkuMzc3IDExMC41NjRDMS4zMyAxMDYuOTA4IC0yLjIxNyA5Ny40MzcgMS40NCA4OS4zNzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GreaterThan(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M1.44 89.374C4.111 83.468 9.924 79.999 16.018 79.999C18.221 79.999 20.471 80.468 22.627 81.437L374.625 241.443C380.328 244.037 384 249.724 384 256.007C384 262.289 380.328 267.976 374.625 270.57L22.627 430.576C14.533 434.201 5.065 430.669 1.44 422.638C-2.217 414.576 1.33 405.107 9.377 401.449L329.328 256.007L9.377 110.564C1.33 106.908 -2.217 97.437 1.44 89.374Z" />
        </Icon>
    </>
}