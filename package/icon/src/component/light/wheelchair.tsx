
import { Icon } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=light wheelchair}
 * @preview ![wheelchair](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgMTEyQzIwNi44NzUgMTEyIDIzMiA4Ni44NzUgMjMyIDU2UzIwNi44NzUgMCAxNzYgMFMxMjAgMjUuMTI1IDEyMCA1NlMxNDUuMTI1IDExMiAxNzYgMTEyWk0xNzYgMzJDMTg5LjIzNCAzMiAyMDAgNDIuNzY2IDIwMCA1NlMxODkuMjM0IDgwIDE3NiA4MFMxNTIgNjkuMjM0IDE1MiA1NlMxNjIuNzY2IDMyIDE3NiAzMlpNNTExLjUxNCA0MjguMTI1QzUwOS4zNzMgNDE5LjU0NyA1MDAuNjcgNDE0LjI5NyA0OTIuMTIzIDQxNi40ODRMNDQxLjE1NCA0MjkuMjE5TDM4Mi42MjMgMjk3LjVDMzgwLjA0NSAyOTEuNzE5IDM3NC4zMjYgMjg4IDM2Ny45OTggMjg4SDIzNi44MjhMMjIyLjYxMSAyMjRIMzM1Ljk5OEMzNDQuODQyIDIyNCAzNTEuOTk4IDIxNi44NDQgMzUxLjk5OCAyMDhTMzQ0Ljg0MiAxOTIgMzM1Ljk5OCAxOTJIMjE1LjUwNEwyMDcuNjI1IDE1Ni41MzFDMjA1LjcxOSAxNDcuOTA2IDE5Ny4xNzIgMTQyLjUzMSAxODguNTMxIDE0NC4zNzVDMTc5LjkwNiAxNDYuMjk3IDE3NC40NjkgMTU0Ljg0NCAxNzYuMzc1IDE2My40NjlMMjA4LjM3NSAzMDcuNDY5QzIxMCAzMTQuNzk3IDIxNi41IDMyMCAyMjQgMzIwSDM1Ny42MDdMNDE3LjM3MyA0NTQuNUM0MTkuOTk4IDQ2MC4zNzUgNDI1Ljc5NSA0NjQgNDMxLjk5OCA0NjRDNDMzLjI3OSA0NjQgNDM0LjU3NiA0NjMuODQ0IDQzNS44NzMgNDYzLjUxNkw0OTkuODczIDQ0Ny41MTZDNTA4LjQ1MSA0NDUuMzc1IDUxMy42NyA0MzYuNjg4IDUxMS41MTQgNDI4LjEyNVpNMzAzLjk4MiAzNjguMzkxQzI5NS4yMTcgMzY2LjQwNiAyODYuNzc5IDM3MS44NDQgMjg0LjgyNiAzODAuNDUzQzI3MS41MjkgNDM5LjA2MiAyMjAuMTg4IDQ4MCAxNjAgNDgwQzg5LjQyMiA0ODAgMzIgNDIyLjU3OCAzMiAzNTJDMzIgMjkxLjgxMiA3Mi45MzggMjQwLjQ2OSAxMzEuNTQ3IDIyNy4xNzJDMTQwLjE1NiAyMjUuMjAzIDE0NS41NjIgMjE2LjY0MSAxNDMuNjA5IDIwOC4wMTZDMTQxLjY0MSAxOTkuMzkxIDEzMy4wNDcgMTkzLjk1MyAxMjQuNDUzIDE5NS45NTNDNTEuMTcyIDIxMi41OTQgMCAyNzYuNzY2IDAgMzUyQzAgNDQwLjIxOSA3MS43ODEgNTEyIDE2MCA1MTJDMjM1LjIzNCA1MTIgMjk5LjQwNCA0NjAuODI4IDMxNi4wNDUgMzg3LjU0N0MzMTcuOTk4IDM3OC45MjIgMzEyLjU5MiAzNzAuMzU5IDMwMy45ODIgMzY4LjM5MVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 112C206.875 112 232 86.875 232 56S206.875 0 176 0S120 25.125 120 56S145.125 112 176 112ZM176 32C189.234 32 200 42.766 200 56S189.234 80 176 80S152 69.234 152 56S162.766 32 176 32ZM511.514 428.125C509.373 419.547 500.67 414.297 492.123 416.484L441.154 429.219L382.623 297.5C380.045 291.719 374.326 288 367.998 288H236.828L222.611 224H335.998C344.842 224 351.998 216.844 351.998 208S344.842 192 335.998 192H215.504L207.625 156.531C205.719 147.906 197.172 142.531 188.531 144.375C179.906 146.297 174.469 154.844 176.375 163.469L208.375 307.469C210 314.797 216.5 320 224 320H357.607L417.373 454.5C419.998 460.375 425.795 464 431.998 464C433.279 464 434.576 463.844 435.873 463.516L499.873 447.516C508.451 445.375 513.67 436.688 511.514 428.125ZM303.982 368.391C295.217 366.406 286.779 371.844 284.826 380.453C271.529 439.062 220.188 480 160 480C89.422 480 32 422.578 32 352C32 291.812 72.938 240.469 131.547 227.172C140.156 225.203 145.562 216.641 143.609 208.016C141.641 199.391 133.047 193.953 124.453 195.953C51.172 212.594 0 276.766 0 352C0 440.219 71.781 512 160 512C235.234 512 299.404 460.828 316.045 387.547C317.998 378.922 312.592 370.359 303.982 368.391Z" />
    </Icon>
);

export default Wheelchair;