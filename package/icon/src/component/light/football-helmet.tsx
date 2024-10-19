
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `football-helmet` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/football-helmet?s=light football-helmet}
 * @preview ![football-helmet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAuNDkxIDMyMEgzNTUuOTgxTDM0MC43MyAyNDRMNDc3LjYxNiAyMjYuMjVDNDg2LjYxNiAyMjUgNDkzLjI0MiAyMTYuMzc1IDQ5MS40OTIgMjA3LjVDNDY4Ljg2NSA5My43NSAzNjguNzMyIDggMjQ4LjQ3MyA4QzExNS4zMzggOCAxOC43MDUgMTA5LjUgMy4wNzkgMjE5Ljg3NUMtNy4xNzIgMjkyIDIxLjczNSAzNTkgNjIuMjM4IDQwOS44NzVDNjUuMjM5IDQxMy43NSA2OS45ODkgNDE2IDc0Ljk4OSA0MTZIMTI4LjQ5M0wyMDYuMjIgNDYxLjEyNUMyMTUuNDcxIDQ2NS43NSAyMjUuNTk2IDQ2OCAyMzUuNDcyIDQ2OEMyODEuOTc2IDQ2OCAzMTMuNjAzIDQxOC43NSAyOTYuMzUyIDM3NS44NzVMMjg2Ljg1MSAzNTJIMzI5LjcyOUwzMzkuMjMgNDAxLjM3NUMzNDguNzMxIDQ0OC43NSAzODcuMjM0IDQ4NC42MjUgNDM1LjIzOCA0OTAuNjI1QzQ3OS4yNDEgNDk2LjEyNSA0NzcuNzQxIDQ5NiA0ODAuNDkxIDQ5NkM1MDIuOTkzIDQ5NiA1MTIuNDkzIDQ3Ni4yNSA1MTIuNDkzIDQ2NFYzNTJDNTEyLjQ5MyAzMzQuMjUgNDk4LjI0MiAzMjAgNDgwLjQ5MSAzMjBaTTI3NC4xIDMyMEwyNjMuNzI0IDI5NC4yNUMyNDUuODQ4IDI0OS4zNzUgMzA4Ljg1MyAyNDguMTI1IDMwOC45NzggMjQ4LjEyNUwzMjMuMzU0IDMyMEgyNzQuMVpNMjg1LjIyNiAyMTguODc1QzI0My44NDggMjI0LjI1IDIxOC41OTYgMjY3LjI1IDIzNC4wOTcgMzA2LjEyNUwyNjYuNzI0IDM4OS43NUMyNzEuNzI1IDQwMi4yNSAyNjguNzI1IDQxNi41IDI1OS4yMjQgNDI2LjAwMUMyNDYuNDczIDQzOC43NSAyMjkuOTcyIDQzNyAyMjAuNDcxIDQzMi4yNUMxMzEuODM5IDM4OCAxMzcuNTkgMzg4Ljc1IDEyNy45NjQgMzgzLjg3NUg3NC41ODVDNDAuNzA3IDMzOC4xMjUgMjYuNTgxIDI4MS43NSAzNC43MDcgMjI0LjI1QzQ3Ljk1OCAxMzAuNjI1IDEzMS43MTQgNDAgMjQ4LjQ3MyA0MEMzNDUuMjMxIDQwIDQyOS44NjIgMTA0Ljg3NSA0NTUuOTg5IDE5Ni43NUwyODUuMjI2IDIxOC44NzVaTTQ4MC40OTEgNDY0TDQzOS4yMzggNDU4Ljc1QzQxMy4yMzYgNDU1LjYyNSAzOTEuMjM0IDQzOCAzNzkuMTA4IDQxNkg0ODAuNDkxVjQ2NFpNNDgwLjQ5MSAzODRIMzY4LjczMkwzNjIuMzU3IDM1Mkg0ODAuNDkxVjM4NFpNMTc2LjQ2OCAzMTJDMTYzLjIxNyAzMTIgMTUyLjQ2NiAzMjIuNzUgMTUyLjQ2NiAzMzZTMTYzLjIxNyAzNjAgMTc2LjQ2OCAzNjBTMjAwLjQ2OSAzNDkuMjUgMjAwLjQ2OSAzMzZTMTg5LjcxOSAzMTIgMTc2LjQ2OCAzMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FootballHelmet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480.491 320H355.981L340.73 244L477.616 226.25C486.616 225 493.242 216.375 491.492 207.5C468.865 93.75 368.732 8 248.473 8C115.338 8 18.705 109.5 3.079 219.875C-7.172 292 21.735 359 62.238 409.875C65.239 413.75 69.989 416 74.989 416H128.493L206.22 461.125C215.471 465.75 225.596 468 235.472 468C281.976 468 313.603 418.75 296.352 375.875L286.851 352H329.729L339.23 401.375C348.731 448.75 387.234 484.625 435.238 490.625C479.241 496.125 477.741 496 480.491 496C502.993 496 512.493 476.25 512.493 464V352C512.493 334.25 498.242 320 480.491 320ZM274.1 320L263.724 294.25C245.848 249.375 308.853 248.125 308.978 248.125L323.354 320H274.1ZM285.226 218.875C243.848 224.25 218.596 267.25 234.097 306.125L266.724 389.75C271.725 402.25 268.725 416.5 259.224 426.001C246.473 438.75 229.972 437 220.471 432.25C131.839 388 137.59 388.75 127.964 383.875H74.585C40.707 338.125 26.581 281.75 34.707 224.25C47.958 130.625 131.714 40 248.473 40C345.231 40 429.862 104.875 455.989 196.75L285.226 218.875ZM480.491 464L439.238 458.75C413.236 455.625 391.234 438 379.108 416H480.491V464ZM480.491 384H368.732L362.357 352H480.491V384ZM176.468 312C163.217 312 152.466 322.75 152.466 336S163.217 360 176.468 360S200.469 349.25 200.469 336S189.719 312 176.468 312Z" />
        </Icon>
    </>
}