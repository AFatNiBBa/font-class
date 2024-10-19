
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-directional` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-directional?s=brands nfc-directional}
 * @preview ![nfc-directional](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjExLjggNDg4LjZDMjEzLjQgNDkxLjEgMjEzLjkgNDk0LjIgMjEzLjIgNDk3LjFDMjEyLjYgNTAwIDIxMC44IDUwMi42IDIwOC4zIDUwNC4yQzIwNS43IDUwNS44IDIwMi43IDUwNi4zIDE5OS43IDUwNS43QzEzOC4zIDQ5MS44IDg0LjEgNDU1LjggNDcuNTMgNDA0LjVDMTAuOTcgMzUzLjItNS4zOTUgMjkwLjMgMS41NyAyMjcuN0M4LjUzNiAxNjUgMzguMzQgMTA3LjIgODUuMjkgNjUuMjFDMTMyLjIgMjMuMiAxOTMtLjAxMzEgMjU2IDBDMjU3LjUgMCAyNTguMSAuMjkzMSAyNjAuMyAuODYyN0MyNjEuNyAxLjQzMiAyNjIuMSAyLjI2NyAyNjQgMy4zMTlDMjY1LjEgNC4zNzEgMjY1LjkgNS42MTkgMjY2LjUgNi45OTNDMjY3IDguMzY3IDI2Ny4zIDkuODM5IDI2Ny4zIDExLjMyVjExMi4zTDI5MS44IDg2LjM5QzI5Mi44IDg1LjMxIDI5NCA4NC40NCAyOTUuNCA4My44NEMyOTYuNyA4My4yMyAyOTguMiA4Mi45IDI5OS43IDgyLjg2QzMwMS4yIDgyLjgxIDMwMi42IDgzLjA2IDMwNCA4My41OUMzMDUuNCA4NC4xMiAzMDYuNyA4NC45MiAzMDcuOCA4NS45NEMzMDguOCA4Ni45NiAzMDkuNyA4OC4xOCAzMTAuMyA4OS41NEMzMTAuOSA5MC44OSAzMTEuMyA5Mi4zNSAzMTEuMyA5My44NEMzMTEuMyA5NS4zMiAzMTEuMSA5Ni44IDMxMC42IDk4LjE4QzMxMCA5OS41NyAzMDkuMiAxMDAuOCAzMDguMiAxMDEuOUwyNjQuMiAxNDguNUMyNjMuMSAxNDkuNiAyNjEuOSAxNTAuNSAyNjAuNSAxNTEuMUMyNTkgMTUxLjcgMjU3LjUgMTUyIDI1NS4xIDE1MkMyNTQuNSAxNTIgMjUyLjkgMTUxLjcgMjUxLjUgMTUxLjFDMjUwLjEgMTUwLjUgMjQ4LjggMTQ5LjYgMjQ3LjggMTQ4LjVMMjAzLjcgMTAxLjlDMjAxLjcgOTkuNzQgMjAwLjYgOTYuODMgMjAwLjcgOTMuODRDMjAwLjcgOTAuODQgMjAyIDg3LjEgMjA0LjIgODUuOTRDMjA2LjQgODMuODggMjA5LjMgODIuNzcgMjEyLjMgODIuODZDMjE1LjMgODIuOTQgMjE4LjEgODQuMjEgMjIwLjIgODYuMzlMMjQ0LjcgMTEyLjRWMjIuODlDMTg4LjMgMjUuNjQgMTM0LjkgNDguNzMgOTQuMjMgODcuODdDNTMuNTggMTI3IDI4LjQ5IDE3OS42IDIzLjYxIDIzNS44QzE4LjczIDI5MiAzNC4zOCAzNDguMSA2Ny42OCAzOTMuN0MxMDAuMSA0MzkuMiAxNDkuNyA0NzEuMiAyMDQuNyA0ODMuNkMyMDcuNiA0ODQuMyAyMTAuMiA0ODYuMSAyMTEuOCA0ODguNkwyMTEuOCA0ODguNnpNMTcxLjQgMTI2LjFDMTcwLjYgMTI3LjQgMTY5LjUgMTI4LjUgMTY4LjMgMTI5LjNDMTQ3LjggMTQzLjIgMTMxLjEgMTYxLjkgMTE5LjUgMTgzLjhDMTA3LjkgMjA1LjcgMTAxLjggMjMwLjEgMTAxLjggMjU0LjlDMTAxLjggMjc5LjcgMTA3LjkgMzA0LjEgMTE5LjUgMzI1LjFDMTMxLjEgMzQ3LjkgMTQ3LjggMzY2LjYgMTY4LjMgMzgwLjVDMTcwLjggMzgyLjIgMTcyLjUgMzg0LjggMTczIDM4Ny44QzE3My42IDM5MC43IDE3Mi4xIDM5My44IDE3MS4zIDM5Ni4yQzE2OS42IDM5OC43IDE2Ni4xIDQwMC40IDE2NCA0MDAuMUMxNjEuMSA0MDEuNSAxNTggNDAwLjkgMTU1LjYgMzk5LjJDMTMyIDM4My4yIDExMi44IDM2MS43IDk5LjQ2IDMzNi41Qzg2LjE1IDMxMS40IDc5LjE5IDI4My40IDc5LjE5IDI1NC45Qzc5LjE5IDIyNi41IDg2LjE1IDE5OC40IDk5LjQ2IDE3My4zQzExMi44IDE0OC4xIDEzMiAxMjYuNiAxNTUuNiAxMTAuNkMxNTYuOCAxMDkuOCAxNTguMiAxMDkuMiAxNTkuNiAxMDguOEMxNjEuMSAxMDguNSAxNjIuNiAxMDguNSAxNjQuMSAxMDguOEMxNjUuNSAxMDkgMTY2LjkgMTA5LjYgMTY4LjIgMTEwLjRDMTY5LjUgMTExLjIgMTcwLjUgMTEyLjMgMTcxLjQgMTEzLjVDMTcyLjIgMTE0LjcgMTcyLjggMTE2LjEgMTczLjEgMTE3LjZDMTczLjQgMTE5LjEgMTczLjQgMTIwLjYgMTczLjEgMTIyQzE3Mi44IDEyMy41IDE3Mi4zIDEyNC45IDE3MS40IDEyNi4xSDE3MS40ek0zNDAuOSAzODMuNUMzNDEuNyAzODIuMyAzNDIuOCAzODEuMiAzNDMuMSAzODAuNFYzODAuM0MzNjQuNCAzNjYuMyAzODEuMSAzNDcuNiAzOTIuNyAzMjUuN0M0MDQuMiAzMDMuOSA0MTAuMiAyNzkuNSA0MTAuMiAyNTQuOEM0MTAuMiAyMzAuMSA0MDQuMiAyMDUuNyAzOTIuNyAxODMuOEMzODEuMSAxNjEuMSAzNjQuNCAxNDMuMyAzNDMuMSAxMjkuM0MzNDIuOCAxMjguNSAzNDEuNyAxMjcuNCAzNDAuOSAxMjYuMkMzNDAuMSAxMjQuOSAzMzkuNSAxMjMuNSAzMzkuMyAxMjIuMUMzMzguMSAxMjAuNiAzMzkgMTE5LjEgMzM5LjMgMTE3LjdDMzM5LjYgMTE2LjIgMzQwLjIgMTE0LjggMzQxIDExMy42QzM0MS45IDExMi40IDM0Mi4xIDExMS4zIDM0NC4yIDExMC41QzM0NS40IDEwOS43IDM0Ni44IDEwOS4yIDM0OC4zIDEwOC45QzM0OS44IDEwOC42IDM1MS4yIDEwOC42IDM1Mi43IDEwOC45QzM1NC4yIDEwOS4yIDM1NS41IDEwOS44IDM1Ni44IDExMC43QzM4MC4yIDEyNi43IDM5OS41IDE0OC4yIDQxMi43IDE3My4zQzQyNiAxOTguNCA0MzIuMSAyMjYuNCA0MzIuMSAyNTQuOEM0MzIuMSAyODMuMyA0MjYgMzExLjMgNDEyLjcgMzM2LjRDMzk5LjUgMzYxLjUgMzgwLjIgMzgzIDM1Ni44IDM5OUMzNTUuNSAzOTkuOSAzNTQuMiA0MDAuNSAzNTIuNyA0MDAuOEMzNTEuMiA0MDEuMSAzNDkuOCA0MDEuMSAzNDguMyA0MDAuOEMzNDYuOCA0MDAuNSAzNDUuNCAzOTkuMSAzNDQuMiAzOTkuMkMzNDIuMSAzOTguNCAzNDEuOSAzOTcuMyAzNDEgMzk2LjFDMzQwLjIgMzk0LjkgMzM5LjYgMzkzLjUgMzM5LjMgMzkyQzMzOSAzOTAuNiAzMzguMSAzODkuMSAzMzkuMyAzODcuNkMzMzkuNSAzODYuMiAzNDAuMSAzODQuOCAzNDAuOSAzODMuNVYzODMuNXpNMzEyLjMgNi4zMDdDMzY4LjUgMTkuMDQgNDE4LjcgNTAuMjggNDU1IDk1LjAxQzQ4NS40IDEzMi42IDUwNC42IDE3OCA1MTAuMyAyMjZDNTE1LjkgMjc0IDUwNy45IDMyMi43IDQ4Ny4xIDM2Ni4zQzQ2Ni4yIDQwOS45IDQzMy41IDQ0Ni44IDM5Mi42IDQ3Mi42QzM1MS43IDQ5OC4zIDMwNC40IDUxMiAyNTYgNTEyQzI1NC41IDUxMiAyNTMuMSA1MTEuNyAyNTEuNyA1MTEuMUMyNTAuMyA1MTAuNiAyNDkuMSA1MDkuNyAyNDggNTA4LjdDMjQ2LjEgNTA3LjYgMjQ2LjEgNTA2LjQgMjQ1LjYgNTA1QzI0NSA1MDMuNiAyNDQuNyA1MDIuMiAyNDQuNyA1MDAuN1Y0MDEuNUwyMjAuMiA0MjcuNUMyMTguMSA0MjkuNyAyMTUuMyA0MzAuMSAyMTIuMyA0MzEuMUMyMDkuMyA0MzEuMiAyMDYuNCA0MzAgMjA0LjIgNDI3LjFDMjAyIDQyNS45IDIwMC43IDQyMy4xIDIwMC43IDQyMC4xQzIwMC42IDQxNy4xIDIwMS43IDQxNC4yIDIwMy43IDQxMkwyNDcuOCAzNjUuNEMyNDkuMSAzNjMuMiAyNTIuOSAzNjIgMjU1LjEgMzYyQzI1OS4xIDM2MiAyNjIgMzYzLjIgMjY0LjIgMzY1LjRMMzA4LjIgNDEyQzMxMC4zIDQxNC4yIDMxMS40IDQxNy4xIDMxMS4zIDQyMC4xQzMxMS4yIDQyMy4xIDMwOS45IDQyNS45IDMwNy44IDQyNy4xQzMwNS42IDQzMCAzMDIuNyA0MzEuMiAyOTkuNyA0MzEuMUMyOTYuNyA0MzAuMSAyOTMuOCA0MjkuNyAyOTEuOCA0MjcuNUwyNjcuMyA0MDEuNlY0ODkuMUMzMjMuNyA0ODYuMyAzNzcuMSA0NjMuMyA0MTcuOCA0MjQuMUM0NTguNSAzODQuMSA0ODMuNiAzMzIuNCA0ODguNSAyNzYuMkM0OTMuMyAyMTkuMSA0NzcuNyAxNjMuOSA0NDQuNCAxMTguM0M0MTEuMSA3Mi43NSAzNjIuNCA0MC43OSAzMDcuNCAyOC4zNkMzMDUuOSAyOC4wMyAzMDQuNiAyNy40MiAzMDMuMyAyNi41N0MzMDIuMSAyNS43MSAzMDEuMSAyNC42MyAzMDAuMyAyMy4zN0MyOTkuNSAyMi4xMiAyOTguMSAyMC43MiAyOTguNyAxOS4yNkMyOTguNSAxNy44IDI5OC41IDE2LjMgMjk4LjggMTQuODVDMjk5LjIgMTMuNDEgMjk5LjggMTIuMDQgMzAwLjYgMTAuODJDMzAxLjUgOS42MSAzMDIuNiA4LjU3NyAzMDMuOCA3Ljc4NEMzMDUuMSA2Ljk5IDMwNi41IDYuNDUxIDMwNy45IDYuMTk4QzMwOS40IDUuOTQ1IDMxMC45IDUuOTgyIDMxMi4zIDYuMzA3TDMxMi4zIDYuMzA3ek0zNTMuMSAyNTYuMUMzNTMuMSAyODcuNSAzMzUuNiAzMTcuMiAzMDMuOCAzMzkuNkMzMDEuNyAzNDEuMSAyOTkgMzQxLjkgMjk2LjQgMzQxLjZDMjkzLjcgMzQxLjQgMjkxLjIgMzQwLjMgMjg5LjQgMzM4LjRMMjE5LjMgMjY4LjZDMjE3LjEgMjY2LjUgMjE1LjEgMjYzLjYgMjE1LjkgMjYwLjZDMjE1LjkgMjU3LjYgMjE3LjEgMjU0LjcgMjE5LjIgMjUyLjZDMjIxLjQgMjUwLjUgMjI0LjIgMjQ5LjMgMjI3LjIgMjQ5LjNDMjMwLjIgMjQ5LjMgMjMzLjEgMjUwLjUgMjM1LjIgMjUyLjZMMjk4LjMgMzE1LjRDMzE5LjEgMjk4LjMgMzMwLjUgMjc3LjUgMzMwLjUgMjU2LjFDMzMwLjUgMjMyLjIgMzE2LjQgMjA5LjEgMjkwLjggMTkxQzI4OC4zIDE4OS4zIDI4Ni43IDE4Ni43IDI4Ni4yIDE4My43QzI4NS43IDE4MC44IDI4Ni4zIDE3Ny43IDI4OC4xIDE3NS4zQzI4OS44IDE3Mi44IDI5Mi40IDE3MS4yIDI5NS40IDE3MC43QzI5OC4zIDE3MC4yIDMwMS40IDE3MC44IDMwMy44IDE3Mi42QzMzNS42IDE5NSAzNTMuMSAyMjQuNyAzNTMuMSAyNTYuMVYyNTYuMXpNMjE2LjcgMzQxLjVDMjEzLjcgMzQyIDIxMC43IDM0MS4zIDIwOC4yIDMzOS42QzE3Ni41IDMxNy4yIDE1OC4xIDI4Ny41IDE1OC4xIDI1Ni4xQzE1OC4xIDIyNC43IDE3Ni41IDE5NSAyMDguMiAxNzIuNkMyMTAuNCAxNzEgMjEzLjEgMTcwLjMgMjE1LjcgMTcwLjVDMjE4LjQgMTcwLjggMjIwLjggMTcxLjkgMjIyLjcgMTczLjhMMjkyLjggMjQzLjZDMjk0LjkgMjQ1LjcgMjk2LjEgMjQ4LjYgMjk2LjEgMjUxLjZDMjk2LjEgMjU0LjYgMjk0LjEgMjU3LjQgMjkyLjggMjU5LjZDMjkwLjcgMjYxLjcgMjg3LjggMjYyLjkgMjg0LjkgMjYyLjlDMjgxLjkgMjYyLjkgMjc4LjEgMjYxLjcgMjc2LjkgMjU5LjZMMjEzLjggMTk2LjdDMTkyLjkgMjE0IDE4MS42IDIzNC43IDE4MS42IDI1Ni4xQzE4MS42IDI3OS4xIDE5NS43IDMwMy4xIDIyMS4zIDMyMS4xQzIyMy43IDMyMi45IDIyNS40IDMyNS41IDIyNS45IDMyOC41QzIyNi40IDMzMS40IDIyNS43IDMzNC40IDIyNCAzMzYuOUMyMjIuMyAzMzkuMyAyMTkuNiAzNDEgMjE2LjcgMzQxLjVMMjE2LjcgMzQxLjV6Ii8+PC9zdmc+|width=32|height=32)
 */
const NfcDirectional: typeof Icon = x => (
    <Icon {...x}>
        <path d="M211.8 488.6C213.4 491.1 213.9 494.2 213.2 497.1C212.6 500 210.8 502.6 208.3 504.2C205.7 505.8 202.7 506.3 199.7 505.7C138.3 491.8 84.1 455.8 47.53 404.5C10.97 353.2-5.395 290.3 1.57 227.7C8.536 165 38.34 107.2 85.29 65.21C132.2 23.2 193-.0131 256 0C257.5 0 258.1 .2931 260.3 .8627C261.7 1.432 262.1 2.267 264 3.319C265.1 4.371 265.9 5.619 266.5 6.993C267 8.367 267.3 9.839 267.3 11.32V112.3L291.8 86.39C292.8 85.31 294 84.44 295.4 83.84C296.7 83.23 298.2 82.9 299.7 82.86C301.2 82.81 302.6 83.06 304 83.59C305.4 84.12 306.7 84.92 307.8 85.94C308.8 86.96 309.7 88.18 310.3 89.54C310.9 90.89 311.3 92.35 311.3 93.84C311.3 95.32 311.1 96.8 310.6 98.18C310 99.57 309.2 100.8 308.2 101.9L264.2 148.5C263.1 149.6 261.9 150.5 260.5 151.1C259 151.7 257.5 152 255.1 152C254.5 152 252.9 151.7 251.5 151.1C250.1 150.5 248.8 149.6 247.8 148.5L203.7 101.9C201.7 99.74 200.6 96.83 200.7 93.84C200.7 90.84 202 87.1 204.2 85.94C206.4 83.88 209.3 82.77 212.3 82.86C215.3 82.94 218.1 84.21 220.2 86.39L244.7 112.4V22.89C188.3 25.64 134.9 48.73 94.23 87.87C53.58 127 28.49 179.6 23.61 235.8C18.73 292 34.38 348.1 67.68 393.7C100.1 439.2 149.7 471.2 204.7 483.6C207.6 484.3 210.2 486.1 211.8 488.6L211.8 488.6zM171.4 126.1C170.6 127.4 169.5 128.5 168.3 129.3C147.8 143.2 131.1 161.9 119.5 183.8C107.9 205.7 101.8 230.1 101.8 254.9C101.8 279.7 107.9 304.1 119.5 325.1C131.1 347.9 147.8 366.6 168.3 380.5C170.8 382.2 172.5 384.8 173 387.8C173.6 390.7 172.1 393.8 171.3 396.2C169.6 398.7 166.1 400.4 164 400.1C161.1 401.5 158 400.9 155.6 399.2C132 383.2 112.8 361.7 99.46 336.5C86.15 311.4 79.19 283.4 79.19 254.9C79.19 226.5 86.15 198.4 99.46 173.3C112.8 148.1 132 126.6 155.6 110.6C156.8 109.8 158.2 109.2 159.6 108.8C161.1 108.5 162.6 108.5 164.1 108.8C165.5 109 166.9 109.6 168.2 110.4C169.5 111.2 170.5 112.3 171.4 113.5C172.2 114.7 172.8 116.1 173.1 117.6C173.4 119.1 173.4 120.6 173.1 122C172.8 123.5 172.3 124.9 171.4 126.1H171.4zM340.9 383.5C341.7 382.3 342.8 381.2 343.1 380.4V380.3C364.4 366.3 381.1 347.6 392.7 325.7C404.2 303.9 410.2 279.5 410.2 254.8C410.2 230.1 404.2 205.7 392.7 183.8C381.1 161.1 364.4 143.3 343.1 129.3C342.8 128.5 341.7 127.4 340.9 126.2C340.1 124.9 339.5 123.5 339.3 122.1C338.1 120.6 339 119.1 339.3 117.7C339.6 116.2 340.2 114.8 341 113.6C341.9 112.4 342.1 111.3 344.2 110.5C345.4 109.7 346.8 109.2 348.3 108.9C349.8 108.6 351.2 108.6 352.7 108.9C354.2 109.2 355.5 109.8 356.8 110.7C380.2 126.7 399.5 148.2 412.7 173.3C426 198.4 432.1 226.4 432.1 254.8C432.1 283.3 426 311.3 412.7 336.4C399.5 361.5 380.2 383 356.8 399C355.5 399.9 354.2 400.5 352.7 400.8C351.2 401.1 349.8 401.1 348.3 400.8C346.8 400.5 345.4 399.1 344.2 399.2C342.1 398.4 341.9 397.3 341 396.1C340.2 394.9 339.6 393.5 339.3 392C339 390.6 338.1 389.1 339.3 387.6C339.5 386.2 340.1 384.8 340.9 383.5V383.5zM312.3 6.307C368.5 19.04 418.7 50.28 455 95.01C485.4 132.6 504.6 178 510.3 226C515.9 274 507.9 322.7 487.1 366.3C466.2 409.9 433.5 446.8 392.6 472.6C351.7 498.3 304.4 512 256 512C254.5 512 253.1 511.7 251.7 511.1C250.3 510.6 249.1 509.7 248 508.7C246.1 507.6 246.1 506.4 245.6 505C245 503.6 244.7 502.2 244.7 500.7V401.5L220.2 427.5C218.1 429.7 215.3 430.1 212.3 431.1C209.3 431.2 206.4 430 204.2 427.1C202 425.9 200.7 423.1 200.7 420.1C200.6 417.1 201.7 414.2 203.7 412L247.8 365.4C249.1 363.2 252.9 362 255.1 362C259.1 362 262 363.2 264.2 365.4L308.2 412C310.3 414.2 311.4 417.1 311.3 420.1C311.2 423.1 309.9 425.9 307.8 427.1C305.6 430 302.7 431.2 299.7 431.1C296.7 430.1 293.8 429.7 291.8 427.5L267.3 401.6V489.1C323.7 486.3 377.1 463.3 417.8 424.1C458.5 384.1 483.6 332.4 488.5 276.2C493.3 219.1 477.7 163.9 444.4 118.3C411.1 72.75 362.4 40.79 307.4 28.36C305.9 28.03 304.6 27.42 303.3 26.57C302.1 25.71 301.1 24.63 300.3 23.37C299.5 22.12 298.1 20.72 298.7 19.26C298.5 17.8 298.5 16.3 298.8 14.85C299.2 13.41 299.8 12.04 300.6 10.82C301.5 9.61 302.6 8.577 303.8 7.784C305.1 6.99 306.5 6.451 307.9 6.198C309.4 5.945 310.9 5.982 312.3 6.307L312.3 6.307zM353.1 256.1C353.1 287.5 335.6 317.2 303.8 339.6C301.7 341.1 299 341.9 296.4 341.6C293.7 341.4 291.2 340.3 289.4 338.4L219.3 268.6C217.1 266.5 215.1 263.6 215.9 260.6C215.9 257.6 217.1 254.7 219.2 252.6C221.4 250.5 224.2 249.3 227.2 249.3C230.2 249.3 233.1 250.5 235.2 252.6L298.3 315.4C319.1 298.3 330.5 277.5 330.5 256.1C330.5 232.2 316.4 209.1 290.8 191C288.3 189.3 286.7 186.7 286.2 183.7C285.7 180.8 286.3 177.7 288.1 175.3C289.8 172.8 292.4 171.2 295.4 170.7C298.3 170.2 301.4 170.8 303.8 172.6C335.6 195 353.1 224.7 353.1 256.1V256.1zM216.7 341.5C213.7 342 210.7 341.3 208.2 339.6C176.5 317.2 158.1 287.5 158.1 256.1C158.1 224.7 176.5 195 208.2 172.6C210.4 171 213.1 170.3 215.7 170.5C218.4 170.8 220.8 171.9 222.7 173.8L292.8 243.6C294.9 245.7 296.1 248.6 296.1 251.6C296.1 254.6 294.1 257.4 292.8 259.6C290.7 261.7 287.8 262.9 284.9 262.9C281.9 262.9 278.1 261.7 276.9 259.6L213.8 196.7C192.9 214 181.6 234.7 181.6 256.1C181.6 279.1 195.7 303.1 221.3 321.1C223.7 322.9 225.4 325.5 225.9 328.5C226.4 331.4 225.7 334.4 224 336.9C222.3 339.3 219.6 341 216.7 341.5L216.7 341.5z" />
    </Icon>
);

export default NfcDirectional;