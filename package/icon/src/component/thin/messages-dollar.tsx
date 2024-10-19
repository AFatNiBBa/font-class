
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `messages-dollar` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/messages-dollar?s=thin messages-dollar}
 * @preview ![messages-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTAuMTYyIDE1Mi4yODFMMjAzLjg4NSAxNTAuNDY5QzE3Ny40MTYgMTQyLjY3MiAxNjUuMzc1IDEzNS43NjYgMTY4LjQ5OCAxMTcuNjA5QzE3Mi4wNDMgOTcuMjAzIDE5Ny45MDQgOTMuNzgxIDIxOC45NjkgOTcuMTI1QzIyNC45ODIgOTguMDYyIDIzMi4wODggMTAwIDI0MS4zNDggMTAzLjIxOUMyNDUuNTY0IDEwNC42ODcgMjUwLjA3NiAxMDIuNDUzIDI1MS41MjkgOTguMjgxQzI1Mi45NjUgOTQuMDk0IDI1MC43NjQgODkuNTQ3IDI0Ni41OTQgODguMDk0QzIzNi40MTIgODQuNTYyIDIyOC40MTggODIuNDA2IDIyMS40NTMgODEuMzEyQzIxOS41ODQgODEuMDIxIDIxNy44NTQgODAuOTk0IDIxNi4wMzMgODAuODAzVjY0QzIxNi4wMzMgNTkuNTc4IDIxMi40NTcgNTYgMjA4LjAzOSA1NkMyMDMuNjE5IDU2IDIwMC4wNDMgNTkuNTc4IDIwMC4wNDMgNjRWODAuMzczQzE3NC40ODIgODEuOTQxIDE1Ni4yOTMgOTQuNDUxIDE1Mi43NDIgMTE0Ljg3NUMxNDYuNjM3IDE1MC4yOTcgMTc5LjY0OCAxNjAuMDE2IDE5OS4zNzEgMTY1LjgxMkwyMDUuNzczIDE2Ny42NzJDMjM2LjY2MiAxNzYuNSAyNTAuODU3IDE4Mi44MTIgMjQ3LjQ4NCAyMDIuMzkxQzI0My45MjQgMjIyLjc5NyAyMTguMDE4IDIyNi4yMDMgMTk2Ljk2NyAyMjIuODc1QzE4Ny43MDcgMjIxLjQ2OSAxNzYuOTYzIDIxNy41OTQgMTY3LjQ4MiAyMTQuMTcyTDE2Mi42ODkgMjEyLjQ1M0MxNTguNjQ1IDIxMSAxNTMuOTc1IDIxMy4xNzIgMTUyLjQ3NyAyMTcuMzI4QzE1MS4wMDggMjIxLjQ4NCAxNTMuMTggMjI2LjA2MiAxNTcuMzQ4IDIyNy41NDdMMTYyLjA2NCAyMjkuMjM0QzE3Mi4yMyAyMzIuOTA2IDE4My43NTYgMjM3LjA2MiAxOTQuNTMxIDIzOC42ODhDMTk2LjQ0NyAyMzguOTg2IDE5OC4xOCAyMzguOTM2IDIwMC4wNDMgMjM5LjEyOVYyNTZDMjAwLjA0MyAyNjAuNDIyIDIwMy42MTkgMjY0IDIwOC4wMzkgMjY0QzIxMi40NTcgMjY0IDIxNi4wMzMgMjYwLjQyMiAyMTYuMDMzIDI1NlYyMzkuMzM4QzI0MS40MjggMjM3LjcwNyAyNTkuNzAzIDIyNS40ODIgMjYzLjI0IDIwNS4xMDlDMjY5LjQyNiAxNjkuMjM0IDIzNi41NjggMTU5Ljg0NCAyMTAuMTYyIDE1Mi4yODFaTTU3Ni4wMDYgMTI4SDQ3MkM0NjcuNTgyIDEyOCA0NjQgMTMxLjU4MiA0NjQgMTM2UzQ2Ny41ODIgMTQ0IDQ3MiAxNDRINTc2QzYwMi41MSAxNDQgNjI0IDE2NS40OSA2MjQgMTkyVjM4My45NjlDNjI0IDQxMC40NzcgNjAyLjUxMiA0MzEuOTY1IDU3Ni4wMDYgNDMxLjk2NUg1MjhWNDg5LjcwMUw0NTUuMzU1IDQzNS4xN0w0NTEuMDg4IDQzMS45NjVIMzIwQzI5My40OSA0MzEuOTY1IDI3MiA0MTAuNDc1IDI3MiAzODMuOTYzVjM3NS45OTJDMjcyIDM3MS41NzQgMjY4LjQxOCAzNjcuOTkyIDI2NCAzNjcuOTkyUzI1NiAzNzEuNTc0IDI1NiAzNzUuOTkyVjM4My45NjlDMjU2IDQxOS4xNjYgMjg0Ljc5NyA0NDcuOTY1IDMxOS45OTQgNDQ3Ljk2NUg0NDUuNzVMNTI4LjUgNTEwLjA4NEM1MzAuMjczIDUxMS40MDQgNTMyLjI1OCA1MTIgNTM0LjIwMSA1MTJDNTM5LjI0NCA1MTIgNTQ0IDUwNy45ODQgNTQ0IDUwMi4yMTFWNDQ3Ljk2NUg1NzZDNjExLjE5OSA0NDcuOTY1IDY0MCA0MTkuMTY0IDY0MCAzODMuOTYzVjE5MS45OTRDNjQwIDE1Ni43OTcgNjExLjIwMyAxMjggNTc2LjAwNiAxMjhaTTM1Mi4yMjkgMzE5Ljg3NUMzODcuMzc3IDMxOS44NzUgNDE2IDI5MS4xNzQgNDE2IDI1Ni4wMDRWNjMuOTk0QzQxNiAyOC43NDggMzg3LjI1IDAgMzUyIDBINjRDMjguNzUgMCAwIDI4Ljc0OCAwIDYzLjk5NFYyNTYuMDA0QzAgMjkxLjI1IDI4Ljc1IDMyMCA2NCAzMjBMOTYgMzIwLjAxOFYzNzQuMjY0Qzk2IDM4MC4wMzcgMTAwLjc1NiAzODQuMDU3IDEwNS44MDEgMzg0LjA1N0MxMDcuNzQyIDM4NC4wNTcgMTA5LjcyNyAzODMuNDU5IDExMS41IDM4Mi4xMzlMMTk0LjI1IDMyMC4wMThMMzUyIDMxOS44NzVIMzUyLjIyOVpNMTk0LjIzNiAzMDQuMDE4TDE4OC45MDYgMzA0LjAyMUwxODQuNjQ1IDMwNy4yMjNMMTEyIDM2MS43NTZWMzA0LjAyNUw5Ni4wMDggMzA0LjAxOEw2NCAzMDRDMzcuNTMzIDMwNCAxNiAyODIuNDY5IDE2IDI1Ni4wMDRWNjMuOTk0QzE2IDM3LjUyOSAzNy41MzMgMTYgNjQgMTZIMzUyQzM3OC40NjcgMTYgNDAwIDM3LjUyOSA0MDAgNjMuOTk0VjI1Ni4wMDRDNDAwIDI4Mi40IDM3OC41NyAzMDMuODc1IDM1MS45ODYgMzAzLjg3NUwxOTQuMjM2IDMwNC4wMThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MessagesDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M210.162 152.281L203.885 150.469C177.416 142.672 165.375 135.766 168.498 117.609C172.043 97.203 197.904 93.781 218.969 97.125C224.982 98.062 232.088 100 241.348 103.219C245.564 104.687 250.076 102.453 251.529 98.281C252.965 94.094 250.764 89.547 246.594 88.094C236.412 84.562 228.418 82.406 221.453 81.312C219.584 81.021 217.854 80.994 216.033 80.803V64C216.033 59.578 212.457 56 208.039 56C203.619 56 200.043 59.578 200.043 64V80.373C174.482 81.941 156.293 94.451 152.742 114.875C146.637 150.297 179.648 160.016 199.371 165.812L205.773 167.672C236.662 176.5 250.857 182.812 247.484 202.391C243.924 222.797 218.018 226.203 196.967 222.875C187.707 221.469 176.963 217.594 167.482 214.172L162.689 212.453C158.645 211 153.975 213.172 152.477 217.328C151.008 221.484 153.18 226.062 157.348 227.547L162.064 229.234C172.23 232.906 183.756 237.062 194.531 238.688C196.447 238.986 198.18 238.936 200.043 239.129V256C200.043 260.422 203.619 264 208.039 264C212.457 264 216.033 260.422 216.033 256V239.338C241.428 237.707 259.703 225.482 263.24 205.109C269.426 169.234 236.568 159.844 210.162 152.281ZM576.006 128H472C467.582 128 464 131.582 464 136S467.582 144 472 144H576C602.51 144 624 165.49 624 192V383.969C624 410.477 602.512 431.965 576.006 431.965H528V489.701L455.355 435.17L451.088 431.965H320C293.49 431.965 272 410.475 272 383.963V375.992C272 371.574 268.418 367.992 264 367.992S256 371.574 256 375.992V383.969C256 419.166 284.797 447.965 319.994 447.965H445.75L528.5 510.084C530.273 511.404 532.258 512 534.201 512C539.244 512 544 507.984 544 502.211V447.965H576C611.199 447.965 640 419.164 640 383.963V191.994C640 156.797 611.203 128 576.006 128ZM352.229 319.875C387.377 319.875 416 291.174 416 256.004V63.994C416 28.748 387.25 0 352 0H64C28.75 0 0 28.748 0 63.994V256.004C0 291.25 28.75 320 64 320L96 320.018V374.264C96 380.037 100.756 384.057 105.801 384.057C107.742 384.057 109.727 383.459 111.5 382.139L194.25 320.018L352 319.875H352.229ZM194.236 304.018L188.906 304.021L184.645 307.223L112 361.756V304.025L96.008 304.018L64 304C37.533 304 16 282.469 16 256.004V63.994C16 37.529 37.533 16 64 16H352C378.467 16 400 37.529 400 63.994V256.004C400 282.4 378.57 303.875 351.986 303.875L194.236 304.018Z" />
        </Icon>
    </>
}