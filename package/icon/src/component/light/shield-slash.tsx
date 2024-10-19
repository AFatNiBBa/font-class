
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `shield-slash` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/shield-slash?s=light shield-slash}
 * @preview ![shield-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAuMDYyIDQ3OS45NjlDMzA0LjgwMSA0NzkuOTY5IDEzOS41ODIgNDAzLjA1NSAxMTQuODUxIDE3NS41ODZMODAuNzQxIDE0OC42NjRDOTAuNzcyIDM5My41NjQgMjcxLjc0MSA1MTIgMzE5LjkzNyA1MTJDMzU4Ljc2NSA1MTIgNDI2LjczNiA0NTAuNSA0NDIuNTA1IDQzNC4yNThMNDE3LjQ0MSA0MTQuNDY5QzM3OC43NTcgNDU0LjgzNyAzMzEuOTM4IDQ3OS45NjkgMzIwLjA2MiA0NzkuOTY5Wk0zMTMuNzQ5IDMzLjI1QzMxNS43MjIgMzIuNDIyIDMxNy44NTggMzEuOTg0IDMyMC4wMDcgMzEuOTg0QzMyMi4wNzggMzEuOTg0IDMyNC4xNjEgMzIuMzkxIDMyNi4xMjQgMzMuMjVMNTE4LjEyNCAxMTMuMjVDNTI3LjI2NSAxMTcuMDU5IDUyNy44NzQgMTI1LjgzOCA1MjcuODc0IDEyOC4zMTJDNTI3Ljg3NCAxOTQuOTY0IDUxMi44OTcgMjU1LjgxNiA0ODkuMDM2IDMwNy44NjdMNTE1Ljc4MiAzMjguOTg0QzU0Mi4yNzUgMjc0LjI2NiA1NTkuOTk5IDIwNy41NjIgNTU5Ljk5OSAxMjhDNTU5Ljk5OSAxMDguNjI1IDU0OC4yNDkgOTEuMTI1IDUzMC40OTkgODMuNzVMMzM4LjQ5OSAzLjc1QzMzMi42MjQgMS4yNSAzMjYuMzQzIDAgMzIwLjA2MiAwUzMwNy40OTkgMS4yNSAzMDEuNjI0IDMuNzVMMTcyLjE1MyA1Ny42OTVMMjAwLjggODAuMzEyTDMxMy43NDkgMzMuMjVaTTYzOS45OTggNDk2LjAxOUM2MzkuOTk4IDQ5MS4yODcgNjM3LjkxNCA0ODYuNjAxIDYzMy45MjEgNDgzLjQzOEwyNS45MjEgMy40MjJDMjIuOTg5IDEuMTE3IDE5LjQ5OSAwLjAwMiAxNi4wMzIgMC4wMDJDNy4zODQgMC4wMDIgMCA2Ljg5OCAwIDE1Ljk2NkMwIDIwLjY5NyAyLjA4NSAyNS4zODMgNi4wNzcgMjguNTQ3TDYxNC4wNzcgNTA4LjU2M0M2MTcuMDE1IDUxMC44NzUgNjIwLjUxNSA1MTIgNjIzLjk4NCA1MTJDNjMyLjUzNSA1MTIgNjM5Ljk5OCA1MDUuMTQ2IDYzOS45OTggNDk2LjAxOVogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function ShieldSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M320.062 479.969C304.801 479.969 139.582 403.055 114.851 175.586L80.741 148.664C90.772 393.564 271.741 512 319.937 512C358.765 512 426.736 450.5 442.505 434.258L417.441 414.469C378.757 454.837 331.938 479.969 320.062 479.969ZM313.749 33.25C315.722 32.422 317.858 31.984 320.007 31.984C322.078 31.984 324.161 32.391 326.124 33.25L518.124 113.25C527.265 117.059 527.874 125.838 527.874 128.312C527.874 194.964 512.897 255.816 489.036 307.867L515.782 328.984C542.275 274.266 559.999 207.562 559.999 128C559.999 108.625 548.249 91.125 530.499 83.75L338.499 3.75C332.624 1.25 326.343 0 320.062 0S307.499 1.25 301.624 3.75L172.153 57.695L200.8 80.312L313.749 33.25ZM639.998 496.019C639.998 491.287 637.914 486.601 633.921 483.438L25.921 3.422C22.989 1.117 19.499 0.002 16.032 0.002C7.384 0.002 0 6.898 0 15.966C0 20.697 2.085 25.383 6.077 28.547L614.077 508.563C617.015 510.875 620.515 512 623.984 512C632.535 512 639.998 505.146 639.998 496.019Z " />
        </Icon>
    </>
}