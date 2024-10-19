
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `guitar` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/guitar?s=thin guitar}
 * @preview ![guitar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjIuNzM0IDIzNC41MzNDMzIwLjA1NiAyMzcuMjExIDMxOS43MDUgMjQxLjM1MiAzMjEuNzA4IDI0NC41NjZDMzI3LjMyNyAyNTMuNTgzIDMzMS4yMzUgMjYyLjM4OSAzMzMuMjgxIDI3MS4yNThDMzQwLjExNiAzMDAuNzA0IDMzMy42NTYgMzI3Ljk3OCAzMTUuNTQ5IDM0Ni4wODhDMzA3Ljk5MiAzNTMuNjQzIDI5OC43MjUgMzU5LjI3NiAyODguNTg1IDM2Mi40MTdDMjY0LjExNyAzNzAuMzA0IDI0NS4zOTcgMzkzLjI3NyAyNDMuMDY1IDQxOC4yNzhDMjQxLjA3NCA0MzkuMzczIDIzMi44MzEgNDU3LjY3IDIxOS4xODMgNDcxLjIyMUMyMDAuNjMyIDQ4OS43NzMgMTc0LjA1MSA0OTguMzc1IDE0NC4zMzMgNDk1LjQ0NUMxMTMuNDQ2IDQ5Mi4zOTggODMuMTE4IDQ3Ny4zOTcgNTguOTM5IDQ1My4yMTdDMzEuNjI4IDQyNS45MDMgMTUuOTc2IDM5MC42MDUgMTUuOTk5IDM1Ni4zNzhDMTYuMDE3IDMzMC45NzkgMjQuNTkxIDMwOS4wMDkgNDAuODU2IDI5Mi43ODZDNTQuMjI5IDI3OS4zMTMgNzIuNTA5IDI3MS4wNjIgOTMuNTkzIDI2OC45NDVDMTE4Ljk3MyAyNjYuNjAxIDE0MS40MjUgMjQ4LjM2NiAxNDkuNTAxIDIyMy40NTlDMTUyLjcgMjEzLjM1NyAxNTguMzY2IDIwMy45ODYgMTY1LjgwOSAxOTYuNDQzQzE4My45MjggMTc4LjMyMSAyMTEuMjQxIDE3MS44NiAyNDAuNzY4IDE3OC43MTZDMjQ5LjYxNyAxODAuNzYgMjU4LjQxNyAxODQuNjY4IDI2Ny40MjggMTkwLjI4OEMyNzAuNTA1IDE5Mi4yMDcgMjc0LjYzIDE5Mi4wOTcgMjc3LjU5MiAxODkuMTM0QzI4MS4yMjMgMTg1LjUwNCAyODAuNTU4IDE3OS4zOTUgMjc2LjE5NyAxNzYuNjg1QzI2Ni4zNDIgMTcwLjU2MiAyNTUuNzM1IDE2NS43NDYgMjQ0LjM2OSAxNjMuMTI1QzIxMC45OTMgMTU1LjM3NSAxNzcuMzcxIDE2Mi4yNSAxNTQuNDk1IDE4NS4xM0MxNDUuMjQ1IDE5NC41MDUgMTM4LjI0NiAyMDYuMDA2IDEzNC4yNDggMjE4LjYzMUMxMjguMjQ4IDIzNy4xMzIgMTExLjEyNSAyNTEuMjU3IDkyLjEyNCAyNTMuMDE1QzY4LjUgMjU1LjM4MiA0Ni4zNzUgMjY0LjUxMiAyOS41MDMgMjgxLjUxMkMtMTYuMTIxIDMyNy4wMTcgLTcuODc1IDQwOS4wMjggNDcuNjI3IDQ2NC41M0MxMDIuOTk5IDUxOS45MTQgMTg0Ljk5NCA1MjguMDQgMjMwLjQ5NSA0ODIuNTM4QzI0Ny40OTIgNDY1LjY1OSAyNTYuNzQyIDQ0My42NTggMjU4Ljk5NCA0MTkuNzc4QzI2MC43NDQgNDAxLjAyOCAyNzQuODY4IDM4My42NTIgMjkzLjQ5MyAzNzcuNjQ4QzMwNS45OTIgMzczLjc3NyAzMTcuNDkyIDM2Ni43NzMgMzI2Ljg2NSAzNTcuMzk3QzM0OS43MzkgMzM0LjUxOCAzNTYuNjE0IDMwMS4wMTcgMzQ4Ljg2NCAyNjcuNjQxQzM0Ni4yNDQgMjU2LjI3MSAzNDEuNDI4IDI0NS42NjIgMzM1LjMwNiAyMzUuODA2QzMzMi42OTcgMjMxLjYwNSAzMjYuNjcyIDIzMC41OTUgMzIyLjczNCAyMzQuNTMzWk0xNTkuOTk1IDMwNC4wMTdDMTU5Ljk5MyAzMTcuMjY3IDE2NS4zNyAzMjkuMjY4IDE3NC4wNTkgMzM3Ljk1NUMxODIuNzQ0IDM0Ni42NDMgMTk0Ljc0NCAzNTIuMDIyIDIwNy45OTUgMzUyLjAxOEMyMzQuNDk1IDM1Mi4wMTggMjU1Ljk5NCAzMzAuNTE4IDI1NS45OTQgMzA0LjAxN0MyNTUuOTk0IDI5MC43NjYgMjUwLjYxNyAyNzguNzY2IDI0MS45MjggMjcwLjA3NEMyMzMuMjQxIDI2MS4zODYgMjIxLjI0MyAyNTYuMDExIDIwNy45OTUgMjU2LjAxMUMxODEuNDk2IDI1Ni4wMTEgMTU5Ljk5NyAyNzcuNTEyIDE1OS45OTUgMzA0LjAxN1pNMjMwLjYxNCAyODEuMzg3QzIzNi42NjEgMjg3LjQzOCAyMzkuOTkyIDI5NS40NzMgMjM5Ljk5NCAzMDQuMDE3QzIzOS45OTQgMzEyLjU2NCAyMzYuNjY0IDMyMC41OTUgMjMwLjYxOCAzMjYuNjQyQzIyNC41NzMgMzMyLjY4OSAyMTYuNTM4IDMzNi4wMTggMjA3Ljk5MyAzMzYuMDE4QzE5OS40NTMgMzM2LjAxOCAxOTEuNDE4IDMzMi42ODkgMTg1LjM3MSAzMjYuNjQyQzE3OS4zMjYgMzIwLjU5NSAxNzUuOTk2IDMxMi41NiAxNzUuOTk0IDMwNC4wMTdDMTc1Ljk5NiAyODYuMzY4IDE5MC4zNTEgMjcyLjAwOCAyMDcuOTk3IDI3Mi4wMTJDMjE2LjUzNiAyNzIuMDEyIDIyNC41NjkgMjc1LjM0NCAyMzAuNjE0IDI4MS4zODdaTTUwMC4yOTkgMjMuMDE1TDQ4OC45ODcgMTEuNjk5QzQ3My4zODYgLTMuOSA0NDguMDE5IC0zLjkgNDMyLjQxOCAxMS42OTlMNDAxLjAyMSA0My4xMDJDMzk0LjQxNCA0OS43MDggMzkwLjMwMiA1OC40NTggMzg5LjQ0MSA2Ny43NTlMMzg1LjExMSAxMTUuNTgxTDI2MS41NDUgMjM5LjE1NUMyNTguNDI5IDI0Mi4yNzMgMjU4LjQyOSAyNDcuMzUxIDI2MS41NDUgMjUwLjQ2OEMyNjQuNjYgMjUzLjU4NSAyNjkuNzQyIDI1My41ODUgMjcyLjg1OSAyNTAuNDY4TDM5Ni40MjMgMTI2Ljg5NEw0NDQuMjQgMTIyLjU2NkM0NTMuNTQzIDEyMS43MDIgNDYyLjI5NCAxMTcuNTg5IDQ2OC45IDExMC45ODdMNTAwLjI5OSA3OS41ODRDNTE1LjkgNjMuOTgyIDUxNS45IDM4LjYxNCA1MDAuMjk5IDIzLjAxNVpNNDg4Ljk4NyA2OC4yNjdMNDU3LjU4NyA5OS42N0M0NTMuNjA5IDEwMy42NDcgNDQ4LjM3MyAxMDYuMSA0NDIuNzgzIDEwNi42MDhMNDAxLjY2MSAxMTAuMzQyTDQwNS4zOTYgNjkuMjJDNDA1LjkwMyA2My42MjYgNDA4LjM1NiA1OC4zOTIgNDEyLjMzMyA1NC40MTVMNDQzLjczMiAyMy4wMTVDNDUzLjA4IDEzLjY2NCA0NjguMzI1IDEzLjY2NCA0NzcuNjczIDIzLjAxNUw0ODguOTg3IDM0LjMyOEM0OTguMzMyIDQzLjY3MiA0OTguMzMyIDU4LjkyMyA0ODguOTg3IDY4LjI2N1oiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Guitar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M322.734 234.533C320.056 237.211 319.705 241.352 321.708 244.566C327.327 253.583 331.235 262.389 333.281 271.258C340.116 300.704 333.656 327.978 315.549 346.088C307.992 353.643 298.725 359.276 288.585 362.417C264.117 370.304 245.397 393.277 243.065 418.278C241.074 439.373 232.831 457.67 219.183 471.221C200.632 489.773 174.051 498.375 144.333 495.445C113.446 492.398 83.118 477.397 58.939 453.217C31.628 425.903 15.976 390.605 15.999 356.378C16.017 330.979 24.591 309.009 40.856 292.786C54.229 279.313 72.509 271.062 93.593 268.945C118.973 266.601 141.425 248.366 149.501 223.459C152.7 213.357 158.366 203.986 165.809 196.443C183.928 178.321 211.241 171.86 240.768 178.716C249.617 180.76 258.417 184.668 267.428 190.288C270.505 192.207 274.63 192.097 277.592 189.134C281.223 185.504 280.558 179.395 276.197 176.685C266.342 170.562 255.735 165.746 244.369 163.125C210.993 155.375 177.371 162.25 154.495 185.13C145.245 194.505 138.246 206.006 134.248 218.631C128.248 237.132 111.125 251.257 92.124 253.015C68.5 255.382 46.375 264.512 29.503 281.512C-16.121 327.017 -7.875 409.028 47.627 464.53C102.999 519.914 184.994 528.04 230.495 482.538C247.492 465.659 256.742 443.658 258.994 419.778C260.744 401.028 274.868 383.652 293.493 377.648C305.992 373.777 317.492 366.773 326.865 357.397C349.739 334.518 356.614 301.017 348.864 267.641C346.244 256.271 341.428 245.662 335.306 235.806C332.697 231.605 326.672 230.595 322.734 234.533ZM159.995 304.017C159.993 317.267 165.37 329.268 174.059 337.955C182.744 346.643 194.744 352.022 207.995 352.018C234.495 352.018 255.994 330.518 255.994 304.017C255.994 290.766 250.617 278.766 241.928 270.074C233.241 261.386 221.243 256.011 207.995 256.011C181.496 256.011 159.997 277.512 159.995 304.017ZM230.614 281.387C236.661 287.438 239.992 295.473 239.994 304.017C239.994 312.564 236.664 320.595 230.618 326.642C224.573 332.689 216.538 336.018 207.993 336.018C199.453 336.018 191.418 332.689 185.371 326.642C179.326 320.595 175.996 312.56 175.994 304.017C175.996 286.368 190.351 272.008 207.997 272.012C216.536 272.012 224.569 275.344 230.614 281.387ZM500.299 23.015L488.987 11.699C473.386 -3.9 448.019 -3.9 432.418 11.699L401.021 43.102C394.414 49.708 390.302 58.458 389.441 67.759L385.111 115.581L261.545 239.155C258.429 242.273 258.429 247.351 261.545 250.468C264.66 253.585 269.742 253.585 272.859 250.468L396.423 126.894L444.24 122.566C453.543 121.702 462.294 117.589 468.9 110.987L500.299 79.584C515.9 63.982 515.9 38.614 500.299 23.015ZM488.987 68.267L457.587 99.67C453.609 103.647 448.373 106.1 442.783 106.608L401.661 110.342L405.396 69.22C405.903 63.626 408.356 58.392 412.333 54.415L443.732 23.015C453.08 13.664 468.325 13.664 477.673 23.015L488.987 34.328C498.332 43.672 498.332 58.923 488.987 68.267Z" />
        </Icon>
    </>
}