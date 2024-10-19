
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-graduate` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-graduate?s=thin user-graduate}
 * @preview ![user-graduate](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYuMDAxIDE1MS45OTRDMzcxLjU5NSAxNTEuOTk0IDM2OC4wMDEgMTU1LjU4OCAzNjguMDAxIDE1OS45OTRDMzY4LjAwMSAyMjEuNzQ0IDMxNy43NTEgMjcxLjk5NiAyNTYuMDAzIDI3MS45OTZDMTk0LjI1MyAyNzEuOTk2IDE0NC4wMDMgMjIxLjc0NCAxNDQuMDAzIDE1OS45OTRDMTQ0LjAwMyAxNTUuNTg4IDE0MC40MSAxNTEuOTk0IDEzNi4wMDMgMTUxLjk5NFMxMjguMDAzIDE1NS41ODggMTI4LjAwMyAxNTkuOTk0QzEyOC4wMDMgMjMwLjU5IDE4NS40MSAyODcuOTk2IDI1Ni4wMDMgMjg3Ljk5NkMzMjYuNTk1IDI4Ny45OTYgMzg0LjAwMSAyMzAuNTkgMzg0LjAwMSAxNTkuOTk0QzM4NC4wMDEgMTU1LjU4OCAzODAuNDA4IDE1MS45OTQgMzc2LjAwMSAxNTEuOTk0Wk0zODEuMjc1IDMyMy4xODRDMzc2Ljc0OCAzMjEuMDQzIDM3MS44OTYgMzE5Ljk5NiAzNjcuMDg5IDMxOS45OTZDMzU4LjcwNSAzMTkuOTk2IDM1MC40NDkgMzIzLjE4MiAzNDQuMjY1IDMyOS4zMTJMMjU2LjAwMyA0MTYuODJMMTY3Ljc0MiAzMjkuMzE0QzE2MS41NTYgMzIzLjE4NCAxNTMuMyAzMTkuOTk2IDE0NC45MTcgMzE5Ljk5NkMxNDAuMTA5IDMxOS45OTYgMTM1LjI1NyAzMjEuMDQ1IDEzMC43MyAzMjMuMTg2QzcyLjA4MyAzNTAuOTI0IDMxLjUyNyA0MDkuOTk0IDMyLjAxMSA0NzguODQ2QzMyLjE0IDQ5Ny4zMDUgNDguMDUyIDUxMiA2Ni42NjkgNTEySDQ0NS4zMzdDNDYzLjk1NSA1MTIgNDc5Ljg2NyA0OTcuMzA1IDQ3OS45OTYgNDc4Ljg0NkM0ODAuNDggNDA5Ljk5NCA0MzkuOTI1IDM1MC45MjIgMzgxLjI3NSAzMjMuMTg0Wk0yNDguMDAzIDQ5Nkg2Ni42NjlDNTYuNjIxIDQ5NiA0OC4wNzYgNDg4LjA5NCA0OC4wMTEgNDc4LjczMkM0Ny41ODkgNDE4Ljk2MSA4Mi43NDQgMzYzLjU4MiAxMzcuNTcyIDMzNy42NUMxMzkuODkgMzM2LjU1MyAxNDIuMzYxIDMzNS45OTYgMTQ0LjkxNSAzMzUuOTk2QzE0OS4zMjggMzM1Ljk5OCAxNTMuNDMzIDMzNy42NiAxNTYuNDc2IDM0MC42NzZMMjQ0LjczOCA0MjguMTg0TDI0OC4wMDMgNDMxLjQyMlY0OTZaTTQ0NS4zMzcgNDk2SDI2NC4wMDNWNDMxLjQyMkwyNjcuMjY5IDQyOC4xODRMMzU1LjUzMSAzNDAuNjc2QzM1OC41NzQgMzM3LjY1OCAzNjIuNjc5IDMzNS45OTYgMzY3LjA4OSAzMzUuOTk2QzM2OS42NDQgMzM1Ljk5NiAzNzIuMTE1IDMzNi41NTEgMzc0LjQzNSAzMzcuNjQ4QzQyOS4yNjEgMzYzLjU3OCA0NjQuNDE3IDQxOC45NTcgNDYzLjk5NiA0NzguNzM0QzQ2My45MzEgNDg4LjA5NCA0NTUuMzg2IDQ5NiA0NDUuMzM3IDQ5NlpNMTAyLjU2NiAyNTIuNTlDMTA0LjA2NiAyNTAuNDM0IDEwNC40MSAyNDcuNzE1IDEwMy41MzUgMjQ1LjI3N0w3Ni4xNzcgMTcwLjAzNUM3OC40NiAxNjcuMjcgODAuMDAzIDE2My44NTkgODAuMDAzIDE1OS45OTRDODAuMDAzIDE1NC4xMzUgNzYuNzAxIDE0OS4yMzIgNzIuMDA1IDE0Ni40NDVWOTAuMDk0TDEyOC4wMDMgMTAyLjM3NVYxMjcuOTk0QzEyOC4wMDMgMTMyLjQgMTMxLjU5NyAxMzUuOTk0IDEzNi4wMDMgMTM1Ljk5NFMxNDQuMDAzIDEzMi40IDE0NC4wMDMgMTI3Ljk5NFYxMDUuODgzTDIzNS4xNiAxMjUuODY5QzI0MS45MSAxMjcuMjc1IDI0OC45MSAxMjcuOTk0IDI1NS44NzggMTI3Ljk5NEMyNjIuODc4IDEyNy45OTQgMjY5Ljg3OCAxMjcuMjc1IDI3Ni43MjIgMTI1LjgzOEwzNjguMDAxIDEwNS44NTdWMTI3Ljk5NEMzNjguMDAxIDEzMi40IDM3MS41OTUgMTM1Ljk5NCAzNzYuMDAxIDEzNS45OTRTMzg0LjAwMSAxMzIuNCAzODQuMDAxIDEyNy45OTRWMTAyLjM1NEw0NjAuNTk1IDg1LjU4NkM0NzIuMTg5IDgzLjA1NSA0NzkuOTcgNzQuMzY3IDQ3OS45NyA2My45OTJDNDc5Ljk3IDUzLjY4IDQ3Mi4xNTggNDUuMDIzIDQ2MC41MzMgNDIuMzk4TDI3Ni43ODUgMi4xMTdDMjYzLjIyMiAtMC42OTUgMjQ4Ljg0NyAtMC43MjcgMjM1LjIyMiAyLjE0OEw1MS40MTIgNDIuMzk4QzM5Ljc4NyA0NC45MyAzMS45NzQgNTMuNjE3IDMxLjk3NCA2NC4wMjNDMzIuMDM3IDc0LjMzNiAzOS44NDkgODIuOTkyIDUxLjQ0MyA4NS41ODZMNTYuMDA1IDg2LjU4NlYxNDYuNDQ3QzUxLjMwOCAxNDkuMjM0IDQ4LjAwNSAxNTQuMTM1IDQ4LjAwNSAxNTkuOTk0QzQ4LjAwNSAxNjMuODU5IDQ5LjU1NCAxNjcuMjcgNTEuODM1IDE3MC4wMzVMMjQuNDc0IDI0NS4yNzdDMjMuNTk5IDI0Ny43MTUgMjMuOTQzIDI1MC40MzQgMjUuNDQzIDI1Mi41OUMyNi45NDMgMjU0LjcxNSAyOS4zOCAyNTUuOTk2IDMyLjAwNSAyNTUuOTk2SDk2LjAwM0M5OC42MjggMjU1Ljk5NiAxMDEuMDY2IDI1NC43MTUgMTAyLjU2NiAyNTIuNTlaTTU0LjkxMiA2OS45NjFDNTAuNjYyIDY5LjAyMyA0Ny45NzQgNjYuNzExIDQ3Ljk3NCA2My45OTJDNDcuOTc0IDYxLjI0MiA1MC41OTkgNTguOTMgNTQuODE4IDU4LjAyM0wyMzguNTY2IDE3LjgwNUMyNDQuMzE2IDE2LjU4NiAyNTAuMTkxIDE1Ljk5MiAyNTYuMDk3IDE1Ljk5MkMyNjEuOTQxIDE1Ljk5MiAyNjcuNzg1IDE2LjU4NiAyNzMuNDQxIDE3Ljc3M0w0NTcuMDY0IDU4LjAyM0M0NjEuMjUxIDU4Ljk2MSA0NjMuOTcgNjEuMzA1IDQ2My45NyA2My45OTJDNDYzLjk3IDY2LjcxMSA0NjEuMzE0IDY5LjA1NSA0NTcuMTU4IDY5Ljk2MUwyNzMuMzc4IDExMC4xODJDMjYxLjg3OCAxMTIuNjE5IDI0OS44MTYgMTEyLjU4OCAyMzguNTAzIDExMC4yMTNMNTQuOTEyIDY5Ljk2MVpNNDMuNDEyIDIzOS45OTZMNjQuMDA1IDE4My40TDg0LjU5NyAyMzkuOTk2SDQzLjQxMloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserGraduate(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M376.001 151.994C371.595 151.994 368.001 155.588 368.001 159.994C368.001 221.744 317.751 271.996 256.003 271.996C194.253 271.996 144.003 221.744 144.003 159.994C144.003 155.588 140.41 151.994 136.003 151.994S128.003 155.588 128.003 159.994C128.003 230.59 185.41 287.996 256.003 287.996C326.595 287.996 384.001 230.59 384.001 159.994C384.001 155.588 380.408 151.994 376.001 151.994ZM381.275 323.184C376.748 321.043 371.896 319.996 367.089 319.996C358.705 319.996 350.449 323.182 344.265 329.312L256.003 416.82L167.742 329.314C161.556 323.184 153.3 319.996 144.917 319.996C140.109 319.996 135.257 321.045 130.73 323.186C72.083 350.924 31.527 409.994 32.011 478.846C32.14 497.305 48.052 512 66.669 512H445.337C463.955 512 479.867 497.305 479.996 478.846C480.48 409.994 439.925 350.922 381.275 323.184ZM248.003 496H66.669C56.621 496 48.076 488.094 48.011 478.732C47.589 418.961 82.744 363.582 137.572 337.65C139.89 336.553 142.361 335.996 144.915 335.996C149.328 335.998 153.433 337.66 156.476 340.676L244.738 428.184L248.003 431.422V496ZM445.337 496H264.003V431.422L267.269 428.184L355.531 340.676C358.574 337.658 362.679 335.996 367.089 335.996C369.644 335.996 372.115 336.551 374.435 337.648C429.261 363.578 464.417 418.957 463.996 478.734C463.931 488.094 455.386 496 445.337 496ZM102.566 252.59C104.066 250.434 104.41 247.715 103.535 245.277L76.177 170.035C78.46 167.27 80.003 163.859 80.003 159.994C80.003 154.135 76.701 149.232 72.005 146.445V90.094L128.003 102.375V127.994C128.003 132.4 131.597 135.994 136.003 135.994S144.003 132.4 144.003 127.994V105.883L235.16 125.869C241.91 127.275 248.91 127.994 255.878 127.994C262.878 127.994 269.878 127.275 276.722 125.838L368.001 105.857V127.994C368.001 132.4 371.595 135.994 376.001 135.994S384.001 132.4 384.001 127.994V102.354L460.595 85.586C472.189 83.055 479.97 74.367 479.97 63.992C479.97 53.68 472.158 45.023 460.533 42.398L276.785 2.117C263.222 -0.695 248.847 -0.727 235.222 2.148L51.412 42.398C39.787 44.93 31.974 53.617 31.974 64.023C32.037 74.336 39.849 82.992 51.443 85.586L56.005 86.586V146.447C51.308 149.234 48.005 154.135 48.005 159.994C48.005 163.859 49.554 167.27 51.835 170.035L24.474 245.277C23.599 247.715 23.943 250.434 25.443 252.59C26.943 254.715 29.38 255.996 32.005 255.996H96.003C98.628 255.996 101.066 254.715 102.566 252.59ZM54.912 69.961C50.662 69.023 47.974 66.711 47.974 63.992C47.974 61.242 50.599 58.93 54.818 58.023L238.566 17.805C244.316 16.586 250.191 15.992 256.097 15.992C261.941 15.992 267.785 16.586 273.441 17.773L457.064 58.023C461.251 58.961 463.97 61.305 463.97 63.992C463.97 66.711 461.314 69.055 457.158 69.961L273.378 110.182C261.878 112.619 249.816 112.588 238.503 110.213L54.912 69.961ZM43.412 239.996L64.005 183.4L84.597 239.996H43.412Z" />
        </Icon>
    </>
}