
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-dollar` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-dollar?s=duotone circle-dollar}
 * @preview ![circle-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMzQyLjc2NiAzMTQuMjgxQzMzNy40MyAzNDIuNjg5IDMxMy43MjkgMzYxLjQwNiAyODAuMDQ3IDM2Ni44MTFWMzg0QzI4MC4wNDcgMzk3LjI1IDI2OS4yOTcgNDA4IDI1Ni4wNDcgNDA4UzIzMi4wNDcgMzk3LjI1IDIzMi4wNDcgMzg0VjM2NS45NDFDMjE3LjkzNCAzNjMuNSAyMDMuNTQ3IDM1OC45ODQgMTkwLjcwMyAzNTQuNzAzTDE4NC41MTYgMzUyLjY1NkMxNzEuOTIyIDM0OC41MTYgMTY1LjA0NyAzMzQuOTY5IDE2OS4xNzIgMzIyLjM3NUMxNzMuMjgxIDMwOS43NjYgMTg2Ljc4MSAzMDIuOTIyIDE5OS40NTMgMzA3LjAzMUwyMDUuODc1IDMwOS4xNTZDMjE4IDMxMy4yMDMgMjMxLjc2NiAzMTcuNzgxIDI0Mi45NTMgMzE5LjM0NEMyNzAuNzE5IDMyMy4yOTcgMjkzLjMyOCAzMTcuMzU5IDI5NS41NzggMzA1LjQzN0MyOTcuMzc1IDI5NS44MjggMjkzLjc1IDI5MC43NjYgMjQ5Ljc5NyAyNzkuMTU2TDI0MS4yMDMgMjc2Ljg3NUMyMTYuNDg0IDI3MC4xNTYgMTU4LjU3OCAyNTQuNDUzIDE2OS4yMDMgMTk3LjcxOUMxNzQuNTU3IDE2OS4yNzkgMTk4LjMxNiAxNTAuNjA1IDIzMi4wNDcgMTQ1LjIyM1YxMjhDMjMyLjA0NyAxMTQuNzUgMjQyLjc5NyAxMDQgMjU2LjA0NyAxMDRTMjgwLjA0NyAxMTQuNzUgMjgwLjA0NyAxMjhWMTQ1Ljk5OEMyODkuMDIgMTQ3LjU2NCAyOTguOTEyIDE0OS45ODIgMzExLjI4MSAxNTMuOTM4QzMyMy45MDYgMTU3Ljk2OSAzMzAuODc1IDE3MS40NjkgMzI2Ljg0NCAxODQuMDk0QzMyMi44NDQgMTk2LjczNCAzMDkuMzQ0IDIwMy43NjYgMjk2LjY4OCAxOTkuNjU2QzI4NS4xNTYgMTk1Ljk4NCAyNzYuMDYzIDE5My42ODggMjY4Ljg3NSAxOTIuNjQxQzI0MS4yNjYgMTg4LjczNCAyMTguNjI1IDE5NC42NDEgMjE2LjM5MSAyMDYuNTYyQzIxNS4wNjIgMjEzLjYyNSAyMTMuOTIyIDIxOS43MzQgMjUzLjc2NiAyMzAuNTQ3TDI2Mi4wNDcgMjMyLjc1QzI5Ni4yNSAyNDEuNzgxIDM1My41IDI1Ni44OTEgMzQyLjc2NiAzMTQuMjgxWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNDIuODUgMzE0LjI4MUMzMzcuNTE0IDM0Mi42ODkgMzEzLjgxMyAzNjEuNDA2IDI4MC4xMzEgMzY2LjgxMVYzODRDMjgwLjEzMSAzOTcuMjUgMjY5LjM4MSA0MDggMjU2LjEzMSA0MDhTMjMyLjEzMSAzOTcuMjUgMjMyLjEzMSAzODRWMzY1Ljk0MUMyMTguMDE4IDM2My41IDIwMy42MzEgMzU4Ljk4NCAxOTAuNzg3IDM1NC43MDNMMTg0LjYgMzUyLjY1NkMxNzIuMDA2IDM0OC41MTYgMTY1LjEzMSAzMzQuOTY5IDE2OS4yNTYgMzIyLjM3NUMxNzMuMzY2IDMwOS43NjYgMTg2Ljg2NiAzMDIuOTIyIDE5OS41MzcgMzA3LjAzMUwyMDUuOTU5IDMwOS4xNTZDMjE4LjA4NCAzMTMuMjAzIDIzMS44NSAzMTcuNzgxIDI0My4wMzcgMzE5LjM0NEMyNzAuODAzIDMyMy4yOTcgMjkzLjQxMiAzMTcuMzU5IDI5NS42NjIgMzA1LjQzN0MyOTcuNDU5IDI5NS44MjggMjkzLjgzNCAyOTAuNzY2IDI0OS44ODEgMjc5LjE1NkwyNDEuMjg3IDI3Ni44NzVDMjE2LjU2OSAyNzAuMTU2IDE1OC42NjIgMjU0LjQ1MyAxNjkuMjg3IDE5Ny43MTlDMTc0LjY0MSAxNjkuMjc5IDE5OC40MDEgMTUwLjYwNSAyMzIuMTMxIDE0NS4yMjNWMTI4QzIzMi4xMzEgMTE0Ljc1IDI0Mi44ODEgMTA0IDI1Ni4xMzEgMTA0UzI4MC4xMzEgMTE0Ljc1IDI4MC4xMzEgMTI4VjE0NS45OThDMjg5LjEwNCAxNDcuNTY0IDI5OC45OTYgMTQ5Ljk4MiAzMTEuMzY2IDE1My45MzhDMzIzLjk5MSAxNTcuOTY5IDMzMC45NTkgMTcxLjQ2OSAzMjYuOTI4IDE4NC4wOTRDMzIyLjkyOCAxOTYuNzM0IDMwOS40MjggMjAzLjc2NiAyOTYuNzcyIDE5OS42NTZDMjg1LjI0MSAxOTUuOTg0IDI3Ni4xNDcgMTkzLjY4OCAyNjguOTU5IDE5Mi42NDFDMjQxLjM1IDE4OC43MzQgMjE4LjcwOSAxOTQuNjQxIDIxNi40NzUgMjA2LjU2MkMyMTUuMTQ3IDIxMy42MjUgMjE0LjAwNiAyMTkuNzM0IDI1My44NSAyMzAuNTQ3TDI2Mi4xMzEgMjMyLjc1QzI5Ni4zMzQgMjQxLjc4MSAzNTMuNTg0IDI1Ni44OTEgMzQyLjg1IDMxNC4yODFaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM342.766 314.281C337.43 342.689 313.729 361.406 280.047 366.811V384C280.047 397.25 269.297 408 256.047 408S232.047 397.25 232.047 384V365.941C217.934 363.5 203.547 358.984 190.703 354.703L184.516 352.656C171.922 348.516 165.047 334.969 169.172 322.375C173.281 309.766 186.781 302.922 199.453 307.031L205.875 309.156C218 313.203 231.766 317.781 242.953 319.344C270.719 323.297 293.328 317.359 295.578 305.437C297.375 295.828 293.75 290.766 249.797 279.156L241.203 276.875C216.484 270.156 158.578 254.453 169.203 197.719C174.557 169.279 198.316 150.605 232.047 145.223V128C232.047 114.75 242.797 104 256.047 104S280.047 114.75 280.047 128V145.998C289.02 147.564 298.912 149.982 311.281 153.938C323.906 157.969 330.875 171.469 326.844 184.094C322.844 196.734 309.344 203.766 296.688 199.656C285.156 195.984 276.063 193.688 268.875 192.641C241.266 188.734 218.625 194.641 216.391 206.562C215.062 213.625 213.922 219.734 253.766 230.547L262.047 232.75C296.25 241.781 353.5 256.891 342.766 314.281Z" />
            <path d="M342.85 314.281C337.514 342.689 313.813 361.406 280.131 366.811V384C280.131 397.25 269.381 408 256.131 408S232.131 397.25 232.131 384V365.941C218.018 363.5 203.631 358.984 190.787 354.703L184.6 352.656C172.006 348.516 165.131 334.969 169.256 322.375C173.366 309.766 186.866 302.922 199.537 307.031L205.959 309.156C218.084 313.203 231.85 317.781 243.037 319.344C270.803 323.297 293.412 317.359 295.662 305.437C297.459 295.828 293.834 290.766 249.881 279.156L241.287 276.875C216.569 270.156 158.662 254.453 169.287 197.719C174.641 169.279 198.401 150.605 232.131 145.223V128C232.131 114.75 242.881 104 256.131 104S280.131 114.75 280.131 128V145.998C289.104 147.564 298.996 149.982 311.366 153.938C323.991 157.969 330.959 171.469 326.928 184.094C322.928 196.734 309.428 203.766 296.772 199.656C285.241 195.984 276.147 193.688 268.959 192.641C241.35 188.734 218.709 194.641 216.475 206.562C215.147 213.625 214.006 219.734 253.85 230.547L262.131 232.75C296.334 241.781 353.584 256.891 342.85 314.281Z" />
        </Icon>
    </>
}