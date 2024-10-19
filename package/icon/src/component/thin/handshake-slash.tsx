
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `handshake-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-slash?s=thin handshake-slash}
 * @preview ![handshake-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zOTEuMDYyIDQzNy4xODhDMzg2LjEwOSA0NDMuMjE5IDM3OS4wOTQgNDQ3IDM3MS4zMTIgNDQ3LjgxMkMzNjMuNTk0IDQ0OC41MzEgMzU1LjkzNyA0NDYuMzc1IDM1MC4xMDkgNDQxLjU5NEwzMjUuODEyIDQyMi4wNjJMMzIwLjU0NyA0MjcuMzQ0QzMxMS4xMDkgNDM4LjkzOCAyOTcuNzUgNDQ2LjE1NiAyODIuODkxIDQ0Ny42ODhDMjY4IDQ0OS4yODEgMjUzLjQzNyA0NDQuODc1IDI0Mi4xMDkgNDM1LjY4OEwxNDkuMzI4IDM1MS43ODFIMTA0VjE3Ni4yODVMODggMTYzLjU2NlYzNjBDODggMzczLjIxOSA3Ny4yMzQgMzg0IDY0IDM4NEgxNlYxNDRMNjMuNTY2IDE0NC4xNDVMNDMuMjQ0IDEyNy45OUw4IDEyOEM0LjE3OCAxMjggMCAxMzEuMDI3IDAgMTM2VjM5MkMwIDM5Ni40MDYgMy41NzggNDAwIDggNDAwSDY0QzgzLjMwMyA0MDAgOTguNjg5IDM4NS45OTIgMTAyLjQyNiAzNjcuNzgxSDE0My4xNzJMMjMxLjcwMyA0NDcuODQ0QzI0NC42NzIgNDU4LjM3NSAyNjAuNTMxIDQ2NCAyNzcgNDY0QzI3OS41IDQ2NCAyODIuMDE2IDQ2My44NzUgMjg0LjU0NyA0NjMuNjI1QzMwMS4xMDkgNDYxLjkwNiAzMTYuMjM0IDQ1NC42ODcgMzI3LjY3MiA0NDMuMjgxTDMzOS44MTIgNDUzLjgxMkMzNDkuMTI1IDQ2MS40MzcgMzYwLjg5MSA0NjQuODQ0IDM3Mi45NjkgNDYzLjcxOUMzODQuOTY5IDQ2Mi40NjkgMzk1Ljc5NyA0NTYuNjU2IDQwMy40NTMgNDQ3LjI4MUw0MTkuNzI3IDQyNy4yNTRMNDA3LjIxMSA0MTcuMzAzTDM5MS4wNjIgNDM3LjE4OFpNMjgyLjU0NyA4MEMyODYuOTY5IDgwIDI5MC41NDcgNzYuNDA2IDI5MC41NDcgNzJTMjg2Ljk2OSA2NCAyODIuNTQ3IDY0QzI1Ny4zMDMgNjQgMjMyLjc3OSA2OC4zMyAyMDkuNTQ5IDc2LjIxOUwyMjQuNTkgODguMTc0QzI0My4yMTMgODIuODc1IDI2Mi42NDYgODAgMjgyLjU0NyA4MFpNMTIuOTg4IDEuNzNDMTEuNTIzIDAuNTY2IDkuNzczIDAgOC4wMjMgMEM1LjY3MiAwIDMuMzM2IDEuMDMxIDEuNzM4IDMuMDEyQy0xLjAxMiA2LjQ4IC0wLjQzNCAxMS41MTIgMy4wMiAxNC4yNjJMNjI3LjAxMiA1MTAuMjY2QzYyOC40OTYgNTExLjQzOCA2MzAuMjQ2IDUxMiA2MzEuOTk2IDUxMkM2MzQuMzQgNTEyIDYzNi42ODQgNTEwLjk2OSA2MzguMjYyIDUwOC45ODRDNjQxLjAxMiA1MDUuNTE2IDY0MC40MzQgNTAwLjQ4NCA2MzYuOTggNDk3LjczNEwxMi45ODggMS43M1pNNjMyIDEyOEw1MTUuMjgxIDEyNy45NjlDNDcyLjc4MSA4Ni42ODggNDE2Ljg3NSA2NCAzNTcuNDg0IDY0SDM0OC44NzVDMzM4Ljk4NCA2NCAzMjkuNDA2IDY3LjY4OCAzMjEuODQ0IDc0LjQ2OUwyNjguNjQ2IDEyMy4xOTNMMjgxLjM4MyAxMzMuMzE2TDMzMi41OTQgODYuMzQ0QzMzNy4xNDEgODIuMjUgMzQyLjkzOCA4MCAzNDguODc1IDgwSDM1Ny40ODRDNDEzLjcxOSA4MCA0NjYuNTk0IDEwMS44NzUgNTA2LjM0NCAxNDEuNjI1TDUwOC42ODggMTQzLjk2OUg1MzZWMzM1LjcwOUw1NTIgMzQ4LjQyOFYxNDQuMTg4TDYyNCAxNDRWMzg0SDU5Ni43NTJMNjE2Ljg4MSA0MDBINjMyQzYzNi40MjIgNDAwIDY0MCAzOTYuNDA2IDY0MCAzOTJWMTM2QzY0MCAxMzEuNTk0IDYzNi40MjIgMTI4IDYzMiAxMjhaTTM2OS4wMzEgMTUwLjY4OEMzNjYuMDYzIDE0Ny40NjkgMzYxLjAxNiAxNDcuMTg4IDM1Ny43MzQgMTUwLjE4OEMzNDcuOTYzIDE1OS4xMTUgMzM5LjU4MiAxNjYuNzcxIDMzMi4wODggMTczLjYyMUwzNDQuNzQ2IDE4My42ODRMMzY4LjUxNiAxNjJDMzcxLjc4MSAxNTkuMDMxIDM3Mi4wMTYgMTUzLjk2OSAzNjkuMDMxIDE1MC42ODhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HandshakeSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M391.062 437.188C386.109 443.219 379.094 447 371.312 447.812C363.594 448.531 355.937 446.375 350.109 441.594L325.812 422.062L320.547 427.344C311.109 438.938 297.75 446.156 282.891 447.688C268 449.281 253.437 444.875 242.109 435.688L149.328 351.781H104V176.285L88 163.566V360C88 373.219 77.234 384 64 384H16V144L63.566 144.145L43.244 127.99L8 128C4.178 128 0 131.027 0 136V392C0 396.406 3.578 400 8 400H64C83.303 400 98.689 385.992 102.426 367.781H143.172L231.703 447.844C244.672 458.375 260.531 464 277 464C279.5 464 282.016 463.875 284.547 463.625C301.109 461.906 316.234 454.687 327.672 443.281L339.812 453.812C349.125 461.437 360.891 464.844 372.969 463.719C384.969 462.469 395.797 456.656 403.453 447.281L419.727 427.254L407.211 417.303L391.062 437.188ZM282.547 80C286.969 80 290.547 76.406 290.547 72S286.969 64 282.547 64C257.303 64 232.779 68.33 209.549 76.219L224.59 88.174C243.213 82.875 262.646 80 282.547 80ZM12.988 1.73C11.523 0.566 9.773 0 8.023 0C5.672 0 3.336 1.031 1.738 3.012C-1.012 6.48 -0.434 11.512 3.02 14.262L627.012 510.266C628.496 511.438 630.246 512 631.996 512C634.34 512 636.684 510.969 638.262 508.984C641.012 505.516 640.434 500.484 636.98 497.734L12.988 1.73ZM632 128L515.281 127.969C472.781 86.688 416.875 64 357.484 64H348.875C338.984 64 329.406 67.688 321.844 74.469L268.646 123.193L281.383 133.316L332.594 86.344C337.141 82.25 342.938 80 348.875 80H357.484C413.719 80 466.594 101.875 506.344 141.625L508.688 143.969H536V335.709L552 348.428V144.188L624 144V384H596.752L616.881 400H632C636.422 400 640 396.406 640 392V136C640 131.594 636.422 128 632 128ZM369.031 150.688C366.063 147.469 361.016 147.188 357.734 150.188C347.963 159.115 339.582 166.771 332.088 173.621L344.746 183.684L368.516 162C371.781 159.031 372.016 153.969 369.031 150.688Z" />
        </Icon>
    </>
}