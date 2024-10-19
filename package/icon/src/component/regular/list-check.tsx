
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `list-check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/list-check?s=regular list-check}
 * @preview ![list-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTUuOTY5IDEyMEg0ODcuOTY5QzUwMS4yMjMgMTIwIDUxMS45NjkgMTA5LjI1NCA1MTEuOTY5IDk2QzUxMS45NjkgODIuNzQ0IDUwMS4yMjMgNzIgNDg3Ljk2OSA3MkgyMTUuOTY5QzIwMi43MTUgNzIgMTkxLjk2OSA4Mi43NDQgMTkxLjk2OSA5NkMxOTEuOTY5IDEwOS4yNTQgMjAyLjcxNSAxMjAgMjE1Ljk2OSAxMjBaTTQ3Ljk2OSAzODRDMzAuMzAzIDM4NCAxNS45NjkgMzk4LjMzMiAxNS45NjkgNDE2QzE1Ljk2OSA0MzMuNjY2IDMwLjMwMyA0NDggNDcuOTY5IDQ0OFM3OS45NjkgNDMzLjY2NiA3OS45NjkgNDE2Qzc5Ljk2OSAzOTguMzMyIDY1LjYzNSAzODQgNDcuOTY5IDM4NFpNNDg3Ljk2OSAyMzJIMjE1Ljk2OUMyMDIuNzE1IDIzMiAxOTEuOTY5IDI0Mi43NDQgMTkxLjk2OSAyNTZDMTkxLjk2OSAyNjkuMjU0IDIwMi43MTUgMjgwIDIxNS45NjkgMjgwSDQ4Ny45NjlDNTAxLjIyMyAyODAgNTExLjk2OSAyNjkuMjU0IDUxMS45NjkgMjU2QzUxMS45NjkgMjQyLjc0NCA1MDEuMjIzIDIzMiA0ODcuOTY5IDIzMlpNNDg3Ljk2OSAzOTJIMTgzLjk2OUMxNzAuNzE1IDM5MiAxNTkuOTY5IDQwMi43NDQgMTU5Ljk2OSA0MTZDMTU5Ljk2OSA0MjkuMjU0IDE3MC43MTUgNDQwIDE4My45NjkgNDQwSDQ4Ny45NjlDNTAxLjIyMyA0NDAgNTExLjk2OSA0MjkuMjU0IDUxMS45NjkgNDE2QzUxMS45NjkgNDAyLjc0NCA1MDEuMjIzIDM5MiA0ODcuOTY5IDM5MlpNMTE4LjEyNSAzOS45MzhMNjMuMDYzIDEwMS4xNDFMNDAuOTM4IDc5LjAzMUMzMS41NjMgNjkuNjU2IDE2LjM3NSA2OS42NTYgNyA3OS4wMzFTLTIuMzc1IDEwMy41OTQgNyAxMTIuOTY5TDQ3IDE1Mi45NjlDNTEuNSAxNTcuNDg0IDU3LjYyNSAxNjAgNjMuOTY5IDE2MEM2NC4xODggMTYwIDY0LjM3NSAxNjAgNjQuNTk0IDE1OS45ODRDNzEuMTg4IDE1OS44MTIgNzcuNDA2IDE1Ni45NTMgODEuODEzIDE1Mi4wNjJMMTUzLjgxMyA3Mi4wNjJDMTYyLjY4OCA2Mi4yMDMgMTYxLjg3NSA0Ny4wMzEgMTUyLjAzMSAzOC4xNTZDMTQyLjE4OCAyOS4zMTIgMTI3LjAzMSAzMC4wOTQgMTE4LjEyNSAzOS45MzhaTTExOC4xMjUgMTk5LjkzOEw2My4wNjMgMjYxLjE0MUw0MC45MzggMjM5LjAzMUMzMS41NjMgMjI5LjY1NiAxNi4zNzUgMjI5LjY1NiA3IDIzOS4wMzFTLTIuMzc1IDI2My41OTQgNyAyNzIuOTY5TDQ3IDMxMi45NjlDNTEuNSAzMTcuNDg0IDU3LjYyNSAzMjAgNjMuOTY5IDMyMEM2NC4xODggMzIwIDY0LjM3NSAzMjAgNjQuNTk0IDMxOS45ODRDNzEuMTg4IDMxOS44MTIgNzcuNDA2IDMxNi45NTMgODEuODEzIDMxMi4wNjJMMTUzLjgxMyAyMzIuMDYyQzE2Mi42ODggMjIyLjIwMyAxNjEuODc1IDIwNy4wMzEgMTUyLjAzMSAxOTguMTU2QzE0Mi4xODggMTg5LjMxMiAxMjcuMDMxIDE5MC4wOTQgMTE4LjEyNSAxOTkuOTM4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ListCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M215.969 120H487.969C501.223 120 511.969 109.254 511.969 96C511.969 82.744 501.223 72 487.969 72H215.969C202.715 72 191.969 82.744 191.969 96C191.969 109.254 202.715 120 215.969 120ZM47.969 384C30.303 384 15.969 398.332 15.969 416C15.969 433.666 30.303 448 47.969 448S79.969 433.666 79.969 416C79.969 398.332 65.635 384 47.969 384ZM487.969 232H215.969C202.715 232 191.969 242.744 191.969 256C191.969 269.254 202.715 280 215.969 280H487.969C501.223 280 511.969 269.254 511.969 256C511.969 242.744 501.223 232 487.969 232ZM487.969 392H183.969C170.715 392 159.969 402.744 159.969 416C159.969 429.254 170.715 440 183.969 440H487.969C501.223 440 511.969 429.254 511.969 416C511.969 402.744 501.223 392 487.969 392ZM118.125 39.938L63.063 101.141L40.938 79.031C31.563 69.656 16.375 69.656 7 79.031S-2.375 103.594 7 112.969L47 152.969C51.5 157.484 57.625 160 63.969 160C64.188 160 64.375 160 64.594 159.984C71.188 159.812 77.406 156.953 81.813 152.062L153.813 72.062C162.688 62.203 161.875 47.031 152.031 38.156C142.188 29.312 127.031 30.094 118.125 39.938ZM118.125 199.938L63.063 261.141L40.938 239.031C31.563 229.656 16.375 229.656 7 239.031S-2.375 263.594 7 272.969L47 312.969C51.5 317.484 57.625 320 63.969 320C64.188 320 64.375 320 64.594 319.984C71.188 319.812 77.406 316.953 81.813 312.062L153.813 232.062C162.688 222.203 161.875 207.031 152.031 198.156C142.188 189.312 127.031 190.094 118.125 199.938Z" />
        </Icon>
    </>
}