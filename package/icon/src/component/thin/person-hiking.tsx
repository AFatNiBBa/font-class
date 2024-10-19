
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `person-hiking` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-hiking?s=thin person-hiking}
 * @preview ![person-hiking](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMzkuOTk5IDExMkMyNzAuODc0IDExMiAyOTUuOTk5IDg2Ljg3NSAyOTUuOTk5IDU2UzI3MC44NzQgMCAyMzkuOTk5IDBTMTgzLjk5OSAyNS4xMjUgMTgzLjk5OSA1NlMyMDkuMTI0IDExMiAyMzkuOTk5IDExMlpNMjM5Ljk5OSAxNkMyNjIuMDYxIDE2IDI3OS45OTkgMzMuOTM4IDI3OS45OTkgNTZTMjYyLjA2MSA5NiAyMzkuOTk5IDk2UzE5OS45OTkgNzguMDYyIDE5OS45OTkgNTZTMjE3LjkzNiAxNiAyMzkuOTk5IDE2Wk0zNTkuOTk5IDE4Ny40NDVWMTM2QzM1OS45OTkgMTMxLjU5NCAzNTYuNDIxIDEyOCAzNTEuOTk5IDEyOFMzNDMuOTk5IDEzMS41OTQgMzQzLjk5OSAxMzZWMTg0SDMwMC44MTFMMjU4LjIwMiAxNDcuMDYyQzI0NS4wMTUgMTMzLjkwNiAyMjcuNzE4IDEyNy4zMTIgMjA4Ljg0MyAxMjguMDYyQzE4MC42MDggMTI5LjUgMTU1LjcwMiAxNTEuMjgxIDE0OC4yOCAxODFMMTIzLjE0IDI4MS44MTJDMTE5Ljg1OCAyOTQuOTY5IDEyMy44MTEgMzA5LjA2MiAxMzMuNDUyIDMxOC41OTRMMjE1Ljk5OSA0MDAuMTg4VjQ3M0MyMTUuOTk5IDQ5NC4xMjUgMjM0Ljc4IDUxMiAyNTYuOTk5IDUxMkMyNzguNDk5IDUxMiAyOTUuOTk5IDQ5NC41IDI5NS45OTkgNDczVjM5Ni44NDRDMjk1Ljk5OSAzNzguNDA2IDI4OC41MyAzNjAuMzc1IDI3NS4zMTEgMzQ3LjE1NkwyMzAuMzU4IDMwNUMyMzIuMjQ5IDI5Ny43ODEgMjM2LjQwNSAyODEuNTMxIDI0NS45NTIgMjQzLjg0NEwyNTcuNjg2IDI1NC4xMjVDMjY0Ljk4MyAyNjAuNSAyNzQuMzI3IDI2NCAyODQuMDE1IDI2NEgzNDMuOTk5VjUwNEMzNDMuOTk5IDUwOC40MDYgMzQ3LjU3NyA1MTIgMzUxLjk5OSA1MTJTMzU5Ljk5OSA1MDguNDA2IDM1OS45OTkgNTA0VjI2MC41NTVDMzc0LjA4NyAyNTQuMzU5IDM4My45OTkgMjQwLjM1NSAzODMuOTk5IDIyNFMzNzQuMDg3IDE5My42NDEgMzU5Ljk5OSAxODcuNDQ1Wk0zNDMuOTk5IDI0OEgyODQuMDE1QzI3OC4yMDIgMjQ4IDI3Mi41OTMgMjQ1LjkwNiAyNjguMjE4IDI0Mi4wNjJMMjQ2LjY3MSAyMjMuMjE5QzI0NC41NjEgMjIxLjQwNiAyNDEuNjcxIDIyMC43NSAyMzkuMDMgMjIxLjYyNUMyMzYuMzc0IDIyMi40MzcgMjM0LjMyNyAyMjQuNTk0IDIzMy42NTUgMjI3LjI4MUMyMzMuNjU1IDIyNy4yODEgMjE0Ljc2NSAzMDEuODEyIDIxNC4yNjUgMzA0LjAzMUMyMTIuNjg2IDMwNy4xODcgMjEzLjM3NCAzMTEgMjE1Ljk1MiAzMTMuNDM3TDI2NC4xODYgMzU4LjY1NkMyNzQuMjMzIDM2OC43MTkgMjc5Ljk5OSAzODIuNjI1IDI3OS45OTkgMzk2Ljg0NFY0NzNDMjc5Ljk5OSA0ODUuNjg4IDI2OS42ODYgNDk2IDI1Ni45OTkgNDk2QzI0My45MjEgNDk2IDIzMS45OTkgNDg1LjAzMSAyMzEuOTk5IDQ3M1YzOTYuODQ0QzIzMS45OTkgMzk0LjcxOSAyMzEuMTQgMzkyLjY1NiAyMjkuNjI0IDM5MS4xNTZMMTQ0LjcwMiAzMDcuMjE5QzEzOS4wNDYgMzAxLjYyNSAxMzYuNzQ5IDI5My4zNzUgMTM4LjY3MSAyODUuNjg4TDE2My44MTEgMTg0Ljg3NUMxNjkuNTQ2IDE2MS45MDYgMTg4LjM5IDE0NS4xMjUgMjA5LjY0IDE0NC4wNjNDMjEwLjQ5OSAxNDQgMjExLjM0MyAxNDQgMjEyLjIwMiAxNDRDMjI1LjMxMSAxNDQgMjM3LjU3NyAxNDkuMDYyIDI0Ny4yOTYgMTU4Ljc1TDI5Mi41NzcgMTk4LjAzMUMyOTQuMDQ2IDE5OS4zMTIgMjk1LjkwNSAyMDAgMjk3LjgyNyAyMDBIMzQzLjk5OUMzNTcuMjMzIDIwMCAzNjcuOTk5IDIxMC43ODEgMzY3Ljk5OSAyMjRTMzU3LjIzMyAyNDggMzQzLjk5OSAyNDhaTTk0LjgyMyAyNzYuMTY4TDEzNS40OTMgMTE3LjM1OUMxMzcuNzE4IDEwOSAxMzIuNDAxIDEwMC4zOTUgMTIzLjc0OSA5OC4zOThDMTE3LjExNiA5Ni43NzcgMTEwLjQ2MiA5NiAxMDMuOTE5IDk2QzY3LjY3MyA5NiAzNC42OSAxMTkuNzk3IDI1LjQ3NSAxNTUuNDFMMC41MDcgMjUzLjM0Qy0xLjcxOCAyNjEuNjk1IDMuNTk3IDI3MC4zMDUgMTIuMjQ5IDI3Mi4zMDFMNzUuMTY5IDI4Ny41MkM3Ni40OTMgMjg3Ljg0NCA3Ny44MjEgMjg4IDc5LjEyOCAyODhDODYuMzU2IDI4OCA5Mi45NCAyODMuMjUgOTQuODIzIDI3Ni4xNjhaTTc4LjkzMSAyNzEuOTY5TDE2LjAxMSAyNTcuMjkzTDQwLjk2NiAxNTkuNDE4QzQ4LjE5IDEzMS41IDc0LjA3NyAxMTIgMTAzLjkxOSAxMTJDMTA5LjI5IDExMiAxMTQuNjgzIDExMi42NTIgMTE5Ljk5MyAxMTMuMzkxTDc4LjkzMSAyNzEuOTY5Wk0xNzMuNTExIDM5OC43NUMxNjkuMTU1IDM5NC40MzggMTYxLjc2OCAzOTYuNTA4IDE2MC4yODIgNDAyLjQ1M0wxNDEuMjYzIDQ3OC41NjNDMTM4LjIxNiA0OTAuNzgxIDEyNC45MDMgNDk4LjUgMTEzLjQxOSA0OTUuMjgxQzEwNy40MzQgNDkzLjc4MSAxMDIuNDAzIDQ5MC4wNjMgOTkuMjMxIDQ4NC43NUM5Ni4xMDYgNDc5LjUzMSA5NS4yMTYgNDczLjM3NSA5Ni43MzEgNDY3LjQzOEwxMjQuNjE4IDM1NS42NzJDMTI1LjI3NCAzNTMuMDQ3IDEyNC41NTggMzUwLjI4NSAxMjIuNjg4IDM0OC4zMjRDMTIyLjYzNiAzNDguMjcgMTIyLjU4MSAzNDguMjExIDEyMi41MjYgMzQ4LjE1NkMxMTguMjI3IDM0My42NDUgMTEwLjYyOCAzNDUuNjMzIDEwOS4xMiAzNTEuNjhMODEuMjE2IDQ2My41MzFDNzguNjUzIDQ3My41OTQgODAuMTY5IDQ4NC4wMzEgODUuNDk3IDQ5Mi45NjlDOTAuODcyIDUwMS45MzcgOTkuNDAzIDUwOC4yODEgMTA5LjMwOSA1MTAuNzE5QzExMi4zNDEgNTExLjU5NCAxMTUuNDk3IDUxMiAxMTguOTk3IDUxMkMxMzYuOTAzIDUxMiAxNTIuNDM0IDQ5OS44NDQgMTU2Ljc5NCA0ODIuNDM4TDE3NS43ODQgNDA2LjQ0NUMxNzYuNDYyIDQwMy43MzggMTc1LjY1OSA0MDAuODc1IDE3My42NzUgMzk4LjkxTDE3My41MTEgMzk4Ljc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PersonHiking(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M239.999 112C270.874 112 295.999 86.875 295.999 56S270.874 0 239.999 0S183.999 25.125 183.999 56S209.124 112 239.999 112ZM239.999 16C262.061 16 279.999 33.938 279.999 56S262.061 96 239.999 96S199.999 78.062 199.999 56S217.936 16 239.999 16ZM359.999 187.445V136C359.999 131.594 356.421 128 351.999 128S343.999 131.594 343.999 136V184H300.811L258.202 147.062C245.015 133.906 227.718 127.312 208.843 128.062C180.608 129.5 155.702 151.281 148.28 181L123.14 281.812C119.858 294.969 123.811 309.062 133.452 318.594L215.999 400.188V473C215.999 494.125 234.78 512 256.999 512C278.499 512 295.999 494.5 295.999 473V396.844C295.999 378.406 288.53 360.375 275.311 347.156L230.358 305C232.249 297.781 236.405 281.531 245.952 243.844L257.686 254.125C264.983 260.5 274.327 264 284.015 264H343.999V504C343.999 508.406 347.577 512 351.999 512S359.999 508.406 359.999 504V260.555C374.087 254.359 383.999 240.355 383.999 224S374.087 193.641 359.999 187.445ZM343.999 248H284.015C278.202 248 272.593 245.906 268.218 242.062L246.671 223.219C244.561 221.406 241.671 220.75 239.03 221.625C236.374 222.437 234.327 224.594 233.655 227.281C233.655 227.281 214.765 301.812 214.265 304.031C212.686 307.187 213.374 311 215.952 313.437L264.186 358.656C274.233 368.719 279.999 382.625 279.999 396.844V473C279.999 485.688 269.686 496 256.999 496C243.921 496 231.999 485.031 231.999 473V396.844C231.999 394.719 231.14 392.656 229.624 391.156L144.702 307.219C139.046 301.625 136.749 293.375 138.671 285.688L163.811 184.875C169.546 161.906 188.39 145.125 209.64 144.063C210.499 144 211.343 144 212.202 144C225.311 144 237.577 149.062 247.296 158.75L292.577 198.031C294.046 199.312 295.905 200 297.827 200H343.999C357.233 200 367.999 210.781 367.999 224S357.233 248 343.999 248ZM94.823 276.168L135.493 117.359C137.718 109 132.401 100.395 123.749 98.398C117.116 96.777 110.462 96 103.919 96C67.673 96 34.69 119.797 25.475 155.41L0.507 253.34C-1.718 261.695 3.597 270.305 12.249 272.301L75.169 287.52C76.493 287.844 77.821 288 79.128 288C86.356 288 92.94 283.25 94.823 276.168ZM78.931 271.969L16.011 257.293L40.966 159.418C48.19 131.5 74.077 112 103.919 112C109.29 112 114.683 112.652 119.993 113.391L78.931 271.969ZM173.511 398.75C169.155 394.438 161.768 396.508 160.282 402.453L141.263 478.563C138.216 490.781 124.903 498.5 113.419 495.281C107.434 493.781 102.403 490.063 99.231 484.75C96.106 479.531 95.216 473.375 96.731 467.438L124.618 355.672C125.274 353.047 124.558 350.285 122.688 348.324C122.636 348.27 122.581 348.211 122.526 348.156C118.227 343.645 110.628 345.633 109.12 351.68L81.216 463.531C78.653 473.594 80.169 484.031 85.497 492.969C90.872 501.937 99.403 508.281 109.309 510.719C112.341 511.594 115.497 512 118.997 512C136.903 512 152.434 499.844 156.794 482.438L175.784 406.445C176.462 403.738 175.659 400.875 173.675 398.91L173.511 398.75Z" />
        </Icon>
    </>
}