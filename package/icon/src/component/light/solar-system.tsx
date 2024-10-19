
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `solar-system` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/solar-system?s=light solar-system}
 * @preview ![solar-system](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODAuMzgxIDEyMy43MzhDMzY3Ljc1NyAxMTEuMTEzIDM0OS4wMDggMTA5LjIzOCAzMzQuMDA5IDExNi45ODhDMzEwLjM4NiAxMDMuNzM4IDI4My44ODcgOTUuOTg3IDI1Ni4xMzkgOTUuOTg3QzE4Mi43NjkgOTUuOTg3IDExOC43NzMgMTQ1Ljk4OCAxMDEuMDI0IDIxNy4xMTVDODMuMTUgMjg4LjM2NiAxMTYuMDIzIDM2Mi40OTIgMTgwLjc2OSAzOTcuMTE4QzI0NS41MTUgNDMxLjYxOSAzMjUuMzg1IDQxNy43NDMgMzc0LjYzMiAzNjMuMzY3QzQyNC4wMDQgMzA4Ljk5MSA0MjkuODc4IDIyOC4xMTUgMzg5LjEzMSAxNjcuMTE0QzM5NS4yNTUgMTUyLjExMyAzOTEuNzU2IDEzNS4xMTMgMzgwLjM4MSAxMjMuNzM4Wk0zNDYuNjMzIDM0Ni40OTJDMjk4LjI2MSAzOTQuODY4IDIxMy44OTIgMzk0Ljg2OCAxNjUuNTIgMzQ2LjQ5MkMxMjguODk3IDMwOS44NjYgMTE4LjAyMyAyNTQuODY1IDEzNy43NzEgMjA2Ljk5QzE1Ny42NDUgMTU5LjExNCAyMDQuMjY3IDEyNy45ODggMjU2LjEzOSAxMjcuOTg4QzI3Ni42MzggMTI3Ljk4OCAyOTYuMTM3IDEzMy4zNjMgMzE0LjAxIDE0Mi4zNjNDMzEwLjYzNiAxNTUuNjE0IDMxMy41MSAxNjkuOTg5IDMyMy43NiAxODAuMjM5QzMzNC42MzQgMTkwLjk4OSAzNTAuNjMzIDE5NC42MTQgMzY1LjAwNyAxODkuNDg5QzM5Ni4yNTUgMjM5Ljc0IDM4OC41MDYgMzA0Ljg2NiAzNDYuNjMzIDM0Ni40OTJaTTQzNy4yNTMgNzQuOTg3QzM2NS45NDkgMy41NjEgMjU5Ljk5NiAtMTguNzIxIDE2Ni44MDEgMTYuMjhDMTU3LjU4MyAxOS43NDIgMTUzLjk1NiAzMC45OTcgMTU5LjMzNCAzOS4yNDVDMTY2LjU1MiA1MC4zMTYgMTc3LjYyNSA0Ni4xMjUgMTc4LjEyIDQ1Ljk0QzI2NC44OTEgMTMuNDUgMzYzLjQ1NCAzNy43MyA0MjUuMTI4IDEwOC4yMzhDNDg5LjYyNCAxODIuMTE0IDQ5OC4zNzQgMjg5LjQ5MSA0NDYuODc3IDM3Mi44NjhDNDIxLjM3OSAzNjEuMzY3IDM5MS4yNTYgMzcwLjM2OCAzNzYuMTMyIDM5My45OTNDMzYxLjEzMiA0MTcuNjE4IDM2NS42MzIgNDQ4Ljc0NCAzODYuODgxIDQ2Ni45OTRDNDA4LjAwNCA0ODUuMzcgNDM5LjM3OCA0ODUuMzcgNDYwLjYyNiA0NjYuOTk0QzQ4MS43NSA0NDguNzQ0IDQ4Ni4zNzUgNDE3LjYxOCA0NzEuMjUgMzkzLjk5M0M1MzUuMTIyIDI5NC45OTEgNTIzLjk5NyAxNjEuNzM5IDQzNy4yNTMgNzQuOTg3Wk00MjQuMTI4IDQ0Ny45OTRDNDEwLjg3OSA0NDcuOTk0IDQwMC4xMyA0MzcuMjQ0IDQwMC4xMyA0MjMuOTk0UzQxMC44NzkgMzk5Ljk5MyA0MjQuMTI4IDM5OS45OTNDNDM3LjM3OCAzOTkuOTkzIDQ0OC4xMjcgNDEwLjc0MyA0NDguMTI3IDQyMy45OTRTNDM3LjM3OCA0NDcuOTk0IDQyNC4xMjggNDQ3Ljk5NFpNMzUxLjE4OCA0NzIuOTQ1QzM0Ny4xOTggNDY2Ljc3OCAzMzkuNTggNDYzLjk1NyAzMzIuNjc4IDQ2Ni40NjhDMjY2LjQxNSA0OTAuNTc2IDE5Mi4zNDcgNDgyLjIwOSAxMzMuMDIyIDQ0My4yNDRDNjkuOTAxIDQwMS43NDMgMzIuMDI4IDMzMS4zNjcgMzEuOTAzIDI1NS45OUMzMS45MDMgMjEzLjk5IDQ0LjE1MiAxNzQuMTE0IDY1LjY1MSAxMzkuMjM4QzkxLjI3NCAxNTAuNjEzIDEyMS4zOTcgMTQxLjQ4OCAxMzYuMzk3IDExNy44NjNDMTUxLjM5NiA5NC4yMzcgMTQ2Ljg5NiA2My4xMTIgMTI1LjY0NyA0NC43MzdDMTA0LjUyNCAyNi4zNjEgNzMuMDI1IDI2LjM2MSA1MS43NzcgNDQuNjExQzMwLjUyOCA2Mi44NjIgMjUuNzc4IDkzLjk4NyA0MC42NTIgMTE3LjYxM0MtMjMuMjE4IDIxNi43NCAtMTEuODQ0IDM1MC4yNDIgNzQuOSA0MzYuOTk0QzE0NS42ODcgNTA3LjkwMyAyNTAuODUxIDUzMC40NDEgMzQzLjcyNCA0OTYuNDI1QzM1MC40NDYgNDkzLjk2MyAzNTguMjU3IDQ4My44NzIgMzUxLjE4OCA0NzIuOTQ1Wk04OC4wMjUgNjMuOTg3QzEwMS4yNzQgNjMuOTg3IDExMi4wMjMgNzQuNzM3IDExMi4wMjMgODcuOTg3UzEwMS4yNzQgMTExLjk4OCA4OC4wMjUgMTExLjk4OEM3NC43NzUgMTExLjk4OCA2NC4wMjYgMTAxLjIzOCA2NC4wMjYgODcuOTg3Uzc0Ljc3NSA2My45ODcgODguMDI1IDYzLjk4N1pNMjU2LjEzOSAxNzUuOTg5QzIxMS44OTIgMTc1Ljk4OSAxNzYuMTQ0IDIxMS44NjUgMTc2LjE0NCAyNTUuOTlDMTc2LjE0NCAzMDAuMjQxIDIxMS44OTIgMzM1Ljk5MiAyNTYuMTM5IDMzNS45OTJDMzAwLjI2MSAzMzUuOTkyIDMzNi4xMzQgMzAwLjExNiAzMzYuMTM0IDI1NS45OUMzMzYuMDA5IDIxMS44NjUgMzAwLjI2MSAxNzUuOTg5IDI1Ni4xMzkgMTc1Ljk4OVpNMjU2LjEzOSAzMDMuOTkxQzIyOS41MTYgMzAzLjk5MSAyMDguMTQyIDI4Mi40OTEgMjA4LjE0MiAyNTUuOTlTMjI5LjY0MSAyMDcuOTkgMjU2LjEzOSAyMDcuOTlTMzA0LjEzNiAyMjkuNDkgMzA0LjEzNiAyNTUuOTlTMjgyLjYzNyAzMDMuOTkxIDI1Ni4xMzkgMzAzLjk5MVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SolarSystem(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M380.381 123.738C367.757 111.113 349.008 109.238 334.009 116.988C310.386 103.738 283.887 95.987 256.139 95.987C182.769 95.987 118.773 145.988 101.024 217.115C83.15 288.366 116.023 362.492 180.769 397.118C245.515 431.619 325.385 417.743 374.632 363.367C424.004 308.991 429.878 228.115 389.131 167.114C395.255 152.113 391.756 135.113 380.381 123.738ZM346.633 346.492C298.261 394.868 213.892 394.868 165.52 346.492C128.897 309.866 118.023 254.865 137.771 206.99C157.645 159.114 204.267 127.988 256.139 127.988C276.638 127.988 296.137 133.363 314.01 142.363C310.636 155.614 313.51 169.989 323.76 180.239C334.634 190.989 350.633 194.614 365.007 189.489C396.255 239.74 388.506 304.866 346.633 346.492ZM437.253 74.987C365.949 3.561 259.996 -18.721 166.801 16.28C157.583 19.742 153.956 30.997 159.334 39.245C166.552 50.316 177.625 46.125 178.12 45.94C264.891 13.45 363.454 37.73 425.128 108.238C489.624 182.114 498.374 289.491 446.877 372.868C421.379 361.367 391.256 370.368 376.132 393.993C361.132 417.618 365.632 448.744 386.881 466.994C408.004 485.37 439.378 485.37 460.626 466.994C481.75 448.744 486.375 417.618 471.25 393.993C535.122 294.991 523.997 161.739 437.253 74.987ZM424.128 447.994C410.879 447.994 400.13 437.244 400.13 423.994S410.879 399.993 424.128 399.993C437.378 399.993 448.127 410.743 448.127 423.994S437.378 447.994 424.128 447.994ZM351.188 472.945C347.198 466.778 339.58 463.957 332.678 466.468C266.415 490.576 192.347 482.209 133.022 443.244C69.901 401.743 32.028 331.367 31.903 255.99C31.903 213.99 44.152 174.114 65.651 139.238C91.274 150.613 121.397 141.488 136.397 117.863C151.396 94.237 146.896 63.112 125.647 44.737C104.524 26.361 73.025 26.361 51.777 44.611C30.528 62.862 25.778 93.987 40.652 117.613C-23.218 216.74 -11.844 350.242 74.9 436.994C145.687 507.903 250.851 530.441 343.724 496.425C350.446 493.963 358.257 483.872 351.188 472.945ZM88.025 63.987C101.274 63.987 112.023 74.737 112.023 87.987S101.274 111.988 88.025 111.988C74.775 111.988 64.026 101.238 64.026 87.987S74.775 63.987 88.025 63.987ZM256.139 175.989C211.892 175.989 176.144 211.865 176.144 255.99C176.144 300.241 211.892 335.992 256.139 335.992C300.261 335.992 336.134 300.116 336.134 255.99C336.009 211.865 300.261 175.989 256.139 175.989ZM256.139 303.991C229.516 303.991 208.142 282.491 208.142 255.99S229.641 207.99 256.139 207.99S304.136 229.49 304.136 255.99S282.637 303.991 256.139 303.991Z" />
        </Icon>
    </>
}