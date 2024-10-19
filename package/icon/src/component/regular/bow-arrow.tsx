
import { Icon } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=regular bow-arrow}
 * @preview ![bow-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDUuNzQ0IDI4Ni42NzZMMTc5Ljc0OCAyNTIuNzk5TDgwLjExMSAxNTMuNDE5QzExMy45OSAxMjguOTE3IDE1NC40OTUgMTE1LjU0MiAxOTcgMTE1LjU0MkMyMzEuMDAzIDExNS41NDIgMjYzLjc1NyAxMjQuMDQyIDI5Mi43NiAxMzkuOTE4TDMyNy43NjQgMTA1LjA0MUMyODguODg1IDgwLjc5IDI0NC4wMDUgNjcuNTM5IDE5NyA2Ny41MzlDMTQxLjYxOCA2Ny41MzkgODkuMTEyIDg1Ljc5IDQ1Ljg1NyAxMTkuMTY3TDM4LjYwNyAxMTEuOTE3QzMyLjM1NiAxMDUuNjY2IDIyLjIzIDEwNS42NjYgMTUuOTc5IDExMS45MTdMNC43MjggMTIzLjE2N0MtMS41MjMgMTI5LjQxNyAtMS41MjMgMTM5LjU0MyA0LjcyOCAxNDUuNzkzTDE0NS43NDQgMjg2LjY3NlpNNDkzLjI4MyAwLjI4NkwzNjQuNjQ0IDI2LjAzN0MzNTIuMzkyIDI4LjQxMiAzNDcuNzY3IDQzLjY2MyAzNTYuNjQzIDUyLjQxM0wzOTEuMTQ3IDg2LjkxNUwxNDAuNDkzIDMzNy4xNzhMOTAuNzM4IDMyMC42NzdDODguNzM3IDMyMC4wNTIgNzguMzYxIDMxNy4wNTIgNjkuNzM1IDMyNS42NzhMNS45NzggMzg5LjMwNkMtNC43NzMgNDAwLjA1NyAtMC4zOTggNDE4LjQzMyAxNC4xMDQgNDIzLjE4M0w2OS43MzUgNDQxLjgwOUw4OC4yMzcgNDk3LjMxMkM5MS4yMzggNTA2LjMxMiA5OS40ODkgNTExLjQzNyAxMDcuODY0IDUxMS40MzdDMTEyLjk5IDUxMS40MzcgMTE4LjI0MSA1MDkuNDM3IDEyMi4yNDEgNTA1LjQzN0wxODUuOTk4IDQ0MS44MDlDMTkxLjQ5OSA0MzYuMzA4IDE5My4zNzQgNDI4LjE4MyAxOTAuOTk5IDQyMC44MDhMMTc0LjM3MiAzNzEuMThMNDI1LjAyNSAxMjAuNzkyTDQ1OS41MjkgMTU1LjE2OUM0NjguNDA1IDE2NC4xNjkgNDgzLjUzMiAxNTkuNDE5IDQ4Ni4wMzIgMTQ3LjE2OEw1MTEuNjYgMTguNzg3QzUxNC4wMzYgNy4wMzYgNTAzLjUzNCAtMS43MTQgNDkzLjI4MyAwLjI4NlpNMTE2LjI0IDQ1NC45MzVMMTAxLjM2NCA0MTAuMTgyTDU2LjQ4NCAzOTUuMzA2TDg5LjQ4NyAzNjIuNDNMMTM0LjI0MiAzNzcuMzA1TDE0OS4yNDQgNDIyLjA1OEwxMTYuMjQgNDU0LjkzNVpNNDU1LjY1NCA5NC45MTZMNDE3LjAyNSA1Ni4yODlMNDY1LjI4IDQ2LjY2M0w0NTUuNjU0IDk0LjkxNlpNNDA3LjE0OCAxODMuOTJMMzcyLjE0NCAyMTguNzk3QzM4OC4yNzEgMjQ4LjA0OSAzOTcuMDIyIDI4MC45MjUgMzk3LjAyMiAzMTUuMzAyQzM5Ny4wMjIgMzU3LjgwNCAzODMuNjQ2IDM5OC4xODIgMzU5LjE0MyA0MzEuOTMzTDI1OC44ODIgMzMxLjkyOEwyMjUuMDAzIDM2NS44MDVMMzY2Ljc2OSA1MDcuMzEyQzM3My4wMiA1MTMuNTYzIDM4My4xNDYgNTEzLjU2MyAzODkuMzk2IDUwNy4zMTJMNDAwLjY0OCA0OTYuMDYyQzQwNi44OTggNDg5LjgxMSA0MDYuODk4IDQ3OS42ODYgNDAwLjY0OCA0NzMuNDM1TDM5My4zOTcgNDY2LjE4NUM0MjYuNzc2IDQyMy4wNTggNDQ1LjAyOCAzNzAuNjggNDQ1LjAyOCAzMTUuMzAyQzQ0NS4wMjggMjY4LjA1IDQzMS42NTEgMjIyLjkyMiA0MDcuMTQ4IDE4My45MloiLz48L3N2Zz4=|width=32|height=32)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M145.744 286.676L179.748 252.799L80.111 153.419C113.99 128.917 154.495 115.542 197 115.542C231.003 115.542 263.757 124.042 292.76 139.918L327.764 105.041C288.885 80.79 244.005 67.539 197 67.539C141.618 67.539 89.112 85.79 45.857 119.167L38.607 111.917C32.356 105.666 22.23 105.666 15.979 111.917L4.728 123.167C-1.523 129.417 -1.523 139.543 4.728 145.793L145.744 286.676ZM493.283 0.286L364.644 26.037C352.392 28.412 347.767 43.663 356.643 52.413L391.147 86.915L140.493 337.178L90.738 320.677C88.737 320.052 78.361 317.052 69.735 325.678L5.978 389.306C-4.773 400.057 -0.398 418.433 14.104 423.183L69.735 441.809L88.237 497.312C91.238 506.312 99.489 511.437 107.864 511.437C112.99 511.437 118.241 509.437 122.241 505.437L185.998 441.809C191.499 436.308 193.374 428.183 190.999 420.808L174.372 371.18L425.025 120.792L459.529 155.169C468.405 164.169 483.532 159.419 486.032 147.168L511.66 18.787C514.036 7.036 503.534 -1.714 493.283 0.286ZM116.24 454.935L101.364 410.182L56.484 395.306L89.487 362.43L134.242 377.305L149.244 422.058L116.24 454.935ZM455.654 94.916L417.025 56.289L465.28 46.663L455.654 94.916ZM407.148 183.92L372.144 218.797C388.271 248.049 397.022 280.925 397.022 315.302C397.022 357.804 383.646 398.182 359.143 431.933L258.882 331.928L225.003 365.805L366.769 507.312C373.02 513.563 383.146 513.563 389.396 507.312L400.648 496.062C406.898 489.811 406.898 479.686 400.648 473.435L393.397 466.185C426.776 423.058 445.028 370.68 445.028 315.302C445.028 268.05 431.651 222.922 407.148 183.92Z" />
    </Icon>
);

export default BowArrow;