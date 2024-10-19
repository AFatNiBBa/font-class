
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-dollar-to-slot` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dollar-to-slot?s=solid circle-dollar-to-slot}
 * @preview ![circle-dollar-to-slot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMzUySDQ0Ny41QzQyNy44NzUgMzc4IDQwMi44NzUgMzk5Ljc1IDM3NC41IDQxNkg0MzJDNDQwLjgzNiA0MTYgNDQ4IDQyMy4xNjIgNDQ4IDQzMkM0NDggNDQwLjgzNiA0NDAuODM2IDQ0OCA0MzIgNDQ4SDgwQzcxLjE2NCA0NDggNjQgNDQwLjgzNiA2NCA0MzJDNjQgNDIzLjE2MiA3MS4xNjQgNDE2IDgwIDQxNkgxMzcuMzc1QzEwOSAzOTkuNzUgODQuMTI1IDM3OCA2NC4zNzUgMzUySDQ4QzIxLjQ5MiAzNTIgMCAzNzMuNDkgMCA0MDBWNDY0QzAgNDkwLjUxIDIxLjQ5MiA1MTIgNDggNTEySDQ2NEM0OTAuNTA4IDUxMiA1MTIgNDkwLjUxIDUxMiA0NjRWNDAwQzUxMiAzNzMuNDkgNDkwLjUwOCAzNTIgNDY0IDM1MlpNMjU2IDQxNkMzNzAuODc1IDQxNiA0NjQgMzIyLjg3NSA0NjQgMjA4UzM3MC44NzUgMCAyNTYgMFM0OCA5My4xMjUgNDggMjA4UzE0MS4xMjUgNDE2IDI1NiA0MTZaTTI0OS4zNzUgMjMxLjA0N0wyNDIuODc1IDIyOS4xNzJDMjI0LjY1NiAyMjMuODEyIDE3Ni4zNzUgMjA5LjYwOSAxODQuOTY5IDE2MC4xMjVDMTg5LjA3NCAxMzYuMjUgMjA2Ljc2MiAxMjAuMjE5IDIzMi4wMzEgMTE0LjUwNlYxMDRDMjMyLjAzMSA5MC43NSAyNDIuNzgxIDgwIDI1Ni4wMzEgODBTMjgwLjAzMSA5MC43NSAyODAuMDMxIDEwNFYxMTUuMjVDMjg1LjkzMiAxMTYuNjEzIDI5Mi4yNDIgMTE4LjM0MiAyOTkuODQ0IDEyMC45NjlDMzEyLjM3NSAxMjUuMzEyIDMxOSAxMzguOTY5IDMxNC42ODcgMTUxLjVDMzEwLjM3NSAxNjQgMjk2LjcxOSAxNzAuNjQxIDI4NC4xNTYgMTY2LjM0NEMyNzUuODc1IDE2My40NjkgMjY5LjQzOCAxNjEuNzAzIDI2NC41IDE2MC45MjJDMjQ3LjYyNSAxNTguMjgxIDIzMy40MzggMTYxLjUzMSAyMzIuMjgxIDE2OC4zMTJDMjMxLjU2MiAxNzIuNDIyIDIzMSAxNzUuNjQxIDI1Ni40MDYgMTgzLjEwOUwyNjIuNTk0IDE4NC45MDZDMjg4LjEyNSAxOTIuMjAzIDMzNS43MTkgMjA1LjgxMiAzMjcuMDMxIDI1NS44NTlDMzIyLjkxNiAyNzkuNzIzIDMwNS4yOTcgMjk1Ljg1MiAyODAuMDMxIDMwMS41NzRWMzEyQzI4MC4wMzEgMzI1LjI1IDI2OS4yODEgMzM2IDI1Ni4wMzEgMzM2UzIzMi4wMzEgMzI1LjI1IDIzMi4wMzEgMzEyVjMwMC41OTZDMjIyLjUyMyAyOTguMzc5IDIxMy4xMTEgMjk1LjM0MiAyMDQuNjI1IDI5Mi4yODFMMTk5Ljk2OSAyOTAuNjI1QzE4Ny41IDI4Ni4xODggMTgwLjkzOCAyNzIuNDY5IDE4NS4zNzUgMjU5Ljk4NFMyMDMuNSAyNDAuOTY5IDIxNi4wMzEgMjQ1LjM3NUwyMjAuOTA2IDI0Ny4xMjVDMjI5LjY4OCAyNTAuMjk3IDIzOS42NTYgMjUzLjg5MSAyNDcuMzQ0IDI1NS4wNDdDMjY0LjQ2OSAyNTcuNzgxIDI3OC41NjIgMjU0LjQ1MyAyNzkuNzE5IDI0Ny42ODdDMjgwLjUzMSAyNDIuOTM4IDI4MS4wMzEgMjQwLjEwOSAyNDkuMzc1IDIzMS4wNDdaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CircleDollarToSlot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 352H447.5C427.875 378 402.875 399.75 374.5 416H432C440.836 416 448 423.162 448 432C448 440.836 440.836 448 432 448H80C71.164 448 64 440.836 64 432C64 423.162 71.164 416 80 416H137.375C109 399.75 84.125 378 64.375 352H48C21.492 352 0 373.49 0 400V464C0 490.51 21.492 512 48 512H464C490.508 512 512 490.51 512 464V400C512 373.49 490.508 352 464 352ZM256 416C370.875 416 464 322.875 464 208S370.875 0 256 0S48 93.125 48 208S141.125 416 256 416ZM249.375 231.047L242.875 229.172C224.656 223.812 176.375 209.609 184.969 160.125C189.074 136.25 206.762 120.219 232.031 114.506V104C232.031 90.75 242.781 80 256.031 80S280.031 90.75 280.031 104V115.25C285.932 116.613 292.242 118.342 299.844 120.969C312.375 125.312 319 138.969 314.687 151.5C310.375 164 296.719 170.641 284.156 166.344C275.875 163.469 269.438 161.703 264.5 160.922C247.625 158.281 233.438 161.531 232.281 168.312C231.562 172.422 231 175.641 256.406 183.109L262.594 184.906C288.125 192.203 335.719 205.812 327.031 255.859C322.916 279.723 305.297 295.852 280.031 301.574V312C280.031 325.25 269.281 336 256.031 336S232.031 325.25 232.031 312V300.596C222.523 298.379 213.111 295.342 204.625 292.281L199.969 290.625C187.5 286.188 180.938 272.469 185.375 259.984S203.5 240.969 216.031 245.375L220.906 247.125C229.688 250.297 239.656 253.891 247.344 255.047C264.469 257.781 278.562 254.453 279.719 247.687C280.531 242.938 281.031 240.109 249.375 231.047Z" />
        </Icon>
    </>
}