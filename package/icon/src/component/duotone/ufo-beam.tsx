
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ufo-beam` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ufo-beam?s=duotone ufo-beam}
 * @preview ![ufo-beam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI4OC4wMDkgMEMyODguMDA3IDAgMjg4LjAwNyAwIDI4OC4wMDcgMEMyMDQuNjkxIDAgMTM3LjE1MiA2Ny41NDEgMTM3LjE1MiAxNTAuODU1VjE1MC44NTdDMTM3LjE1MiAxNTMuNTUzIDEzNy40MTcgMTU2LjE4NCAxMzcuNTU4IDE1OC44NDhDMTgzLjQ4NiAxNzkuNzA5IDIzNC4xODEgMTkyIDI4OC4wMDcgMTkyUzM5Mi41MjkgMTc5LjcwOSA0MzguNDU2IDE1OC44NDhDNDM4LjU5NyAxNTYuMTg0IDQzOC44NjMgMTUzLjU1MyA0MzguODYzIDE1MC44NTdDNDM4Ljg2NSA2Ny41NDMgMzcxLjMyNCAwIDI4OC4wMDkgMFpNMS42OTMgNDgxLjY4NEMtMi4yNTggNDg5LjU4NCAwLjk0MyA0OTkuMTkzIDguODQzIDUwMy4xNDZDOC44NDUgNTAzLjE0NiA4Ljg0NyA1MDMuMTQ4IDguODQ5IDUwMy4xNDhMMjMuMTY1IDUxMC4zMDdDMzEuMDY4IDUxNC4yNTggNDAuNjc3IDUxMS4wNTUgNDQuNjMgNTAzLjE1MkwxMjYuMzE2IDMzOS43NzNDMTI3LjIwNiAzMzcuOTYxIDEyNy43NCAzMzUuOTk0IDEyNy44ODYgMzMzLjk3OUMxMTIuNDYgMzMwLjI4NSA5Ny4yNCAzMjUuNzg3IDgyLjI4NSAzMjAuNTAyTDEuNjkzIDQ4MS42ODRaTTU3NC4zMDYgNDgxLjY4NlY0ODEuNjg0TDQ5My43MjIgMzIwLjUwNkM0NzguNzY1IDMyNS43ODkgNDYzLjU0IDMzMC4yODcgNDQ4LjExMyAzMzMuOThDNDQ4LjI2NyAzMzUuOTk0IDQ0OC44IDMzNy45NTkgNDQ5LjY4MyAzMzkuNzczTDUzMS4zNjkgNTAzLjE1MkM1MzUuMzI0IDUxMS4wNTUgNTQ0LjkzMyA1MTQuMjU4IDU1Mi44MzcgNTEwLjMwN0w1NjcuMTU0IDUwMy4xNDhDNTc1LjA1NiA0OTkuMTk3IDU3OC4yNTkgNDg5LjU4OCA1NzQuMzA2IDQ4MS42ODZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQzMi45NjEgMTExLjMzNEM0MzYuNDE0IDEyNC4wMDggNDM4Ljg1OSAxMzcuMDg4IDQzOC44NTkgMTUwLjg1N0M0MzguODU5IDE1My41NTMgNDM4LjU5NCAxNTYuMTg0IDQzOC40NTMgMTU4Ljg0OEMzOTIuNTIzIDE3OS43MDkgMzQxLjgyOCAxOTIgMjg4IDE5MlMxODMuNDc3IDE3OS43MDkgMTM3LjU0NyAxNTguODQ4QzEzNy40MDYgMTU2LjE4NCAxMzcuMTQxIDE1My41NTMgMTM3LjE0MSAxNTAuODU3QzEzNy4xNDEgMTM3LjA4OCAxMzkuNTg2IDEyNC4wMDggMTQzLjAzOSAxMTEuMzM0QzU3LjU3OCAxMzAuNzYgMCAxNjYuNzI1IDAgMjA4QzAgMjY5Ljg1NSAxMjguOTQxIDMyMCAyODggMzIwUzU3NiAyNjkuODU1IDU3NiAyMDhDNTc2IDE2Ni43MjUgNTE4LjQyMiAxMzAuNzYgNDMyLjk2MSAxMTEuMzM0Wk0xMjAgMjA4QzEyMCAyMjEuMjU0IDEwOS4yNTQgMjMxLjk5OCA5NiAyMzJDODIuNzQ0IDIzMiA3MiAyMjEuMjU0IDcxLjk5OCAyMDhDNzEuOTk4IDE5NC43NDYgODIuNzQ0IDE4NCA5NS45OTggMTg0QzEwOS4yNTQgMTg0IDEyMCAxOTQuNzQ0IDEyMCAyMDcuOTk4QzEyMCAyMDggMTIwIDIwOCAxMjAgMjA4Wk0zMTIgMjU2QzMxMiAyNjkuMjU0IDMwMS4yNTQgMjc5Ljk5OCAyODggMjgwQzI3NC43NDQgMjgwIDI2NCAyNjkuMjU0IDI2My45OTggMjU2QzI2My45OTggMjQyLjc0NiAyNzQuNzQ0IDIzMiAyODcuOTk4IDIzMkMzMDEuMjU0IDIzMiAzMTIgMjQyLjc0NCAzMTIgMjU1Ljk5OEMzMTIgMjU2IDMxMiAyNTYgMzEyIDI1NlpNNTA0IDIwOEM1MDQgMjIxLjI1NCA0OTMuMjU0IDIzMS45OTggNDgwIDIzMkM0NjYuNzQ0IDIzMiA0NTYgMjIxLjI1NCA0NTUuOTk4IDIwOEM0NTUuOTk4IDE5NC43NDYgNDY2Ljc0NCAxODQgNDc5Ljk5OCAxODRDNDkzLjI1NCAxODQgNTA0IDE5NC43NDQgNTA0IDIwNy45OThWMjA4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const UfoBeam: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288.009 0C288.007 0 288.007 0 288.007 0C204.691 0 137.152 67.541 137.152 150.855V150.857C137.152 153.553 137.417 156.184 137.558 158.848C183.486 179.709 234.181 192 288.007 192S392.529 179.709 438.456 158.848C438.597 156.184 438.863 153.553 438.863 150.857C438.865 67.543 371.324 0 288.009 0ZM1.693 481.684C-2.258 489.584 0.943 499.193 8.843 503.146C8.845 503.146 8.847 503.148 8.849 503.148L23.165 510.307C31.068 514.258 40.677 511.055 44.63 503.152L126.316 339.773C127.206 337.961 127.74 335.994 127.886 333.979C112.46 330.285 97.24 325.787 82.285 320.502L1.693 481.684ZM574.306 481.686V481.684L493.722 320.506C478.765 325.789 463.54 330.287 448.113 333.98C448.267 335.994 448.8 337.959 449.683 339.773L531.369 503.152C535.324 511.055 544.933 514.258 552.837 510.307L567.154 503.148C575.056 499.197 578.259 489.588 574.306 481.686Z" />
            <path d="M432.961 111.334C436.414 124.008 438.859 137.088 438.859 150.857C438.859 153.553 438.594 156.184 438.453 158.848C392.523 179.709 341.828 192 288 192S183.477 179.709 137.547 158.848C137.406 156.184 137.141 153.553 137.141 150.857C137.141 137.088 139.586 124.008 143.039 111.334C57.578 130.76 0 166.725 0 208C0 269.855 128.941 320 288 320S576 269.855 576 208C576 166.725 518.422 130.76 432.961 111.334ZM120 208C120 221.254 109.254 231.998 96 232C82.744 232 72 221.254 71.998 208C71.998 194.746 82.744 184 95.998 184C109.254 184 120 194.744 120 207.998C120 208 120 208 120 208ZM312 256C312 269.254 301.254 279.998 288 280C274.744 280 264 269.254 263.998 256C263.998 242.746 274.744 232 287.998 232C301.254 232 312 242.744 312 255.998C312 256 312 256 312 256ZM504 208C504 221.254 493.254 231.998 480 232C466.744 232 456 221.254 455.998 208C455.998 194.746 466.744 184 479.998 184C493.254 184 504 194.744 504 207.998V208Z" />
    </Icon>
);

export default UfoBeam;