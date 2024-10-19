
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hands-bubbles` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hands-bubbles?s=thin hands-bubbles}
 * @preview ![hands-bubbles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTYwQzQ0OCAxODYuNTEgNDY5LjQ5IDIwOCA0OTYgMjA4UzU0NCAxODYuNTEgNTQ0IDE2MFM1MjIuNTEgMTEyIDQ5NiAxMTJTNDQ4IDEzMy40OSA0NDggMTYwWk00OTYgMTI4QzUxMy42NDUgMTI4IDUyOCAxNDIuMzU1IDUyOCAxNjBTNTEzLjY0NSAxOTIgNDk2IDE5MlM0NjQgMTc3LjY0NSA0NjQgMTYwUzQ3OC4zNTUgMTI4IDQ5NiAxMjhaTTExMiA0MTZDODUuNDkgNDE2IDY0IDQzNy40OSA2NCA0NjRTODUuNDkgNTEyIDExMiA1MTJTMTYwIDQ5MC41MSAxNjAgNDY0UzEzOC41MSA0MTYgMTEyIDQxNlpNMTEyIDQ5NkM5NC4zNTUgNDk2IDgwIDQ4MS42NDUgODAgNDY0Uzk0LjM1NSA0MzIgMTEyIDQzMlMxNDQgNDQ2LjM1NSAxNDQgNDY0UzEyOS42NDUgNDk2IDExMiA0OTZaTTUwMy45OTggMzA0LjAxQzUxMC43ODUgMjk0Ljk3NSA1MTMuNDI4IDI4My40OTYgNTExLjI2IDI3Mi4yMTlDNTA3LjY3IDI1My41NDkgNDkwLjc4MSAyNDAgNDcxLjEwNCAyNDBIMzQ0LjExNUMzNTEuMzkxIDIzMC4xNDMgMzU0LjE1NCAyMTYuOTI0IDM1MC4yMzQgMjA0LjE5N0MzNDQuOTcxIDE4Ny4zMTggMzI5LjYgMTc2LjAxNCAzMTEuOTY5IDE3Ni4wMTRDMzA4LjAyNyAxNzYuMDE0IDMwNC4wOTggMTc2LjU5NiAzMDAuMjk1IDE3Ny43NDJMMTkyLjQ3NSAyMTEuMDIzQzEzNC42MzcgMjMwLjMxMSA5Ni4wMDYgMjgzLjY5MyA5Ni4wMDYgMzQzLjk2OVYzNzYuNTAyQzk2LjAwNiAzODEuMTg5IDEwMC4wNDEgMzg0Ljc2MiAxMDQuNzA3IDM4NC4zMzRDMTA0Ljc2NiAzODQuMzI4IDEwNC44MjQgMzg0LjMyMiAxMDQuODg1IDM4NC4zMThDMTA4LjkyOCAzODMuOTU3IDExMi4wMDYgMzgwLjU0MyAxMTIuMDA2IDM3Ni40ODRWMzQzLjk2OUMxMTIuMDA2IDI5MC41OTQgMTQ2LjAzNyAyNDMuMzc1IDE5Ny4xOTMgMjI2LjMxMkwzMDQuOTEyIDE5My4wNjJDMzA3LjI2NiAxOTIuMzU0IDMwOS42MzkgMTkyLjAxNCAzMTEuOTY5IDE5Mi4wMTZDMzIyLjI2OCAxOTIuMDE2IDMzMS43MzIgMTk4LjYxMSAzMzQuOTQzIDIwOC45MDZDMzM4Ljg1IDIyMS41OTQgMzMxLjc1NiAyMzUuMDMxIDMxOS4xIDIzOC45MzhMMjcyLjAwNiAyNTZINDcxLjEwNEM0ODIuNzExIDI1NiA0OTMuMzU1IDI2My44NDQgNDk1LjU0NyAyNzUuMjQyQzQ5OC40OTQgMjkwLjU3OCA0ODYuODEyIDMwNCA0NzIuMDA2IDMwNEgzNDQuMDA2QzMzOS41ODggMzA0IDMzNi4wMDYgMzA3LjU4MiAzMzYuMDA2IDMxMlMzMzkuNTg4IDMyMCAzNDQuMDA2IDMyMEg1MDMuMTA0QzUxNC43MTEgMzIwIDUyNS4zNTUgMzI3Ljg0NCA1MjcuNTQ3IDMzOS4yNDJDNTMwLjQ5NCAzNTQuNTc4IDUxOC44MTIgMzY4IDUwNC4wMDYgMzY4SDM0NC4wMDZDMzM5LjU4OCAzNjggMzM2LjAwNiAzNzEuNTgyIDMzNi4wMDYgMzc2UzMzOS41ODggMzg0IDM0NC4wMDYgMzg0SDQ3MS4xMDRDNDgyLjcxMSAzODQgNDkzLjM1NSAzOTEuODQ0IDQ5NS41NDcgNDAzLjI0MkM0OTguNDk0IDQxOC41NzggNDg2LjgxMiA0MzIgNDcyLjAwNiA0MzJIMzQ0LjAwNkMzMzkuNTg4IDQzMiAzMzYuMDA2IDQzNS41ODIgMzM2LjAwNiA0NDBTMzM5LjU4OCA0NDggMzQ0LjAwNiA0NDhINDM5LjEwNEM0NTAuNzExIDQ0OCA0NjEuMzU1IDQ1NS44NDQgNDYzLjU0NyA0NjcuMjQyQzQ2Ni40OTQgNDgyLjU3OCA0NTQuODEyIDQ5NiA0NDAuMDA2IDQ5NkgyMzIuMDA2QzIxOS4wOTYgNDk2IDIwNi43OTcgNDkzLjcxNyAxOTUuMjI3IDQ4OS44MDFDMTkxLjM3MSA0ODguNDk2IDE4Ny4xODkgNDkwLjU2NiAxODUuNjQ1IDQ5NC4zMzJDMTg1LjYyMyA0OTQuMzgxIDE4NS42MDQgNDk0LjQzMiAxODUuNTgyIDQ5NC40OEMxODMuODY3IDQ5OC42MzUgMTg1LjgzNCA1MDMuNDkgMTkwLjA5NCA1MDQuOTI2QzIwMy42OTEgNTA5LjUxNiAyMTcuODEyIDUxMiAyMzIuMDA2IDUxMkg0MzguODYzQzQ0Ny4wOCA1MTIgNDU1LjMwOSA1MDkuOTU5IDQ2Mi4xMTkgNTA1LjM2NUM0NzUuOTYzIDQ5Ni4wMjcgNDgyLjI4MSA0NzkuOTI4IDQ3OS4yNiA0NjQuMjE5QzQ3OC4wOTggNDU4LjE4MiA0NzUuNTQ5IDQ1Mi42ODIgNDcxLjk2MSA0NDhINDcyLjAwNkM0ODMuOTc5IDQ0OCA0OTUuMjIxIDQ0Mi43MDEgNTAyLjg1NCA0MzMuNDYxQzUxMC40ODIgNDI0LjIyNSA1MTMuNTQ3IDQxMi4xMDkgNTExLjI2IDQwMC4yMTlDNTEwLjA5OCAzOTQuMTgyIDUwNy41NDkgMzg4LjY4MiA1MDMuOTYxIDM4NEg1MDQuMDA2QzUxNS45NzkgMzg0IDUyNy4yMjEgMzc4LjcwMSA1MzQuODU0IDM2OS40NjFDNTQyLjQ4MiAzNjAuMjI1IDU0NS41NDcgMzQ4LjEwOSA1NDMuMjYgMzM2LjIxOUM1MzkuNzI1IDMxNy44MzQgNTIzLjI5MSAzMDQuNDEyIDUwMy45OTggMzA0LjAxWk02My4wNTkgMzU0LjE4OEM1My43NyAzMzcuMTAyIDQ4LjMzIDMxNy43MjEgNDggMjk3LjE0MVYxODQuNDFDNDguMTc2IDE3MS4xMjMgNTkuNjIzIDE2MC41NDUgNzIuODExIDE2MC41NDVINzIuODk4Qzg2LjE3MiAxNjAuNjQzIDk2Ljg1IDE3MS40NTUgOTYuNzYyIDE4NC43MDFMOTguODQ0IDIzNC43NDZMMTU4LjgyIDQ0Ljg5NkMxNjIuMDUzIDM0LjY2MiAxNzEuNDMyIDI3LjIzMiAxODEuOTQxIDI3LjIzNEMxODIuNzk3IDI3LjIzNCAxODMuNjYyIDI3LjI4MyAxODQuNTMxIDI3LjM4NUMyMDAuMDQzIDI5LjE5MSAyMDkuMzIyIDQ0LjM3NyAyMDQuODYzIDU4LjQ5NkwxNjkuNjIxIDE3MC4wNTVDMTY3Ljk4NCAxNzUuMjM2IDE3MS44NzkgMTgwLjUwNiAxNzcuMzEyIDE4MC40NjVDMTgwLjc3OSAxODAuNDM2IDE4My44MzIgMTc4LjE4IDE4NC44NzcgMTc0Ljg3NUwyMjkuNDg4IDMzLjY2MkMyMzIuNzIxIDIzLjQzIDI0Mi4xIDE2IDI1Mi42MDcgMTZDMjUzLjQ2NSAxNiAyNTQuMzI4IDE2LjA0OSAyNTUuMTk3IDE2LjE1QzI3MC43MDkgMTcuOTU3IDI3OS45OSAzMy4xNDMgMjc1LjUyOSA0Ny4yNjJMMjQzLjYyOSAxNDguNjIzQzI0MS42OTMgMTU0Ljc3IDI0Ny40NTUgMTYwLjU2MiAyNTMuNjExIDE1OC42NjJDMjU2LjEyMyAxNTcuODg3IDI1OC4wOTIgMTU1LjkyOCAyNTguODgxIDE1My40MkwyODAuODc1IDgzLjQ1NUMyODQuMTA3IDczLjIyMyAyOTMuNDg2IDY1Ljc5MyAzMDMuOTk2IDY1Ljc5M0MzMDQuODU0IDY1Ljc5MyAzMDUuNzE3IDY1Ljg0MiAzMDYuNTg2IDY1Ljk0M0MzMjIuMDk4IDY3Ljc1IDMzMS4zNzcgODIuOTM2IDMyNi45MTggOTcuMDU1TDMxNS4wNjEgMTM0LjU4NEMzMTMuNTc4IDEzOS4yNzkgMzE2LjcxMyAxNDQuMDQ1IDMyMS41OCAxNDQuNzg1QzMyMS42MzMgMTQ0Ljc5MyAzMjEuNjg2IDE0NC44MDEgMzIxLjc0IDE0NC44MDlDMzI1LjU0MSAxNDUuMzk1IDMyOS4xNjggMTQzLjA0NSAzMzAuMzI2IDEzOS4zNzdMMzMyLjI2MiAxMzMuMjQ4QzMzNS40OTYgMTIzLjAxNCAzNDQuODczIDExNS41ODQgMzU1LjM4MyAxMTUuNTg2QzM1Ni4yMzggMTE1LjU4NiAzNTcuMTA0IDExNS42MzUgMzU3Ljk3MyAxMTUuNzM2QzM3My40ODQgMTE3LjU0MyAzODIuNzY2IDEzMi43MjkgMzc4LjMwNSAxNDYuODQ4TDM3MS4wODggMTY5LjY5M0MzNzAuMzYxIDE3MS45OTQgMzcwLjc5MSAxNzQuNDQ5IDM3Mi4xMTEgMTc2LjQ2OUMzNzIuMTUyIDE3Ni41MzEgMzcyLjE5MyAxNzYuNTk0IDM3Mi4yMzIgMTc2LjY1OEMzNzUuODQgMTgyLjIxMyAzODQuMzA5IDE4MC45NjEgMzg2LjMwMyAxNzQuNjQ2TDM5My4yMDcgMTUyLjc5NUMzOTUuNjg0IDE0NC45NTcgMzk2LjIyMyAxMzYuNDk0IDM5My45MDIgMTI4LjYwOUMzODkuMTgyIDExMi41ODIgMzc1LjcyMyAxMDEuNjk1IDM1OS44MjQgOTkuODQ0QzM1OC4zMzYgOTkuNjcgMzU2Ljg1NCA5OS41ODYgMzU1LjM4MyA5OS41ODZDMzUwLjgxNCA5OS41ODYgMzQ2LjM0NiAxMDAuNDIgMzQyLjE0NiAxMDEuOTYxTDM0Mi4xNzQgMTAxLjg3NUMzNDUuNzgxIDkwLjQ1NSAzNDQuMTEzIDc4LjEzOSAzMzcuNjAyIDY4LjA3NkMzMzEuMDk0IDU4LjAyMSAzMjAuNDYzIDUxLjQ1MSAzMDguNDM4IDUwLjA1MUMzMDYuOTQ5IDQ5Ljg3NyAzMDUuNDY3IDQ5Ljc5MyAzMDMuOTk2IDQ5Ljc5M0MyOTkuNDI2IDQ5Ljc5MyAyOTQuOTU3IDUwLjYyNyAyOTAuNzYgNTIuMTdMMjkwLjc5MSA1Mi4wNjRDMjkyLjY2IDQ1Ljc2MiAyOTMuMzMgMzkuMDY0IDI5Mi4wMiAzMi42MjNDMjg4LjM2MyAxNC42MzkgMjc0LjExMSAyLjI0NCAyNTcuMDQ5IDAuMjU4QzI1NS41NjIgMC4wODQgMjU0LjA3OCAwIDI1Mi42MDcgMEMyMzUuNjY2IDAgMjIwLjEyNSAxMS40NjUgMjE0LjUxIDI3Ljk5NEMyMDcuOTQxIDE4Ljc5OSAxOTcuNzg5IDEyLjgyIDE4Ni4zODMgMTEuNDkyQzE4NC44OTUgMTEuMzE4IDE4My40MSAxMS4yMzQgMTgxLjk0MSAxMS4yMzRDMTY0LjcwOSAxMS4yMzIgMTQ4LjkyOCAyMy4wOTQgMTQzLjU2NCA0MC4wNzZMMTA1LjMxMSAxNjEuMTY0Qzk4LjEwMiAxNTEuMjYgODYuMzMgMTQ0LjY0MyA3My4wMTYgMTQ0LjU0NUM1MC41OTggMTQ0LjU0NSAzMi4yOTEgMTYyLjMzNCAzMi4wMDIgMTg0LjE5OUwzMiAyOTcuMTQxQzMyLjM2OSAzMjAuMzYxIDM4LjQ2MSAzNDIuMjcxIDQ5LjExNSAzNjEuNjQ1QzUzLjA2MSAzNjguODE4IDY0IDM2Ni4wMjcgNjQgMzU3LjgzOEM2NCAzNTYuNTU5IDYzLjY2OCAzNTUuMzEyIDYzLjA1OSAzNTQuMTg4Wk00MzIgOTZDNDU4LjUxIDk2IDQ4MCA3NC41MSA0ODAgNDhTNDU4LjUxIDAgNDMyIDBTMzg0IDIxLjQ5IDM4NCA0OFM0MDUuNDkgOTYgNDMyIDk2Wk00MzIgMTZDNDQ5LjY0NSAxNiA0NjQgMzAuMzU1IDQ2NCA0OFM0NDkuNjQ1IDgwIDQzMiA4MFM0MDAgNjUuNjQ1IDQwMCA0OFM0MTQuMzU1IDE2IDQzMiAxNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandsBubbles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M448 160C448 186.51 469.49 208 496 208S544 186.51 544 160S522.51 112 496 112S448 133.49 448 160ZM496 128C513.645 128 528 142.355 528 160S513.645 192 496 192S464 177.645 464 160S478.355 128 496 128ZM112 416C85.49 416 64 437.49 64 464S85.49 512 112 512S160 490.51 160 464S138.51 416 112 416ZM112 496C94.355 496 80 481.645 80 464S94.355 432 112 432S144 446.355 144 464S129.645 496 112 496ZM503.998 304.01C510.785 294.975 513.428 283.496 511.26 272.219C507.67 253.549 490.781 240 471.104 240H344.115C351.391 230.143 354.154 216.924 350.234 204.197C344.971 187.318 329.6 176.014 311.969 176.014C308.027 176.014 304.098 176.596 300.295 177.742L192.475 211.023C134.637 230.311 96.006 283.693 96.006 343.969V376.502C96.006 381.189 100.041 384.762 104.707 384.334C104.766 384.328 104.824 384.322 104.885 384.318C108.928 383.957 112.006 380.543 112.006 376.484V343.969C112.006 290.594 146.037 243.375 197.193 226.312L304.912 193.062C307.266 192.354 309.639 192.014 311.969 192.016C322.268 192.016 331.732 198.611 334.943 208.906C338.85 221.594 331.756 235.031 319.1 238.938L272.006 256H471.104C482.711 256 493.355 263.844 495.547 275.242C498.494 290.578 486.812 304 472.006 304H344.006C339.588 304 336.006 307.582 336.006 312S339.588 320 344.006 320H503.104C514.711 320 525.355 327.844 527.547 339.242C530.494 354.578 518.812 368 504.006 368H344.006C339.588 368 336.006 371.582 336.006 376S339.588 384 344.006 384H471.104C482.711 384 493.355 391.844 495.547 403.242C498.494 418.578 486.812 432 472.006 432H344.006C339.588 432 336.006 435.582 336.006 440S339.588 448 344.006 448H439.104C450.711 448 461.355 455.844 463.547 467.242C466.494 482.578 454.812 496 440.006 496H232.006C219.096 496 206.797 493.717 195.227 489.801C191.371 488.496 187.189 490.566 185.645 494.332C185.623 494.381 185.604 494.432 185.582 494.48C183.867 498.635 185.834 503.49 190.094 504.926C203.691 509.516 217.812 512 232.006 512H438.863C447.08 512 455.309 509.959 462.119 505.365C475.963 496.027 482.281 479.928 479.26 464.219C478.098 458.182 475.549 452.682 471.961 448H472.006C483.979 448 495.221 442.701 502.854 433.461C510.482 424.225 513.547 412.109 511.26 400.219C510.098 394.182 507.549 388.682 503.961 384H504.006C515.979 384 527.221 378.701 534.854 369.461C542.482 360.225 545.547 348.109 543.26 336.219C539.725 317.834 523.291 304.412 503.998 304.01ZM63.059 354.188C53.77 337.102 48.33 317.721 48 297.141V184.41C48.176 171.123 59.623 160.545 72.811 160.545H72.898C86.172 160.643 96.85 171.455 96.762 184.701L98.844 234.746L158.82 44.896C162.053 34.662 171.432 27.232 181.941 27.234C182.797 27.234 183.662 27.283 184.531 27.385C200.043 29.191 209.322 44.377 204.863 58.496L169.621 170.055C167.984 175.236 171.879 180.506 177.312 180.465C180.779 180.436 183.832 178.18 184.877 174.875L229.488 33.662C232.721 23.43 242.1 16 252.607 16C253.465 16 254.328 16.049 255.197 16.15C270.709 17.957 279.99 33.143 275.529 47.262L243.629 148.623C241.693 154.77 247.455 160.562 253.611 158.662C256.123 157.887 258.092 155.928 258.881 153.42L280.875 83.455C284.107 73.223 293.486 65.793 303.996 65.793C304.854 65.793 305.717 65.842 306.586 65.943C322.098 67.75 331.377 82.936 326.918 97.055L315.061 134.584C313.578 139.279 316.713 144.045 321.58 144.785C321.633 144.793 321.686 144.801 321.74 144.809C325.541 145.395 329.168 143.045 330.326 139.377L332.262 133.248C335.496 123.014 344.873 115.584 355.383 115.586C356.238 115.586 357.104 115.635 357.973 115.736C373.484 117.543 382.766 132.729 378.305 146.848L371.088 169.693C370.361 171.994 370.791 174.449 372.111 176.469C372.152 176.531 372.193 176.594 372.232 176.658C375.84 182.213 384.309 180.961 386.303 174.646L393.207 152.795C395.684 144.957 396.223 136.494 393.902 128.609C389.182 112.582 375.723 101.695 359.824 99.844C358.336 99.67 356.854 99.586 355.383 99.586C350.814 99.586 346.346 100.42 342.146 101.961L342.174 101.875C345.781 90.455 344.113 78.139 337.602 68.076C331.094 58.021 320.463 51.451 308.438 50.051C306.949 49.877 305.467 49.793 303.996 49.793C299.426 49.793 294.957 50.627 290.76 52.17L290.791 52.064C292.66 45.762 293.33 39.064 292.02 32.623C288.363 14.639 274.111 2.244 257.049 0.258C255.562 0.084 254.078 0 252.607 0C235.666 0 220.125 11.465 214.51 27.994C207.941 18.799 197.789 12.82 186.383 11.492C184.895 11.318 183.41 11.234 181.941 11.234C164.709 11.232 148.928 23.094 143.564 40.076L105.311 161.164C98.102 151.26 86.33 144.643 73.016 144.545C50.598 144.545 32.291 162.334 32.002 184.199L32 297.141C32.369 320.361 38.461 342.271 49.115 361.645C53.061 368.818 64 366.027 64 357.838C64 356.559 63.668 355.312 63.059 354.188ZM432 96C458.51 96 480 74.51 480 48S458.51 0 432 0S384 21.49 384 48S405.49 96 432 96ZM432 16C449.645 16 464 30.355 464 48S449.645 80 432 80S400 65.645 400 48S414.355 16 432 16Z" />
        </Icon>
    </>
}