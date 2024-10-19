
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-left` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-left?s=light square-chevron-left}
 * @preview ![square-chevron-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjcuMzEyIDM1Ni42ODhMMTY2LjYyNSAyNTZMMjY3LjMxMiAxNTUuMzEyQzI3My41NjIgMTQ5LjA2MiAyNzMuNTYyIDEzOC45MzcgMjY3LjMxMiAxMzIuNjg4UzI1MC45MzcgMTI2LjQzOCAyNDQuNjg4IDEzMi42ODhMMTMyLjY4OCAyNDQuNjg4QzEyOS41NjIgMjQ3LjgxMiAxMjggMjUxLjkwNiAxMjggMjU2UzEyOS41NjIgMjY0LjE4OCAxMzIuNjg4IDI2Ny4zMTJMMjQ0LjY4OCAzNzkuMzEyQzI1MC45MzggMzg1LjU2MiAyNjEuMDYzIDM4NS41NjIgMjY3LjMxMiAzNzkuMzEyUzI3My41NjIgMzYyLjkzOCAyNjcuMzEyIDM1Ni42ODhaTTQ0OCA0MTZWOTZDNDQ4IDYwLjY1NCA0MTkuMzQ2IDMyIDM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTQgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Wk02NCA0NDhDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDM4NEM0MDEuNjQ1IDY0IDQxNiA3OC4zNTUgNDE2IDk2VjQxNkM0MTYgNDMzLjY0NSA0MDEuNjQ1IDQ0OCAzODQgNDQ4SDY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SquareChevronLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M267.312 356.688L166.625 256L267.312 155.312C273.562 149.062 273.562 138.937 267.312 132.688S250.937 126.438 244.688 132.688L132.688 244.688C129.562 247.812 128 251.906 128 256S129.562 264.188 132.688 267.312L244.688 379.312C250.938 385.562 261.063 385.562 267.312 379.312S273.562 362.938 267.312 356.688ZM448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416ZM64 448C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64Z" />
        </Icon>
    </>
}