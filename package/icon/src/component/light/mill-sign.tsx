
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `mill-sign` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/mill-sign?s=light mill-sign}
 * @preview ![mill-sign](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMjAwVjQzMkMzODQgNDQwLjg0NCAzNzYuODQ0IDQ0OCAzNjggNDQ4UzM1MiA0NDAuODQ0IDM1MiA0MzJWMjAwQzM1MiAxNjAuMzEyIDMxOS42ODggMTI4IDI4MCAxMjhDMjY4LjkxMiAxMjggMjU4LjUyMyAxMzAuNzMgMjQ5LjEzMSAxMzUuMjMyTDIwOCAyNTguNjI1VjQzMkMyMDggNDQwLjg0NCAyMDAuODQ0IDQ0OCAxOTIgNDQ4UzE3NiA0NDAuODQ0IDE3NiA0MzJWMzU0LjYyNUwxMjcuMTg4IDUwMS4wNjJDMTI0LjkzOCA1MDcuNzUgMTE4LjY4OCA1MTIgMTEyIDUxMkMxMTAuMzEyIDUxMiAxMDguNjI1IDUxMS43NSAxMDYuOTM4IDUxMS4xODhDOTguNTYyIDUwOC4zNzUgOTQuMDMxIDQ5OS4zMTIgOTYuODEzIDQ5MC45MzhMMTc2IDI1My4zNzVWMjAwQzE3NiAxNjAuMzEyIDE0My42ODggMTI4IDEwNCAxMjhTMzIgMTYwLjMxMiAzMiAyMDBWNDMyQzMyIDQ0MC44NDQgMjQuODQ0IDQ0OCAxNiA0NDhTMCA0NDAuODQ0IDAgNDMyVjExMkMwIDEwMy4xNTYgNy4xNTYgOTYgMTYgOTZTMzIgMTAzLjE1NiAzMiAxMTJWMTI1LjI1NEM1MC43MTEgMTA3LjIyNyA3Ni4wMjcgOTYgMTA0IDk2QzE0MS4xNzQgOTYgMTczLjYwNyAxMTUuNzY2IDE5MiAxNDUuMTgyQzE5OS45MDggMTMyLjUzMyAyMTAuMjU2IDEyMS42MDcgMjIyLjY3IDExMy4zNjVMMjU2LjgxMyAxMC45MzhDMjU5LjYyNSAyLjU5NCAyNjguNzUgLTEuOTY5IDI3Ny4wNjMgMC44MTNDMjg1LjQzOCAzLjYyNSAyODkuOTY5IDEyLjY4OCAyODcuMTg4IDIxLjA2M0wyNjEuNTg4IDk3Ljg2MUMyNjcuNTg2IDk2Ljc4MSAyNzMuNjk1IDk2IDI4MCA5NkMzMzcuMzQ0IDk2IDM4NCAxNDIuNjU2IDM4NCAyMDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MillSign(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M384 200V432C384 440.844 376.844 448 368 448S352 440.844 352 432V200C352 160.312 319.688 128 280 128C268.912 128 258.523 130.73 249.131 135.232L208 258.625V432C208 440.844 200.844 448 192 448S176 440.844 176 432V354.625L127.188 501.062C124.938 507.75 118.688 512 112 512C110.312 512 108.625 511.75 106.938 511.188C98.562 508.375 94.031 499.312 96.813 490.938L176 253.375V200C176 160.312 143.688 128 104 128S32 160.312 32 200V432C32 440.844 24.844 448 16 448S0 440.844 0 432V112C0 103.156 7.156 96 16 96S32 103.156 32 112V125.254C50.711 107.227 76.027 96 104 96C141.174 96 173.607 115.766 192 145.182C199.908 132.533 210.256 121.607 222.67 113.365L256.813 10.938C259.625 2.594 268.75 -1.969 277.063 0.813C285.438 3.625 289.969 12.688 287.188 21.063L261.588 97.861C267.586 96.781 273.695 96 280 96C337.344 96 384 142.656 384 200Z" />
        </Icon>
    </>
}