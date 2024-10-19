
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-fragile` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=light square-fragile}
 * @preview ![square-fragile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDQgOTZIMTQ0QzEyNi4zMjYgOTYgMTEyIDExMC4zMjYgMTEyIDEyOFYyMDhDMTEyIDI2NC4zNzUgMTUzLjc1IDMxMC42MjUgMjA4IDMxOC4zNzVWMzg0SDE3NkMxNjcuMTk5IDM4NCAxNjAgMzkxLjE5OSAxNjAgNDAwQzE2MCA0MDguNzk5IDE2Ny4xOTkgNDE2IDE3NiA0MTZIMjcyQzI4MC44MDEgNDE2IDI4OCA0MDguNzk5IDI4OCA0MDBDMjg4IDM5MS4xOTkgMjgwLjgwMSAzODQgMjcyIDM4NEgyNDBWMzE4LjM3NUMyOTQuMjUgMzEwLjYyNSAzMzYgMjY0LjM3NSAzMzYgMjA4VjEyOEMzMzYgMTEwLjMyNiAzMjEuNjc0IDk2IDMwNCA5NlpNMzA0IDIwOEMzMDQgMjUyLjEyNSAyNjguMTI1IDI4OCAyMjQgMjg4UzE0NCAyNTIuMTI1IDE0NCAyMDhWMTI4SDIxMi43NUwyMjAuMTI1IDE0Ny44NzVMMTgzLjc1IDE4Ni4yNUMxODMuNzUgMTg2LjI1IDIzMS4zNzUgMjIxLjEyNSAyNTEgMjMwLjEyNUMyNTMuNjI1IDIzMS4yNSAyNTYuNzUgMjMxLjEyNSAyNTkuMjUgMjI5LjM3NUMyNjIuODc1IDIyNi43NSAyNjMuNzUgMjIxLjc1IDI2MS4yNSAyMThDMjUyLjI1IDIwNS41IDIzMS4zNzUgMTg0LjI1IDIzMS4zNzUgMTg0LjI1TDI2MCAxNTZDMjYwIDE1NiAyNTAuODc1IDEzMy44NzUgMjQ4LjM3NSAxMjhIMzA0VjIwOFpNMzg0IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1MiAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBIMzg0QzQxOS4zNDYgNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1MiA0MTkuMzQ2IDMyIDM4NCAzMlpNNDE2IDQxNkM0MTYgNDMzLjY0NSA0MDEuNjQ1IDQ0OCAzODQgNDQ4SDY0QzQ2LjM1NSA0NDggMzIgNDMzLjY0NSAzMiA0MTZWOTZDMzIgNzguMzU1IDQ2LjM1NSA2NCA2NCA2NEgzODRDNDAxLjY0NSA2NCA0MTYgNzguMzU1IDQxNiA5NlY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareFragile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M304 96H144C126.326 96 112 110.326 112 128V208C112 264.375 153.75 310.625 208 318.375V384H176C167.199 384 160 391.199 160 400C160 408.799 167.199 416 176 416H272C280.801 416 288 408.799 288 400C288 391.199 280.801 384 272 384H240V318.375C294.25 310.625 336 264.375 336 208V128C336 110.326 321.674 96 304 96ZM304 208C304 252.125 268.125 288 224 288S144 252.125 144 208V128H212.75L220.125 147.875L183.75 186.25C183.75 186.25 231.375 221.125 251 230.125C253.625 231.25 256.75 231.125 259.25 229.375C262.875 226.75 263.75 221.75 261.25 218C252.25 205.5 231.375 184.25 231.375 184.25L260 156C260 156 250.875 133.875 248.375 128H304V208ZM384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416Z" />
        </Icon>
    </>
}