
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-d10` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-d10?s=solid dice-d10}
 * @preview ![dice-d10](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNTAuODc1IDI2Mi4xNDRMMjM5LjA2MiAzMjMuNjE0VjUwMy4xMTZDMjM5LjA2MiA1MDguNDA5IDIzNC45MTggNTExLjk4NiAyMzAuNTU1IDUxMS45ODZDMjI4LjY1OCA1MTEuOTg2IDIyNi43MiA1MTEuMzEgMjI1LjA2MiA1MDkuODA0TDIuOTA2IDMwNy42MTRDMC45MTYgMzA1Ljc4OSAwIDMwMy4zNjUgMCAzMDAuOTc2QzAgMjk3LjAyNCAyLjUwOCAyOTMuMTY2IDYuODEyIDI5Mi4yN0wxNTAuODc1IDI2Mi4xNDRaTTkuMzI2IDI1NS40NTdDNC40ODYgMjU1LjQ1NyAwLjk0MSAyNTEuMTQ3IDAuOTQxIDI0Ni41NDNDMC45NDEgMjQ0LjYwMiAxLjU3MSAyNDIuNjA4IDMgMjQwLjg2M0wxOTQuODEyIDYuOTg0QzE5Ni42MTIgNC43ODQgMTk4Ljg4NCAzLjgzOCAyMDEuMTA5IDMuODM4QzIwNS41MTEgMy44MzggMjA5LjcyNyA3LjU0MSAyMDkuNzI3IDEyLjU1NUMyMDkuNzI3IDEzLjUgMjA5LjU3NyAxNC40OTMgMjA5LjI1IDE1LjUxNkwxNDEuNDY4IDIyOC4wMTlMMTEuMDkzIDI1NS4yNjlDMTAuNDg5IDI1NS4zOTYgOS44OTggMjU1LjQ1NyA5LjMyNiAyNTUuNDU3Wk0zMzcuNDM3IDIzNi4xNDRMMjU2IDI5Mi44NjNMMTc0LjU2MiAyMzYuMTQ0TDI0Ny45NjggNi4wNDdDMjQ5LjI1IDIuMDE2IDI1Mi42MjUgMCAyNTYgMFMyNjIuNzUgMi4wMTYgMjY0LjAzMSA2LjA0N0wzMzcuNDM3IDIzNi4xNDRaTTUxMS45OTkgMzAwLjk3NkM1MTEuOTk5IDMwMy4zNjUgNTExLjA4MyAzMDUuNzg5IDUwOS4wOTMgMzA3LjYxNEwyODYuOTM3IDUwOS44MDRDMjg1LjI3OSA1MTEuMzIgMjgzLjM0IDUxMiAyODEuNDQyIDUxMkMyNzcuMDggNTEyIDI3Mi45MzcgNTA4LjQwOCAyNzIuOTM3IDUwMy4xMTZWMzIzLjYxNEwzNjEuMTI1IDI2Mi4xNDRMNTA1LjE4NyAyOTIuMjdDNTA5LjQ5MiAyOTMuMTY2IDUxMS45OTkgMjk3LjAyNCA1MTEuOTk5IDMwMC45NzZaTTMwMi43MTggMTUuNTE2QzMwMi4zOTggMTQuNTAyIDMwMi4yNTEgMTMuNTE5IDMwMi4yNTEgMTIuNTgxQzMwMi4yNTEgNy41NTQgMzA2LjQ3OSAzLjgzOCAzMTAuODkgMy44MzhDMzEzLjExNSAzLjgzOCAzMTUuMzg4IDQuNzg0IDMxNy4xODcgNi45ODRMNTA5IDI0MC44NjNDNTEwLjQyOCAyNDIuNjA4IDUxMS4wNTggMjQ0LjYwMiA1MTEuMDU4IDI0Ni41NDNDNTExLjA1OCAyNTEuMTU5IDUwNy40OTkgMjU1LjQ4MSA1MDIuNjQ1IDI1NS40ODFDNTAyLjA4MSAyNTUuNDgxIDUwMS41MDEgMjU1LjQyMyA1MDAuOTA2IDI1NS4zTDM3MC41MzEgMjI4LjA1TDMwMi43MTggMTUuNTE2WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function DiceD10(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M150.875 262.144L239.062 323.614V503.116C239.062 508.409 234.918 511.986 230.555 511.986C228.658 511.986 226.72 511.31 225.062 509.804L2.906 307.614C0.916 305.789 0 303.365 0 300.976C0 297.024 2.508 293.166 6.812 292.27L150.875 262.144ZM9.326 255.457C4.486 255.457 0.941 251.147 0.941 246.543C0.941 244.602 1.571 242.608 3 240.863L194.812 6.984C196.612 4.784 198.884 3.838 201.109 3.838C205.511 3.838 209.727 7.541 209.727 12.555C209.727 13.5 209.577 14.493 209.25 15.516L141.468 228.019L11.093 255.269C10.489 255.396 9.898 255.457 9.326 255.457ZM337.437 236.144L256 292.863L174.562 236.144L247.968 6.047C249.25 2.016 252.625 0 256 0S262.75 2.016 264.031 6.047L337.437 236.144ZM511.999 300.976C511.999 303.365 511.083 305.789 509.093 307.614L286.937 509.804C285.279 511.32 283.34 512 281.442 512C277.08 512 272.937 508.408 272.937 503.116V323.614L361.125 262.144L505.187 292.27C509.492 293.166 511.999 297.024 511.999 300.976ZM302.718 15.516C302.398 14.502 302.251 13.519 302.251 12.581C302.251 7.554 306.479 3.838 310.89 3.838C313.115 3.838 315.388 4.784 317.187 6.984L509 240.863C510.428 242.608 511.058 244.602 511.058 246.543C511.058 251.159 507.499 255.481 502.645 255.481C502.081 255.481 501.501 255.423 500.906 255.3L370.531 228.05L302.718 15.516Z " />
        </Icon>
    </>
}