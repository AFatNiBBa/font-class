
import { Icon } from "../../index";

/**
 * A component that renders the `volcano` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/volcano?s=light volcano}
 * @preview ![volcano](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDAuNjg3IDExNi42ODhMMjkyLjY4NyAxNjQuNjg4QzI4Ni40MzcgMTcwLjkzOCAyODYuNDM3IDE4MS4wNjMgMjkyLjY4NyAxODcuMzEyQzI5NS44MTIgMTkwLjQzOCAyOTkuOTA2IDE5MiAzMDQgMTkyUzMxMi4xODcgMTkwLjQzOCAzMTUuMzEyIDE4Ny4zMTJMMzYzLjMxMiAxMzkuMzEyQzM2OS41NjIgMTMzLjA2MiAzNjkuNTYyIDEyMi45MzcgMzYzLjMxMiAxMTYuNjg4UzM0Ni45MzcgMTEwLjQzOCAzNDAuNjg3IDExNi42ODhaTTExMiA5NkMxMjAuODQzIDk2IDEyOCA4OC44NDQgMTI4IDgwQzEyOCA2Mi4zNDQgMTQyLjM1OSA0OCAxNjAgNDhDMTY5LjUzMSA0OCAxNzguNTQ3IDUyLjM3NSAxODQuNzM0IDYwLjAzMUMxODguMTU2IDY0LjI4MSAxOTMuMzQzIDY2LjM0NCAxOTguOTY4IDY1Ljg3NUMyMDQuMzkgNjUuMjUgMjA5LjE0IDYxLjkwNiAyMTEuNTQ3IDU3QzIxOC45ODQgNDEuODEyIDIzNi40MzcgMzIgMjU2IDMyUzI5My4wMTUgNDEuODEyIDMwMC40NTMgNTdDMzAyLjg1OSA2MS45MDYgMzA3LjYwOSA2NS4yNSAzMTMuMDMxIDY1Ljg3NUMzMTguNDUzIDY2LjM0NCAzMjMuODQzIDY0LjI4MSAzMjcuMjY1IDYwLjAzMUMzMzMuNDUzIDUyLjM3NSAzNDIuNDY4IDQ4IDM1MiA0OEMzNjkuNjQgNDggMzg0IDYyLjM0NCAzODQgODBDMzg0IDg4Ljg0NCAzOTEuMTU2IDk2IDQwMCA5NlM0MTYgODguODQ0IDQxNiA4MEM0MTYgNDQuNzE5IDM4Ny4yOTcgMTYgMzUyIDE2QzMzOS42NzIgMTYgMzI3LjgyOCAxOS41NjIgMzE3LjY3MiAyNi4xMjVDMzAyLjcxOCA5Ljg0NCAyODAuMjE4IDAgMjU2IDBTMjA5LjI4MSA5Ljg0NCAxOTQuMzI4IDI2LjEyNUMxODQuMTcyIDE5LjU2MiAxNzIuMzI4IDE2IDE2MCAxNkMxMjQuNzAzIDE2IDk2IDQ0LjcxOSA5NiA4MEM5NiA4OC44NDQgMTAzLjE1NiA5NiAxMTIgOTZaTTE0OC42ODcgMTE2LjY4OEMxNDIuNDM3IDEyMi45MzggMTQyLjQzNyAxMzMuMDYzIDE0OC42ODcgMTM5LjMxMkwxOTYuNjg3IDE4Ny4zMTJDMTk5LjgxMiAxOTAuNDM4IDIwMy45MDYgMTkyIDIwOCAxOTJTMjE2LjE4NyAxOTAuNDM4IDIxOS4zMTIgMTg3LjMxMkMyMjUuNTYyIDE4MS4wNjIgMjI1LjU2MiAxNzAuOTM3IDIxOS4zMTIgMTY0LjY4OEwxNzEuMzEyIDExNi42ODhDMTY1LjA2MiAxMTAuNDM4IDE1NC45MzcgMTEwLjQzOCAxNDguNjg3IDExNi42ODhaTTUwMi41NjggNDQ3LjMxMkwzMjQuNDAyIDIzNy4zOTNDMzE3LjE3OSAyMjguODgzIDMwNi43MjQgMjI0IDI5NS43MzIgMjI0SDIxNi4yNjdDMjA1LjI3NSAyMjQgMTk0LjgyIDIyOC44ODMgMTg3LjU5NyAyMzcuMzkzTDkuNDMxIDQ0Ny4zMTNDLTEyLjAwOCA0NzIuNTcyIDUuNDY3IDUxMiAzOC4wOTkgNTEySDQ3My45QzUwNi41MzMgNTEyIDUyNC4wMDggNDcyLjU3MiA1MDIuNTY4IDQ0Ny4zMTJaTTIxMS45OTQgMjU4LjFDMjEzLjEyNyAyNTYuNzY2IDIxNC42ODMgMjU2IDIxNi4yNjcgMjU2SDI5NS43MzJDMjk3LjMxNiAyNTYgMjk4Ljg3MyAyNTYuNzY2IDMwMC4wMDYgMjU4LjFMMzYzLjk0NSAzMzMuNDM2TDM0NS44NTkgMzUxLjUzMUMzMzkuNDA2IDM1Ny45MzcgMzMwLjc1IDM2MS4xNTYgMzIxLjc2NSAzNjAuODQ0QzMxMi42NzIgMzYwLjQzNyAzMDQuNDUzIDM1Ni4zNzUgMjk4LjY0IDM0OS4zNzVMMjgxLjQ4NCAzMjguNzgxQzI1OS42NCAzMDIuNjI1IDIyMS4xODcgMjk4LjA5NCAxOTMuOTIyIDMxOC41NjJMMTc5LjIxOCAzMjkuNTk0QzE3My42ODcgMzMzLjcxOSAxNjYuODc1IDMzNiAxNjAgMzM2SDE0NS44NzdMMjExLjk5NCAyNTguMVpNNDc5LjE5NyA0NzYuMjkzQzQ3Ny40OCA0ODAgNDc0Ljc4NSA0ODAgNDczLjkgNDgwSDM4LjA5OUMzNy4yMTUgNDgwIDM0LjUxOSA0ODAgMzIuODAyIDQ3Ni4yOTNDMzIuMDExIDQ3NC41ODYgMzEuMDk1IDQ3MS4yNCAzMy44MjggNDY4LjAyTDExOC43MTggMzY4SDE2MEMxNzMuNzM0IDM2OCAxODcuMzU5IDM2My40NjkgMTk4LjM5IDM1NS4yMTlMMjEzLjEyNSAzNDQuMTg3QzIyNi43NSAzMzMuODc1IDI0Ni4wMTUgMzM2LjIxOSAyNTYuODkgMzQ5LjI4MUwyNzQuMDQ3IDM2OS44NzVDMjg1LjUzMSAzODMuNjU2IDMwMi4zOSAzOTIgMzIwLjI5NyAzOTIuODEyQzMyMS4yNjUgMzkyLjg3NSAzMjIuMjM0IDM5Mi45MDYgMzIzLjIwMyAzOTIuOTA2QzM0MC4xMDkgMzkyLjkwNiAzNTYuNDY4IDM4Ni4xNTYgMzY4LjQ4NCAzNzQuMTU2TDM4NC43MTggMzU3LjkxMkw0NzguMTcyIDQ2OC4wMkM0ODAuOTA2IDQ3MS4yNCA0NzkuOTg4IDQ3NC41ODYgNDc5LjE5NyA0NzYuMjkzWk0yNDAgOTZWMTc2QzI0MCAxODQuODQ0IDI0Ny4xNTYgMTkyIDI1NiAxOTJTMjcyIDE4NC44NDQgMjcyIDE3NlY5NkMyNzIgODcuMTU2IDI2NC44NDMgODAgMjU2IDgwUzI0MCA4Ny4xNTYgMjQwIDk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Volcano: typeof Icon = x => (
    <Icon {...x}>
        <path d="M340.687 116.688L292.687 164.688C286.437 170.938 286.437 181.063 292.687 187.312C295.812 190.438 299.906 192 304 192S312.187 190.438 315.312 187.312L363.312 139.312C369.562 133.062 369.562 122.937 363.312 116.688S346.937 110.438 340.687 116.688ZM112 96C120.843 96 128 88.844 128 80C128 62.344 142.359 48 160 48C169.531 48 178.547 52.375 184.734 60.031C188.156 64.281 193.343 66.344 198.968 65.875C204.39 65.25 209.14 61.906 211.547 57C218.984 41.812 236.437 32 256 32S293.015 41.812 300.453 57C302.859 61.906 307.609 65.25 313.031 65.875C318.453 66.344 323.843 64.281 327.265 60.031C333.453 52.375 342.468 48 352 48C369.64 48 384 62.344 384 80C384 88.844 391.156 96 400 96S416 88.844 416 80C416 44.719 387.297 16 352 16C339.672 16 327.828 19.562 317.672 26.125C302.718 9.844 280.218 0 256 0S209.281 9.844 194.328 26.125C184.172 19.562 172.328 16 160 16C124.703 16 96 44.719 96 80C96 88.844 103.156 96 112 96ZM148.687 116.688C142.437 122.938 142.437 133.063 148.687 139.312L196.687 187.312C199.812 190.438 203.906 192 208 192S216.187 190.438 219.312 187.312C225.562 181.062 225.562 170.937 219.312 164.688L171.312 116.688C165.062 110.438 154.937 110.438 148.687 116.688ZM502.568 447.312L324.402 237.393C317.179 228.883 306.724 224 295.732 224H216.267C205.275 224 194.82 228.883 187.597 237.393L9.431 447.313C-12.008 472.572 5.467 512 38.099 512H473.9C506.533 512 524.008 472.572 502.568 447.312ZM211.994 258.1C213.127 256.766 214.683 256 216.267 256H295.732C297.316 256 298.873 256.766 300.006 258.1L363.945 333.436L345.859 351.531C339.406 357.937 330.75 361.156 321.765 360.844C312.672 360.437 304.453 356.375 298.64 349.375L281.484 328.781C259.64 302.625 221.187 298.094 193.922 318.562L179.218 329.594C173.687 333.719 166.875 336 160 336H145.877L211.994 258.1ZM479.197 476.293C477.48 480 474.785 480 473.9 480H38.099C37.215 480 34.519 480 32.802 476.293C32.011 474.586 31.095 471.24 33.828 468.02L118.718 368H160C173.734 368 187.359 363.469 198.39 355.219L213.125 344.187C226.75 333.875 246.015 336.219 256.89 349.281L274.047 369.875C285.531 383.656 302.39 392 320.297 392.812C321.265 392.875 322.234 392.906 323.203 392.906C340.109 392.906 356.468 386.156 368.484 374.156L384.718 357.912L478.172 468.02C480.906 471.24 479.988 474.586 479.197 476.293ZM240 96V176C240 184.844 247.156 192 256 192S272 184.844 272 176V96C272 87.156 264.843 80 256 80S240 87.156 240 96Z" />
    </Icon>
);

export default Volcano;