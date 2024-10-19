
import { Icon } from "../../index";

/**
 * A component that renders the `hand-fingers-crossed` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fingers-crossed?s=regular hand-fingers-crossed}
 * @preview ![hand-fingers-crossed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTEuOTggMTYwQzQwMy42NTggMTYwIDM5NS42ODIgMTYxLjUxNCAzODguMzA3IDE2NC4yNjhDMzY3LjA4NyAxNDIuNzUyIDM0MC45ODcgMTQ0IDMzOS45OCAxNDRDMzI5LjAwNCAxNDQgMzE2LjQwNiAxNDguNDYxIDMxNi4xNzggMTQ4LjU0N0wzMzguMTA1IDk5Ljk4NEMzNDIuMzQ5IDkwLjU3MSAzNDQuMzU3IDgwLjcwNCAzNDQuMzU3IDcwLjk4NUMzNDQuMzU3IDUwLjg5MyAzMjguNTMyIC0wLjAyMSAyNzMuNTg4IC0wLjAyMUMyNDYuODgxIC0wLjAyMSAyMjAuOTExIDE1LjIzMSAyMDguOTggNDEuNzAzTDE0OC41ODQgMTc1LjQwNEwxMDUuNjA1IDgwLjI2NkMxMDQuMjQgNzcuMjI4IDEwMy41OTMgNzQuMDQzIDEwMy41OTMgNzAuOTA2QzEwMy41OTMgNjQuNTg0IDEwOC41NDkgNDguMDQxIDEyNi40MTkgNDguMDQxQzEzNS4xMzMgNDguMDQxIDE0My40MjIgNTMuMDMzIDE0Ny4yMyA2MS40NTNMMTU2LjA5IDgxLjA2OEwxNzkuODI0IDI4LjUzMUMxODAuMTg0IDI3LjczMiAxODAuNzM2IDI3LjA2OCAxODEuMTE1IDI2LjI4MUMxNjcuNTI2IDkuNjQ1IDE0Ny4xNTEgMC4wOTMgMTI2LjA1NSAwLjA5M0M3MS4zMDMgMC4wOTMgNTUuNjA1IDUwLjYzMyA1NS42MDUgNzAuOTk5QzU1LjYwNSA4MC43MTggNTcuNjEzIDkwLjU4NSA2MS44NTUgMTAwTDEyMC41OTIgMjMxLjEyNUMxMTIuMTY0IDIzMi40MzYgMTA0LjI1NCAyMzMuNjggMTAzLjMxOCAyMzMuODg1QzcxLjI2NCAyNDAuOTA4IDQ4IDI3MC4zOTMgNDggMzAzLjk5VjM4My45OUM0OCA0MDYuMDUzIDU4LjQwNCA0MjcuMzA5IDc1LjgzMiA0NDAuODQ4TDEyMS43ODMgNDc2LjU4NEMxNTEuMTMxIDQ5OS40MTQgMTg3Ljc2OCA1MTEuOTkgMjI0LjkzOCA1MTEuOTlMMzAzLjc1IDUxMi4wMjVDNDAwLjkzOCA1MTIuMDI1IDQ4MCA0MzIuOTYzIDQ4MCAzMzUuNzc1VjIyOC4yNzVDNDgwIDIxMC41MDUgNDY1LjE5IDE2MCA0MTEuOTggMTYwWk0zMjAgMjEyLjI1NkMzMjAgMjAxLjA4NCAzMjguOTgyIDE5Mi4wMDYgMzQwIDE5Mi4wMDZDMzUwLjk5NiAxOTIuMDA2IDM1OS45OCAyMDEuMDc3IDM1OS45OCAyMTIuMjVWMjU2SDM2MFYyNjcuNzU2QzM2MCAyNzguOTI4IDM1MS4wMiAyODguMDA2IDM0MCAyODguMDA2QzMyOC45ODIgMjg4LjAwNiAzMjAgMjc4LjkyOCAzMjAgMjY3Ljc1NlYyMTIuMjU2Wk0yNTIuNzMgNjEuNDUzQzI1Ni41MzUgNTIuOTg4IDI2NC45MjggNDguMDExIDI3My41NTcgNDguMDExQzI5MS4zMDUgNDguMDExIDI5Ni4zNjcgNjQuMzI4IDI5Ni4zNjcgNzAuOTA0QzI5Ni4zNjcgNzQuMDM3IDI5NS43MjEgNzcuMjE3IDI5NC4zNTUgODAuMjVMMjMyLjY4MiAyMTYuODIyQzIyOS43ODkgMjE2LjQzOSAyMjYuOTA2IDIxNiAyMjMuOTI4IDIxNkMyMjMuOTI4IDIxNiAyMjMuOTI2IDIxNiAyMjMuOTI0IDIxNkMyMTkuNDQ5IDIxNiAyMTQuOTU5IDIxNi40MiAyMTAuNTUxIDIxNy4yNTRMMTk5Ljk5NiAyMTguODgxTDE4Ni45MTYgMjIwLjg5OEwxODEuMDg4IDIyMS43OTdMMjUyLjczIDYxLjQ1M1pNMzAzLjc1IDQ2NC4wMjVMMjI0LjkzOCA0NjMuOTlDMTk4LjM3NSA0NjMuOTkgMTcyLjIxOSA0NTUuMDA2IDE1MS4yNSA0MzguNjkzTDEwNS4yODEgNDAyLjk0M0M5OS40NjkgMzk4LjQyOCA5NiAzOTEuMzM0IDk2IDM4My45OVYzMDMuOTlDOTYgMjkyLjc1NiAxMDMuOTY5IDI4Mi44ODEgMTEzLjU5NCAyODAuNzcxTDIxOC44NzUgMjY0LjUzN0MyMjAuNTY4IDI2NC4xNzQgMjIyLjI1OCAyNjQgMjIzLjkyNCAyNjRDMjM1LjgzNCAyNjQgMjQ4LjAxMSAyNzMuNTIxIDI0OC4wMTEgMjg4LjA1OEMyNDguMDExIDI5OS4wOTYgMjQwLjQ5OCAzMDkuMDA0IDIzMC44NDQgMzExLjE0NkwxNzIuNzgxIDMxOS4wMDZDMTYwLjc0OCAzMjAuNjM5IDE1MS45OTkgMzMwLjkyNyAxNTEuOTk5IDM0Mi43NTNDMTUxLjk5OSAzNjIuOTY1IDE3MC44MTggMzY2LjgzMiAxNzUuNzAxIDM2Ni44MzJDMTc4LjM0NiAzNjYuODMyIDI0MC4zMTEgMzU4LjIxMyAyNDEuMjQyIDM1OC4wMDZDMjY0Ljc5MSAzNTIuNzc5IDI4Mi43NSAzMzUuNzcxIDI5MC45NzUgMzE0LjM2N0MzMDMuMzE2IDMyNy41NTEgMzIwLjU4MiAzMzYuMDA2IDM0MCAzMzYuMDA2QzM0OC4zMjYgMzM2LjAwNiAzNTYuMzA3IDMzNC40OTYgMzYzLjY4NiAzMzEuNzM2QzM3Ni4wMTggMzQ0LjI0NiAzOTMuMTIzIDM1Mi4wMDYgNDEyIDM1Mi4wMDZDNDEyLjE5OSAzNTIuMDA2IDQyMi4wODQgMzUxLjU2MSA0MzAuNjU0IDM0OS4wODZDNDIzLjg4NyA0MTMuNDgyIDM2OS45MSA0NjQuMDI1IDMwMy43NSA0NjQuMDI1Wk00MzIgMjgzLjc1NkM0MzIgMjk0LjkyOCA0MjMuMDIgMzA0LjAwNiA0MTIgMzA0LjAwNkM0MDAuOTgyIDMwNC4wMDYgMzkyIDI5NC45MjggMzkyIDI4My43NTZWMjI4LjI1NkMzOTIgMjE3LjA4NCA0MDAuOTgyIDIwOC4wMDYgNDEyIDIwOC4wMDZDNDIyLjk5NiAyMDguMDA2IDQzMS45OCAyMTcuMDc3IDQzMS45OCAyMjguMjVWMjU2SDQzMlYyODMuNzU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const HandFingersCrossed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M411.98 160C403.658 160 395.682 161.514 388.307 164.268C367.087 142.752 340.987 144 339.98 144C329.004 144 316.406 148.461 316.178 148.547L338.105 99.984C342.349 90.571 344.357 80.704 344.357 70.985C344.357 50.893 328.532 -0.021 273.588 -0.021C246.881 -0.021 220.911 15.231 208.98 41.703L148.584 175.404L105.605 80.266C104.24 77.228 103.593 74.043 103.593 70.906C103.593 64.584 108.549 48.041 126.419 48.041C135.133 48.041 143.422 53.033 147.23 61.453L156.09 81.068L179.824 28.531C180.184 27.732 180.736 27.068 181.115 26.281C167.526 9.645 147.151 0.093 126.055 0.093C71.303 0.093 55.605 50.633 55.605 70.999C55.605 80.718 57.613 90.585 61.855 100L120.592 231.125C112.164 232.436 104.254 233.68 103.318 233.885C71.264 240.908 48 270.393 48 303.99V383.99C48 406.053 58.404 427.309 75.832 440.848L121.783 476.584C151.131 499.414 187.768 511.99 224.938 511.99L303.75 512.025C400.938 512.025 480 432.963 480 335.775V228.275C480 210.505 465.19 160 411.98 160ZM320 212.256C320 201.084 328.982 192.006 340 192.006C350.996 192.006 359.98 201.077 359.98 212.25V256H360V267.756C360 278.928 351.02 288.006 340 288.006C328.982 288.006 320 278.928 320 267.756V212.256ZM252.73 61.453C256.535 52.988 264.928 48.011 273.557 48.011C291.305 48.011 296.367 64.328 296.367 70.904C296.367 74.037 295.721 77.217 294.355 80.25L232.682 216.822C229.789 216.439 226.906 216 223.928 216C223.928 216 223.926 216 223.924 216C219.449 216 214.959 216.42 210.551 217.254L199.996 218.881L186.916 220.898L181.088 221.797L252.73 61.453ZM303.75 464.025L224.938 463.99C198.375 463.99 172.219 455.006 151.25 438.693L105.281 402.943C99.469 398.428 96 391.334 96 383.99V303.99C96 292.756 103.969 282.881 113.594 280.771L218.875 264.537C220.568 264.174 222.258 264 223.924 264C235.834 264 248.011 273.521 248.011 288.058C248.011 299.096 240.498 309.004 230.844 311.146L172.781 319.006C160.748 320.639 151.999 330.927 151.999 342.753C151.999 362.965 170.818 366.832 175.701 366.832C178.346 366.832 240.311 358.213 241.242 358.006C264.791 352.779 282.75 335.771 290.975 314.367C303.316 327.551 320.582 336.006 340 336.006C348.326 336.006 356.307 334.496 363.686 331.736C376.018 344.246 393.123 352.006 412 352.006C412.199 352.006 422.084 351.561 430.654 349.086C423.887 413.482 369.91 464.025 303.75 464.025ZM432 283.756C432 294.928 423.02 304.006 412 304.006C400.982 304.006 392 294.928 392 283.756V228.256C392 217.084 400.982 208.006 412 208.006C422.996 208.006 431.98 217.077 431.98 228.25V256H432V283.756Z" />
    </Icon>
);

export default HandFingersCrossed;