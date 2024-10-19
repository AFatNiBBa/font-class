
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `up-right-from-square` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=thin up-right-from-square}
 * @preview ![up-right-from-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDAgMjc5LjAzMUM0MzUuNTk0IDI3OS4wMzEgNDMyIDI4Mi42MDkgNDMyIDI4Ny4wMzFWNDQwQzQzMiA0NzAuODc1IDQwNi44NzUgNDk2IDM3NiA0OTZINzJDNDEuMTI1IDQ5NiAxNiA0NzAuODc1IDE2IDQ0MFYxMzZDMTYgMTA1LjEyNSA0MS4xMjUgODAgNzIgODBIMjI0LjI1QzIyOC42NTYgODAgMjMyLjI1IDc2LjQyMiAyMzIuMjUgNzJTMjI4LjY1NiA2NCAyMjQuMjUgNjRINzJDMzIuMzEyIDY0IDAgOTYuMjk3IDAgMTM2VjQ0MEMwIDQ3OS43MDMgMzIuMzEyIDUxMiA3MiA1MTJIMzc2QzQxNS42ODggNTEyIDQ0OCA0NzkuNzAzIDQ0OCA0NDBWMjg3LjAzMUM0NDggMjgyLjYwOSA0NDQuNDA2IDI3OS4wMzEgNDQwIDI3OS4wMzFaTTQ4OCAwSDM0NS43ODFDMzIyLjg1OSAwIDMxMS4zODMgMjcuNzExIDMyNy41OSA0My45MThMMzkyLjE4IDEwOC41MDhMMTYyLjM0NCAzMzguMzQ0QzE1OS4yMTkgMzQxLjQ2OSAxNTkuMjE5IDM0Ni41MzEgMTYyLjM0NCAzNDkuNjU2QzE2My45MDYgMzUxLjIxOSAxNjUuOTM4IDM1MiAxNjggMzUyUzE3Mi4wOTQgMzUxLjIxOSAxNzMuNjU2IDM0OS42NTZMNDAzLjQ5MiAxMTkuODJMNDY4LjA4NiAxODQuNDE0QzQ3My4zMjQgMTg5LjY1MiA0NzkuNzcgMTkyIDQ4Ni4wOSAxOTJDNDk5LjMxMiAxOTIgNTEyIDE4MS43MyA1MTIgMTY2LjIyM1YyNEM1MTIgMTAuNzQ2IDUwMS4yNTQgMCA0ODggMFpNNDk2IDE2Ni4yMjNDNDk2IDE3Mi45NjcgNDkwLjIwMyAxNzYgNDg2LjA5IDE3NkM0ODMuNTc0IDE3NiA0ODEuMzI0IDE3NS4wMjUgNDc5LjM5OCAxNzMuMTAyTDMzOC45MDIgMzIuNjA0QzMzNC43NTQgMjguNDU1IDMzNi4wNDcgMjMuODA5IDMzNi43OTMgMjIuMDA0QzMzNy41NDMgMjAuMTk5IDMzOS45MTQgMTYgMzQ1Ljc4MSAxNkg0ODhDNDkyLjQxIDE2IDQ5NiAxOS41OSA0OTYgMjRWMTY2LjIyM1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UpRightFromSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M440 279.031C435.594 279.031 432 282.609 432 287.031V440C432 470.875 406.875 496 376 496H72C41.125 496 16 470.875 16 440V136C16 105.125 41.125 80 72 80H224.25C228.656 80 232.25 76.422 232.25 72S228.656 64 224.25 64H72C32.312 64 0 96.297 0 136V440C0 479.703 32.312 512 72 512H376C415.688 512 448 479.703 448 440V287.031C448 282.609 444.406 279.031 440 279.031ZM488 0H345.781C322.859 0 311.383 27.711 327.59 43.918L392.18 108.508L162.344 338.344C159.219 341.469 159.219 346.531 162.344 349.656C163.906 351.219 165.938 352 168 352S172.094 351.219 173.656 349.656L403.492 119.82L468.086 184.414C473.324 189.652 479.77 192 486.09 192C499.312 192 512 181.73 512 166.223V24C512 10.746 501.254 0 488 0ZM496 166.223C496 172.967 490.203 176 486.09 176C483.574 176 481.324 175.025 479.398 173.102L338.902 32.604C334.754 28.455 336.047 23.809 336.793 22.004C337.543 20.199 339.914 16 345.781 16H488C492.41 16 496 19.59 496 24V166.223Z" />
        </Icon>
    </>
}