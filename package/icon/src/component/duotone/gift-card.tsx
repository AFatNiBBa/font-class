
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=duotone gift-card}
 * @preview ![gift-card](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTAgNDY0QzAgNDkwLjUxIDIxLjQ5IDUxMiA0OCA1MTJINTI4QzU1NC41MSA1MTIgNTc2IDQ5MC41MSA1NzYgNDY0VjQxNkgwVjQ2NFpNNTI4IDEyOEg0NjIuODQyQzQ0Ni44OTggMTQ3Ljk0MyA0MjEuMTI1IDE2MCAzOTIuNzAxIDE2MEgzMzcuOTM4TDM5Mi45NjkgMjE1LjAzMUM0MDIuMzQ0IDIyNC40MDYgNDAyLjM0NCAyMzkuNTk0IDM5Mi45NjkgMjQ4Ljk2OUMzODguMjgxIDI1My42NTYgMzgyLjE1NiAyNTYgMzc2IDI1NlMzNjMuNzE5IDI1My42NTYgMzU5LjAzMSAyNDguOTY5TDI4OCAxNzcuOTM4TDIxNi45NjkgMjQ4Ljk2OUMyMTIuMjgxIDI1My42NTYgMjA2LjE1NiAyNTYgMjAwIDI1NlMxODcuNzE5IDI1My42NTYgMTgzLjAzMSAyNDguOTY5QzE3My42NTYgMjM5LjU5NCAxNzMuNjU2IDIyNC40MDYgMTgzLjAzMSAyMTUuMDMxTDIzOC4wNjIgMTYwSDE4My4yOTlDMTU0Ljg3NSAxNjAgMTI5LjEwMiAxNDcuOTQzIDExMy4xNTggMTI4SDQ4QzIxLjQ5IDEyOCAwIDE0OS40OSAwIDE3NlYzMjBINTc2VjE3NkM1NzYgMTQ5LjQ5IDU1NC41MSAxMjggNTI4IDEyOFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMCAzMjBWNDE2SDU3NlYzMjBIMFpNMTgzLjI5OSAxNjBIMjM4LjA2MkwxODMuMDMxIDIxNS4wMzFDMTczLjY1NiAyMjQuNDA2IDE3My42NTYgMjM5LjU5NCAxODMuMDMxIDI0OC45NjlDMTg3LjcxOSAyNTMuNjU2IDE5My44NDQgMjU2IDIwMCAyNTZTMjEyLjI4MSAyNTMuNjU2IDIxNi45NjkgMjQ4Ljk2OUwyODggMTc3LjkzOEwzNTkuMDMxIDI0OC45NjlDMzYzLjcxOSAyNTMuNjU2IDM2OS44NDQgMjU2IDM3NiAyNTZTMzg4LjI4MSAyNTMuNjU2IDM5Mi45NjkgMjQ4Ljk2OUM0MDIuMzQ0IDIzOS41OTQgNDAyLjM0NCAyMjQuNDA2IDM5Mi45NjkgMjE1LjAzMUwzMzcuOTM4IDE2MEgzOTIuNzAxQzQyMi4zNzcgMTYwIDQ0OS40NjcgMTQ3LjEyMSA0NjUuMTY2IDEyNS41NTdDNDc0Ljg3MSAxMTIuMjI3IDQ4MCA5Ni41OSA0ODAgODAuMzM0QzQ4MCA0MS4zOTEgNDQ5LjUxNiAwIDM5My4wMjEgMEMzNDIuMTk5IDAgMzA2LjY4IDQzLjM1IDI4OCA3My41MTJDMjY5LjMyIDQzLjM1IDIzMy44MDEgMCAxODIuOTc5IDBDMTI2LjQ4NCAwIDk2IDQxLjM5MSA5NiA4MC4zMzRDOTYgOTYuNTkgMTAxLjEyOSAxMTIuMjI3IDExMC44MzQgMTI1LjU1N0MxMjYuNTMzIDE0Ny4xMjEgMTUzLjYyMyAxNjAgMTgzLjI5OSAxNjBaTTM5My4wMjEgNDhDNDIxLjY5OSA0OCA0MzIgNjcuMzM0IDQzMiA4MC4zMzRDNDMyIDk0Ljg1IDQxOS44NTkgMTEyIDM5Mi43MDEgMTEySDMyMS4xMjVDMzM1LjQ2NSA4NC41IDM2Mi45MyA0OCAzOTMuMDIxIDQ4Wk0xODIuOTc5IDQ4QzIxMy4wNyA0OCAyNDAuNTM1IDg0LjUgMjU0Ljg3NSAxMTJIMTgzLjI5OUMxNTYuMTQxIDExMiAxNDQgOTQuODUgMTQ0IDgwLjMzNEMxNDQgNjcuMzM0IDE1NC4zMDEgNDggMTgyLjk3OSA0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 464C0 490.51 21.49 512 48 512H528C554.51 512 576 490.51 576 464V416H0V464ZM528 128H462.842C446.898 147.943 421.125 160 392.701 160H337.938L392.969 215.031C402.344 224.406 402.344 239.594 392.969 248.969C388.281 253.656 382.156 256 376 256S363.719 253.656 359.031 248.969L288 177.938L216.969 248.969C212.281 253.656 206.156 256 200 256S187.719 253.656 183.031 248.969C173.656 239.594 173.656 224.406 183.031 215.031L238.062 160H183.299C154.875 160 129.102 147.943 113.158 128H48C21.49 128 0 149.49 0 176V320H576V176C576 149.49 554.51 128 528 128Z" />
            <path d="M0 320V416H576V320H0ZM183.299 160H238.062L183.031 215.031C173.656 224.406 173.656 239.594 183.031 248.969C187.719 253.656 193.844 256 200 256S212.281 253.656 216.969 248.969L288 177.938L359.031 248.969C363.719 253.656 369.844 256 376 256S388.281 253.656 392.969 248.969C402.344 239.594 402.344 224.406 392.969 215.031L337.938 160H392.701C422.377 160 449.467 147.121 465.166 125.557C474.871 112.227 480 96.59 480 80.334C480 41.391 449.516 0 393.021 0C342.199 0 306.68 43.35 288 73.512C269.32 43.35 233.801 0 182.979 0C126.484 0 96 41.391 96 80.334C96 96.59 101.129 112.227 110.834 125.557C126.533 147.121 153.623 160 183.299 160ZM393.021 48C421.699 48 432 67.334 432 80.334C432 94.85 419.859 112 392.701 112H321.125C335.465 84.5 362.93 48 393.021 48ZM182.979 48C213.07 48 240.535 84.5 254.875 112H183.299C156.141 112 144 94.85 144 80.334C144 67.334 154.301 48 182.979 48Z" />
    </Icon>
);

export default GiftCard;