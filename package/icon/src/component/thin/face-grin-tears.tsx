
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-tears` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-tears?s=thin face-grin-tears}
 * @preview ![face-grin-tears](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MzIuMDc2IDM1Ni44MjhDNTI4LjU0NSAzNTIuNTA4IDUyMS42ODEgMzUzLjI4MSA1MTkuMTI1IDM1OC4yNDJDNDgxLjkwOCA0MzAuNDUzIDQwNi42ODEgNDgwIDMyMC4wMDQgNDgwQzIzMy4zMjIgNDgwIDE1OC4wODkgNDMwLjQ1MyAxMjAuODc1IDM1OC4yMzhDMTE4LjMyIDM1My4yODEgMTExLjQ2NCAzNTIuNTA0IDEwNy45MzEgMzU2LjgxNkMxMDcuODk2IDM1Ni44NTkgMTA3Ljg2MyAzNTYuODk4IDEwNy44MjggMzU2Ljk0MUMxMDUuNzk3IDM1OS40MDYgMTA1LjMyNCAzNjIuODI4IDEwNi43ODcgMzY1LjY2OEMxNDYuNjM0IDQ0Mi45OTIgMjI3LjAyNyA0OTYgMzIwLjAwNCA0OTZDNDEyLjk3NiA0OTYgNDkzLjM2OSA0NDIuOTk2IDUzMy4yMTQgMzY1LjY4QzUzNC42NzcgMzYyLjg0IDUzNC4yMDkgMzU5LjQyMiA1MzIuMTgxIDM1Ni45NTdMNTMyLjA3NiAzNTYuODI4Wk05NC40NTMgMjEzLjYxN0w5NC42NjQgMjEzLjU5NEM5OC4wMDcgMjEzLjIyNyAxMDAuNjcgMjEwLjc0MiAxMDEuMzk4IDIwNy40NTdDMTIzLjY0IDEwNy4yMTUgMjEzLjE2IDMyIDMyMC4wMDQgMzJDNDI2Ljg0MyAzMiA1MTYuMzYzIDEwNy4yMTEgNTM4LjYwNyAyMDcuNDUzQzUzOS4zMzYgMjEwLjc0MiA1NDIuMDAyIDIxMy4yMjcgNTQ1LjM0NyAyMTMuNTlDNTQ1LjQxNiAyMTMuNTk4IDU0NS40ODYgMjEzLjYwNSA1NDUuNTU4IDIxMy42MTNDNTUwLjk3OCAyMTQuMjExIDU1NS4yNTUgMjA5LjI2NiA1NTQuMDc2IDIwMy45NDVDNTMwLjI4MyA5Ni40NjEgNDM0LjY0NCAxNiAzMjAuMDA0IDE2QzIwNS4zNTkgMTYgMTA5LjcyMiA5Ni40NjUgODUuOTI5IDIwMy45NDVDODQuNzUgMjA5LjI3MyA4OS4wMzMgMjE0LjIxNSA5NC40NTMgMjEzLjYxN1pNOTkuMjA1IDI0NC45MThDOTguNzg5IDI0NC45MTggOTguMzY1IDI0NC45NDkgOTcuOTM1IDI0NS4wMTZDNzYuMzM5IDI0Ny45ODQgMjcuNjkzIDI1Ni40MjIgMTMuNTU0IDI3MC41NjJDLTQuODI1IDI4OC45NDUgLTQuNDQyIDMxOS4wMiAxNC4yNjkgMzM3LjczQzIzLjc2MyAzNDcuMjIzIDM2LjE4MyAzNTIgNDguNTE3IDM1MkM2MC40OSAzNTIgNzIuMzgyIDM0Ny41IDgxLjQzNSAzMzguNDQ1Qzk1LjU3NiAzMjQuMzA1IDEwMy45MjcgMjc1LjU3IDEwNi45ODIgMjU0LjA2MkMxMDcuNzQ4IDI0OS4xNDEgMTAzLjk4IDI0NC45MTggOTkuMjA1IDI0NC45MThaTTcwLjEyMyAzMjcuMTMzQzY0LjQwNCAzMzIuODUyIDU2LjczIDMzNiA0OC41MTcgMzM2QzM5LjkwOCAzMzYgMzEuNzYzIDMzMi41OTggMjUuNTg0IDMyNi40MThDMTMuMTA3IDMxMy45NDEgMTIuNzg3IDI5My45NjEgMjQuODY5IDI4MS44NzVDMzAuNDYxIDI3Ni4yODEgNTQuMDExIDI2OC4xNjggODkuNTIxIDI2Mi40NDVDODMuNDYxIDI5OS41NDcgNzUuNDI3IDMyMS44MjggNzAuMTIzIDMyNy4xMzNaTTYyNi40NDUgMjcwLjU2MkM2MTIuMzA2IDI1Ni40MjIgNTYzLjY2IDI0Ny45ODQgNTQyLjA2NCAyNDUuMDE2QzU0MS42MzYgMjQ0Ljk0OSA1NDEuMjEyIDI0NC45MTggNTQwLjc5NiAyNDQuOTE4QzUzNi4wMTkgMjQ0LjkxOCA1MzIuMjUyIDI0OS4xNDEgNTMzLjAxNyAyNTQuMDYyQzUzNi4wNzIgMjc1LjU3IDU0NC40MjMgMzI0LjMwNSA1NTguNTY0IDMzOC40NDVDNTY3LjYxNyAzNDcuNDk2IDU3OS41MTEgMzUyIDU5MS40ODQgMzUyQzYwMy44MTggMzUyIDYxNi4yMzYgMzQ3LjIyNyA2MjUuNzMgMzM3LjczQzY0NC40NDEgMzE5LjAyIDY0NC44MjQgMjg4Ljk0NSA2MjYuNDQ1IDI3MC41NjJaTTYxNC40MTggMzI2LjQxOEM2MDguMjM4IDMzMi41OTggNjAwLjA5MyAzMzYgNTkxLjQ4NCAzMzZDNTgzLjI2OSAzMzYgNTc1LjU5NyAzMzIuODUyIDU2OS44NzkgMzI3LjEzM0M1NjQuNTggMzIxLjgzMiA1NTYuNTYyIDI5OS42MDkgNTUwLjQ4MiAyNjIuNDQ1QzU4NS45MDQgMjY4LjEzNyA2MDkuNTI5IDI3Ni4yNzMgNjE1LjEzIDI4MS44NzVDNjI3LjIxMiAyOTMuOTYxIDYyNi44OTIgMzEzLjk0MSA2MTQuNDE4IDMyNi40MThaTTE3Ni4yMTggMzM4Ljc4MUMxODUuNTM3IDM5My43NyAyNTkuNDkyIDQzMi4wMTIgMzIwLjAxMSA0MzIuMDEyUzQ1NC42MDcgMzkzLjc3IDQ2My44MDQgMzM4Ljc4MUM0NjUuMzU3IDMyOC41MzEgNDU3LjM2MyAzMjAuMDEyIDQ0Ny45OCAzMjAuMDEyQzQ0Ni4zODIgMzIwLjAxMiA0NDQuNzQ2IDMyMC4yNTggNDQzLjEwNyAzMjAuNzg1QzQxMi44NDcgMzMwLjUzMSAzNjcuOTQzIDMzNi4wMzEgMzIwLjAxMSAzMzYuMDMxUzIyNy4xNzUgMzMwLjUzMSAxOTYuOTE2IDMyMC43ODVDMTk1LjI1OSAzMjAuMjU4IDE5My42MDkgMzIwLjAxMiAxOTEuOTk4IDMyMC4wMTJDMTgyLjU0MyAzMjAuMDEyIDE3NC41NjIgMzI4LjUzMSAxNzYuMjE4IDMzOC43ODFaTTMyMC4wMTEgMzUyLjAyN0MzNjkuNzMgMzUyLjAyNyA0MTYuMzU3IDM0Ni4xOTUgNDQ3Ljk4NCAzMzYuMDJMNDQ4LjAzMSAzMzYuMTQxQzQ0MC4zODQgMzgxLjg1OSAzNzQuMTM0IDQxNi4wMTYgMzIwLjAxMSA0MTYuMDE2QzI2NS45NyA0MTYuMDE2IDE5OS43MzYgMzgxLjg0NCAxOTIuMDEzIDMzNi4wMTJDMjIzLjYxMSAzNDYuMTg4IDI3MC4yNjUgMzUyLjAyNyAzMjAuMDExIDM1Mi4wMjdaTTE5OS43NjUgMjI1LjkzOEMyMDMuNTMxIDIxMC45MDYgMjE5LjAzMSAxNjggMjQwIDE2OFMyNzYuNDY4IDIxMC45MDYgMjgwLjIzNCAyMjUuOTM4QzI4MS4xNTYgMjI5LjU2MiAyODQuNDA2IDIzMiAyODggMjMyQzI4OC42NCAyMzIgMjg5LjI5NyAyMzEuOTA2IDI4OS45MzcgMjMxLjc1QzI5NC4yMzQgMjMwLjY4OCAyOTYuODI4IDIyNi4zNDQgMjk1Ljc2NSAyMjIuMDYyQzI5My45NjggMjE0Ljg3NSAyNzcuMTcyIDE1MiAyNDAgMTUyUzE4Ni4wMzEgMjE0Ljg3NSAxODQuMjM0IDIyMi4wNjJDMTgzLjE3MiAyMjYuMzQ0IDE4NS43NjUgMjMwLjY4OCAxOTAuMDYyIDIzMS43NUMxOTQuMjUgMjMyLjc4MSAxOTguNjcyIDIzMC4xODggMTk5Ljc2NSAyMjUuOTM4Wk0zNTkuNzY1IDIyNS45MzhDMzYzLjUzMSAyMTAuOTA2IDM3OS4wMzEgMTY4IDQwMCAxNjhTNDM2LjQ2OCAyMTAuOTA2IDQ0MC4yMzQgMjI1LjkzOEM0NDEuMTU2IDIyOS41NjIgNDQ0LjQwNiAyMzIgNDQ4IDIzMkM0NDguNjQgMjMyIDQ0OS4yOTcgMjMxLjkwNiA0NDkuOTM3IDIzMS43NUM0NTQuMjM0IDIzMC42ODggNDU2LjgyOCAyMjYuMzQ0IDQ1NS43NjUgMjIyLjA2MkM0NTMuOTY4IDIxNC44NzUgNDM3LjE3MiAxNTIgNDAwIDE1MlMzNDYuMDMxIDIxNC44NzUgMzQ0LjIzNCAyMjIuMDYyQzM0My4xNzIgMjI2LjM0NCAzNDUuNzY1IDIzMC42ODcgMzUwLjA2MiAyMzEuNzVDMzU0LjIxOCAyMzIuNzgxIDM1OC42NzIgMjMwLjE4OCAzNTkuNzY1IDIyNS45MzhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FaceGrinTears(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M532.076 356.828C528.545 352.508 521.681 353.281 519.125 358.242C481.908 430.453 406.681 480 320.004 480C233.322 480 158.089 430.453 120.875 358.238C118.32 353.281 111.464 352.504 107.931 356.816C107.896 356.859 107.863 356.898 107.828 356.941C105.797 359.406 105.324 362.828 106.787 365.668C146.634 442.992 227.027 496 320.004 496C412.976 496 493.369 442.996 533.214 365.68C534.677 362.84 534.209 359.422 532.181 356.957L532.076 356.828ZM94.453 213.617L94.664 213.594C98.007 213.227 100.67 210.742 101.398 207.457C123.64 107.215 213.16 32 320.004 32C426.843 32 516.363 107.211 538.607 207.453C539.336 210.742 542.002 213.227 545.347 213.59C545.416 213.598 545.486 213.605 545.558 213.613C550.978 214.211 555.255 209.266 554.076 203.945C530.283 96.461 434.644 16 320.004 16C205.359 16 109.722 96.465 85.929 203.945C84.75 209.273 89.033 214.215 94.453 213.617ZM99.205 244.918C98.789 244.918 98.365 244.949 97.935 245.016C76.339 247.984 27.693 256.422 13.554 270.562C-4.825 288.945 -4.442 319.02 14.269 337.73C23.763 347.223 36.183 352 48.517 352C60.49 352 72.382 347.5 81.435 338.445C95.576 324.305 103.927 275.57 106.982 254.062C107.748 249.141 103.98 244.918 99.205 244.918ZM70.123 327.133C64.404 332.852 56.73 336 48.517 336C39.908 336 31.763 332.598 25.584 326.418C13.107 313.941 12.787 293.961 24.869 281.875C30.461 276.281 54.011 268.168 89.521 262.445C83.461 299.547 75.427 321.828 70.123 327.133ZM626.445 270.562C612.306 256.422 563.66 247.984 542.064 245.016C541.636 244.949 541.212 244.918 540.796 244.918C536.019 244.918 532.252 249.141 533.017 254.062C536.072 275.57 544.423 324.305 558.564 338.445C567.617 347.496 579.511 352 591.484 352C603.818 352 616.236 347.227 625.73 337.73C644.441 319.02 644.824 288.945 626.445 270.562ZM614.418 326.418C608.238 332.598 600.093 336 591.484 336C583.269 336 575.597 332.852 569.879 327.133C564.58 321.832 556.562 299.609 550.482 262.445C585.904 268.137 609.529 276.273 615.13 281.875C627.212 293.961 626.892 313.941 614.418 326.418ZM176.218 338.781C185.537 393.77 259.492 432.012 320.011 432.012S454.607 393.77 463.804 338.781C465.357 328.531 457.363 320.012 447.98 320.012C446.382 320.012 444.746 320.258 443.107 320.785C412.847 330.531 367.943 336.031 320.011 336.031S227.175 330.531 196.916 320.785C195.259 320.258 193.609 320.012 191.998 320.012C182.543 320.012 174.562 328.531 176.218 338.781ZM320.011 352.027C369.73 352.027 416.357 346.195 447.984 336.02L448.031 336.141C440.384 381.859 374.134 416.016 320.011 416.016C265.97 416.016 199.736 381.844 192.013 336.012C223.611 346.188 270.265 352.027 320.011 352.027ZM199.765 225.938C203.531 210.906 219.031 168 240 168S276.468 210.906 280.234 225.938C281.156 229.562 284.406 232 288 232C288.64 232 289.297 231.906 289.937 231.75C294.234 230.688 296.828 226.344 295.765 222.062C293.968 214.875 277.172 152 240 152S186.031 214.875 184.234 222.062C183.172 226.344 185.765 230.688 190.062 231.75C194.25 232.781 198.672 230.188 199.765 225.938ZM359.765 225.938C363.531 210.906 379.031 168 400 168S436.468 210.906 440.234 225.938C441.156 229.562 444.406 232 448 232C448.64 232 449.297 231.906 449.937 231.75C454.234 230.688 456.828 226.344 455.765 222.062C453.968 214.875 437.172 152 400 152S346.031 214.875 344.234 222.062C343.172 226.344 345.765 230.687 350.062 231.75C354.218 232.781 358.672 230.188 359.765 225.938Z" />
        </Icon>
    </>
}