
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=regular stamp}
 * @preview ![stamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgNDYzLjk5OEg0OEMzOS4xNjQgNDYzLjk5OCAzMiA0NzEuMTYyIDMyIDQ3OS45OThWNDk2QzMyIDUwNC44MzYgMzkuMTY0IDUxMiA0OCA1MTJINDY0QzQ3Mi44MzYgNTEyIDQ4MCA1MDQuODM2IDQ4MCA0OTZWNDc5Ljk5OEM0ODAgNDcxLjE2MiA0NzIuODM2IDQ2My45OTggNDY0IDQ2My45OThaTTQxNS45OTggMjU1Ljk5NkgzNDkuNUMzMzMuMTI1IDI1NS45OTYgMzIwIDI0Mi44NjkgMzIwIDIyNi40OTRWMjE3LjExOUMzMjAuMDAyIDE4OS44MDkgMzI4Ljc4MyAxNjMuNzg1IDM0MS4zOTggMTM5LjU2MkMzNTAuNjg2IDEyMS43MjkgMzU0LjQ2MSAxMDAuNjc2IDM1MC4zODkgNzguMzYxQzM0My4zMzQgMzkuNzIxIDMxMS42NDYgOC4wMTQgMjcyLjkyMiAxLjQzNEMyNjcuMjIzIDAuNDY3IDI2MS41ODggMCAyNTYuMDY2IDBDMjAzLjAxMiAtMC4wMDQgMTYwIDQyLjk4OCAxNjAgOTUuOTkyQzE2MCAxMTAuMTE3IDE2My4xMjUgMTIzLjQ5MiAxNjguNzUgMTM1LjYxOUMxODIuMSAxNjQuNTg2IDE5Mi4xNSAxOTUuMjAzIDE5MS45OTggMjI3LjIxM0MxOTEuOTIgMjQzLjE3MiAxNzguNDU5IDI1NS45OTYgMTYyLjUgMjU1Ljk5Nkg5Ni4wMDJDNDIuOTgyIDI1NS45OTYgMCAyOTguOTc3IDAgMzUxLjk5NlYzOTkuOTk4QzAgNDE3LjY3MiAxNC4zMjYgNDMxLjk5OCAzMiA0MzEuOTk4SDQ4MEM0OTcuNjc0IDQzMS45OTggNTEyIDQxNy42NzIgNTEyIDM5OS45OThWMzUxLjk5NkM1MTIgMjk4Ljk3NyA0NjkuMDIgMjU1Ljk5NiA0MTUuOTk4IDI1NS45OTZaTTQ2NCAzODMuOTk4SDQ4VjM1MS45OTZDNDggMzI1LjUyOSA2OS41MzMgMzAzLjk5NiA5Ni4wMDIgMzAzLjk5NkgxNjIuNUMyMDUuMDI5IDMwMy45OTYgMjM5Ljc5MyAyNjkuNjU0IDIzOS45OTYgMjI3LjQ0M0MyNDAuMTY2IDE5Mi4zOTMgMjMxLjM3NyAxNTYuODMgMjEyLjI5MyAxMTUuNDJDMjA5LjQ0NSAxMDkuMjc3IDIwOCAxMDIuNzQyIDIwOCA5NS45OTJDMjA4IDgzLjE4NCAyMTIuOTk2IDcxLjEzNyAyMjIuMDY4IDYyLjA3QzIzMS4xNDggNTIuOTk2IDI0My4yMjMgNDggMjU2LjA2NCA0OEMyNTguOTYxIDQ4IDI2MS45MyA0OC4yNTQgMjY0Ljg4MyA0OC43NTZDMjgzLjYwNCA1MS45MzggMjk5LjcwNSA2OC4wMTIgMzAzLjE2OCA4Ni45OEMzMDUuMTQ4IDk3LjgyNCAzMDMuNjg4IDEwOC4wNTcgMjk4LjgyNiAxMTcuMzkzQzI4MC43NzUgMTUyLjA1MSAyNzIuMDAyIDE4NC42NzIgMjcyIDIxNy4xMTlWMjI2LjQ5NEMyNzIgMjY5LjIyOSAzMDYuNzY4IDMwMy45OTYgMzQ5LjUgMzAzLjk5Nkg0MTUuOTk4QzQ0Mi40NjcgMzAzLjk5NiA0NjQgMzI1LjUyOSA0NjQgMzUxLjk5NlYzODMuOTk4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Stamp(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 463.998H48C39.164 463.998 32 471.162 32 479.998V496C32 504.836 39.164 512 48 512H464C472.836 512 480 504.836 480 496V479.998C480 471.162 472.836 463.998 464 463.998ZM415.998 255.996H349.5C333.125 255.996 320 242.869 320 226.494V217.119C320.002 189.809 328.783 163.785 341.398 139.562C350.686 121.729 354.461 100.676 350.389 78.361C343.334 39.721 311.646 8.014 272.922 1.434C267.223 0.467 261.588 0 256.066 0C203.012 -0.004 160 42.988 160 95.992C160 110.117 163.125 123.492 168.75 135.619C182.1 164.586 192.15 195.203 191.998 227.213C191.92 243.172 178.459 255.996 162.5 255.996H96.002C42.982 255.996 0 298.977 0 351.996V399.998C0 417.672 14.326 431.998 32 431.998H480C497.674 431.998 512 417.672 512 399.998V351.996C512 298.977 469.02 255.996 415.998 255.996ZM464 383.998H48V351.996C48 325.529 69.533 303.996 96.002 303.996H162.5C205.029 303.996 239.793 269.654 239.996 227.443C240.166 192.393 231.377 156.83 212.293 115.42C209.445 109.277 208 102.742 208 95.992C208 83.184 212.996 71.137 222.068 62.07C231.148 52.996 243.223 48 256.064 48C258.961 48 261.93 48.254 264.883 48.756C283.604 51.938 299.705 68.012 303.168 86.98C305.148 97.824 303.688 108.057 298.826 117.393C280.775 152.051 272.002 184.672 272 217.119V226.494C272 269.229 306.768 303.996 349.5 303.996H415.998C442.467 303.996 464 325.529 464 351.996V383.998Z" />
        </Icon>
    </>
}