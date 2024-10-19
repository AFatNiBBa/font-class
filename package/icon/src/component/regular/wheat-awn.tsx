
import { Icon } from "../../index";

/**
 * A component that renders the `wheat-awn` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/wheat-awn?s=regular wheat-awn}
 * @preview ![wheat-awn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODggOTZDNDgxLjg1OSA5NiA0NzUuNzE5IDk4LjM0NCA0NzEuMDMxIDEwMy4wMzFMNDA5LjIzIDE2NC44MzJMMzk1LjE3OCAxNTAuNzZMNTA0Ljk2OSA0MC45NjlDNTA5LjY1NiAzNi4yODEgNTEyIDMwLjE0MSA1MTIgMjRDNTEyIDEwLjI5MSA1MDAuNzkgMCA0ODggMEM0ODEuODU5IDAgNDc1LjcxOSAyLjM0NCA0NzEuMDMxIDcuMDMxTDM2MS4yNjQgMTE2Ljc5OUwzNDcuMjExIDEwMi43MjdMNDA4Ljk2OSA0MC45NjlDNDEzLjY1NiAzNi4yODEgNDE2IDMwLjE0MSA0MTYgMjRDNDE2IDEwLjI5MSA0MDQuNzkgMCAzOTIgMEMzODUuODU5IDAgMzc5LjcxOSAyLjM0NCAzNzUuMDMxIDcuMDMxTDMxMy4yOTcgNjguNzY2TDI4Ny41NDUgNDIuOTc3QzI4NC40MiAzOS44NTIgMjgwLjMyNiAzOC4yODkgMjc2LjI0OCAzOC4yODlTMjY4LjEwNyAzOS44NTIgMjY1LjA0NSA0Mi45NzdMMjMwLjkxOCA3Ni45NzlDMjE4LjI5MSA4OS42MDQgMjEwLjI5MSAxMDQuOTggMjA2LjE2NiAxMjEuMTA1QzIwMi43NzQgMTE4LjU5IDE5OS41NTYgMTE3LjcxMyAxOTYuNzE3IDExNy43MTNDMTkwLjI0OCAxMTcuNzEzIDE4NS43NTMgMTIyLjI2OSAxODUuNjY2IDEyMi4zNTVMMTUxLjkxNCAxNTYuMTA3QzEzOS4yODkgMTY4LjczMiAxMzEuNDE0IDE4My45ODIgMTI3LjI4NyAyMDAuMTA5QzEyMy44NjggMTk3LjY0IDEyMC42NDUgMTk2Ljc3NiAxMTcuODA4IDE5Ni43NzZDMTExLjMxIDE5Ni43NzYgMTA2LjgzNiAyMDEuMzEgMTA2LjY2MiAyMDEuNDg0TDcyLjc4NSAyMzUuMzYxQzU0LjAzNCAyNTQuMTEyIDQ0LjY1OSAyNzguNzA3IDQ0LjY1OSAzMDMuMzAyUzU0LjAzNCAzNTIuNDkxIDcyLjc4NSAzNzEuMjQyTDg5Ljc4NyAzODguMjQyTDcuMDMxIDQ3MC45OThDMi4zNDQgNDc1LjY4NiAwIDQ4MS44NDIgMCA0ODcuOTk4UzIuMzQ0IDUwMC4zMTIgNy4wMzEgNTA1QzExLjc4MSA1MDkuNjI1IDE3LjkwNiA1MTIgMjQuMDMzIDUxMkMzMC4xNTggNTEyIDM2LjI4MyA1MDkuNjI1IDQxLjAzMyA1MDVMMTIzLjY2MiA0MjIuMTE5TDE0MC41MzkgNDM5LjExOUMxNTkuMjkgNDU3Ljg3IDE4My44NTQgNDY3LjI0NiAyMDguNDE3IDQ2Ny4yNDZTMjU3LjU0NCA0NTcuODcgMjc2LjI5NSA0MzkuMTE5TDMxMC4yOTcgNDA0Ljk5NEMzMTMuMzk4IDQwMS45NiAzMTQuODk5IDM5OC4wMTcgMzE0Ljg5OSAzOTQuMDQ4QzMxNC44OTkgMzkwLjY1NyAzMTMuODAzIDM4Ny4yNDcgMzExLjY3MiAzODQuMzY3QzMyNy43OTcgMzgwLjI0MiAzNDMuMDQ3IDM3Mi4yNDIgMzU1LjY3NCAzNTkuNjE3TDM4OS4yOTkgMzI1Ljg2NUMzOTIuMzUyIDMyMi44MTIgMzkzLjg1OCAzMTguODc1IDM5My44NTggMzE0LjkxNEMzOTMuODU4IDMxMS41NzYgMzkyLjc4OSAzMDguMjIxIDM5MC42NzQgMzA1LjM2M0M0MDYuODAxIDMwMS4yMzggNDIyLjA1MSAyOTMuMjM4IDQzNC42NzYgMjgwLjYxM0w0NjguNDI4IDI0Ni43MzZDNDcxLjU1MyAyNDMuNjExIDQ3My4xMTUgMjM5LjUxOCA0NzMuMTE1IDIzNS40MjRTNDcxLjU1MyAyMjcuMjM1IDQ2OC40MjggMjI0LjEwOUw0NDMuMTQ1IDE5OC43OTNMNTA0Ljk2OSAxMzYuOTY5QzUwOS42NTYgMTMyLjI4MSA1MTIgMTI2LjE0MSA1MTIgMTIwQzUxMiAxMDYuMjkxIDUwMC43OSA5NiA0ODggOTZaTTEzNC45MTQgMzQyLjg2NUwxMjMuNjYyIDM1NC4yNEwxMDYuNjYyIDMzNy4yNEM5Ny4yODcgMzI3Ljg2NSA5Mi42IDMxNS41ODMgOTIuNiAzMDMuMzAyUzk3LjI4NyAyNzguNzM3IDEwNi42NjIgMjY5LjM2MUwxMTcuOTEyIDI1Ny45ODZMMTM0LjkxNCAyNzQuOTg4QzE0NC4wMzkgMjg0LjExMyAxNDkuMDM5IDI5Ni4xMTMgMTQ5LjAzOSAzMDguOTg4QzE0OS4wMzkgMzIxLjg2NSAxNDQuMDM5IDMzMy44NjUgMTM0LjkxNCAzNDIuODY1Wk0yNTAuNzMxIDE0NS4wMjhDMjUwLjczMSAxMzIuNzMxIDI1NS40MTkgMTIwLjQxOCAyNjQuNzk1IDExMC45OEwyNzYuMjk1IDk5LjQ4TDI5My4yOTUgMTE2LjQ4QzMwMi42MjQgMTI1Ljg3MSAzMDcuMzEyIDEzOC4xNzggMzA3LjMxMiAxNTAuNDk2QzMwNy4zMTIgMTYyLjc3MyAzMDIuNjU1IDE3NS4wNjEgMjkzLjI5NSAxODQuNDgyTDI4MS43OTUgMTk1Ljg1OUwyNjQuNzk1IDE3OC45ODJDMjU1LjQxOSAxNjkuNjA3IDI1MC43MzEgMTU3LjMyNiAyNTAuNzMxIDE0NS4wMjhaTTE3MS43MjcgMjI0LjA0OEMxNzEuNzI3IDIxMS43NjYgMTc2LjQxNSAxOTkuNDg0IDE4NS43OTEgMTkwLjEwOUwxOTYuOTE2IDE3OC45ODJMMjEzLjkxNiAxOTUuOTg0QzIyMy4yOTIgMjA1LjM1OSAyMjcuOTggMjE3LjY0MSAyMjcuOTggMjI5LjkyM1MyMjMuMjkyIDI1NC40ODYgMjEzLjkxNiAyNjMuODYxTDIwMi43OTEgMjc0Ljk4OEwxODUuNzkxIDI1Ny45ODZDMTc2LjQxNSAyNDguNjExIDE3MS43MjcgMjM2LjMzIDE3MS43MjcgMjI0LjA0OFpNMjQyLjQxOCA0MDUuMTE5QzIzMy4wNDMgNDE0LjU1NyAyMjAuNzYxIDQxOS4yNzUgMjA4LjQ3OSA0MTkuMjc1UzE4My45MTYgNDE0LjU1NyAxNzQuNTQxIDQwNS4xMTlMMTU3LjUzOSAzODguMjQyTDE2OS4xNjQgMzc2LjYxN0MxNzguNTA5IDM2Ny4yNzIgMTkwLjcwOSAzNjIuNjE2IDIwMi45MTkgMzYyLjYxNkMyMTUuMjEgMzYyLjYxNiAyMjcuNTExIDM2Ny4zMzUgMjM2LjkxOCAzNzYuNzQyTDI1My43OTMgMzkzLjYxN0wyNDIuNDE4IDQwNS4xMTlaTTMyMS43OTcgMzI1Ljc0QzMxMi40MjEgMzM1LjExNSAzMDAuMTM5IDMzOS44MDMgMjg3Ljg1NyAzMzkuODAzUzI2My4yOTQgMzM1LjExNSAyNTMuOTE4IDMyNS43NEwyMzYuOTE4IDMwOC43MzhMMjQ4LjA0MyAyOTcuNjEzQzI1Ny40MTkgMjg4LjIzOCAyNjkuNzAxIDI4My41NTEgMjgxLjk4MiAyODMuNTUxUzMwNi41NDYgMjg4LjIzOCAzMTUuOTIyIDI5Ny42MTNMMzMyLjc5NyAzMTQuNjEzTDMyMS43OTcgMzI1Ljc0Wk00MDAuNjc2IDI0Ni42MTFDMzkxLjMgMjU2LjA0OSAzNzkuMDE4IDI2MC43NjggMzY2LjczNiAyNjAuNzY4UzM0Mi4xNzIgMjU2LjA0OSAzMzIuNzk3IDI0Ni42MTFMMzE1LjkyMiAyMjkuNzM2TDMyNy4xNzIgMjE4LjM1OUMzMzYuNTQ3IDIwOC45ODQgMzQ4LjgyOSAyMDQuMjk3IDM2MS4xMSAyMDQuMjk3UzM4NS42NzQgMjA4Ljk4NCAzOTUuMDQ5IDIxOC4zNTlMNDExLjkyNiAyMzUuMzYxTDQwMC42NzYgMjQ2LjYxMVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
const WheatAwn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M488 96C481.859 96 475.719 98.344 471.031 103.031L409.23 164.832L395.178 150.76L504.969 40.969C509.656 36.281 512 30.141 512 24C512 10.291 500.79 0 488 0C481.859 0 475.719 2.344 471.031 7.031L361.264 116.799L347.211 102.727L408.969 40.969C413.656 36.281 416 30.141 416 24C416 10.291 404.79 0 392 0C385.859 0 379.719 2.344 375.031 7.031L313.297 68.766L287.545 42.977C284.42 39.852 280.326 38.289 276.248 38.289S268.107 39.852 265.045 42.977L230.918 76.979C218.291 89.604 210.291 104.98 206.166 121.105C202.774 118.59 199.556 117.713 196.717 117.713C190.248 117.713 185.753 122.269 185.666 122.355L151.914 156.107C139.289 168.732 131.414 183.982 127.287 200.109C123.868 197.64 120.645 196.776 117.808 196.776C111.31 196.776 106.836 201.31 106.662 201.484L72.785 235.361C54.034 254.112 44.659 278.707 44.659 303.302S54.034 352.491 72.785 371.242L89.787 388.242L7.031 470.998C2.344 475.686 0 481.842 0 487.998S2.344 500.312 7.031 505C11.781 509.625 17.906 512 24.033 512C30.158 512 36.283 509.625 41.033 505L123.662 422.119L140.539 439.119C159.29 457.87 183.854 467.246 208.417 467.246S257.544 457.87 276.295 439.119L310.297 404.994C313.398 401.96 314.899 398.017 314.899 394.048C314.899 390.657 313.803 387.247 311.672 384.367C327.797 380.242 343.047 372.242 355.674 359.617L389.299 325.865C392.352 322.812 393.858 318.875 393.858 314.914C393.858 311.576 392.789 308.221 390.674 305.363C406.801 301.238 422.051 293.238 434.676 280.613L468.428 246.736C471.553 243.611 473.115 239.518 473.115 235.424S471.553 227.235 468.428 224.109L443.145 198.793L504.969 136.969C509.656 132.281 512 126.141 512 120C512 106.291 500.79 96 488 96ZM134.914 342.865L123.662 354.24L106.662 337.24C97.287 327.865 92.6 315.583 92.6 303.302S97.287 278.737 106.662 269.361L117.912 257.986L134.914 274.988C144.039 284.113 149.039 296.113 149.039 308.988C149.039 321.865 144.039 333.865 134.914 342.865ZM250.731 145.028C250.731 132.731 255.419 120.418 264.795 110.98L276.295 99.48L293.295 116.48C302.624 125.871 307.312 138.178 307.312 150.496C307.312 162.773 302.655 175.061 293.295 184.482L281.795 195.859L264.795 178.982C255.419 169.607 250.731 157.326 250.731 145.028ZM171.727 224.048C171.727 211.766 176.415 199.484 185.791 190.109L196.916 178.982L213.916 195.984C223.292 205.359 227.98 217.641 227.98 229.923S223.292 254.486 213.916 263.861L202.791 274.988L185.791 257.986C176.415 248.611 171.727 236.33 171.727 224.048ZM242.418 405.119C233.043 414.557 220.761 419.275 208.479 419.275S183.916 414.557 174.541 405.119L157.539 388.242L169.164 376.617C178.509 367.272 190.709 362.616 202.919 362.616C215.21 362.616 227.511 367.335 236.918 376.742L253.793 393.617L242.418 405.119ZM321.797 325.74C312.421 335.115 300.139 339.803 287.857 339.803S263.294 335.115 253.918 325.74L236.918 308.738L248.043 297.613C257.419 288.238 269.701 283.551 281.982 283.551S306.546 288.238 315.922 297.613L332.797 314.613L321.797 325.74ZM400.676 246.611C391.3 256.049 379.018 260.768 366.736 260.768S342.172 256.049 332.797 246.611L315.922 229.736L327.172 218.359C336.547 208.984 348.829 204.297 361.11 204.297S385.674 208.984 395.049 218.359L411.926 235.361L400.676 246.611Z " />
    </Icon>
);

export default WheatAwn;