
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-arrow-up-left` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-up-left?s=regular square-arrow-up-left}
 * @preview ![square-arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xOTMuOTM4IDE5MkgyOTEuMjgxQzMwNC41MzEgMTkyIDMxNS4yODEgMTgxLjI1IDMxNS4yODEgMTY4UzMwNC41MzEgMTQ0IDI5MS4yODEgMTQ0SDEzNkMxMjIuNzUgMTQ0IDExMiAxNTQuNzUgMTEyIDE2OFYzMjMuMjgxQzExMiAzMzYuNTMxIDEyMi43NSAzNDcuMjgxIDEzNiAzNDcuMjgxUzE2MCAzMzYuNTMxIDE2MCAzMjMuMjgxVjIyNS45MzhMMjk1LjAzMSAzNjAuOTY5QzI5OS43MTkgMzY1LjY1NiAzMDUuODQ0IDM2OCAzMTIgMzY4UzMyNC4yODEgMzY1LjY1NiAzMjguOTY5IDM2MC45NjlDMzM4LjM0NCAzNTEuNTk0IDMzOC4zNDQgMzM2LjQwNiAzMjguOTY5IDMyNy4wMzFMMTkzLjkzOCAxOTJaTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTYgMCA5NlY0MTZDMCA0NTEuMzQ0IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NCA0NDggNDE2Vjk2QzQ0OCA2MC42NTYgNDE5LjM0NiAzMiAzODQgMzJaTTQwMCA0MTZDNDAwIDQyNC44MiAzOTIuODIyIDQzMiAzODQgNDMySDY0QzU1LjE3OCA0MzIgNDggNDI0LjgyIDQ4IDQxNlY5NkM0OCA4Ny4xOCA1NS4xNzggODAgNjQgODBIMzg0QzM5Mi44MjIgODAgNDAwIDg3LjE4IDQwMCA5NlY0MTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function SquareArrowUpLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M193.938 192H291.281C304.531 192 315.281 181.25 315.281 168S304.531 144 291.281 144H136C122.75 144 112 154.75 112 168V323.281C112 336.531 122.75 347.281 136 347.281S160 336.531 160 323.281V225.938L295.031 360.969C299.719 365.656 305.844 368 312 368S324.281 365.656 328.969 360.969C338.344 351.594 338.344 336.406 328.969 327.031L193.938 192ZM384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM400 416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416Z" />
        </Icon>
    </>
}