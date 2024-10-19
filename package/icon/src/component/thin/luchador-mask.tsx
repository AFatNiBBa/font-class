
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `luchador-mask` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/luchador-mask?s=thin luchador-mask}
 * @preview ![luchador-mask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMEMxMDAuMjg5IDAgMCAxMDAuMjg5IDAgMjI0VjMyMEMwIDQyNi4wMzkgODUuOTYxIDUxMiAxOTIgNTEySDI1NkMzNjIuMDM5IDUxMiA0NDggNDI2LjAzOSA0NDggMzIwVjIyNEM0NDggMTAwLjI4OSAzNDcuNzExIDAgMjI0IDBaTTQzMiAzMjBDNDMyIDQxNy4wNDcgMzUzLjA0NyA0OTYgMjU2IDQ5NkgxOTJDOTQuOTUzIDQ5NiAxNiA0MTcuMDQ3IDE2IDMyMFYyMjRDMTYgMTA5LjMwOSAxMDkuMzA5IDE2IDIyNCAxNlM0MzIgMTA5LjMwOSA0MzIgMjI0VjMyMFpNMzA0LjE4OCAxNjBDMjY4LjM1OSAxNjAgMjM3LjU3OCAxODMuNTcgMjIzLjkzOCAyMTcuMTY0QzIxMC4yNDIgMTgzLjcwNyAxNzkuNTQ3IDE2MC4yNSAxNDMuODEzIDE2MC4yNUMxNDMuOTUzIDE2MC4yNSAxMTUuNzE5IDE2MCA5Ni43NTQgMTYwQzc0Ljk4NCAxNjAgNzIuNzExIDE2MCA2Ny43MDMgMTY2LjAxMkM2NS4zMTIgMTY4Ljg4NyA2NCAxNzIuNTA4IDY0IDE3Ni4yNVYxOTIuMzMyQzY0IDI0NS4wODIgMTAzLjM5NSAyODggMTUxLjgxMiAyODhIMTg4LjU4MkMxNzguMjYyIDMwMS4zMjggMTY5LjUyNyAzMTUuMDc4IDE2Mi45MjYgMzI5LjIzOEMxNjEuOTIyIDMzMS4zODMgMTYxLjY1NiAzMzMuNzAzIDE2MS42NTYgMzM2SDE1MkMxMjEuMDcgMzM2IDk2IDM2MS4wNyA5NiAzOTJTMTIxLjA3IDQ0OCAxNTIgNDQ4SDI5NkMzMjYuOTMgNDQ4IDM1MiA0MjIuOTMgMzUyIDM5MlMzMjYuOTMgMzM2IDI5NiAzMzZIMjg2LjM0NEMyODYuMzQ0IDMzMy43MDMgMjg2LjA3OCAzMzEuMzgzIDI4NS4wNzQgMzI5LjIzOEMyNzguNDY5IDMxNS4wNyAyNjkuNzMgMzAxLjMxMiAyNTkuNDAyIDI4Ny45NzdDMjc2Ljg3NSAyODcuOTIyIDI5Ni4zMjggMjg3Ljc1IDI5Ni4zMjggMjg3Ljc1QzM0NC42MDUgMjg3Ljc1IDM4NCAyNDQuODMyIDM4NCAxOTIuMDgyVjE3NkMzODQgMTY3LjE2NCAzNzYuODM2IDE2MCAzNjggMTYwSDMwNC4xODhaTTE1MS44MTIgMjcyQzExMi4xNjggMjcyIDgwIDIzNi4yODEgODAgMTkyLjMzMlYxNzYuMjVDODAuMTU2IDE3Ni4wNjIgODcuMjk3IDE3NiA5Ni43NTQgMTc2QzExNS42NiAxNzYgMTQzLjgxMyAxNzYuMjUgMTQzLjgxMyAxNzYuMjVDMTgzLjQ2MSAxNzYuMjUgMjE1LjYyNSAyMTEuOTY5IDIxNS42MjUgMjU1LjkxOFYyNTguNzI3QzIxMy4xOTkgMjYwLjI1OCAyMTQuNjQxIDI1OC4xNzIgMjAyLjAzOSAyNzJIMTUxLjgxMlpNMjk2IDM1MkMzMTguMDU1IDM1MiAzMzYgMzY5Ljk0NSAzMzYgMzkyUzMxOC4wNTUgNDMyIDI5NiA0MzJIMTUyQzEyOS45NDUgNDMyIDExMiA0MTQuMDU1IDExMiAzOTJTMTI5Ljk0NSAzNTIgMTUyIDM1MkgyOTZaTTI3MC41NyAzMzZIMTc3LjQzQzE4NS42ODggMzE4LjI3MyAxOTkuNjY0IDI5NS44ODcgMjI0IDI3MkMyNDguMzM2IDI5NS44ODcgMjYyLjMxMiAzMTguMjczIDI3MC41NyAzMzZaTTM2OCAxOTIuMDgyQzM2OCAyMzYuMDMxIDMzNS44MzIgMjcxLjc1IDI5Ni4xODggMjcxLjc1QzI5Ni4xODggMjcxLjc1IDI2OC4wMzEgMjcyIDI0OS4xMjUgMjcyQzI0Ny45ODggMjcyIDI0Ny4wMTYgMjcxLjk5NiAyNDUuOTUzIDI3MS45OTJDMjMzLjIxMSAyNTguMDIzIDIzNC44MDUgMjYwLjI1OCAyMzIuMzc1IDI1OC43MjdWMjU1LjY2OEMyMzIuMzc1IDIxMS43MTkgMjY0LjUzOSAxNzYgMzA0LjE4OCAxNzZIMzY4VjE5Mi4wODJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LuchadorMask(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 0C100.289 0 0 100.289 0 224V320C0 426.039 85.961 512 192 512H256C362.039 512 448 426.039 448 320V224C448 100.289 347.711 0 224 0ZM432 320C432 417.047 353.047 496 256 496H192C94.953 496 16 417.047 16 320V224C16 109.309 109.309 16 224 16S432 109.309 432 224V320ZM304.188 160C268.359 160 237.578 183.57 223.938 217.164C210.242 183.707 179.547 160.25 143.813 160.25C143.953 160.25 115.719 160 96.754 160C74.984 160 72.711 160 67.703 166.012C65.312 168.887 64 172.508 64 176.25V192.332C64 245.082 103.395 288 151.812 288H188.582C178.262 301.328 169.527 315.078 162.926 329.238C161.922 331.383 161.656 333.703 161.656 336H152C121.07 336 96 361.07 96 392S121.07 448 152 448H296C326.93 448 352 422.93 352 392S326.93 336 296 336H286.344C286.344 333.703 286.078 331.383 285.074 329.238C278.469 315.07 269.73 301.312 259.402 287.977C276.875 287.922 296.328 287.75 296.328 287.75C344.605 287.75 384 244.832 384 192.082V176C384 167.164 376.836 160 368 160H304.188ZM151.812 272C112.168 272 80 236.281 80 192.332V176.25C80.156 176.062 87.297 176 96.754 176C115.66 176 143.813 176.25 143.813 176.25C183.461 176.25 215.625 211.969 215.625 255.918V258.727C213.199 260.258 214.641 258.172 202.039 272H151.812ZM296 352C318.055 352 336 369.945 336 392S318.055 432 296 432H152C129.945 432 112 414.055 112 392S129.945 352 152 352H296ZM270.57 336H177.43C185.688 318.273 199.664 295.887 224 272C248.336 295.887 262.312 318.273 270.57 336ZM368 192.082C368 236.031 335.832 271.75 296.188 271.75C296.188 271.75 268.031 272 249.125 272C247.988 272 247.016 271.996 245.953 271.992C233.211 258.023 234.805 260.258 232.375 258.727V255.668C232.375 211.719 264.539 176 304.188 176H368V192.082Z" />
        </Icon>
    </>
}