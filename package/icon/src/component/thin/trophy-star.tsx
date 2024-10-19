
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `trophy-star` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trophy-star?s=thin trophy-star}
 * @preview ![trophy-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTguNTk3IDg1LjQwNkM1NTcuMzggNzMuMTg4IDU0Ny4xMyA2NCA1MzQuNzU3IDY0SDQ0Ny45MTNDNDQ3Ljk3MiA1NC45MjYgNDQ3LjkzMSA0Ni4zMDEgNDQ3LjczNCAzOC44MTJDNDQ3LjE0IDE3LjA2MiA0MjkuNTc5IDAgNDA3LjczOCAwSDE2OC4yNjFDMTQ2LjQxOSAwIDEyOC44NTkgMTcuMDYyIDEyOC4yNjUgMzguODEyQzEyOC4wNjggNDYuMzAxIDEyOC4wMjcgNTQuOTI2IDEyOC4wODUgNjRINDEuMjQxQzI4Ljg2OCA2NCAxOC42MTggNzMuMTg4IDE3LjQwMiA4NS40MDZDMTEuMzU1IDE0NS44MTIgMTMuMDI3IDM0NS42NjQgMjgwLjYyNCAzOTguNDk2QzI4MC41MDMgMzk5LjA0NyAyNzkuOTk5IDM5OS40MTQgMjc5Ljk5OSA0MDBWNDI3LjYyNUMyNzkuOTk5IDQzNi45MzcgMjc0LjU2NCA0NDUuNDY5IDI2Ni4xNTcgNDQ5LjM3NUwxNjQuNjM2IDQ5Ni43NUMxNjEuMjMgNDk4LjM0NCAxNTkuMzg2IDUwMi4wNjIgMTYwLjE5OCA1MDUuNzE5QzE2MS4wMTEgNTA5LjQwNiAxNjQuMjYxIDUxMiAxNjguMDExIDUxMkg0MDcuOTg4QzQxMS43MzggNTEyIDQxNC45ODggNTA5LjQwNiA0MTUuOCA1MDUuNzE5QzQxNi42MTMgNTAyLjA2MiA0MTQuNzY5IDQ5OC4zNDQgNDExLjM2MyA0OTYuNzVMMzA5Ljg0MSA0NDkuMzc1QzMwMS40MzUgNDQ1LjQ2OSAyOTUuOTk5IDQzNi45MzggMjk1Ljk5OSA0MjcuNjI1VjQwMEMyOTUuOTk5IDM5OS40MTQgMjk1LjQ5NSAzOTkuMDQ3IDI5NS4zNzQgMzk4LjQ5NkM1NjIuOTcyIDM0NS42NjQgNTY0LjY0NCAxNDUuODEyIDU1OC41OTcgODUuNDA2Wk0zMy4zMzcgODYuOTY5QzMzLjcxMiA4MyAzNy4xMTggODAgNDEuMjQxIDgwSDEyOC4zMzNDMTMwLjczIDE2Ni45MSAxNDkuMyAzMDEuODU5IDIzNS4wNjQgMzcwLjU5NEMyOS4yOTQgMzA3LjI4MSAyOC4wMTMgMTQwLjA5OCAzMy4zMzcgODYuOTY5Wk0zMDMuMDkxIDQ2My44NzVMMzcxLjkyOSA0OTZIMjA0LjA3TDI3Mi45MDcgNDYzLjg3NUMyNzkuMDk1IDQ2MC45OTIgMjg0LjA5NSA0NTYuNDQ1IDI4Ny45OTkgNDUxLjEyMUMyOTEuOTA0IDQ1Ni40NDUgMjk2LjkwNCA0NjAuOTkyIDMwMy4wOTEgNDYzLjg3NVpNMjg3Ljk5OSAzODMuMzc1QzE1MS42MzggMzI3Ljc1IDE0Mi4wMTMgMTI0LjUgMTQ0LjI2MyAzOS4yNUMxNDQuNjA3IDI2LjIxOSAxNTUuMTY5IDE2IDE2OC4yNjEgMTZINDA3LjczOEM0MjAuODI5IDE2IDQzMS4zOTIgMjYuMjE5IDQzMS43MzYgMzkuMjVDNDMzLjk4NiAxMjQuNSA0MjQuMzYxIDMyNy43NSAyODcuOTk5IDM4My4zNzVaTTQ0Ny42NjUgODBINTM0Ljc1N0M1MzguODggODAgNTQyLjI4NiA4MyA1NDIuNjYxIDg2Ljk2OUM1NDcuOTg2IDE0MC4wOTggNTQ2LjcwNCAzMDcuMjgxIDM0MC45MzUgMzcwLjU5NEM0MjYuNjk4IDMwMS44NTkgNDQ1LjI2OSAxNjYuOTEgNDQ3LjY2NSA4MFpNMzc1LjU2MiAxNTIuMDMxQzM3OS41MyAxNDguMTg4IDM4MC45MzcgMTQyLjUzMSAzNzkuMjQ5IDEzNy4yNUMzNzcuNTMgMTMyIDM3My4wNjIgMTI4LjI1IDM2Ny42MjQgMTI3LjQ2OUwzMjEuNjg3IDEyMC43NUwzMDEuMTU1IDc5LjA5NEMyOTYuMjE4IDY5LjEyNSAyODAuMjQ5IDY5LjE4OCAyNzUuMzEyIDc5LjA5NEwyNTQuNzQ5IDEyMC43NUwyMDguNjg3IDEyNy41QzIwMy4yMTggMTI4LjI4MSAxOTguNzQ5IDEzMi4wMzEgMTk3LjAzIDEzNy4yODFDMTk1LjM0MyAxNDIuNTYyIDE5Ni43NDkgMTQ4LjIxOSAyMDAuNzE4IDE1Mi4wNjJMMjMzLjk5OSAxODQuMzc1TDIyNi4xMjQgMjMwLjI1QzIyNS4xODcgMjM1LjY4OCAyMjcuNDA1IDI0MS4wOTQgMjMxLjg3NCAyNDQuMzEyQzIzNi4zNzQgMjQ3LjUzMSAyNDIuMDkzIDI0Ny45MzggMjQ2Ljk5OSAyNDUuNDA2TDI4OC4xMjQgMjIzLjc4MUwzMjkuMjQ5IDI0NS40MDZDMzMxLjM3NCAyNDYuNSAzMzMuNjU1IDI0Ny4wNjIgMzM1Ljk2OCAyNDcuMDYyQzMzOC45MzcgMjQ3LjA2MiAzNDEuODc0IDI0Ni4xMjUgMzQ0LjQwNSAyNDQuMjgxQzM0OC44NzQgMjQxLjAzMSAzNTEuMDYyIDIzNS42MjUgMzUwLjEyNCAyMzAuMjE5TDM0Mi4yNDkgMTg0LjM3NUwzNzUuNTYyIDE1Mi4wMzFaTTMzMy44MTIgMjI5LjcxOUwyODguMTI0IDIwNS43MTlMMjQyLjQzNyAyMjkuNzE5TDI1MS4xODcgMTc4Ljc1TDIxNC4xODcgMTQyLjg0NEwyNjUuMzc0IDEzNS4zNzVMMjg4LjIxOCA4OS4wOTRMMzExLjA2MiAxMzUuMzc1TDM2Mi44NzQgMTQyLjAzMUwzMjUuMDYyIDE3OC43NUwzMzMuODEyIDIyOS43MTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TrophyStar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M558.597 85.406C557.38 73.188 547.13 64 534.757 64H447.913C447.972 54.926 447.931 46.301 447.734 38.812C447.14 17.062 429.579 0 407.738 0H168.261C146.419 0 128.859 17.062 128.265 38.812C128.068 46.301 128.027 54.926 128.085 64H41.241C28.868 64 18.618 73.188 17.402 85.406C11.355 145.812 13.027 345.664 280.624 398.496C280.503 399.047 279.999 399.414 279.999 400V427.625C279.999 436.937 274.564 445.469 266.157 449.375L164.636 496.75C161.23 498.344 159.386 502.062 160.198 505.719C161.011 509.406 164.261 512 168.011 512H407.988C411.738 512 414.988 509.406 415.8 505.719C416.613 502.062 414.769 498.344 411.363 496.75L309.841 449.375C301.435 445.469 295.999 436.938 295.999 427.625V400C295.999 399.414 295.495 399.047 295.374 398.496C562.972 345.664 564.644 145.812 558.597 85.406ZM33.337 86.969C33.712 83 37.118 80 41.241 80H128.333C130.73 166.91 149.3 301.859 235.064 370.594C29.294 307.281 28.013 140.098 33.337 86.969ZM303.091 463.875L371.929 496H204.07L272.907 463.875C279.095 460.992 284.095 456.445 287.999 451.121C291.904 456.445 296.904 460.992 303.091 463.875ZM287.999 383.375C151.638 327.75 142.013 124.5 144.263 39.25C144.607 26.219 155.169 16 168.261 16H407.738C420.829 16 431.392 26.219 431.736 39.25C433.986 124.5 424.361 327.75 287.999 383.375ZM447.665 80H534.757C538.88 80 542.286 83 542.661 86.969C547.986 140.098 546.704 307.281 340.935 370.594C426.698 301.859 445.269 166.91 447.665 80ZM375.562 152.031C379.53 148.188 380.937 142.531 379.249 137.25C377.53 132 373.062 128.25 367.624 127.469L321.687 120.75L301.155 79.094C296.218 69.125 280.249 69.188 275.312 79.094L254.749 120.75L208.687 127.5C203.218 128.281 198.749 132.031 197.03 137.281C195.343 142.562 196.749 148.219 200.718 152.062L233.999 184.375L226.124 230.25C225.187 235.688 227.405 241.094 231.874 244.312C236.374 247.531 242.093 247.938 246.999 245.406L288.124 223.781L329.249 245.406C331.374 246.5 333.655 247.062 335.968 247.062C338.937 247.062 341.874 246.125 344.405 244.281C348.874 241.031 351.062 235.625 350.124 230.219L342.249 184.375L375.562 152.031ZM333.812 229.719L288.124 205.719L242.437 229.719L251.187 178.75L214.187 142.844L265.374 135.375L288.218 89.094L311.062 135.375L362.874 142.031L325.062 178.75L333.812 229.719Z" />
        </Icon>
    </>
}