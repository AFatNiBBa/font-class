
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `medal` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=light medal}
 * @preview ![medal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDAuMzkxIDI3NS4zNzVMMjgwLjY0MSAyMzUuMzc1QzI3NS44OTggMjI1Ljk1MyAyNjUuOTU1IDIyMS4yMzQgMjU2LjAxNyAyMjEuMjM0QzI0Ni4wNDggMjIxLjIzNCAyMzYuMDg1IDIyNS45ODQgMjMxLjM5IDIzNS41TDIxMS42NCAyNzUuMzc1TDE2Ny41MTQgMjgxLjg3NUMxNTcuMTM5IDI4My4zNzUgMTQ4LjYzOSAyOTAuNSAxNDUuMzg5IDMwMC41QzE0Mi4xMzkgMzEwLjYyNSAxNDQuNzY0IDMyMS4zNzUgMTUyLjI2NCAzMjguNzVMMTg0LjI2NCAzNTkuNzVMMTc2LjYzOSA0MDMuNzVDMTczLjU3NiA0MjEuNzI3IDE4Ny45OTkgNDM1Ljk1NyAyMDMuODY2IDQzNS45NTdDMjA4LjA4MSA0MzUuOTU3IDIxMi4zOTcgNDM0Ljk1MyAyMTYuNTE1IDQzMi43NUwyNTYuMDE1IDQxMkwyOTUuNTE2IDQzMi43NUMyOTkuNTM3IDQzNC44NjcgMzAzLjc5MSA0MzUuODM2IDMwNy45NjUgNDM1LjgzNkMzMjMuNzY4IDQzNS44MzYgMzM4LjQ1NiA0MjEuOTQ1IDMzNS4zOTEgNDAzLjc1TDMyNy43NjYgMzU5Ljg3NUwzNTkuNzY3IDMyOC43NUMzNjcuMjY3IDMyMS4zNzUgMzY5Ljg5MiAzMTAuNjI1IDM2Ni42NDIgMzAwLjVDMzYzLjM5MiAyOTAuNSAzNTQuODkyIDI4My4zNzUgMzQ0LjUxNiAyODEuODc1TDMwMC4zOTEgMjc1LjM3NVpNMjkzLjM5MSAzNDguNjI1TDMwMi4yNjYgNDAwLjEyNUwyNTYuMDE1IDM3NS43NUwyMDkuNjM5IDQwMC43NUwyMTguNjQgMzQ4LjYyNUwxODEuMjY0IDMxMi4yNUwyMzIuODkgMzA0LjYyNUwyNTYuMDE1IDI1Ny43NUwyNzkuMTQgMzA0LjYyNUwzMzAuNzY2IDMxMi4yNUwyOTMuMzkxIDM0OC42MjVaTTI1Ni4wMDUgMTYwQzE1OC44MDMgMTYwIDgwLjAwMyAyMzguNzk3IDgwLjAwMyAzMzZTMTU4LjgwMyA1MTIgMjU2LjAwNSA1MTJTNDMyLjAwOCA0MzMuMjAzIDQzMi4wMDggMzM2UzM1My4yMDggMTYwIDI1Ni4wMDUgMTYwWk0yNTYuMDA1IDQ4MEMxNzYuNjAyIDQ4MCAxMTIuMDAzIDQxNS40MDIgMTEyLjAwMyAzMzZTMTc2LjYwMiAxOTIgMjU2LjAwNSAxOTJTNDAwLjAwNyAyNTYuNTk4IDQwMC4wMDcgMzM2UzMzNS40MDkgNDgwIDI1Ni4wMDUgNDgwWk0xMTIuMDAzIDE5MkMxMTUuMDk3IDE5MiAxMTguMjIyIDE5MS4xMjUgMTIwLjk3MiAxODkuMjVDMTI4LjI4NSAxODQuMzEyIDEzMC4yMjIgMTc0LjM0NCAxMjUuMjU0IDE2Ny4wMzFMMzMuODQ2IDMxLjk2OUwxMzIuNjI5IDMwLjk2OUwxOTYuNzIzIDEzNy44NDRDMjAxLjI4NiAxNDUuNDM4IDIxMS4xOTIgMTQ3Ljk2OSAyMTguNjYxIDE0My4zNDRDMjI2LjI1NSAxMzguODEyIDIyOC43MjQgMTI4Ljk2OSAyMjQuMTYxIDEyMS40MDZMMTYwLjA5OCAxNC41NjJDMTU0LjcyMyA1LjU2MiAxNDQuOTEgMCAxMzQuNDQxIDBIMjkuOTRDMTguNzUyIDAgOC41OTYgNi4xNTYgMy40MDggMTYuMDk0Qy0xLjc0OCAyNiAtMC45OTggMzcuODc1IDUuMjgzIDQ2Ljg0NEw5OC43NTMgMTg0Ljk2OUMxMDEuODQ3IDE4OS41MzEgMTA2Ljg3OCAxOTIgMTEyLjAwMyAxOTJaTTMwLjAwMiAzMi4wOTRMMjkuOTQgMzJIMzAuMDY1TDMwLjAwMiAzMi4wOTRaTTUwOC42MDMgMTYuMDk0QzUwMy40MTUgNi4xNTYgNDkzLjI1OSAwIDQ4Mi4wNzEgMEgzNzcuNjAxQzM2Ny4xMzIgMCAzNTcuMjg4IDUuNTYyIDM1MS45NDQgMTQuNTMxTDI4Ny44NSAxMjEuNDA2QzI4My4yODcgMTI4Ljk2OSAyODUuNzU2IDEzOC44MTMgMjkzLjM1IDE0My4zNDRDMzAwLjg4MSAxNDcuOTY5IDMxMC43NTYgMTQ1LjQzOCAzMTUuMjg3IDEzNy44NDRMMzc3LjYwMSAzMkg0NzguMTM0TDM4Ni43NTcgMTY3LjAzMUMzODEuNzg4IDE3NC4zNDQgMzgzLjcyNiAxODQuMzEzIDM5MS4wMzkgMTg5LjI1QzM5My43ODkgMTkxLjEyNSAzOTYuOTE0IDE5MiA0MDAuMDA3IDE5MkM0MDUuMTMzIDE5MiA0MTAuMTY0IDE4OS41MzEgNDEzLjI1OCAxODQuOTY5TDUwNi42MDMgNDcuMDMxQzUxMy4wMDkgMzcuODc1IDUxMy43NTkgMjYgNTA4LjYwMyAxNi4wOTRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Medal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M300.391 275.375L280.641 235.375C275.898 225.953 265.955 221.234 256.017 221.234C246.048 221.234 236.085 225.984 231.39 235.5L211.64 275.375L167.514 281.875C157.139 283.375 148.639 290.5 145.389 300.5C142.139 310.625 144.764 321.375 152.264 328.75L184.264 359.75L176.639 403.75C173.576 421.727 187.999 435.957 203.866 435.957C208.081 435.957 212.397 434.953 216.515 432.75L256.015 412L295.516 432.75C299.537 434.867 303.791 435.836 307.965 435.836C323.768 435.836 338.456 421.945 335.391 403.75L327.766 359.875L359.767 328.75C367.267 321.375 369.892 310.625 366.642 300.5C363.392 290.5 354.892 283.375 344.516 281.875L300.391 275.375ZM293.391 348.625L302.266 400.125L256.015 375.75L209.639 400.75L218.64 348.625L181.264 312.25L232.89 304.625L256.015 257.75L279.14 304.625L330.766 312.25L293.391 348.625ZM256.005 160C158.803 160 80.003 238.797 80.003 336S158.803 512 256.005 512S432.008 433.203 432.008 336S353.208 160 256.005 160ZM256.005 480C176.602 480 112.003 415.402 112.003 336S176.602 192 256.005 192S400.007 256.598 400.007 336S335.409 480 256.005 480ZM112.003 192C115.097 192 118.222 191.125 120.972 189.25C128.285 184.312 130.222 174.344 125.254 167.031L33.846 31.969L132.629 30.969L196.723 137.844C201.286 145.438 211.192 147.969 218.661 143.344C226.255 138.812 228.724 128.969 224.161 121.406L160.098 14.562C154.723 5.562 144.91 0 134.441 0H29.94C18.752 0 8.596 6.156 3.408 16.094C-1.748 26 -0.998 37.875 5.283 46.844L98.753 184.969C101.847 189.531 106.878 192 112.003 192ZM30.002 32.094L29.94 32H30.065L30.002 32.094ZM508.603 16.094C503.415 6.156 493.259 0 482.071 0H377.601C367.132 0 357.288 5.562 351.944 14.531L287.85 121.406C283.287 128.969 285.756 138.813 293.35 143.344C300.881 147.969 310.756 145.438 315.287 137.844L377.601 32H478.134L386.757 167.031C381.788 174.344 383.726 184.313 391.039 189.25C393.789 191.125 396.914 192 400.007 192C405.133 192 410.164 189.531 413.258 184.969L506.603 47.031C513.009 37.875 513.759 26 508.603 16.094Z" />
        </Icon>
    </>
}