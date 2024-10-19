
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ram` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ram?s=thin ram}
 * @preview ![ram](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTYgNDMwLjUzMUMyMTEuNTc4IDQzMC41MzEgMjA4IDQzNC4xMjUgMjA4IDQzOC41MzFWNDc3LjgxM0MyMDggNDg3Ljg0NCAyMDAuMTcyIDQ5NiAxOTAuNTQ3IDQ5NkgxODIuMzI4QzE3NS4xODggNDk2IDE2OC44MjggNDkxLjUzMSAxNjYuMTQxIDQ4NC42MjVMMTQxLjQzNyA0MjEuMDk0QzEzOS44NDQgNDE2Ljk2OSAxMzUuMTcyIDQxNS4wNjIgMTMxLjA3OCA0MTYuNTMxQzEyNi45NjkgNDE4LjE1NiAxMjQuOTIyIDQyMi43ODEgMTI2LjUzMSA0MjYuOTA2TDE1MS4yMzQgNDkwLjQzOEMxNTYuMzQ0IDUwMy41MzEgMTY4LjU0NyA1MTIgMTgyLjMyOCA1MTJIMTkwLjU0N0MyMDkgNTEyIDIyNCA0OTYuNjU2IDIyNCA0NzcuODEyVjQzOC41MzFDMjI0IDQzNC4xMjUgMjIwLjQyMiA0MzAuNTMxIDIxNiA0MzAuNTMxWk00MTIuOTIyIDQxNi41MzFDNDA4Ljc5NyA0MTUuMDMxIDQwNC4xNzIgNDE2Ljk2OSA0MDIuNTYyIDQyMS4wOTRMMzc3Ljg1OSA0ODQuNjI1QzM3NS4xNzIgNDkxLjUzMSAzNjguODEyIDQ5NiAzNjEuNjcyIDQ5NkgzNTMuNDUzQzM0My44MjggNDk2IDMzNiA0ODcuODQ0IDMzNiA0NzcuODEyVjQzOC41MzFDMzM2IDQzNC4xMjUgMzMyLjQyMiA0MzAuNTMxIDMyOCA0MzAuNTMxUzMyMCA0MzQuMTI1IDMyMCA0MzguNTMxVjQ3Ny44MTJDMzIwIDQ5Ni42NTYgMzM1IDUxMiAzNTMuNDUzIDUxMkgzNjEuNjcyQzM3NS40NTMgNTEyIDM4Ny42NTYgNTAzLjUzMSAzOTIuNzY2IDQ5MC40MzhMNDE3LjQ2OSA0MjYuOTA2QzQxOS4wNzggNDIyLjc4MSA0MTcuMDMxIDQxOC4xNTYgNDEyLjkyMiA0MTYuNTMxWk01MjggOTZDNTI4IDg3LjE2NCA1MjAuODM4IDgwIDUxMiA4MEM1MDMuMTY0IDgwIDQ5NiA4Ny4xNjQgNDk2IDk2UzUwMy4xNjQgMTEyIDUxMiAxMTJDNTIwLjgzOCAxMTIgNTI4IDEwNC44MzYgNTI4IDk2Wk02MjQuMzQ0IDEwMC43Nkw1NzEuMjM4IDQ3LjY1NEM1NjEuMjE1IDM3LjYzMSA1NDcuNjIxIDMyIDUzMy40NDUgMzJINDUwLjVDNDMwLjk0OSAxMS44MDMgNDA0LjIyOSAwIDM3NiAwQzMxOC42NTYgMCAyNzIgNDYuNjU2IDI3MiAxMDRTMzE4LjY1NiAyMDggMzc2IDIwOEM0MjMuNDg0IDIwOCA0NjQuODkxIDE3NS45MjIgNDc2LjcxOSAxMzBDNDc3LjgxMiAxMjUuNzE5IDQ3NS4yMzQgMTIxLjM1OSA0NzAuOTY5IDEyMC4yNUM0NjYuNjU2IDExOS4xNTYgNDYyLjMyOCAxMjEuNzM0IDQ2MS4yMTkgMTI2QzQ1MS4yMTkgMTY0Ljg1OSA0MTYuMTcyIDE5MiAzNzYgMTkyQzMyNy40ODQgMTkyIDI4OCAxNTIuNTMxIDI4OCAxMDRTMzI3LjQ4NCAxNiAzNzYgMTZDNDAxLjIzNCAxNiA0MjUuMjk3IDI2Ljg1OSA0NDIgNDUuNzk3QzQ0My44MTggNDcuODU5IDQ0Ni4zNzMgNDguMzIgNDQ4LjkxMiA0OEg1MzMuNDQ1QzU0My4zNzkgNDggNTUyLjkwNiA1MS45NDUgNTU5LjkzIDU4Ljk3MUw2MTEuODI4IDExMC44NjlDNjIyLjgwNSAxMjEuODQ4IDYyNy4xMjcgMTM4LjQ0OSA2MjEuMTg4IDE1Mi43OTNDNjE1LjI5NyAxNjcuMDIzIDYwMS43NCAxNzYgNTg2LjU1MyAxNzZINTIwQzUxNS41ODIgMTc2IDUxMiAxNzkuNTgyIDUxMiAxODRTNTE1LjU4MiAxOTIgNTIwIDE5Mkg1ODQuNzYyQzYwMi4yNDIgMTkyIDYxOS4yODcgMTg0LjM2OSA2MjkuNTk4IDE3MC4yNTRDNjQ1LjQ4OCAxNDguNTAyIDY0Mi43MzIgMTE5LjE0OCA2MjQuMzQ0IDEwMC43NlpNNDk0LjI3MyAxOTMuNzI3QzQ5My40MjMgMTkwLjAwOCA0OTIuMjIyIDE4Ni40MzUgNDkwLjcyOCAxODMuMDE3QzQ4OC4zNzUgMTc3LjYzNiA0ODAuOTk0IDE3Ni43MTkgNDc3LjM0OSAxODEuMzI0QzQ3Ny4yNjMgMTgxLjQzMyA0NzcuMTc2IDE4MS41NDIgNDc3LjA5IDE4MS42NTFDNDc1LjE3NCAxODQuMDU4IDQ3NC43OTggMTg3LjMwNCA0NzYuMTAxIDE5MC4wOUM0NzcuMTY3IDE5Mi4zNzEgNDc4LjA5IDE5NC43MzYgNDc4LjY3MyAxOTcuMjgzQzQ4MC4wNiAyMDMuMzM3IDQ4NC44MzIgMjA3Ljk1OCA0OTAuODgyIDIwOS4zNjRDNTE4LjM0OSAyMTUuNzQ2IDUzNS4zODMgMjQ0LjMzNCA1MjQuODUgMjczLjY4QzUxOS4zNzMgMjg4Ljk0IDUwNS43MDIgMjk5LjQ3IDQ4OS44NjUgMzAyLjk0OEM0ODUuNTc4IDMwMy44ODkgNDgxLjg2MiAzMDYuNTUyIDQ3OS41OTQgMzEwLjMxNEM0NzcuMzAzIDMxNC4xMTMgNDc2LjY5MyAzMTguNjg5IDQ3Ny45MDYgMzIyLjk1NUM0ODAuNTIxIDMzMi4xNTEgNDgwLjU4MSAzMzguNDA2IDQ3OC42NzQgMzQ1LjQ3NUM0NzQuMDMyIDM2Mi42ODMgNDYxLjUxNiAzNzcuMzY1IDQ0NC4zNzUgMzgyLjI0NUM0MzIuNTQ1IDM4NS42MTMgNDIwLjU3OSAzODQuMTA5IDQwOS4yNTIgMzc3LjkzOUM0MDYuODM2IDM3Ni42MjMgNDA0LjIwNyAzNzUuOTg4IDQwMS42MDUgMzc1Ljk4OEMzOTYuODk4IDM3NS45ODggMzkyLjI3NyAzNzguMDY2IDM4OS4xNSAzODEuOTM4QzM3OS44ODEgMzkzLjQxNiAzNjYuMzQgNDAwIDM1MiA0MDBDMzQ0LjI4OSA0MDAgMzM2LjYzNSAzOTcuOTYxIDMyOS4yNTIgMzkzLjkzOUMzMjYuODM2IDM5Mi42MjMgMzI0LjIwNyAzOTEuOTg4IDMyMS42MDUgMzkxLjk4OEMzMTYuODk4IDM5MS45ODggMzEyLjI3NyAzOTQuMDY2IDMwOS4xNSAzOTcuOTM4QzI5OS44ODEgNDA5LjQxNiAyODYuMzQgNDE2IDI3MiA0MTZTMjQ0LjExOSA0MDkuNDE2IDIzNC44NTIgMzk3LjkzOEMyMzEuNzIzIDM5NC4wNjQgMjI3LjEwMiAzOTEuOTg4IDIyMi4zOTUgMzkxLjk4OEMyMTkuNzkzIDM5MS45ODggMjE3LjE2NCAzOTIuNjIzIDIxNC43NSAzOTMuOTM5QzIwNy4zNjUgMzk3Ljk2MSAxOTkuNzExIDQwMCAxOTIgNDAwQzE3Ny42NiA0MDAgMTY0LjExOSAzOTMuNDE2IDE1NC44NTIgMzgxLjkzOEMxNTEuNzIzIDM3OC4wNjQgMTQ3LjEwMiAzNzUuOTg4IDE0Mi4zOTUgMzc1Ljk4OEMxMzkuNzkzIDM3NS45ODggMTM3LjE2NCAzNzYuNjIzIDEzNC43NSAzNzcuOTM5QzEyMy40MjMgMzg0LjEwOCAxMTEuNDYyIDM4NS42MTIgOTkuNjM1IDM4Mi4yNDhDODIuNDkxIDM3Ny4zNzIgNjkuOTc0IDM2Mi42OTEgNjUuMzI4IDM0NS40ODRDNjMuNDE5IDMzOC40MTEgNjMuNDc4IDMzMi4xNTUgNjYuMDk0IDMyMi45NTVDNjcuMzA5IDMxOC42ODkgNjYuNjk3IDMxNC4xMTMgNjQuNDA4IDMxMC4zMTRDNjIuMjA3IDMwNi42NjcgNTguNjQ5IDMwNC4wNTIgNTQuNTI1IDMwMy4wMzhDNDIuNzQ5IDMwMC4xNDMgMzEuNTMxIDI5NC42MjUgMjQuODg0IDI4NC40ODFDMy44MjMgMjUyLjM0NSAyMi44OSAyMTUuNjYgNTQuMDE2IDIwOS4wNzhDNTguMzU1IDIwOC4xNiA2Mi4xMTcgMjA1LjQ4MiA2NC40MDggMjAxLjY4NkM2Ni42OTcgMTk3Ljg4NyA2Ny4zMDkgMTkzLjMxMSA2Ni4wOTQgMTg5LjA0NUM2My40NzggMTc5Ljg0NSA2My40MTkgMTczLjU4OSA2NS4zMjggMTY2LjUxNkM2OS45NzQgMTQ5LjMwOSA4Mi40OTEgMTM0LjYyOCA5OS42MzUgMTI5Ljc1MkMxMTEuNDYyIDEyNi4zODggMTIzLjQyMyAxMjcuODkyIDEzNC43NSAxMzQuMDYxQzEzNy4xNjYgMTM1LjM3NyAxMzkuNzkzIDEzNi4wMTIgMTQyLjM5NSAxMzYuMDEyQzE0Ny4xMDIgMTM2LjAxMiAxNTEuNzI1IDEzMy45MzQgMTU0Ljg1MiAxMzAuMDYyQzE2NC4xMTkgMTE4LjU4NCAxNzcuNjYgMTEyIDE5MiAxMTJDMTk5LjcxMSAxMTIgMjA3LjM2NSAxMTQuMDM5IDIxNC43NSAxMTguMDYxQzIxNy4xNjYgMTE5LjM3NyAyMTkuNzkzIDEyMC4wMTIgMjIyLjM5NSAxMjAuMDEyQzIyNy4xMDIgMTIwLjAxMiAyMzEuNzI1IDExNy45MzQgMjM0Ljg1MiAxMTQuMDYyQzIzNy43MTYgMTEwLjUxNiAyNDEuMDY0IDEwNy41NzggMjQ0LjY3NyAxMDUuMDg0QzI0Ni43ODQgMTAzLjYyOSAyNDguMTA0IDEwMS4zNDkgMjQ4LjI1NyA5OC43OTJDMjQ4LjI2IDk4LjczIDI0OC4yNjQgOTguNjY4IDI0OC4yNjggOTguNjA1QzI0OC42NjYgOTIuMTgxIDI0MS40NDEgODcuOTUyIDIzNi4wOTUgOTEuNTM4QzIzMC45MzkgOTQuOTk2IDIyNi4zMTEgOTkuMTY5IDIyMi40MDIgMTA0LjAxQzIxMy4zMjIgOTkuMDY0IDIwMy4wNjggOTYgMTkyIDk2QzE3MS44NzEgOTYgMTU0LjEzNSAxMDUuNDggMTQyLjQwMiAxMjAuMDFDMTMyLjg2OSAxMTQuODE4IDEyMi4wNDMgMTExLjY5OSAxMTAuMzM4IDExMi4wMjNDOTUuNzMyIDExMi40MjcgODIuMDA5IDExOS4zMTggNzEuNjE1IDEyOS41ODhDNDUuMzMyIDE1NS41NTYgNDUuNjAzIDE3NS40OTEgNTAuNzA1IDE5My40MjRDMjEuNzQ4IDE5OS41NDkgMCAyMjUuMjE5IDAgMjU2UzIxLjc0OCAzMTIuNDUxIDUwLjcwNSAzMTguNTc2QzQ1LjYwMyAzMzYuNTA5IDQ1LjMzMiAzNTYuNDQ0IDcxLjYxNSAzODIuNDEyQzgyLjAwOSAzOTIuNjgyIDk1LjczMiAzOTkuNTczIDExMC4zMzggMzk5Ljk3N0MxMjIuMDQzIDQwMC4zMDEgMTMyLjg2OSAzOTcuMTgyIDE0Mi40MDIgMzkxLjk5QzE1NC4xMzUgNDA2LjUyIDE3MS44NzEgNDE2IDE5MiA0MTZDMjAzLjA2OCA0MTYgMjEzLjMyMiA0MTIuOTM2IDIyMi40MDIgNDA3Ljk5QzIzNC4xMzUgNDIyLjUyIDI1MS44NzEgNDMyIDI3MiA0MzJTMzA5Ljg2NSA0MjIuNTIgMzIxLjU5OCA0MDcuOTlDMzMwLjY3OCA0MTIuOTM2IDM0MC45MzIgNDE2IDM1MiA0MTZDMzcyLjEyOSA0MTYgMzg5Ljg2NSA0MDYuNTIgNDAxLjU5OCAzOTEuOTlDNDExLjEzMSAzOTcuMTgyIDQyMS45NTcgNDAwLjMwMSA0MzMuNjYyIDM5OS45NzdDNDQ4LjI2OCAzOTkuNTczIDQ2MS45OTEgMzkyLjY4MiA0NzIuMzg2IDM4Mi40MTJDNDk4LjY2OCAzNTYuNDQ0IDQ5OC4zOTcgMzM2LjUwOSA0OTMuMjk1IDMxOC41NzZDNTIyLjI1MiAzMTIuNDUxIDU0NCAyODYuNzgxIDU0NCAyNTZDNTQ0IDIyNS41NzggNTIyLjcyNSAyMDAuMjMgNDk0LjI3MyAxOTMuNzI3WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Ram(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M216 430.531C211.578 430.531 208 434.125 208 438.531V477.813C208 487.844 200.172 496 190.547 496H182.328C175.188 496 168.828 491.531 166.141 484.625L141.437 421.094C139.844 416.969 135.172 415.062 131.078 416.531C126.969 418.156 124.922 422.781 126.531 426.906L151.234 490.438C156.344 503.531 168.547 512 182.328 512H190.547C209 512 224 496.656 224 477.812V438.531C224 434.125 220.422 430.531 216 430.531ZM412.922 416.531C408.797 415.031 404.172 416.969 402.562 421.094L377.859 484.625C375.172 491.531 368.812 496 361.672 496H353.453C343.828 496 336 487.844 336 477.812V438.531C336 434.125 332.422 430.531 328 430.531S320 434.125 320 438.531V477.812C320 496.656 335 512 353.453 512H361.672C375.453 512 387.656 503.531 392.766 490.438L417.469 426.906C419.078 422.781 417.031 418.156 412.922 416.531ZM528 96C528 87.164 520.838 80 512 80C503.164 80 496 87.164 496 96S503.164 112 512 112C520.838 112 528 104.836 528 96ZM624.344 100.76L571.238 47.654C561.215 37.631 547.621 32 533.445 32H450.5C430.949 11.803 404.229 0 376 0C318.656 0 272 46.656 272 104S318.656 208 376 208C423.484 208 464.891 175.922 476.719 130C477.812 125.719 475.234 121.359 470.969 120.25C466.656 119.156 462.328 121.734 461.219 126C451.219 164.859 416.172 192 376 192C327.484 192 288 152.531 288 104S327.484 16 376 16C401.234 16 425.297 26.859 442 45.797C443.818 47.859 446.373 48.32 448.912 48H533.445C543.379 48 552.906 51.945 559.93 58.971L611.828 110.869C622.805 121.848 627.127 138.449 621.188 152.793C615.297 167.023 601.74 176 586.553 176H520C515.582 176 512 179.582 512 184S515.582 192 520 192H584.762C602.242 192 619.287 184.369 629.598 170.254C645.488 148.502 642.732 119.148 624.344 100.76ZM494.273 193.727C493.423 190.008 492.222 186.435 490.728 183.017C488.375 177.636 480.994 176.719 477.349 181.324C477.263 181.433 477.176 181.542 477.09 181.651C475.174 184.058 474.798 187.304 476.101 190.09C477.167 192.371 478.09 194.736 478.673 197.283C480.06 203.337 484.832 207.958 490.882 209.364C518.349 215.746 535.383 244.334 524.85 273.68C519.373 288.94 505.702 299.47 489.865 302.948C485.578 303.889 481.862 306.552 479.594 310.314C477.303 314.113 476.693 318.689 477.906 322.955C480.521 332.151 480.581 338.406 478.674 345.475C474.032 362.683 461.516 377.365 444.375 382.245C432.545 385.613 420.579 384.109 409.252 377.939C406.836 376.623 404.207 375.988 401.605 375.988C396.898 375.988 392.277 378.066 389.15 381.938C379.881 393.416 366.34 400 352 400C344.289 400 336.635 397.961 329.252 393.939C326.836 392.623 324.207 391.988 321.605 391.988C316.898 391.988 312.277 394.066 309.15 397.938C299.881 409.416 286.34 416 272 416S244.119 409.416 234.852 397.938C231.723 394.064 227.102 391.988 222.395 391.988C219.793 391.988 217.164 392.623 214.75 393.939C207.365 397.961 199.711 400 192 400C177.66 400 164.119 393.416 154.852 381.938C151.723 378.064 147.102 375.988 142.395 375.988C139.793 375.988 137.164 376.623 134.75 377.939C123.423 384.108 111.462 385.612 99.635 382.248C82.491 377.372 69.974 362.691 65.328 345.484C63.419 338.411 63.478 332.155 66.094 322.955C67.309 318.689 66.697 314.113 64.408 310.314C62.207 306.667 58.649 304.052 54.525 303.038C42.749 300.143 31.531 294.625 24.884 284.481C3.823 252.345 22.89 215.66 54.016 209.078C58.355 208.16 62.117 205.482 64.408 201.686C66.697 197.887 67.309 193.311 66.094 189.045C63.478 179.845 63.419 173.589 65.328 166.516C69.974 149.309 82.491 134.628 99.635 129.752C111.462 126.388 123.423 127.892 134.75 134.061C137.166 135.377 139.793 136.012 142.395 136.012C147.102 136.012 151.725 133.934 154.852 130.062C164.119 118.584 177.66 112 192 112C199.711 112 207.365 114.039 214.75 118.061C217.166 119.377 219.793 120.012 222.395 120.012C227.102 120.012 231.725 117.934 234.852 114.062C237.716 110.516 241.064 107.578 244.677 105.084C246.784 103.629 248.104 101.349 248.257 98.792C248.26 98.73 248.264 98.668 248.268 98.605C248.666 92.181 241.441 87.952 236.095 91.538C230.939 94.996 226.311 99.169 222.402 104.01C213.322 99.064 203.068 96 192 96C171.871 96 154.135 105.48 142.402 120.01C132.869 114.818 122.043 111.699 110.338 112.023C95.732 112.427 82.009 119.318 71.615 129.588C45.332 155.556 45.603 175.491 50.705 193.424C21.748 199.549 0 225.219 0 256S21.748 312.451 50.705 318.576C45.603 336.509 45.332 356.444 71.615 382.412C82.009 392.682 95.732 399.573 110.338 399.977C122.043 400.301 132.869 397.182 142.402 391.99C154.135 406.52 171.871 416 192 416C203.068 416 213.322 412.936 222.402 407.99C234.135 422.52 251.871 432 272 432S309.865 422.52 321.598 407.99C330.678 412.936 340.932 416 352 416C372.129 416 389.865 406.52 401.598 391.99C411.131 397.182 421.957 400.301 433.662 399.977C448.268 399.573 461.991 392.682 472.386 382.412C498.668 356.444 498.397 336.509 493.295 318.576C522.252 312.451 544 286.781 544 256C544 225.578 522.725 200.23 494.273 193.727Z" />
        </Icon>
    </>
}