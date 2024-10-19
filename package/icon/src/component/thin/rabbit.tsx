
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `rabbit` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rabbit?s=thin rabbit}
 * @preview ![rabbit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTEuOTc5IDIwNy45OTRDMzYwLjgxNyAyMDcuOTk0IDM2Ny45NzkgMjAwLjgzIDM2Ny45NzkgMTkxLjk5NFMzNjAuODE3IDE3NS45OTQgMzUxLjk3OSAxNzUuOTk0UzMzNS45NzcgMTgzLjE1OCAzMzUuOTc3IDE5MS45OTRTMzQzLjE0MSAyMDcuOTk0IDM1MS45NzkgMjA3Ljk5NFpNNDc2LjI5MiA0NzUuOTIyTDM4My45NzkgMzMyLjk2NVYyNzkuNTI3SDM4NC41NzNDNDEwLjcyOSAyNzkuNTI3IDQzMy44ODYgMjY1LjE1MiA0NDMuNTczIDI0Mi45MTZDNDU1LjgyMyAyMTQuODM4IDQ0Ny4zMjMgMTgzLjAxIDQyMi44ODYgMTY1LjQ5NEwzNzguOTc5IDEzNC4xNjRDMzg1LjY5OCAxMjEuNjk1IDM5MS40NzkgMTA2LjY5NSAzOTUuNTczIDkxLjEzM0M0MDYuMTA0IDUxLjgwMyA0MDcuMzU0IDYuNjkzIDM4NS4xMzYgMC41NjhDMzgxLjgyMyAtMC4zMjIgMzc2LjY2NyAtMC41ODggMzcwLjM4NiAzLjAwNkMzNTYuNzkyIDEwLjg1IDM0Mi41MDkgMzUuMTc4IDMzMy4xMzQgNjYuMTQ4QzMyMy43MjcgMzUuMjA5IDMwOS40NzcgMTAuODM0IDI5NS44ODQgMy4wMDZDMjg5LjYwMiAtMC41ODggMjg0LjQxNSAtMC4zMjIgMjgxLjEwMiAwLjU2OEMyNTguODg0IDYuNjkzIDI2MC4xMzQgNTEuODAzIDI3MC42NjUgOTEuMTAyQzI3Ni40NzcgMTEyLjk5MiAyODQuOTc3IDEzMi41NTUgMjk0LjQ0NiAxNDYuMDg2QzI4My40NTYgMTU4LjY2NiAyNzkuOTc3IDE3NC43OTcgMjc5Ljk3NyAxODcuMjQ0VjI0OC4wMjVIMjc0LjU0QzE5NS41NCAyNDguMDI1IDEyNi4wNCAyOTkuNjIxIDEwMi40MTUgMzc0LjYwN0M5MC4xOTYgMzcwLjYyMyA3Ny4xMzQgMzcxLjI3OSA2NC44NTIgMzc2LjU0NUM0OC41NjkgMzgzLjU0NSAzNi40MTMgMzk4LjQ4MiAzMy4wNjkgNDE1LjUyOUMyOS44NSA0MzEuODg5IDMzLjk3NSA0NDguNTQ1IDQ0LjQxMyA0NjEuMjAxQzU4LjQ3NyA0NzguMzI4IDgyLjA0IDQ4NS42MDkgMTAzLjcyNyA0NzcuOTM4QzExNi4yNTkgNDk4Ljg1OSAxMzguOTE1IDUxMiAxNjMuNDE1IDUxMkgzMDIuMjU5QzMxNS4xOTYgNTEyIDMyNS42OTYgNTAxLjUgMzI1LjY5NiA0ODguNTc4QzMyNS42OTYgNDYxLjc5NSAzMDMuOTE1IDQzOS45OTggMjc3LjEzNCA0MzkuOTk4SDI2My41NEMyNTkuNTQgNDA0LjA0NSAyMjguOTc3IDM3NS45OTggMTkxLjk3NyAzNzUuOTk4QzE4Ny41NzEgMzc1Ljk5OCAxODMuOTc3IDM3OS41NzYgMTgzLjk3NyAzODMuOTk4UzE4Ny41NzEgMzkxLjk5OCAxOTEuOTc3IDM5MS45OThDMjIyLjg1MiAzOTEuOTk4IDI0Ny45NzcgNDE3LjEyMyAyNDcuOTc3IDQ0Ny45OThDMjQ3Ljk3NyA0NTIuNDIgMjUxLjU3MSA0NTUuOTk4IDI1NS45NzcgNDU1Ljk5OEgyNzcuMTM0QzI5NS4xMDIgNDU1Ljk5OCAzMDkuNjk2IDQ3MC42MDkgMzA5LjY5NiA0ODguNTc4QzMwOS42OTYgNDkyLjY3MiAzMDYuMzUyIDQ5NiAzMDIuMjU5IDQ5NkgxNjMuNDE1QzE0Mi41NCA0OTYgMTIzLjQxNSA0ODMuNTc4IDExNC42MzQgNDY0LjM0NEMxMTMuNzI3IDQ2Mi4zNTkgMTEyLjA0IDQ2MC44MjYgMTA5Ljk3NyA0NjAuMTA3QzEwNy45MTUgNDU5LjM1NyAxMDUuNjM0IDQ1OS41NjEgMTAzLjY5NiA0NjAuNTQ1Qzg2LjYzNCA0NjkuMzEyIDY3Ljc5IDQ2NC40MDYgNTYuNzU5IDQ1MS4wMjlDNDkuMzgyIDQ0Mi4wNzYgNDYuNDc1IDQzMC4yNjQgNDguNzU3IDQxOC42MDdDNTEuMSA0MDYuNjcgNTkuNjk2IDM5Ni4xODYgNzEuMTY1IDM5MS4yMzJDODQuOTE1IDM4NS4zNDIgOTYuNTA5IDM4OC42NyAxMDMuODUyIDM5Mi41MjlDMTA1Ljk3NyAzOTMuNjcgMTA4LjU3MSAzOTMuNzY0IDExMC44MjEgMzkyLjc5NUMxMTMuMDcxIDM5MS44MTEgMTE0LjcyNyAzODkuODU3IDExNS4zNTIgMzg3LjQ4MkMxMzQuMjkgMzE0Ljc5MyAxOTkuNzU5IDI2NC4wMjcgMjc0LjU0IDI2NC4wMjdIMjg3Ljk3N0MyOTIuMzg0IDI2NC4wMjcgMjk1Ljk3NyAyNjAuNDQ3IDI5NS45NzcgMjU2LjAyNVYxODcuMjQ0QzI5NS45NzcgMTgzLjUxNiAyOTYuMjY4IDE2NC45NDEgMzEwLjI5IDE1Mi44NTJDMzEzLjU3MSAxNDkuOTkyIDMxMy45NzcgMTQ1LjAwOCAzMTEuMTY1IDE0MS42NjRDMzAxLjUwOSAxMzAuMTggMjkyLjE2NSAxMDkuNzU4IDI4Ni4xMDIgODYuOTc3QzI3NC41NzEgNDMuOTEyIDI4MC40MTUgMTcuMzY1IDI4NS4zMjEgMTYuMDA2QzI4NS40NDYgMTYuMDA2IDI4Ni4zODQgMTYuMDA2IDI4Ny44ODQgMTYuODY1QzI5Ny4wNCAyMi4xNDYgMzEwLjk3NyA0NC44MTggMzE5Ljg1MiA3Ny45NDVDMzIyLjI5IDg2LjkzIDMyNC4wNzEgOTYuMDU1IDMyNS4xOTYgMTA1LjA1NUMzMjUuNjk2IDEwOS4wMzkgMzI5LjA3MSAxMTIuMDU1IDMzMy4xMDIgMTEyLjA3SDMzMy4xMzRDMzM3LjEzNCAxMTIuMDcgMzQwLjU0IDEwOS4xMDIgMzQxLjA3MSAxMDUuMTMzQzM0Mi4yOSA5Ni4wNyAzNDQuMDcxIDg2Ljg4MyAzNDYuMzg0IDc3LjkzQzM1NS4yNjEgNDQuODM0IDM2OS4xOTggMjIuMTYyIDM3OC4zODYgMTYuODY1QzM3OS44MjMgMTYuMDM3IDM4MC42NjcgMTUuODUgMzgwLjkxNyAxNi4wMDZDMzg1Ljg1NCAxNy4zNjUgMzkxLjY2NyA0My45MTIgMzgwLjEwNCA4Ny4wMjNDMzc1LjU3MyAxMDQuMjU4IDM2OC44ODYgMTIwLjU1NSAzNjEuMjYxIDEzMi45MTRDMzYwLjA0MiAxMzQuODgzIDM1OS43NjEgMTM3LjI3MyAzNjAuNDE3IDEzOS40OTJDMzYxLjA5NyAxNDEuNjc0IDM1NC45OTcgMTM2LjQ2MyA0MTMuNTczIDE3OC40OTRDNDMxLjc5MiAxOTEuNTcyIDQzOC4xMDQgMjE1LjQxNiA0MjguODg2IDIzNi41MjVDNDIxLjc2MSAyNTIuOTMyIDQwNC4zNTQgMjYzLjUyNyAzODQuNTczIDI2My41MjdIMzc1Ljk3OUMzNzEuNTczIDI2My41MjcgMzY3Ljk3OSAyNjcuMTA1IDM2Ny45NzkgMjcxLjUyN1YzMzUuMzI0QzM2Ny45NzkgMzM2Ljg3MSAzNjguNDE3IDMzOC4zNzEgMzY5LjI2MSAzMzkuNjY4TDQ2Mi44MjMgNDg0LjUzMUM0NjQuOTE3IDQ4Ny44OTEgNDYzLjY2NyA0OTAuOTY5IDQ2My4wMTEgNDkyLjEyNUM0NjIuMzg2IDQ5My4yOTcgNDYwLjQ0OCA0OTYgNDU2LjU0MiA0OTZINDIwLjE2N0M0MTcuNjA0IDQ5NiA0MTUuMTk4IDQ5NC42NDEgNDEzLjc5MiA0OTIuNDY5TDM0Mi43NTkgMzc5LjczMkMzNDEuNTQgMzc3LjgxMSAzMzkuNTQgMzc2LjQ4MiAzMzcuMzIxIDM3Ni4xMDdDMzM0Ljg1MiAzNzUuNzAxIDMzMi43NTkgMzc2LjMxMSAzMzAuOTc3IDM3Ny43NDhMMjkwLjk3NyA0MDkuNzQ4QzI4Ny41NCA0MTIuNTE0IDI4Ni45NzcgNDE3LjU0NSAyODkuNzI3IDQyMC45OThDMjkyLjUwOSA0MjQuNDUxIDI5Ny41NzEgNDI1LjAxNCAzMDAuOTc3IDQyMi4yNDhMMzMzLjk3NyAzOTUuODQyTDQwMC4yOTIgNTAxLjA3OEM0MDQuNzI5IDUwNy45MjIgNDEyLjE2NyA1MTIgNDIwLjE2NyA1MTJINDU2LjU0MkM0NjUuMDQyIDUxMiA0NzIuODg2IDUwNy4zNDQgNDc3LjAxMSA0OTkuODU5QzQ4MS4yMjkgNDkyLjI1IDQ4MC45NzkgNDgzLjMyOCA0NzYuMjkyIDQ3NS45MjJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Rabbit(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M351.979 207.994C360.817 207.994 367.979 200.83 367.979 191.994S360.817 175.994 351.979 175.994S335.977 183.158 335.977 191.994S343.141 207.994 351.979 207.994ZM476.292 475.922L383.979 332.965V279.527H384.573C410.729 279.527 433.886 265.152 443.573 242.916C455.823 214.838 447.323 183.01 422.886 165.494L378.979 134.164C385.698 121.695 391.479 106.695 395.573 91.133C406.104 51.803 407.354 6.693 385.136 0.568C381.823 -0.322 376.667 -0.588 370.386 3.006C356.792 10.85 342.509 35.178 333.134 66.148C323.727 35.209 309.477 10.834 295.884 3.006C289.602 -0.588 284.415 -0.322 281.102 0.568C258.884 6.693 260.134 51.803 270.665 91.102C276.477 112.992 284.977 132.555 294.446 146.086C283.456 158.666 279.977 174.797 279.977 187.244V248.025H274.54C195.54 248.025 126.04 299.621 102.415 374.607C90.196 370.623 77.134 371.279 64.852 376.545C48.569 383.545 36.413 398.482 33.069 415.529C29.85 431.889 33.975 448.545 44.413 461.201C58.477 478.328 82.04 485.609 103.727 477.938C116.259 498.859 138.915 512 163.415 512H302.259C315.196 512 325.696 501.5 325.696 488.578C325.696 461.795 303.915 439.998 277.134 439.998H263.54C259.54 404.045 228.977 375.998 191.977 375.998C187.571 375.998 183.977 379.576 183.977 383.998S187.571 391.998 191.977 391.998C222.852 391.998 247.977 417.123 247.977 447.998C247.977 452.42 251.571 455.998 255.977 455.998H277.134C295.102 455.998 309.696 470.609 309.696 488.578C309.696 492.672 306.352 496 302.259 496H163.415C142.54 496 123.415 483.578 114.634 464.344C113.727 462.359 112.04 460.826 109.977 460.107C107.915 459.357 105.634 459.561 103.696 460.545C86.634 469.312 67.79 464.406 56.759 451.029C49.382 442.076 46.475 430.264 48.757 418.607C51.1 406.67 59.696 396.186 71.165 391.232C84.915 385.342 96.509 388.67 103.852 392.529C105.977 393.67 108.571 393.764 110.821 392.795C113.071 391.811 114.727 389.857 115.352 387.482C134.29 314.793 199.759 264.027 274.54 264.027H287.977C292.384 264.027 295.977 260.447 295.977 256.025V187.244C295.977 183.516 296.268 164.941 310.29 152.852C313.571 149.992 313.977 145.008 311.165 141.664C301.509 130.18 292.165 109.758 286.102 86.977C274.571 43.912 280.415 17.365 285.321 16.006C285.446 16.006 286.384 16.006 287.884 16.865C297.04 22.146 310.977 44.818 319.852 77.945C322.29 86.93 324.071 96.055 325.196 105.055C325.696 109.039 329.071 112.055 333.102 112.07H333.134C337.134 112.07 340.54 109.102 341.071 105.133C342.29 96.07 344.071 86.883 346.384 77.93C355.261 44.834 369.198 22.162 378.386 16.865C379.823 16.037 380.667 15.85 380.917 16.006C385.854 17.365 391.667 43.912 380.104 87.023C375.573 104.258 368.886 120.555 361.261 132.914C360.042 134.883 359.761 137.273 360.417 139.492C361.097 141.674 354.997 136.463 413.573 178.494C431.792 191.572 438.104 215.416 428.886 236.525C421.761 252.932 404.354 263.527 384.573 263.527H375.979C371.573 263.527 367.979 267.105 367.979 271.527V335.324C367.979 336.871 368.417 338.371 369.261 339.668L462.823 484.531C464.917 487.891 463.667 490.969 463.011 492.125C462.386 493.297 460.448 496 456.542 496H420.167C417.604 496 415.198 494.641 413.792 492.469L342.759 379.732C341.54 377.811 339.54 376.482 337.321 376.107C334.852 375.701 332.759 376.311 330.977 377.748L290.977 409.748C287.54 412.514 286.977 417.545 289.727 420.998C292.509 424.451 297.571 425.014 300.977 422.248L333.977 395.842L400.292 501.078C404.729 507.922 412.167 512 420.167 512H456.542C465.042 512 472.886 507.344 477.011 499.859C481.229 492.25 480.979 483.328 476.292 475.922Z" />
        </Icon>
    </>
}