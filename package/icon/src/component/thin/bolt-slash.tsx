
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bolt-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bolt-slash?s=thin bolt-slash}
 * @preview ![bolt-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDUuNDg2IDE5LjkzNEM0MDguMzc2IDE3LjM5NiA0MTIuMTA1IDE2IDQxNS45ODggMTZDNDE5LjU3NCAxNiA0MjIuOTYyIDE3LjE1MiA0MjUuNzYzIDE5LjMwOUM0MzEuODA0IDIzLjk4NCA0MzMuNzE2IDMyLjMyNCA0MzAuMzA4IDM5LjE0MUwzNTQuMjU1IDE5MS4yNTZMMzY3LjA1OCAyMDEuNDMyTDQ0NC42MTggNDYuMjk3QzQ1MS40NjIgMzIuNjA5IDQ0Ny42NSAxNi4wMTYgNDM1LjU1NiA2LjY1NkM0MjkuNzgzIDIuMjA5IDQyMi44NzggMCA0MTUuOTg4IDBDNDA4LjQ0NyAwIDQwMC45MjcgMi42NDYgMzk0LjkzMyA3LjkwNkwyNjUuNzgxIDEyMC45MjRMMjc4LjUxMSAxMzEuMDQ1TDQwNS40ODYgMTkuOTM0Wk00MTUuNTYyIDIzOS45OUg0NzkuOTkyQzQ4Ni42MjggMjM5Ljk5IDQ5Mi42NTIgMjQ0LjE2IDQ5NC45ODQgMjUwLjM3M0M0OTcuMzEgMjU2LjU1OSA0OTUuNTEzIDI2My42NTYgNDkwLjUxOSAyNjguMDI5TDQ3MS42MjggMjg0LjU1OUw0ODQuMzU5IDI5NC42OEw1MDEuMDU0IDI4MC4wN0M1MTEuMDgzIDI3MS4yODkgNTE0LjY0NiAyNTcuMjExIDUwOS45NTggMjQ0Ljc0MkM1MDUuMjczIDIzMi4yNTYgNDkzLjMzNSAyMjMuOTkgNDc5Ljk5MiAyMjMuOTlIMzk1LjQzNUw0MTUuNTYyIDIzOS45OVpNMjI0LjQwOSAyNzEuOTkySDE2MC4wMDdDMTUzLjM3IDI3MS45OTIgMTQ3LjM0NyAyNjcuODIyIDE0NS4wMTUgMjYxLjYxMUMxNDIuNjg5IDI1NS40MjQgMTQ0LjQ4NiAyNDguMzI4IDE0OS40OCAyNDMuOTU1TDE2OC4zNTkgMjI3LjQzNkwxNTUuNjI2IDIxNy4zMTRMMTM4Ljk0NSAyMzEuOTEyQzEyOC45MTUgMjQwLjY5NSAxMjUuMzUzIDI1NC43NzMgMTMwLjA0IDI2Ny4yNDJDMTM0LjcyOCAyNzkuNzI3IDE0Ni42NjMgMjg3Ljk5MiAxNjAuMDA3IDI4Ny45OTJIMjQ0LjUzNkwyMjQuNDA5IDI3MS45OTJaTTIzNC41MTEgNDkyLjA1MUMyMzEuNjExIDQ5NC41OTYgMjI3Ljg3OCA0OTUuOTk4IDIyNC4wMDMgNDk1Ljk5OEMyMjAuNDM3IDQ5NS45OTggMjE3LjA1IDQ5NC44NCAyMTQuMjM2IDQ5Mi42NzJDMjA4LjE5NSA0ODcuOTk2IDIwNi4yODMgNDc5LjY1NiAyMDkuNjkxIDQ3Mi44NEwyODUuNzM0IDMyMC43NDJMMjcyLjkzMyAzMTAuNTY2TDE5NS4zOCA0NjUuNjg2QzE4OC41MzYgNDc5LjM3MyAxOTIuMzQ5IDQ5NS45NjcgMjA0LjQ0MyA1MDUuMzI4QzIxMC4yMjQgNTA5Ljc4MSAyMTcuMTI4IDUxMiAyMjQuMDAzIDUxMkMyMzEuNTM0IDUxMiAyMzkuMDY2IDUwOS4zNDQgMjQ1LjA2NiA1MDQuMDc4TDM3NC4yMDYgMzkxLjA3MkwzNjEuNDc0IDM4MC45NTFMMjM0LjUxMSA0OTIuMDUxWk02MzYuOTggNDk3LjczNEwxMi45ODggMS43M0MxMS41MjUgMC41NjYgOS43NzEgMCA4LjAyNSAwQzUuNjczIDAgMy4zMzUgMS4wMzEgMS43MzggMy4wMTJDLTEuMDEyIDYuNDggLTAuNDM0IDExLjUxMiAzLjAxOSAxNC4yNjJMNjI3LjAxMSA1MTAuMjY2QzYyOC40OTUgNTExLjQzOCA2MzAuMjQ1IDUxMiA2MzEuOTk1IDUxMkM2MzQuMzM5IDUxMiA2MzYuNjgzIDUxMC45NjkgNjM4LjI2MSA1MDguOTg0QzY0MS4wMTEgNTA1LjUxNiA2NDAuNDMzIDUwMC40ODQgNjM2Ljk4IDQ5Ny43MzRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function BoltSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M405.486 19.934C408.376 17.396 412.105 16 415.988 16C419.574 16 422.962 17.152 425.763 19.309C431.804 23.984 433.716 32.324 430.308 39.141L354.255 191.256L367.058 201.432L444.618 46.297C451.462 32.609 447.65 16.016 435.556 6.656C429.783 2.209 422.878 0 415.988 0C408.447 0 400.927 2.646 394.933 7.906L265.781 120.924L278.511 131.045L405.486 19.934ZM415.562 239.99H479.992C486.628 239.99 492.652 244.16 494.984 250.373C497.31 256.559 495.513 263.656 490.519 268.029L471.628 284.559L484.359 294.68L501.054 280.07C511.083 271.289 514.646 257.211 509.958 244.742C505.273 232.256 493.335 223.99 479.992 223.99H395.435L415.562 239.99ZM224.409 271.992H160.007C153.37 271.992 147.347 267.822 145.015 261.611C142.689 255.424 144.486 248.328 149.48 243.955L168.359 227.436L155.626 217.314L138.945 231.912C128.915 240.695 125.353 254.773 130.04 267.242C134.728 279.727 146.663 287.992 160.007 287.992H244.536L224.409 271.992ZM234.511 492.051C231.611 494.596 227.878 495.998 224.003 495.998C220.437 495.998 217.05 494.84 214.236 492.672C208.195 487.996 206.283 479.656 209.691 472.84L285.734 320.742L272.933 310.566L195.38 465.686C188.536 479.373 192.349 495.967 204.443 505.328C210.224 509.781 217.128 512 224.003 512C231.534 512 239.066 509.344 245.066 504.078L374.206 391.072L361.474 380.951L234.511 492.051ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.031 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" />
        </Icon>
    </>
}