
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/link?s=duotone link}
 * @preview ![link](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU5OC41OTMgMjQxLjMzNkw0NjUuMzM2IDM3NC41OTJDNDM3LjczIDQwMi4xOTcgNDAxLjU1MSA0MTYgMzY1LjM3MSA0MTZTMjkzLjAxIDQwMi4xOTcgMjY1LjQwNyAzNzQuNTkyQzIzOC43NzQgMzQ3Ljk1OSAyMjQuOTg5IDMxMy4zNDMgMjI0LjA1MSAyNzguNDQ3QzIyMy4wNDYgMjQxLjAwNCAyMzYuODMxIDIwMy4yMzggMjY1LjQwNyAxNzQuNjYyTDI3OS41ODQgMTYwLjQ4NEMyOTguMzYgMTYxLjY4MiAzMTUuOTE0IDE2OS4yMzYgMzI5LjMzOCAxODIuNjYyQzMzMi40OTIgMTg1LjgxNiAzMzUuMTk0IDE4OS4yODkgMzM3LjcyMSAxOTIuODU3TDMxMC42NiAyMTkuOTE4QzI5Ni4wNDcgMjM0LjUzMSAyODcuOTk4IDI1My45NjEgMjg3Ljk5OCAyNzQuNjI3UzI5Ni4wNDcgMzE0LjcyMyAzMTAuNjYgMzI5LjMzNkMzMjUuMjc2IDM0My45NTEgMzQ0LjcwNSAzNTIgMzY1LjM3MSAzNTJDMzg2LjAzNyAzNTIgNDA1LjQ2NyAzNDMuOTUxIDQyMC4wOCAzMjkuMzM4TDU1My4zMzggMTk2LjA4QzU2Ny45NTMgMTgxLjQ2NyA1NzYgMTYyLjAzNyA1NzYgMTQxLjM3MVM1NjcuOTUzIDEwMS4yNzUgNTUzLjMzOCA4Ni42NjJDNTM4LjcyNCA3Mi4wNDcgNTE5LjI5NSA2NCA0OTguNjI5IDY0QzQ3Ny45NjEgNjQgNDU4LjUzMSA3Mi4wNDcgNDQzLjkxOCA4Ni42NkwzODMuMzI0IDE0Ny4yNTRDMzgwLjU0NSAxNDMuODk4IDM3Ny43NCAxNDAuNTUzIDM3NC41OTQgMTM3LjQwNkMzNjEuODc1IDEyNC42ODggMzQ3LjIwNyAxMTUuMjQgMzMxLjY4NiAxMDguMzgzTDM5OC42NjQgNDEuNDA2QzQyNi4yNjggMTMuODAzIDQ2Mi40NDcgMCA0OTguNjI5IDBDNTM0LjgwOCAwIDU3MC45ODggMTMuODAzIDU5OC41OTMgNDEuNDA2QzYyNS42OTkgNjguNTEyIDYzOS40OTcgMTAzLjg4NyA2MzkuOTg3IDEzOS40MTFDNjQwLjQ5NCAxNzYuMjQyIDYyNi42OTYgMjEzLjIzMyA1OTguNTkzIDI0MS4zMzZaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTQxLjQwNyAyNzAuNjY0TDE3NC42NjQgMTM3LjQwOEMyMDIuMjcgMTA5LjgwMyAyMzguNDQ5IDk2IDI3NC42MjkgOTZTMzQ2Ljk5IDEwOS44MDMgMzc0LjU5MyAxMzcuNDA4QzQwMi4xOTcgMTY1LjAxMiA0MTYgMjAxLjE5MiA0MTYgMjM3LjM3MUM0MTYgMjczLjU1MiA0MDIuMTk4IDMwOS43MzMgMzc0LjU5MyAzMzcuMzM4TDM2MC40MTYgMzUxLjUxNkMzNDEuNjQgMzUwLjMxOCAzMjQuMDg2IDM0Mi43NjQgMzEwLjY2MiAzMjkuMzM4QzMwNy41MDggMzI2LjE4NCAzMDQuODA2IDMyMi43MTEgMzAyLjI3OSAzMTkuMTQzTDMyOS4zNCAyOTIuMDgyQzM0My45NTMgMjc3LjQ2OSAzNTIuMDAyIDI1OC4wMzkgMzUyLjAwMiAyMzcuMzczUzM0My45NTMgMTk3LjI3NyAzMjkuMzQgMTgyLjY2NEMzMTQuNzI0IDE2OC4wNDkgMjk1LjI5NSAxNjAgMjc0LjYyOSAxNjBTMjM0LjUzMyAxNjguMDQ5IDIxOS45MiAxODIuNjYyTDg2LjY2MiAzMTUuOTJDNzIuMDQ3IDMzMC41MzMgNjQgMzQ5Ljk2MyA2NCAzNzAuNjI5UzcyLjA0NyA0MTAuNzI1IDg2LjY2MiA0MjUuMzM4QzEwMS4yNzYgNDM5Ljk1MyAxMjAuNzA1IDQ0OCAxNDEuMzcxIDQ0OEMxNjIuMDM5IDQ0OCAxODEuNDY5IDQzOS45NTMgMTk2LjA4MiA0MjUuMzRMMjU2LjY3NiAzNjQuNzQ2QzI1OS40NTUgMzY4LjEwMiAyNjIuMjYgMzcxLjQ0NyAyNjUuNDA2IDM3NC41OTRDMjc4LjEyNSAzODcuMzEyIDI5Mi43OTMgMzk2Ljc2IDMwOC4zMTQgNDAzLjYxN0wyNDEuMzM2IDQ3MC41OTRDMjEzLjczMiA0OTguMTk3IDE3Ny41NTMgNTEyIDE0MS4zNzEgNTEyQzEwNS4xOTIgNTEyIDY5LjAxMiA0OTguMTk3IDQxLjQwNyA0NzAuNTk0Qy0xMy44MDIgNDE1LjM4NSAtMTMuODAyIDMyNS44NzMgNDEuNDA3IDI3MC42NjRaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Link: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M598.593 241.336L465.336 374.592C437.73 402.197 401.551 416 365.371 416S293.01 402.197 265.407 374.592C238.774 347.959 224.989 313.343 224.051 278.447C223.046 241.004 236.831 203.238 265.407 174.662L279.584 160.484C298.36 161.682 315.914 169.236 329.338 182.662C332.492 185.816 335.194 189.289 337.721 192.857L310.66 219.918C296.047 234.531 287.998 253.961 287.998 274.627S296.047 314.723 310.66 329.336C325.276 343.951 344.705 352 365.371 352C386.037 352 405.467 343.951 420.08 329.338L553.338 196.08C567.953 181.467 576 162.037 576 141.371S567.953 101.275 553.338 86.662C538.724 72.047 519.295 64 498.629 64C477.961 64 458.531 72.047 443.918 86.66L383.324 147.254C380.545 143.898 377.74 140.553 374.594 137.406C361.875 124.688 347.207 115.24 331.686 108.383L398.664 41.406C426.268 13.803 462.447 0 498.629 0C534.808 0 570.988 13.803 598.593 41.406C625.699 68.512 639.497 103.887 639.987 139.411C640.494 176.242 626.696 213.233 598.593 241.336Z" />
            <path d="M41.407 270.664L174.664 137.408C202.27 109.803 238.449 96 274.629 96S346.99 109.803 374.593 137.408C402.197 165.012 416 201.192 416 237.371C416 273.552 402.198 309.733 374.593 337.338L360.416 351.516C341.64 350.318 324.086 342.764 310.662 329.338C307.508 326.184 304.806 322.711 302.279 319.143L329.34 292.082C343.953 277.469 352.002 258.039 352.002 237.373S343.953 197.277 329.34 182.664C314.724 168.049 295.295 160 274.629 160S234.533 168.049 219.92 182.662L86.662 315.92C72.047 330.533 64 349.963 64 370.629S72.047 410.725 86.662 425.338C101.276 439.953 120.705 448 141.371 448C162.039 448 181.469 439.953 196.082 425.34L256.676 364.746C259.455 368.102 262.26 371.447 265.406 374.594C278.125 387.312 292.793 396.76 308.314 403.617L241.336 470.594C213.732 498.197 177.553 512 141.371 512C105.192 512 69.012 498.197 41.407 470.594C-13.802 415.385 -13.802 325.873 41.407 270.664Z" />
    </Icon>
);

export default Link;