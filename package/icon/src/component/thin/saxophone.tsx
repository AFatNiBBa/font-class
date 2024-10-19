
import { Icon } from "../../index";

/**
 * A component that renders the `saxophone` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/saxophone?s=thin saxophone}
 * @preview ![saxophone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMTEuOTk0IDIyNEMxMTEuOTk0IDIzMi44MzYgMTE5LjE1OCAyNDAgMTI3Ljk5NCAyNDBTMTQzLjk5NCAyMzIuODM2IDE0My45OTQgMjI0UzEzNi44MyAyMDggMTI3Ljk5NCAyMDhTMTExLjk5NCAyMTUuMTY0IDExMS45OTQgMjI0Wk04IDE0NEgyNzkuOTg4QzI4NC4zOTUgMTQ0IDI4Ny45ODggMTQwLjQwNiAyODcuOTg4IDEzNlMyODQuMzk1IDEyOCAyNzkuOTg4IDEyOEg4QzMuNTk0IDEyOCAwIDEzMS41OTQgMCAxMzZTMy41OTQgMTQ0IDggMTQ0Wk03OS45OTYgMzIwQzc5Ljk5NiAzMjguODM2IDg3LjE2IDMzNiA5NS45OTYgMzM2UzExMS45OTQgMzI4LjgzNiAxMTEuOTk0IDMyMFMxMDQuODMyIDMwNCA5NS45OTYgMzA0Uzc5Ljk5NiAzMTEuMTY0IDc5Ljk5NiAzMjBaTTYzMi45NzMgNjkuNzVMNjA2LjM3OSA0My4zNDRDNTk4Ljk3NSAzNi4wMzEgNTg5LjE2MiAzMiA1NzguNzI1IDMySDUzMy4wMDhDNTE0LjIyNyAzMiA0OTYuNTcyIDM5LjI1IDQ4My4yNiA1Mi40MDZMNDMzLjIwNSAxMDEuOTEyTDQyMS42MzkgOTAuMzQ0QzQxOC41MTQgODcuMjE5IDQxMy40NTEgODcuMjE5IDQxMC4zMjYgOTAuMzQ0UzQwNy4yMDEgOTguNTMxIDQxMC4zMjYgMTAxLjY1Nkw0MjEuODMyIDExMy4xNjJMMzg0Ljk0MyAxNDkuNjQ4TDM3My42NDEgMTM4LjM0NEMzNzAuNTE2IDEzNS4yMTkgMzY1LjQ1MyAxMzUuMjE5IDM2Mi4zMjggMTM4LjM0NFMzNTkuMjAzIDE0Ni41MzEgMzYyLjMyOCAxNDkuNjU2TDM3My41NyAxNjAuODk4TDMzNi42OCAxOTcuMzgzTDMyNS42NDMgMTg2LjM0NEMzMjIuNTE4IDE4My4yMTkgMzE3LjQ1NSAxODMuMjE5IDMxNC4zMyAxODYuMzQ0UzMxMS4yMDUgMTk0LjUzMSAzMTQuMzMgMTk3LjY1NkwzMjUuMzA3IDIwOC42MzNMMjA3LjE0NiAzMjUuNUMyMDEuMTE1IDMzMS4zNDQgMTkxLjU4NiAzMzEuOTM4IDE4NC45NjEgMzI2LjgxMkMxNzguMzY3IDMyMS43NSAxNzYuNjE3IDMxMi41MzEgMTgwLjk5MiAzMDUuMjE5TDI1NS4yMDcgMTcxLjkwNkMyNTcuMzMyIDE2OC4wMzEgMjU1Ljk1NyAxNjMuMTU2IDI1Mi4xMTMgMTYxQzI0OC4yMDcgMTU4Ljg0NCAyNDMuMzY1IDE2MC4yNSAyNDEuMjA5IDE2NC4wOTRMMTY3LjExNyAyOTcuMjE5QzE1OC43MTEgMzExLjMxMiAxNjIuMTggMzI5LjQ2OSAxNzUuMTggMzM5LjQ2OUMxODcuOTkyIDM0OS41IDIwNi41ODQgMzQ4LjM3NSAyMTguMzY1IDMzNi45MDZMMzM2LjYxNyAyMTkuOTQ1TDM0Ni4zMjggMjI5LjY1NkMzNDcuODkxIDIzMS4yMTkgMzQ5LjkyMiAyMzIgMzUxLjk4NCAyMzJTMzU2LjA3OCAyMzEuMjE5IDM1Ny42NDEgMjI5LjY1NkMzNjAuNzY2IDIyNi41MzEgMzYwLjc2NiAyMjEuNDY5IDM1Ny42NDEgMjE4LjM0NEwzNDcuOTkyIDIwOC42OTVMMzg0Ljg4MSAxNzIuMjExTDM5NC4zMjYgMTgxLjY1NkMzOTUuODg5IDE4My4yMTkgMzk3LjkyIDE4NCAzOTkuOTgyIDE4NFM0MDQuMDc2IDE4My4yMTkgNDA1LjYzOSAxODEuNjU2QzQwOC43NjQgMTc4LjUzMSA0MDguNzY0IDE3My40NjkgNDA1LjYzOSAxNzAuMzQ0TDM5Ni4yNTYgMTYwLjk2MUw0MzMuMTQ1IDEyNC40NzdMNDQyLjMyNCAxMzMuNjU2QzQ0My44ODcgMTM1LjIxOSA0NDUuOTE4IDEzNiA0NDcuOTggMTM2UzQ1Mi4wNzQgMTM1LjIxOSA0NTMuNjM3IDEzMy42NTZDNDU2Ljc2MiAxMzAuNTMxIDQ1Ni43NjIgMTI1LjQ2OSA0NTMuNjM3IDEyMi4zNDRMNDQ0LjUyIDExMy4yMjdMNDk0LjUxIDYzLjc4MUM1MDQuNzkxIDUzLjU5NCA1MTguNDc3IDQ4IDUzMy4wMDggNDhINTc4LjcyNUM1ODQuOTEyIDQ4IDU5MC43NTYgNTAuMzc1IDU5NS4xMzEgNTQuNzE5TDYyMS43NTQgODEuMTU2QzYyNC45MSA4NC4yNSA2MjMuOTczIDg3LjY4OCA2MjMuNDEgODkuMDYyQzYyMi45NzMgOTAuMTU2IDYyMS4xMjkgOTMuNzE5IDYxNi4zNzkgOTMuNzE5SDU1My4zNTJDNTQxLjQxNCA5My43MTkgNTMwLjI1OCA5OSA1MjIuNzU4IDEwOC4yNUwyODIuOTI2IDQwNC44NzVMMjgwLjExMyA0MDcuOTY5QzI2Ni41MiA0MjMuMzEyIDIzMC40MjggNDY0IDE2My45NjEgNDY0QzEzOS45OTQgNDY0LjY1NiAxMTYuMTgyIDQ1OC4wOTQgOTUuMjc3IDQ0Ni40NjlDNDYuMzczIDQyMC45MzggMTYgMzcxLjYyNSAxNiAzMTcuNzE5QzE2IDI4Mi4xODcgMzIuOTk4IDIwMy45NjkgNDIuNDk4IDE3MC4xNTZDNDMuNzE3IDE2NS45MDYgNDEuMjE3IDE2MS41IDM2Ljk2NyAxNjAuMzEyQzMyLjc0OCAxNTkgMjguMjc5IDE2MS41OTQgMjcuMTIzIDE2NS44NDRDMTcuOTY5IDE5OC4zNzUgMCAyNzguOTM4IDAgMzE3LjcxOUMwIDM3Ny41OTQgMzMuNjg2IDQzMi4zNzUgODcuNjg0IDQ2MC41NjJDMTEwLjU1OSA0NzMuMjgxIDEzNi42ODIgNDgwIDE2My4yMTEgNDgwSDE2My45OTJDMjM3LjYxNSA0ODAgMjc3LjIwNyA0MzUuMzc1IDI5Mi4wOCA0MTguNTk0TDUzNS4xOTUgMTE4LjMxMkM1MzkuNjMzIDExMi44NDQgNTQ2LjI1OCAxMDkuNzE5IDU1My4zNTIgMTA5LjcxOUg2MTYuMzc5QzYyNi4wMzUgMTA5LjcxOSA2MzQuNTk4IDEwMy45NjkgNjM4LjIyMyA5NS4wOTRDNjQxLjg0OCA4Ni4xODggNjM5Ljg0OCA3Ni40NjkgNjMyLjk3MyA2OS43NVoiLz48L3N2Zz4=|width=32|height=32)
 */
const Saxophone: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M111.994 224C111.994 232.836 119.158 240 127.994 240S143.994 232.836 143.994 224S136.83 208 127.994 208S111.994 215.164 111.994 224ZM8 144H279.988C284.395 144 287.988 140.406 287.988 136S284.395 128 279.988 128H8C3.594 128 0 131.594 0 136S3.594 144 8 144ZM79.996 320C79.996 328.836 87.16 336 95.996 336S111.994 328.836 111.994 320S104.832 304 95.996 304S79.996 311.164 79.996 320ZM632.973 69.75L606.379 43.344C598.975 36.031 589.162 32 578.725 32H533.008C514.227 32 496.572 39.25 483.26 52.406L433.205 101.912L421.639 90.344C418.514 87.219 413.451 87.219 410.326 90.344S407.201 98.531 410.326 101.656L421.832 113.162L384.943 149.648L373.641 138.344C370.516 135.219 365.453 135.219 362.328 138.344S359.203 146.531 362.328 149.656L373.57 160.898L336.68 197.383L325.643 186.344C322.518 183.219 317.455 183.219 314.33 186.344S311.205 194.531 314.33 197.656L325.307 208.633L207.146 325.5C201.115 331.344 191.586 331.938 184.961 326.812C178.367 321.75 176.617 312.531 180.992 305.219L255.207 171.906C257.332 168.031 255.957 163.156 252.113 161C248.207 158.844 243.365 160.25 241.209 164.094L167.117 297.219C158.711 311.312 162.18 329.469 175.18 339.469C187.992 349.5 206.584 348.375 218.365 336.906L336.617 219.945L346.328 229.656C347.891 231.219 349.922 232 351.984 232S356.078 231.219 357.641 229.656C360.766 226.531 360.766 221.469 357.641 218.344L347.992 208.695L384.881 172.211L394.326 181.656C395.889 183.219 397.92 184 399.982 184S404.076 183.219 405.639 181.656C408.764 178.531 408.764 173.469 405.639 170.344L396.256 160.961L433.145 124.477L442.324 133.656C443.887 135.219 445.918 136 447.98 136S452.074 135.219 453.637 133.656C456.762 130.531 456.762 125.469 453.637 122.344L444.52 113.227L494.51 63.781C504.791 53.594 518.477 48 533.008 48H578.725C584.912 48 590.756 50.375 595.131 54.719L621.754 81.156C624.91 84.25 623.973 87.688 623.41 89.062C622.973 90.156 621.129 93.719 616.379 93.719H553.352C541.414 93.719 530.258 99 522.758 108.25L282.926 404.875L280.113 407.969C266.52 423.312 230.428 464 163.961 464C139.994 464.656 116.182 458.094 95.277 446.469C46.373 420.938 16 371.625 16 317.719C16 282.187 32.998 203.969 42.498 170.156C43.717 165.906 41.217 161.5 36.967 160.312C32.748 159 28.279 161.594 27.123 165.844C17.969 198.375 0 278.938 0 317.719C0 377.594 33.686 432.375 87.684 460.562C110.559 473.281 136.682 480 163.211 480H163.992C237.615 480 277.207 435.375 292.08 418.594L535.195 118.312C539.633 112.844 546.258 109.719 553.352 109.719H616.379C626.035 109.719 634.598 103.969 638.223 95.094C641.848 86.188 639.848 76.469 632.973 69.75Z" />
    </Icon>
);

export default Saxophone;