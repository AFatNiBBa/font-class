
import { Icon } from "../../index";

/**
 * A component that renders the `eclipse` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/eclipse?s=thin eclipse}
 * @preview ![eclipse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQuMDEgODAuMDIxQzM2Ni43NjQgODAuMDIxIDI4OC4wMTggMTU4Ljc2MiAyODguMDE4IDI1NlMzNjYuNzY0IDQzMS45NzkgNDY0LjAxIDQzMS45NzlDNTYxLjI1NCA0MzEuOTc5IDY0MCAzNTMuMjM4IDY0MCAyNTZTNTYxLjI1NCA4MC4wMjEgNDY0LjAxIDgwLjAyMVpNNDY0LjAxIDQxNS45NzlDMzc1Ljc4OSA0MTUuOTc5IDMwNC4wMTggMzQ0LjIxMyAzMDQuMDE4IDI1NlMzNzUuNzg5IDk2LjAyMSA0NjQuMDEgOTYuMDIxQzU1Mi4yMjkgOTYuMDIxIDYyNCAxNjcuNzg3IDYyNCAyNTZTNTUyLjIyOSA0MTUuOTc5IDQ2NC4wMSA0MTUuOTc5Wk0zMDQuOTA2IDQxMi4yODFMMjYzLjczNCA0OTEuMDk0QzI2Mi4yMTkgNDk0LjE4OCAyNTkuMjk3IDQ5NiAyNTUuOTA2IDQ5NkgyNTUuODkxQzI1Mi41IDQ5NiAyNDkuNTYyIDQ5NC4xODggMjQ4LjAzMSA0OTEuMDk0TDIwMi4yNjYgMzk5LjQzOEMyMDAuNDg0IDM5NS44NDQgMTk2LjI2NiAzOTQuMDk0IDE5Mi41NzggMzk1LjQwNkw5NS4zNDQgNDI3Ljg0NEM5Mi4wNzggNDI4Ljk2OSA4OC43NjYgNDI4LjA5NCA4Ni4zMjggNDI1LjcxOUM4My44OTEgNDIzLjI4MSA4My4wNzggNDE5Ljg3NSA4NC4xNTYgNDE2LjY1NkwxMTYuNjA5IDMxOS4zMTJDMTE3Ljg1OSAzMTUuNTMxIDExNi4xNTYgMzExLjQwNiAxMTIuNTk0IDMwOS42MjVMMjAuODkxIDI2My44MTJDMTcuODI4IDI2Mi4zMTIgMTYgMjU5LjM3NSAxNiAyNTZTMTcuODI4IDI0OS42ODggMjAuOTM4IDI0OC4xNTZMMTEyLjU5NCAyMDIuMjVDMTE2LjE1NiAyMDAuNDY5IDExNy44NTkgMTk2LjM0NCAxMTYuNjA5IDE5Mi41NjJMODQuMTU2IDk1LjM0NEM4My4wNzggOTIuMTI1IDgzLjg3NSA4OC43NSA4Ni4zMTIgODYuMzEyQzg4LjcxOSA4My44NDQgOTIuMTQxIDgzLjA2MiA5NS4zNDQgODQuMTU2TDE5Mi43MDMgMTE2LjU5NEMxOTYuNDY5IDExNy44NDQgMjAwLjU5NCAxMTYuMTI1IDIwMi4zOTEgMTEyLjU2MkwyNDguMTcyIDIwLjkwNkMyNTEuMjAzIDE0LjcxOSAyNjAuNzUgMTQuNTk0IDI2My45MzggMjEuMDMxTDMwNC45MDYgOTkuNjg3QzMwNi45NjkgMTAzLjY1NiAzMTEuNzgxIDEwNS4xNTYgMzE1LjcwMyAxMDMuMDk0QzMxOS42MDkgMTAxLjA2MiAzMjEuMTQxIDk2LjIxOSAzMTkuMDk0IDkyLjMxMkwyNzguMjAzIDEzLjc4MUMyNzMuOTg0IDUuMjgxIDI2NS40ODQgMCAyNTYuMDE2IDBTMjM4LjA0NyA1LjI4MSAyMzMuODQ0IDEzLjc4MUwxOTEuMTcyIDk5LjIxOUwxMDAuMzkxIDY4Ljk2OUM5MS4zNzUgNjYuMDMxIDgxLjY4OCA2OC4zNDQgNzQuOTg0IDc1QzY4LjI5NyA4MS43MTkgNjUuOTg0IDkxLjQzOCA2OC45NjkgMTAwLjQwNkw5OS4yMzQgMTkxLjA2MkwxMy44MjggMjMzLjgxMkM1LjI5NyAyMzguMDMxIDAgMjQ2LjUzMSAwIDI1NlM1LjI5NyAyNzMuOTY5IDEzLjc4MSAyNzguMTU2TDk5LjIzNCAzMjAuODQ0TDY4Ljk2OSA0MTEuNjI1QzY2IDQyMC41OTQgNjguMzI4IDQzMC4zNDQgNzUuMDMxIDQzNy4wMzFDODEuNzY2IDQ0My43NSA5MS41MzEgNDQ2LjA5NCAxMDAuNDA2IDQ0My4wMzFMMTkxLjA0NyA0MTIuNzgxTDIzMy43MDMgNDk4LjIxOUMyMzcuOTM4IDUwNi43MTkgMjQ2LjQzOCA1MTIgMjU1Ljg5MSA1MTJDMjU1LjkwNiA1MTIgMjU1LjkwNiA1MTIgMjU1LjkwNiA1MTJDMjY1LjM3NSA1MTIgMjczLjg1OSA1MDYuNzE5IDI3OCA0OTguMzc1TDMxOS4wOTQgNDE5LjcxOUMzMjEuMTQxIDQxNS43ODEgMzE5LjYyNSA0MTAuOTY5IDMxNS43MDMgNDA4LjkwNkMzMTEuODEyIDQwNi44NzUgMzA2Ljk4NCA0MDguNDA2IDMwNC45MDYgNDEyLjI4MVpNMjU2LjAxNiAxNjhDMjYwLjQzOCAxNjggMjY0LjAxNiAxNjQuNDA2IDI2NC4wMTYgMTYwUzI2MC40MzggMTUyIDI1Ni4wMTYgMTUyQzE5OC42NzIgMTUyIDE1Mi4wMTYgMTk4LjY1NiAxNTIuMDE2IDI1NlMxOTguNjcyIDM2MCAyNTYuMDE2IDM2MEMyNjAuNDM4IDM2MCAyNjQuMDE2IDM1Ni40MDYgMjY0LjAxNiAzNTJTMjYwLjQzOCAzNDQgMjU2LjAxNiAzNDRDMjA3LjQ4NCAzNDQgMTY4LjAxNiAzMDQuNTMxIDE2OC4wMTYgMjU2UzIwNy40ODQgMTY4IDI1Ni4wMTYgMTY4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Eclipse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464.01 80.021C366.764 80.021 288.018 158.762 288.018 256S366.764 431.979 464.01 431.979C561.254 431.979 640 353.238 640 256S561.254 80.021 464.01 80.021ZM464.01 415.979C375.789 415.979 304.018 344.213 304.018 256S375.789 96.021 464.01 96.021C552.229 96.021 624 167.787 624 256S552.229 415.979 464.01 415.979ZM304.906 412.281L263.734 491.094C262.219 494.188 259.297 496 255.906 496H255.891C252.5 496 249.562 494.188 248.031 491.094L202.266 399.438C200.484 395.844 196.266 394.094 192.578 395.406L95.344 427.844C92.078 428.969 88.766 428.094 86.328 425.719C83.891 423.281 83.078 419.875 84.156 416.656L116.609 319.312C117.859 315.531 116.156 311.406 112.594 309.625L20.891 263.812C17.828 262.312 16 259.375 16 256S17.828 249.688 20.938 248.156L112.594 202.25C116.156 200.469 117.859 196.344 116.609 192.562L84.156 95.344C83.078 92.125 83.875 88.75 86.312 86.312C88.719 83.844 92.141 83.062 95.344 84.156L192.703 116.594C196.469 117.844 200.594 116.125 202.391 112.562L248.172 20.906C251.203 14.719 260.75 14.594 263.938 21.031L304.906 99.687C306.969 103.656 311.781 105.156 315.703 103.094C319.609 101.062 321.141 96.219 319.094 92.312L278.203 13.781C273.984 5.281 265.484 0 256.016 0S238.047 5.281 233.844 13.781L191.172 99.219L100.391 68.969C91.375 66.031 81.688 68.344 74.984 75C68.297 81.719 65.984 91.438 68.969 100.406L99.234 191.062L13.828 233.812C5.297 238.031 0 246.531 0 256S5.297 273.969 13.781 278.156L99.234 320.844L68.969 411.625C66 420.594 68.328 430.344 75.031 437.031C81.766 443.75 91.531 446.094 100.406 443.031L191.047 412.781L233.703 498.219C237.938 506.719 246.438 512 255.891 512C255.906 512 255.906 512 255.906 512C265.375 512 273.859 506.719 278 498.375L319.094 419.719C321.141 415.781 319.625 410.969 315.703 408.906C311.812 406.875 306.984 408.406 304.906 412.281ZM256.016 168C260.438 168 264.016 164.406 264.016 160S260.438 152 256.016 152C198.672 152 152.016 198.656 152.016 256S198.672 360 256.016 360C260.438 360 264.016 356.406 264.016 352S260.438 344 256.016 344C207.484 344 168.016 304.531 168.016 256S207.484 168 256.016 168Z" />
    </Icon>
);

export default Eclipse;