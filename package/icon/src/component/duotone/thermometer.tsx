
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `thermometer` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/thermometer?s=duotone thermometer}
 * @preview ![thermometer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4My45ODcgMTYyLjYzNEwyMjkuNzYgNDE1Ljk0NkgxMjkuODk0TDQwLjkwMyA1MDQuOTY3QzMxLjY1MyA1MTQuMzQ0IDE2LjQwNSA1MTQuMzQ0IDcuMDMxIDUwNC45NjdDLTIuMzQ0IDQ5NS43MTUgLTIuMzQ0IDQ4MC40NjEgNy4wMzEgNDcxLjA4NEw5Ni4wMjIgMzgyLjA2MlYyODEuMTYzTDE0NS4wNzcgMjMxLjc3MkwxOTYuNjY5IDI4My4zODJDMTk5Ljc5NCAyODYuNTA4IDIwMy44ODggMjg4LjA3MSAyMDcuOTgxIDI4OC4wNzFTMjE2LjE2OCAyODYuNTA4IDIxOS4yOTIgMjgzLjM4MkMyMjUuNTQyIDI3Ny4xMzEgMjI1LjU0MiAyNjcuMDAzIDIxOS4yOTIgMjYwLjc1MkwxNjcuNjI1IDIwOS4wNjdMMjA4Ljg2MiAxNjcuNTQ4TDI2MC42NjQgMjE5LjM2N0MyNjMuNzg4IDIyMi40OTMgMjY3Ljg4MiAyMjQuMDU1IDI3MS45NzUgMjI0LjA1NUMyNzYuMDY4IDIyNC4wNTUgMjgwLjE2MiAyMjIuNDkzIDI4My4yODcgMjE5LjM2N0MyODkuNTM2IDIxMy4xMTUgMjg5LjUzNiAyMDIuOTg4IDI4My4yODcgMTk2LjczNkwyMzEuNDEyIDE0NC44NDVMMjcyLjY0OSAxMDMuMzI1TDMyNC42NTggMTU1LjM1MUMzMjcuNzgyIDE1OC40NzcgMzMxLjg3NiAxNjAuMDQgMzM1Ljk2OSAxNjAuMDRDMzQwLjA2MyAxNjAuMDQgMzQ0LjE1NiAxNTguNDc3IDM0Ny4yODEgMTU1LjM1MUMzNTMuNTMgMTQ5LjEgMzUzLjUzIDEzOC45NzIgMzQ3LjI4MSAxMzIuNzIxTDI5NS4xOTggODAuNjJMMzQ0Ljg3NSAzMC42MDNDMzgxLjI0NiAtNS45MDYgNDM5LjI0MSAtMTAuMjgyIDQ3Ni43MzggMjAuMzVDNTI2LjIzMyA2MS4xMSA1MTguODU5IDEyNy43NTEgNDgzLjk4NyAxNjIuNjM0WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yMzEuMzM2IDE0NC44NDRMMjA4Ljc4NSAxNjcuNTQ3TDI2MC41ODcgMjE5LjM2NkMyNjMuNzEyIDIyMi40OTIgMjY3LjgwNSAyMjQuMDU1IDI3MS44OTkgMjI0LjA1NUMyNzUuOTkyIDIyNC4wNTUgMjgwLjA4NSAyMjIuNDkyIDI4My4yMSAyMTkuMzY2QzI4OS40NTkgMjEzLjExNSAyODkuNDU5IDIwMi45ODcgMjgzLjIxIDE5Ni43MzZMMjMxLjMzNiAxNDQuODQ0Wk0xNjcuNTQ5IDIwOS4wNjdMMTQ1IDIzMS43NzJMMTk2LjU5MyAyODMuMzgyQzE5OS43MTggMjg2LjUwNyAyMDMuODExIDI4OC4wNyAyMDcuOTA0IDI4OC4wN1MyMTYuMDkxIDI4Ni41MDcgMjE5LjIxNiAyODMuMzgyQzIyNS40NjUgMjc3LjEzIDIyNS40NjUgMjY3LjAwMyAyMTkuMjE2IDI2MC43NTFMMTY3LjU0OSAyMDkuMDY3Wk0zNDcuMjA0IDEzMi43MkwyOTUuMTIxIDgwLjYyTDI3Mi41NzIgMTAzLjMyNUwzMjQuNTgxIDE1NS4zNTFDMzI3LjcwNiAxNTguNDc3IDMzMS43OTkgMTYwLjAzOSAzMzUuODkzIDE2MC4wMzlDMzM5Ljk4NiAxNjAuMDM5IDM0NC4wNzkgMTU4LjQ3NyAzNDcuMjA0IDE1NS4zNTFDMzUzLjQ1NCAxNDkuMDk5IDM1My40NTQgMTM4Ljk3MiAzNDcuMjA0IDEzMi43MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Thermometer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M483.987 162.634L229.76 415.946H129.894L40.903 504.967C31.653 514.344 16.405 514.344 7.031 504.967C-2.344 495.715 -2.344 480.461 7.031 471.084L96.022 382.062V281.163L145.077 231.772L196.669 283.382C199.794 286.508 203.888 288.071 207.981 288.071S216.168 286.508 219.292 283.382C225.542 277.131 225.542 267.003 219.292 260.752L167.625 209.067L208.862 167.548L260.664 219.367C263.788 222.493 267.882 224.055 271.975 224.055C276.068 224.055 280.162 222.493 283.287 219.367C289.536 213.115 289.536 202.988 283.287 196.736L231.412 144.845L272.649 103.325L324.658 155.351C327.782 158.477 331.876 160.04 335.969 160.04C340.063 160.04 344.156 158.477 347.281 155.351C353.53 149.1 353.53 138.972 347.281 132.721L295.198 80.62L344.875 30.603C381.246 -5.906 439.241 -10.282 476.738 20.35C526.233 61.11 518.859 127.751 483.987 162.634Z" />
            <path d="M231.336 144.844L208.785 167.547L260.587 219.366C263.712 222.492 267.805 224.055 271.899 224.055C275.992 224.055 280.085 222.492 283.21 219.366C289.459 213.115 289.459 202.987 283.21 196.736L231.336 144.844ZM167.549 209.067L145 231.772L196.593 283.382C199.718 286.507 203.811 288.07 207.904 288.07S216.091 286.507 219.216 283.382C225.465 277.13 225.465 267.003 219.216 260.751L167.549 209.067ZM347.204 132.72L295.121 80.62L272.572 103.325L324.581 155.351C327.706 158.477 331.799 160.039 335.893 160.039C339.986 160.039 344.079 158.477 347.204 155.351C353.454 149.099 353.454 138.972 347.204 132.72Z" />
        </Icon>
    </>
}