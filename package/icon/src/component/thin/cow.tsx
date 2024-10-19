
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cow` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cow?s=thin cow}
 * @preview ![cow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MzIuNTE0IDI2NC4wNzhMNjI0LjAxNCAyNTIuMjk3VjE3Ny44NzVDNjI0LjAxNCAxNjkuNDg0IDYxOS43MzMgMTYxLjg0NCA2MTIuNjA3IDE1Ny40NTNDNjA1LjQ4MiAxNTMuMDk0IDU5Ni43MzIgMTUyLjY4OCA1ODkuMzU3IDE1Ni40NTNDNTgwLjgyNiAxNjAuNjcyIDU3My4wNzUgMTY2LjYyNSA1NjYuMjYzIDE3NC4yMTlMNTA3LjIzIDEwNy4wNDdDNDg3LjY5OCA4MC4wOTQgNDU2LjE5OCA2NCA0MjMuMDA5IDY0SDEyMC4wMDNDODAuMzE0IDY0IDQ4LjAwMSA5Ni4yOTcgNDguMDAxIDEzNlYyMzIuODA5QzIwLjkzMiAyMzYuNzMgMCAyNTkuODYzIDAgMjg4VjMxMkMwIDMxNi40MjIgMy41OTQgMzIwIDggMzIwQzM4Ljg3NiAzMjAgNjQuMDAxIDI5NC44NzUgNjQuMDAxIDI2NFYxMzZDNjQuMDAxIDEwNy4wODIgODYuMTIzIDgzLjQ4OCAxMTQuMjg2IDgwLjU3OEM5OC4yMjUgOTMuNzQ4IDg3LjczOCAxMTMuNDUzIDg3LjcyMSAxMzUuNzVDODcuNjU4IDIzNy4xODggODguMDAyIDQyNC4wMTYgODguMDAyIDQyNEM4OC4wMDIgNDM3LjIzNCA5OC43ODMgNDQ4IDExMi4wMDMgNDQ4SDE2OC4wMDRDMTgxLjIyMyA0NDggMTkyLjAwNCA0MzcuMjM0IDE5Mi4wMDQgNDI0VjMzNkMxOTIuMDA0IDMzMy4zMDUgMTkyLjUxMiAzMzAuNzUgMTkyLjgwMSAzMjguMTMxQzIwNC42NTEgMzM2Ljk1MyAyMTcuODgyIDM0My4yNTYgMjMyLjAwNSAzNDcuMTU2VjM3NkMyMzIuMDA1IDM4MC40MjIgMjM1LjU5OSAzODQgMjQwLjAwNSAzODRDMjQ0LjQxMiAzODQgMjQ4LjAwNiAzODAuNDIyIDI0OC4wMDYgMzc2VjM1MC40MkMyNTMuMzAzIDM1MS4xMjUgMjU4LjU2NCAzNTIgMjY0LjAwNiAzNTJTMjc0LjcwOSAzNTEuMTI1IDI4MC4wMDYgMzUwLjQyVjM3NkMyODAuMDA2IDM4MC40MjIgMjgzLjYgMzg0IDI4OC4wMDYgMzg0UzI5Ni4wMDcgMzgwLjQyMiAyOTYuMDA3IDM3NlYzNDcuMTU2QzMxMC4xMyAzNDMuMjU2IDMyMy4zNjEgMzM2Ljk1MyAzMzUuMjExIDMyOC4xMzFDMzM1LjUgMzMwLjc1IDMzNi4wMDggMzMzLjMwNSAzMzYuMDA4IDMzNlY0MjRDMzM2LjAwOCA0MzcuMjM0IDM0Ni43ODkgNDQ4IDM2MC4wMDggNDQ4SDQxNi4wMDlDNDI5LjIyOCA0NDggNDQwLjAxIDQzNy4yMzQgNDQwLjAxIDQyNFYyNjguOTM4TDQ3Mi4wMTEgMjg0LjkzOFYzMjEuNUM0NzIuMDExIDMzNS43NSA0NzYuMTY3IDM0OS41MzEgNDgzLjY2NyAzNjAuNzM0TDUxNy4zNTUgNDIzLjQzOEM1MjcuNjA2IDQzOC44MTIgNTQ0LjgyNSA0NDggNTYzLjM4OCA0NDhDNTg5LjYzOCA0NDggNjEyLjM4OSA0MjkuMzEyIDYxNy40ODMgNDAzLjU3OEw2MzkuMjMzIDI5NC45NjlDNjQxLjM4OSAyODQuMjgxIDYzOC45NTIgMjczLjAzMSA2MzIuNTE0IDI2NC4wNzhaTTQ4LjAwMSAyNjRDNDguMDAxIDI4My4zMTIgMzQuMjUxIDI5OS40ODQgMTYgMzAzLjIwM1YyODhDMTYgMjY4LjY4OCAyOS43NTEgMjUyLjUxNiA0OC4wMDEgMjQ4Ljc5N1YyNjRaTTE2MC45NDEgOTEuMzkxQzE2My4xMjkgODYuMTQxIDE2OS42NiA4MCAxODEuMDA0IDgwSDM0Ny4wMDhDMzU4LjM1MiA4MCAzNjQuODgzIDg2LjE0MSAzNjcuMDcxIDkxLjM5MUMzNjkuMTAyIDk2LjM3NSAzNjcuODgzIDEwMS40NTMgMzYzLjYzMyAxMDUuNzAzTDM0MC43NTggMTI4LjQzN0MzMjAuMTYzIDE0OC43OTcgMjkyLjk0NCAxNjAgMjYzLjg4MSAxNjBDMjM1LjA2OCAxNjAgMjA3Ljg0OCAxNDguNzk3IDE4Ny4yODUgMTI4LjQ1M0wxNjQuMzc5IDEwNS43MDNDMTYwLjEyOSAxMDEuNDUzIDE1OC45MSA5Ni4zNzUgMTYwLjk0MSA5MS4zOTFaTTI2NC4wMDYgMzM2QzIzOC45NTMgMzM2IDIxNS42MTQgMzI2LjgwOSAxOTYuODI1IDMxMC43MjlDMjA3LjEwOCAyODMuNTA2IDIzMy4yMzggMjY0IDI2NC4wMDYgMjY0UzMyMC45MDQgMjgzLjUwNCAzMzEuMTg3IDMxMC43MjlDMzEyLjQgMzI2LjgwNyAyODkuMDU5IDMzNiAyNjQuMDA2IDMzNlpNNjAxLjc5NSA0MDAuNDUzQzU5OC4xNyA0MTguNzM0IDU4Mi4wMTIgNDMyIDU2My4zODggNDMyQzU1MC4xNjkgNDMyIDUzNy45NSA0MjUuNDg0IDUzMS4wNzQgNDE1LjIxOUw0OTcuMzg2IDM1Mi41MTZDNDkxLjI2MSAzNDMuMjk3IDQ4OC4wMTEgMzMyLjU3OCA0ODguMDExIDMyMS41VjI4MEM0ODguMDExIDI3Ni45NjkgNDg2LjI5MiAyNzQuMjAzIDQ4My41NzMgMjcyLjg0NEw0MzUuNTcyIDI0OC44NDRDNDM0LjQ0NyAyNDguMjgxIDQzMy4yMjggMjQ4IDQzMi4wMSAyNDhDNDMwLjU0MSAyNDggNDI5LjEwMyAyNDguNDA2IDQyNy43OTEgMjQ5LjE4OEM0MjUuNDQ3IDI1MC42NTYgNDI0LjAwOSAyNTMuMjM0IDQyNC4wMDkgMjU2VjQyNEM0MjQuMDA5IDQyOC40MDYgNDIwLjQxNiA0MzIgNDE2LjAwOSA0MzJIMzYwLjAwOEMzNTUuNjAyIDQzMiAzNTIuMDA4IDQyOC40MDYgMzUyLjAwOCA0MjRWMzM2QzM1Mi4wMDggMzI5LjEzOSAzNTEuMDM3IDMyMi41MzUgMzQ5LjU0NSAzMTYuMTIxQzM0OS42MDIgMzE2LjA2NCAzNDkuNjcgMzE2LjAyNSAzNDkuNzI3IDMxNS45NjlMMzQ5LjM5NiAzMTUuNjQ1QzM0MC4xNTYgMjc2Ljk0MyAzMDUuNTAxIDI0OCAyNjQuMDA2IDI0OFMxODcuODU2IDI3Ni45NDMgMTc4LjYxNSAzMTUuNjQ1TDE3OC4yODUgMzE1Ljk2OUMxNzguMzQyIDMxNi4wMjUgMTc4LjQxIDMxNi4wNjQgMTc4LjQ2NyAzMTYuMTIxQzE3Ni45NzUgMzIyLjUzNSAxNzYuMDA0IDMyOS4xMzkgMTc2LjAwNCAzMzZWNDI0QzE3Ni4wMDQgNDI4LjQwNiAxNzIuNDEgNDMyIDE2OC4wMDQgNDMySDExMi4wMDNDMTA3LjU5NiA0MzIgMTA0LjAwMiA0MjguNDA2IDEwNC4wMDIgNDIzLjk4NEMxMDQuMDAyIDQyMy45ODQgMTAzLjY1OSAyMzcuMTg4IDEwMy43MjEgMTM1Ljc1QzEwMy43NDggMTA4Ljc1MiAxMjMuMTQ5IDg2LjE5NSAxNDguNzcxIDgxLjEwNEMxNDcuOTA4IDgyLjUxIDE0Ni43OTYgODMuNzU0IDE0Ni4xNiA4NS4yOTdDMTQxLjU5NyA5Ni4zNDQgMTQ0LjIyMiAxMDguMjE5IDE1My4wOTcgMTE3LjA0N0wxNzYuMDA0IDEzOS44MTJDMTk5LjU5OCAxNjMuMTU2IDIzMC44MTggMTc2IDI2NC4xMzEgMTc2QzI5Ny4xOTQgMTc2IDMyOC40MTQgMTYzLjE1NiAzNTIuMDM5IDEzOS43OTdMMzc0Ljg4MyAxMTcuMDQ3QzM4My43OSAxMDguMjE5IDM4Ni40MTUgOTYuMzQ0IDM4MS44NTIgODUuMjk3QzM4MS4wNDggODMuMzQ4IDM3OS43MTYgODEuNzI5IDM3OC41NTMgODBINDIzLjAwOUM0NTEuMTA0IDgwIDQ3Ny43MjkgOTMuNjI1IDQ5NC43NjEgMTE3LjAzMUw1NjAuNTEzIDE5MS45MDZDNTYyLjEwNiAxOTMuNzUgNTY0LjYzOCAxOTQuODc1IDU2Ni44ODggMTk0LjYwOUM1NjkuMzI1IDE5NC41IDU3MS41NzUgMTkzLjI4MSA1NzIuOTgyIDE5MS4zMTNDNTc5LjY2OSAxODIuMDk0IDU4Ny41NDQgMTc1LjE4OCA1OTYuNTEzIDE3MC43NjZDNjAwLjA3NiAxNjkgNjAzLjA3NiAxNzAuMzkxIDYwNC4yMzIgMTcxLjA3OEM2MDUuMzU3IDE3MS43ODEgNjA4LjAxNCAxNzMuODQ0IDYwOC4wMTQgMTc3Ljg3NVYyNTQuODc1QzYwOC4wMTQgMjU2LjU0NyA2MDguNTQ1IDI1OC4xODggNjA5LjUxNCAyNTkuNTQ3TDYxOS41MTQgMjczLjQyMkM2MjMuMzU4IDI3OC43NjYgNjI0LjgyNiAyODUuNDUzIDYyMy41NDUgMjkxLjc5N0w2MDEuNzk1IDQwMC40NTNaTTU2OC4wMTMgMzIwQzU1OS4xMzggMzIwIDU1Mi4wMTIgMzI3LjEyNSA1NTIuMDEyIDMzNlM1NTkuMTM4IDM1MiA1NjguMDEzIDM1MlM1ODQuMDEzIDM0NC44NzUgNTg0LjAxMyAzMzZTNTc2Ljg4OCAzMjAgNTY4LjAxMyAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Cow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M632.514 264.078L624.014 252.297V177.875C624.014 169.484 619.733 161.844 612.607 157.453C605.482 153.094 596.732 152.688 589.357 156.453C580.826 160.672 573.075 166.625 566.263 174.219L507.23 107.047C487.698 80.094 456.198 64 423.009 64H120.003C80.314 64 48.001 96.297 48.001 136V232.809C20.932 236.73 0 259.863 0 288V312C0 316.422 3.594 320 8 320C38.876 320 64.001 294.875 64.001 264V136C64.001 107.082 86.123 83.488 114.286 80.578C98.225 93.748 87.738 113.453 87.721 135.75C87.658 237.188 88.002 424.016 88.002 424C88.002 437.234 98.783 448 112.003 448H168.004C181.223 448 192.004 437.234 192.004 424V336C192.004 333.305 192.512 330.75 192.801 328.131C204.651 336.953 217.882 343.256 232.005 347.156V376C232.005 380.422 235.599 384 240.005 384C244.412 384 248.006 380.422 248.006 376V350.42C253.303 351.125 258.564 352 264.006 352S274.709 351.125 280.006 350.42V376C280.006 380.422 283.6 384 288.006 384S296.007 380.422 296.007 376V347.156C310.13 343.256 323.361 336.953 335.211 328.131C335.5 330.75 336.008 333.305 336.008 336V424C336.008 437.234 346.789 448 360.008 448H416.009C429.228 448 440.01 437.234 440.01 424V268.938L472.011 284.938V321.5C472.011 335.75 476.167 349.531 483.667 360.734L517.355 423.438C527.606 438.812 544.825 448 563.388 448C589.638 448 612.389 429.312 617.483 403.578L639.233 294.969C641.389 284.281 638.952 273.031 632.514 264.078ZM48.001 264C48.001 283.312 34.251 299.484 16 303.203V288C16 268.688 29.751 252.516 48.001 248.797V264ZM160.941 91.391C163.129 86.141 169.66 80 181.004 80H347.008C358.352 80 364.883 86.141 367.071 91.391C369.102 96.375 367.883 101.453 363.633 105.703L340.758 128.437C320.163 148.797 292.944 160 263.881 160C235.068 160 207.848 148.797 187.285 128.453L164.379 105.703C160.129 101.453 158.91 96.375 160.941 91.391ZM264.006 336C238.953 336 215.614 326.809 196.825 310.729C207.108 283.506 233.238 264 264.006 264S320.904 283.504 331.187 310.729C312.4 326.807 289.059 336 264.006 336ZM601.795 400.453C598.17 418.734 582.012 432 563.388 432C550.169 432 537.95 425.484 531.074 415.219L497.386 352.516C491.261 343.297 488.011 332.578 488.011 321.5V280C488.011 276.969 486.292 274.203 483.573 272.844L435.572 248.844C434.447 248.281 433.228 248 432.01 248C430.541 248 429.103 248.406 427.791 249.188C425.447 250.656 424.009 253.234 424.009 256V424C424.009 428.406 420.416 432 416.009 432H360.008C355.602 432 352.008 428.406 352.008 424V336C352.008 329.139 351.037 322.535 349.545 316.121C349.602 316.064 349.67 316.025 349.727 315.969L349.396 315.645C340.156 276.943 305.501 248 264.006 248S187.856 276.943 178.615 315.645L178.285 315.969C178.342 316.025 178.41 316.064 178.467 316.121C176.975 322.535 176.004 329.139 176.004 336V424C176.004 428.406 172.41 432 168.004 432H112.003C107.596 432 104.002 428.406 104.002 423.984C104.002 423.984 103.659 237.188 103.721 135.75C103.748 108.752 123.149 86.195 148.771 81.104C147.908 82.51 146.796 83.754 146.16 85.297C141.597 96.344 144.222 108.219 153.097 117.047L176.004 139.812C199.598 163.156 230.818 176 264.131 176C297.194 176 328.414 163.156 352.039 139.797L374.883 117.047C383.79 108.219 386.415 96.344 381.852 85.297C381.048 83.348 379.716 81.729 378.553 80H423.009C451.104 80 477.729 93.625 494.761 117.031L560.513 191.906C562.106 193.75 564.638 194.875 566.888 194.609C569.325 194.5 571.575 193.281 572.982 191.313C579.669 182.094 587.544 175.188 596.513 170.766C600.076 169 603.076 170.391 604.232 171.078C605.357 171.781 608.014 173.844 608.014 177.875V254.875C608.014 256.547 608.545 258.188 609.514 259.547L619.514 273.422C623.358 278.766 624.826 285.453 623.545 291.797L601.795 400.453ZM568.013 320C559.138 320 552.012 327.125 552.012 336S559.138 352 568.013 352S584.013 344.875 584.013 336S576.888 320 568.013 320Z" />
        </Icon>
    </>
}