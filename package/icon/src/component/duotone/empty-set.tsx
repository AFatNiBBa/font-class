
import { Icon, generic } from "../../index";

/**
 * A component that renders the `empty-set` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/empty-set?s=duotone empty-set}
 * @preview ![empty-set](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc2LjczNiAzODkuOTA4QzQ4Ljc2NiAzNTIuNTI3IDMyIDMwNi4yNzcgMzIgMjU2QzMyIDEzMi4yODkgMTMyLjI4OSAzMiAyNTYgMzJDMzA2LjI5NyAzMiAzNTIuNTYzIDQ4Ljc3OSAzODkuOTUyIDc2Ljc3TDMzMi4zMjcgMTM0LjM4MUMzMTAuMTQxIDEyMC40MDggMjg0LjEgMTEyIDI1NiAxMTJDMTc2LjU5OCAxMTIgMTEyIDE3Ni41OTggMTEyIDI1NkMxMTIgMjg0LjA4NiAxMjAuNDA0IDMxMC4xMTcgMTM0LjM2NSAzMzIuMjk1TDc2LjczNiAzODkuOTA4Wk0zNzcuNjA0IDE3OS42NDhDMzkxLjU4NyAyMDEuODM4IDQwMC4wMDEgMjI3Ljg5MSA0MDAuMDAxIDI1NkM0MDAuMDAxIDMzNS40MDIgMzM1LjQwMyA0MDAgMjU2IDQwMEMyMjcuODkxIDQwMCAyMDEuODQyIDM5MS41ODYgMTc5LjY1MyAzNzcuNjA1TDEyMi4wMzcgNDM1LjIyM0MxNTkuNDI4IDQ2My4yMTcgMjA1LjY5OCA0ODAgMjU2IDQ4MEMzNzkuNzEyIDQ4MCA0ODAuMDAxIDM3OS43MTEgNDgwLjAwMSAyNTZDNDgwLjAwMSAyMDUuNjk1IDQ2My4yMTggMTU5LjQyMiA0MzUuMjIgMTIyLjAzMUwzNzcuNjA0IDE3OS42NDhaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU0LjU5MiA1MDIuNjUyQzQyLjEyOSA1MTUuMTE1IDIxLjkyMiA1MTUuMTE2IDkuNDU4IDUwMi42NTRMOS4zMzYgNTAyLjUzMkMtMy4xMTIgNDkwLjA4NiAtMy4xMTIgNDY5LjcyMSA5LjMzNiA0NTcuMjc2TDQ1Ny40MDggOS4zMzJDNDY5Ljg1NCAtMy4xMTEgNDkwLjIxOSAtMy4xMTEgNTAyLjY2NSA5LjMzM0w1MDIuNjY1IDkuMzMzQzUxNS4xMTEgMjEuNzc3IDUxNS4xMTIgNDIuMTQgNTAyLjY2NyA1NC41ODVMNTQuNTkyIDUwMi42NTJaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const EmptySet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M76.736 389.908C48.766 352.527 32 306.277 32 256C32 132.289 132.289 32 256 32C306.297 32 352.563 48.779 389.952 76.77L332.327 134.381C310.141 120.408 284.1 112 256 112C176.598 112 112 176.598 112 256C112 284.086 120.404 310.117 134.365 332.295L76.736 389.908ZM377.604 179.648C391.587 201.838 400.001 227.891 400.001 256C400.001 335.402 335.403 400 256 400C227.891 400 201.842 391.586 179.653 377.605L122.037 435.223C159.428 463.217 205.698 480 256 480C379.712 480 480.001 379.711 480.001 256C480.001 205.695 463.218 159.422 435.22 122.031L377.604 179.648Z" />
            <path d="M54.592 502.652C42.129 515.115 21.922 515.116 9.458 502.654L9.336 502.532C-3.112 490.086 -3.112 469.721 9.336 457.276L457.408 9.332C469.854 -3.111 490.219 -3.111 502.665 9.333L502.665 9.333C515.111 21.777 515.112 42.14 502.667 54.585L54.592 502.652Z" />
    </Icon>
);

export default EmptySet;