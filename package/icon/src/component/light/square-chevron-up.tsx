
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-chevron-up` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-up?s=light square-chevron-up}
 * @preview ![square-chevron-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjMuMzEyIDI5OS4zMTJMMjI0IDE5OC42MjVMMzI0LjY4OCAyOTkuMzEyQzMzMC45MzggMzA1LjU2MiAzNDEuMDYzIDMwNS41NjIgMzQ3LjMxMiAyOTkuMzEyUzM1My41NjIgMjgyLjkzNyAzNDcuMzEyIDI3Ni42ODhMMjM1LjMxMiAxNjQuNjg4QzIzMi4xODggMTYxLjU2MiAyMjguMDk0IDE2MCAyMjQgMTYwUzIxNS44MTIgMTYxLjU2MiAyMTIuNjg4IDE2NC42ODhMMTAwLjY4OCAyNzYuNjg4Qzk0LjQzOCAyODIuOTM4IDk0LjQzOCAyOTMuMDYzIDEwMC42ODggMjk5LjMxMlMxMTcuMDYyIDMwNS41NjIgMTIzLjMxMiAyOTkuMzEyWk02NCA0ODBIMzg0QzQxOS4zNDYgNDgwIDQ0OCA0NTEuMzQ2IDQ0OCA0MTZWOTZDNDQ4IDYwLjY1NCA0MTkuMzQ2IDMyIDM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwWk0zMiA5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNkM0MTYgNDMzLjY0NSA0MDEuNjQ1IDQ0OCAzODQgNDQ4SDY0QzQ2LjM1NSA0NDggMzIgNDMzLjY0NSAzMiA0MTZWOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareChevronUp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M123.312 299.312L224 198.625L324.688 299.312C330.938 305.562 341.063 305.562 347.312 299.312S353.562 282.937 347.312 276.688L235.312 164.688C232.188 161.562 228.094 160 224 160S215.812 161.562 212.688 164.688L100.688 276.688C94.438 282.938 94.438 293.063 100.688 299.312S117.062 305.562 123.312 299.312ZM64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480ZM32 96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96Z" />
        </Icon>
    </>
}