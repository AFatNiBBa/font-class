
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `candy-cane` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/candy-cane?s=thin candy-cane}
 * @preview ![candy-cane](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTcuNDc3IDkyQzQ2OS42MDEgMzMuMTI1IDQxMS43MjUgMCAzNTIuMzUgMEMzMjQuNDc0IDAgMjk2LjIyNCA3LjI1IDI3MC41OTkgMjIuNjI1TDI0My4wOTggMzlDMjI3Ljg0OCA0OC4xMjUgMjIyLjk3MyA2Ny43NSAyMzIuMDk4IDgyLjg3NUwyNjQuODQ4IDEzNy43NUMyNzAuOTY0IDE0OC4wMjEgMjgxLjU5OSAxNTMuMzUgMjkyLjI4IDE1My4zNUMyOTcuOTc2IDE1My4zNSAzMDMuNjgxIDE1MS44MzYgMzA4LjcyNCAxNDguNzVMMzM2LjIyNCAxMzIuMzc1QzM0MS45NzEgMTI4Ljk0MyAzNDcuNjYyIDEyNy40NDcgMzUzLjAxIDEyNy40NDdDMzgxLjE3MiAxMjcuNDQ3IDM5OS45ODUgMTY4Ljg2NSAzNjkuMSAxODcuMjVMMTUuNTk1IDM5Ny42MjVDMC4zNDUgNDA2Ljc1IC00LjUzIDQyNi4yNSA0LjU5NSA0NDEuNUwzNy4zNDUgNDk2LjM3NUM0My4zNDUgNTA2LjM3NSA1My45NzEgNTEyIDY0Ljg0NiA1MTJDNzAuNDcxIDUxMiA3Ni4wOTYgNTEwLjUgODEuMjIxIDUwNy41TDQyOC42MDEgMzAxQzUwMC4yMjcgMjU4LjEyNSA1MzMuMjI3IDE2Ny41IDQ5Ny40NzcgOTJaTTMyOC4wMzkgMTE4LjYyN0wzMDAuMzcyIDEzNS4xMDRDMjk3Ljk3IDEzNi41NzIgMjk1LjE3MSAxMzcuMzUgMjkyLjI4IDEzNy4zNUMyODYuNjE0IDEzNy4zNSAyODEuNDk5IDEzNC40MzkgMjc4LjU4OSAxMjkuNTUxTDI0NS43OTcgNzQuNjA5QzI0My41OTggNzAuOTYzIDI0Mi45NTIgNjYuNjkxIDI0My45NzcgNjIuNTc4QzI0NS4wMDggNTguNDM5IDI0Ny42MTQgNTQuOTQzIDI1MS4yODQgNTIuNzQ2TDI3OC44MzEgMzYuMzQ0QzI5OC42MTUgMjQuNDc1IDMyMS4wMTMgMTcuOTEyIDM0NC4wMDQgMTYuNTY0VjExMi43MjVDMzM4LjU1OCAxMTMuODI0IDMzMy4xODcgMTE1LjU1MSAzMjguMDM5IDExOC42MjdaTTM2MC4wMDQgMTEyLjY4VjE2LjUzN0M0MTMuMjIgMTkuMjk3IDQ1OS45MzEgNTAuMDk0IDQ4My4wMTYgOTguODQ4QzQ4Ny40NzcgMTA4LjI2OCA0OTAuNDIgMTE4LjA2OCA0OTIuNTQxIDEyOEgzODcuNTk4QzM4MC4yNzQgMTE5Ljc5NSAzNzAuNzM3IDExNC40MTYgMzYwLjAwNCAxMTIuNjhaTTIxNi42MjMgMjk2LjYwOUwzMTMuODMgMzUwLjYxMUwyMTIuMjYgNDEwLjk5TDExNS4xMTIgMzU3LjAyTDIxNi42MjMgMjk2LjYwOVpNNzMuMTM3IDQ5My42OTFDNzAuNTIyIDQ5NS4yMjMgNjcuNzMgNDk2IDY0Ljg0NiA0OTZDNTkuMjU0IDQ5NiA1My45NzMgNDkyLjk4OCA1MS4wODQgNDg4LjE3NkwxOC4zMjYgNDMzLjI4NUMxMy43MTggNDI1LjU4NCAxNi4xMjYgNDE1Ljk1MSAyMy43NzcgNDExLjM3NUw5OS4yMDIgMzY2LjQ4OEwxOTYuMzQyIDQyMC40NTNMNzMuMTM3IDQ5My42OTFaTTMyOS43NDggMzQxLjE0OEwyMzIuNTMyIDI4Ny4xNDNMMzMwLjk1NSAyMjguNTdMNDI3LjQwNSAyODIuMTUyQzQyNS4wMDMgMjgzLjc3OSA0MjIuOTQgMjg1Ljc0IDQyMC40MjUgMjg3LjI0NkwzMjkuNzQ4IDM0MS4xNDhaTTQ0MS42NSAyNzEuNzYyTDM0Ni44NjMgMjE5LjEwMkwzNzcuMjg0IDIwMC45OThDMzk2LjYyMiAxODkuNDg4IDQwNS4wNDggMTY5LjI5NSAzOTkuMjcyIDE0OC4yOTlDMzk4Ljg0MiAxNDYuNzM0IDM5Ny44ODcgMTQ1LjQ5MiAzOTcuMzI1IDE0NEg0OTQuODA5QzQ5OS4xMDcgMTkwLjg5MyA0NzkuNjU0IDIzOS4yNTYgNDQxLjY1IDI3MS43NjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CandyCane(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M497.477 92C469.601 33.125 411.725 0 352.35 0C324.474 0 296.224 7.25 270.599 22.625L243.098 39C227.848 48.125 222.973 67.75 232.098 82.875L264.848 137.75C270.964 148.021 281.599 153.35 292.28 153.35C297.976 153.35 303.681 151.836 308.724 148.75L336.224 132.375C341.971 128.943 347.662 127.447 353.01 127.447C381.172 127.447 399.985 168.865 369.1 187.25L15.595 397.625C0.345 406.75 -4.53 426.25 4.595 441.5L37.345 496.375C43.345 506.375 53.971 512 64.846 512C70.471 512 76.096 510.5 81.221 507.5L428.601 301C500.227 258.125 533.227 167.5 497.477 92ZM328.039 118.627L300.372 135.104C297.97 136.572 295.171 137.35 292.28 137.35C286.614 137.35 281.499 134.439 278.589 129.551L245.797 74.609C243.598 70.963 242.952 66.691 243.977 62.578C245.008 58.439 247.614 54.943 251.284 52.746L278.831 36.344C298.615 24.475 321.013 17.912 344.004 16.564V112.725C338.558 113.824 333.187 115.551 328.039 118.627ZM360.004 112.68V16.537C413.22 19.297 459.931 50.094 483.016 98.848C487.477 108.268 490.42 118.068 492.541 128H387.598C380.274 119.795 370.737 114.416 360.004 112.68ZM216.623 296.609L313.83 350.611L212.26 410.99L115.112 357.02L216.623 296.609ZM73.137 493.691C70.522 495.223 67.73 496 64.846 496C59.254 496 53.973 492.988 51.084 488.176L18.326 433.285C13.718 425.584 16.126 415.951 23.777 411.375L99.202 366.488L196.342 420.453L73.137 493.691ZM329.748 341.148L232.532 287.143L330.955 228.57L427.405 282.152C425.003 283.779 422.94 285.74 420.425 287.246L329.748 341.148ZM441.65 271.762L346.863 219.102L377.284 200.998C396.622 189.488 405.048 169.295 399.272 148.299C398.842 146.734 397.887 145.492 397.325 144H494.809C499.107 190.893 479.654 239.256 441.65 271.762Z" />
        </Icon>
    </>
}