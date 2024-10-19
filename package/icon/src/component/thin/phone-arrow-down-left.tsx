
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-down-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-down-left?s=thin phone-arrow-down-left}
 * @preview ![phone-arrow-down-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYgMjI0SDQ0MEM0NDQuNDIyIDIyNCA0NDggMjIwLjQyMiA0NDggMjE2UzQ0NC40MjIgMjA4IDQ0MCAyMDhIMzE1LjMxMkw1MDkuNjU2IDEzLjY1NkM1MTIuNzgxIDEwLjUzMSA1MTIuNzgxIDUuNDY5IDUwOS42NTYgMi4zNDRDNTA4LjA5NCAwLjc4MSA1MDYuMDQ3IDAgNTA0IDBTNDk5LjkwNiAwLjc4MSA0OTguMzQ0IDIuMzQ0TDMwNCAxOTYuNjg4VjcyQzMwNCA2Ny41NzggMzAwLjQyMiA2NCAyOTYgNjRTMjg4IDY3LjU3OCAyODggNzJWMjE2QzI4OCAyMjAuNDIyIDI5MS41NzggMjI0IDI5NiAyMjRaTTQ5My4wOTQgMzUxLjI0OEwzODQuNjA5IDMwNC43NDhDMzgwLjY0MyAzMDMuMDMxIDM3Ni40NjEgMzAyLjIwNSAzNzIuMzE4IDMwMi4yMDVDMzYzLjExNyAzMDIuMjA1IDM1NC4xMTcgMzA2LjI4MSAzNDguMTI1IDMxMy43MTdMMzA0LjA3OCAzNjcuNTI5QzIzNC44MjggMzMzLjUyOSAxNzguNTMxIDI3Ny4yNDggMTQ0LjU0NyAyMDguMDI3TDE5OC4zNzUgMTYzLjkzNEMyMDkuMTI1IDE1NS4xNTIgMjEyLjc5NyAxNDAuMjc3IDIwNy4zNTkgMTI3LjQ5NEwxNjAuODI4IDE4LjkzMkMxNTUuNzA5IDcuMjUgMTQ0LjI0OCAwIDEzMi4wMDYgMEMxMjkuNjc2IDAgMTI3LjMxOCAwLjI2MiAxMjQuOTY5IDAuODA3TDI0LjIxOSAyNC4wNTdDOS45NjkgMjcuMzA3IDAgMzkuODM4IDAgNTQuNDk0QzAgMzA2Ljc3OSAyMDUuMjM0IDUxMiA0NTcuNDg0IDUxMkM0NzIuMTU2IDUxMiA0ODQuNjg4IDUwMi4wMzEgNDg3Ljk1MyA0ODcuNzgxTDUxMS4yMDMgMzg3QzUxNC41NzggMzcyLjQwNCA1MDcgMzU3LjI0OCA0OTMuMDk0IDM1MS4yNDhaTTQ5NS42MTMgMzgzLjQwMkw0NzIuMzU3IDQ4NC4yMDdDNDcwLjc2OCA0OTEuMTUgNDY0LjY1IDQ5NiA0NTcuNDg0IDQ5NkMyMTQuMDQ5IDQ5NiAxNiAyOTcuOTQxIDE2IDU0LjQ5NEMxNiA0Ny4zNCAyMC44NDQgNDEuMjM4IDI3LjgxNiAzOS42NDZDMTQwLjI5MSAxMy42OTEgMTMwLjM2NSAxNiAxMzIuMDA2IDE2QzEzOC4xMjMgMTYgMTQzLjY4NCAxOS42NzIgMTQ2LjEyMyAyNS4yMzRMMTkyLjYzNyAxMzMuNzU2QzE5NS4yNzcgMTM5Ljk2MyAxOTMuNDc1IDE0Ny4yNzcgMTg4LjIzNiAxNTEuNTU3TDEyNC41OTQgMjAzLjY4OUMxOTEuMjIxIDMzOS4zODcgMjg5LjI1OCAzNzguMDc0IDMwOC40MiAzODcuNDg2TDM2MC41ODQgMzIzLjc1NkMzNjIuNTk2IDMyMS4yNiAzNjkuNDggMzE1LjYzMyAzNzguMzA3IDMxOS40NTNMNDg2Ljc1NiAzNjUuOTM5QzQ5My41NTEgMzY4Ljg3MSA0OTcuMjc1IDM3Ni4yMTEgNDk1LjYxMyAzODMuNDAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PhoneArrowDownLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M296 224H440C444.422 224 448 220.422 448 216S444.422 208 440 208H315.312L509.656 13.656C512.781 10.531 512.781 5.469 509.656 2.344C508.094 0.781 506.047 0 504 0S499.906 0.781 498.344 2.344L304 196.688V72C304 67.578 300.422 64 296 64S288 67.578 288 72V216C288 220.422 291.578 224 296 224ZM493.094 351.248L384.609 304.748C380.643 303.031 376.461 302.205 372.318 302.205C363.117 302.205 354.117 306.281 348.125 313.717L304.078 367.529C234.828 333.529 178.531 277.248 144.547 208.027L198.375 163.934C209.125 155.152 212.797 140.277 207.359 127.494L160.828 18.932C155.709 7.25 144.248 0 132.006 0C129.676 0 127.318 0.262 124.969 0.807L24.219 24.057C9.969 27.307 0 39.838 0 54.494C0 306.779 205.234 512 457.484 512C472.156 512 484.688 502.031 487.953 487.781L511.203 387C514.578 372.404 507 357.248 493.094 351.248ZM495.613 383.402L472.357 484.207C470.768 491.15 464.65 496 457.484 496C214.049 496 16 297.941 16 54.494C16 47.34 20.844 41.238 27.816 39.646C140.291 13.691 130.365 16 132.006 16C138.123 16 143.684 19.672 146.123 25.234L192.637 133.756C195.277 139.963 193.475 147.277 188.236 151.557L124.594 203.689C191.221 339.387 289.258 378.074 308.42 387.486L360.584 323.756C362.596 321.26 369.48 315.633 378.307 319.453L486.756 365.939C493.551 368.871 497.275 376.211 495.613 383.402Z" />
        </Icon>
    </>
}