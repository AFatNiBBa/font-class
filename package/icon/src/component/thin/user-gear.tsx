
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-gear` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-gear?s=thin user-gear}
 * @preview ![user-gear](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTMuODQ0IDQ5NS4wMzFDNDExLjUzMSA0OTUuNjU2IDQwOS4wNjIgNDk2IDQwNi41NjIgNDk2SDQxLjQzOEMyNy40MDYgNDk2IDE2IDQ4NS4yMTkgMTYgNDcyQzE2IDM4OC4xODggODcuNDA2IDMyMCAxNzUuMTU2IDMyMEgyNzIuODQ0QzI4OC4xODggMzIwIDMwMy4zNDQgMzIyLjA2MiAzMTcuODEyIDMyNi4xNTZDMzIyLjIxOSAzMjcuNDA2IDMyNi41IDMyNC44NzUgMzI3LjY4OCAzMjAuNjU2QzMyOC45MDYgMzE2LjQwNiAzMjYuNDM4IDMxMS45NjkgMzIyLjE4OCAzMTAuNzgxQzMwNi4yODEgMzA2LjI4MSAyODkuNjU2IDMwNCAyNzIuODQ0IDMwNEgxNzUuMTU2Qzc4LjU2MiAzMDQgMCAzNzkuMzc1IDAgNDcyQzAgNDk0LjA2MiAxOC41OTQgNTEyIDQxLjQzOCA1MTJINDA2LjU2MkM0MTAuNTMxIDUxMiA0MTQuNDM4IDUxMS40NjkgNDE4LjE1NiA1MTAuNDA2QzQyMi40MDYgNTA5LjIxOSA0MjQuOTA2IDUwNC44MTIgNDIzLjY4OCA1MDAuNTYyQzQyMi41MzEgNDk2LjMxMiA0MTguMTI1IDQ5My44NDQgNDEzLjg0NCA0OTUuMDMxWk0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTIyNCAxNkMyODUuNzU4IDE2IDMzNiA2Ni4yNDIgMzM2IDEyOFMyODUuNzU4IDI0MCAyMjQgMjQwUzExMiAxODkuNzU4IDExMiAxMjhTMTYyLjI0MiAxNiAyMjQgMTZaTTYzMS43NTIgMzgwLjU5NEw2MTEuMzA3IDM2OC43N0M2MTMuMDIzIDM1Ny41OSA2MTMuMTExIDM0Ny4yOTMgNjExLjMwNyAzMzUuMjM2TDYzMS43NTIgMzIzLjQxMkM2MzguNDQ1IDMxOS41ODIgNjQxLjU5NiAzMTEuNTI5IDYzOS4yMDUgMzA0LjI2NkM2MzIuNzA5IDI4NC43NTQgNjIyLjUyNyAyNjcuMDQ3IDYwOC45MTYgMjUxLjY0NUM2MDYuMDA0IDI0OC40MyA2MDEuNDIyIDI0Ni40NjkgNTk2LjY5MSAyNDYuNDY5QzU5My45NjkgMjQ2LjQ2OSA1OTEuMTk5IDI0Ny4xMTcgNTg4LjY2NiAyNDguNTQ5TDU2Ny43MTUgMjYwLjY4NEM1NTguOTk2IDI1My44MTQgNTQ5LjQzNCAyNDguMjk1IDUzOS4xNDMgMjQ0LjE4NFYyMTkuOTk4QzUzOS4xNDMgMjEyLjMxNCA1MzMuNzcgMjA1LjU4NCA1MjYuMzczIDIwNC4wMDhDNTE0LjkyOCAyMDEuNjIzIDUwNC41OTYgMjAwLjgwMSA0OTUuNzExIDIwMC44MDFDNDgxLjYwNCAyMDAuODAxIDQ3MS4xMzcgMjAyLjg3MSA0NjUuNiAyMDQuMDM3QzQ1OC4yMDEgMjA1LjU4NCA0NTIuODMgMjEyLjMxNCA0NTIuODMgMjE5Ljk5OFYyNDQuMTg0QzQ0Mi41NjYgMjQ4LjI5NSA0MzMuMDA0IDI1My44MTQgNDI0LjI4NSAyNjAuNjg0TDQwMy4zOTEgMjQ4LjU3OEM0MDEuMDI5IDI0Ny4xNzYgMzk4LjE3NCAyNDYuNDQ5IDM5NS4yNTYgMjQ2LjQ0OUgzOTUuMjQ4QzM5MC44MjIgMjQ2LjQ0OSAzODYuMjU4IDI0OC4xMjUgMzgzLjA1NyAyNTEuNjc0QzM2OS40NzMgMjY3LjA0NyAzNTkuMjkzIDI4NC43NTQgMzUyLjc5NSAzMDQuMjk1QzM1MC40MDQgMzExLjUyOSAzNTMuNTU1IDMxOS41ODIgMzYwLjIyMSAzMjMuNDEyTDM4MC42OTUgMzM1LjIzNkMzNzguODkzIDM0Ny4yNzkgMzc4Ljk3NSAzNTcuNTc2IDM4MC42OTUgMzY4Ljc3TDM2MC4yNDggMzgwLjU5NEMzNTMuNTU1IDM4NC40MjIgMzUwLjQwNCAzOTIuNDc1IDM1Mi43OTUgMzk5LjczOEMzNTkuMjkzIDQxOS4yNSAzNjkuNDczIDQzNi45NTkgMzgzLjA4NCA0NTIuMzU5QzM4NS4zNzMgNDU0LjkxMiAzOTAuMDA0IDQ1Ny42MzMgMzk1LjM1NCA0NTcuNjMzQzM5Ny45MSA0NTcuNjMzIDQwMC42MjkgNDU3LjAxMiA0MDMuMzM0IDQ1NS40NTdMNDI0LjA2MSA0NDMuNDkyQzQzMi44NjMgNDUwLjQ0NSA0NDIuNDgyIDQ1Ni4wMiA0NTIuODMgNDYwLjE1OFY0ODQuMDMzQzQ1Mi44MyA0OTEuNzIxIDQ1OC4yMDEgNDk4LjQyMiA0NjUuNjI3IDQ5OS45OThDNDc3LjA0OSA1MDIuMzc5IDQ4Ny4zNzUgNTAzLjE5OSA0OTYuMjY2IDUwMy4xOTlDNTEwLjM1NyA1MDMuMTk5IDUyMC44NDggNTAxLjEzOSA1MjYuNDAyIDQ5OS45NzFDNTMzLjc3IDQ5OC40MjIgNTM5LjE0MyA0OTEuNzIxIDUzOS4xNDMgNDg0LjAzM1Y0NjAuMTU4QzU0OS40OSA0NTYuMDIgNTU5LjEzNyA0NTAuNDQ1IDU2Ny45MzkgNDQzLjQ5Mkw1ODguNjA5IDQ1NS40M0M1OTEuMDIzIDQ1Ni44MjYgNTkzLjg5NSA0NTcuNTU3IDU5Ni44MTMgNDU3LjU1N0M2MDEuMjE3IDQ1Ny41NTcgNjA1LjcyOSA0NTUuODg5IDYwOC45NDUgNDUyLjMzMkM2MjIuNTI3IDQzNi45NTkgNjMyLjcwOSA0MTkuMjUgNjM5LjIwNSAzOTkuNzA5QzY0MS41OTYgMzkyLjQ3NSA2MzguNDQ1IDM4NC40MjIgNjMxLjc1MiAzODAuNTk0Wk01OTYuNjExIDQ0MS41NzRMNTc1Ljk0MSA0MjkuNjM3TDU2Ni41NDEgNDI0LjIwN0w1NTguMDIxIDQzMC45MzZDNTUwLjQ2OSA0MzYuOTAyIDU0Mi4xMTcgNDQxLjczNCA1MzMuMjAxIDQ0NS4zMDFMNTIzLjE0MyA0NDkuMzI0VjQ2MC4xNThMNTIzLjEwOSA0ODQuMzEyQzUxOS4wMDIgNDg1LjE3NiA1MDkuMzgzIDQ4Ny4xOTkgNDk2LjI2NiA0ODcuMTk5QzQ4Ny4yMjEgNDg3LjE5OSA0NzguMDEyIDQ4Ni4yMzQgNDY4LjgzIDQ4NC4wMzNWNDQ5LjMyNEw0NTguNzcxIDQ0NS4zMDFDNDQ5Ljg5MSA0NDEuNzUgNDQxLjU0OSA0MzYuOTE2IDQzMy45NzkgNDMwLjkzNkw0MjUuNDYxIDQyNC4yMDlMNDE2LjA2MSA0MjkuNjM1TDM5NS4wNzIgNDQxLjc2NEMzODIuOTE2IDQyOC4wMDggMzczLjc5OSA0MTIuMTY4IDM2OC4yNTggMzk0LjQ0M0wzODguNzA1IDM4Mi42MTlMMzk4LjE3IDM3Ny4xNDZMMzk2LjUxIDM2Ni4zMzhDMzk0Ljk4NiAzNTYuNDI0IDM5NC45ODggMzQ3LjgzIDM5Ni41MiAzMzcuNjA1TDM5OC4xMzMgMzI2LjgzTDM4OC42OTcgMzIxLjM4MUwzNjcuOTc3IDMwOS4zNDRDMzczLjc5NSAyOTEuODUgMzgyLjkwMiAyNzYuMDEyIDM5NS4zNjkgMjYyLjQyMkw0MTYuMjY0IDI3NC41MjdMNDI1LjY1OCAyNzkuOTcxTDQzNC4xODcgMjczLjI1MkM0NDEuNjY0IDI2Ny4zNTkgNDQ5LjkzNyAyNjIuNTc4IDQ1OC43NzkgMjU5LjAzNUw0NjguODMgMjU1LjAxVjI0NC4xODRMNDY4Ljg5NiAyMTkuNjkzQzQ3My4wMDggMjE4LjgyOCA0ODIuNjM1IDIxNi44MDEgNDk1LjcxMSAyMTYuODAxQzUwNC43NDggMjE2LjgwMSA1MTMuOTY3IDIxNy43NjYgNTIzLjE0MyAyMTkuOTk4VjI1NS4wMjFMNTMzLjIwNyAyNTkuMDQxQzU0Mi4wNTMgMjYyLjU3NCA1NTAuMzMgMjY3LjM1NSA1NTcuODEyIDI3My4yNTJMNTY2LjM0IDI3OS45NjlMNTc1LjczNCAyNzQuNTI5TDU5Ni45MjYgMjYyLjIzOEM2MDkuMDg4IDI3Ni4wMDIgNjE4LjIwNSAyOTEuODQyIDYyMy43NDIgMzA5LjU2MUw2MDMuMjk3IDMyMS4zODVMNTkzLjg3MSAzMjYuODM2TDU5NS40ODIgMzM3LjYwNUM1OTcuMDE0IDM0Ny44MjQgNTk3LjAxNiAzNTYuNDIgNTk1LjQ5MiAzNjYuMzRMNTkzLjgzMiAzNzcuMTQ2TDYwMy4yOTcgMzgyLjYxOUw2MjQuMDIxIDM5NC42NjJDNjE4LjIwNyA0MTIuMTUgNjA5LjEwMiA0MjcuOTkgNTk2LjYxMSA0NDEuNTc0Wk00OTYgMzA0QzQ2OS40OSAzMDQgNDQ4IDMyNS40OSA0NDggMzUyUzQ2OS40OSA0MDAgNDk2IDQwMFM1NDQgMzc4LjUxIDU0NCAzNTJTNTIyLjUxIDMwNCA0OTYgMzA0Wk00OTYgMzg0QzQ3OC4zNTUgMzg0IDQ2NCAzNjkuNjQ1IDQ2NCAzNTJTNDc4LjM1NSAzMjAgNDk2IDMyMFM1MjggMzM0LjM1NSA1MjggMzUyUzUxMy42NDUgMzg0IDQ5NiAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserGear(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M413.844 495.031C411.531 495.656 409.062 496 406.562 496H41.438C27.406 496 16 485.219 16 472C16 388.188 87.406 320 175.156 320H272.844C288.188 320 303.344 322.062 317.812 326.156C322.219 327.406 326.5 324.875 327.688 320.656C328.906 316.406 326.438 311.969 322.188 310.781C306.281 306.281 289.656 304 272.844 304H175.156C78.562 304 0 379.375 0 472C0 494.062 18.594 512 41.438 512H406.562C410.531 512 414.438 511.469 418.156 510.406C422.406 509.219 424.906 504.812 423.688 500.562C422.531 496.312 418.125 493.844 413.844 495.031ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM224 16C285.758 16 336 66.242 336 128S285.758 240 224 240S112 189.758 112 128S162.242 16 224 16ZM631.752 380.594L611.307 368.77C613.023 357.59 613.111 347.293 611.307 335.236L631.752 323.412C638.445 319.582 641.596 311.529 639.205 304.266C632.709 284.754 622.527 267.047 608.916 251.645C606.004 248.43 601.422 246.469 596.691 246.469C593.969 246.469 591.199 247.117 588.666 248.549L567.715 260.684C558.996 253.814 549.434 248.295 539.143 244.184V219.998C539.143 212.314 533.77 205.584 526.373 204.008C514.928 201.623 504.596 200.801 495.711 200.801C481.604 200.801 471.137 202.871 465.6 204.037C458.201 205.584 452.83 212.314 452.83 219.998V244.184C442.566 248.295 433.004 253.814 424.285 260.684L403.391 248.578C401.029 247.176 398.174 246.449 395.256 246.449H395.248C390.822 246.449 386.258 248.125 383.057 251.674C369.473 267.047 359.293 284.754 352.795 304.295C350.404 311.529 353.555 319.582 360.221 323.412L380.695 335.236C378.893 347.279 378.975 357.576 380.695 368.77L360.248 380.594C353.555 384.422 350.404 392.475 352.795 399.738C359.293 419.25 369.473 436.959 383.084 452.359C385.373 454.912 390.004 457.633 395.354 457.633C397.91 457.633 400.629 457.012 403.334 455.457L424.061 443.492C432.863 450.445 442.482 456.02 452.83 460.158V484.033C452.83 491.721 458.201 498.422 465.627 499.998C477.049 502.379 487.375 503.199 496.266 503.199C510.357 503.199 520.848 501.139 526.402 499.971C533.77 498.422 539.143 491.721 539.143 484.033V460.158C549.49 456.02 559.137 450.445 567.939 443.492L588.609 455.43C591.023 456.826 593.895 457.557 596.813 457.557C601.217 457.557 605.729 455.889 608.945 452.332C622.527 436.959 632.709 419.25 639.205 399.709C641.596 392.475 638.445 384.422 631.752 380.594ZM596.611 441.574L575.941 429.637L566.541 424.207L558.021 430.936C550.469 436.902 542.117 441.734 533.201 445.301L523.143 449.324V460.158L523.109 484.312C519.002 485.176 509.383 487.199 496.266 487.199C487.221 487.199 478.012 486.234 468.83 484.033V449.324L458.771 445.301C449.891 441.75 441.549 436.916 433.979 430.936L425.461 424.209L416.061 429.635L395.072 441.764C382.916 428.008 373.799 412.168 368.258 394.443L388.705 382.619L398.17 377.146L396.51 366.338C394.986 356.424 394.988 347.83 396.52 337.605L398.133 326.83L388.697 321.381L367.977 309.344C373.795 291.85 382.902 276.012 395.369 262.422L416.264 274.527L425.658 279.971L434.187 273.252C441.664 267.359 449.937 262.578 458.779 259.035L468.83 255.01V244.184L468.896 219.693C473.008 218.828 482.635 216.801 495.711 216.801C504.748 216.801 513.967 217.766 523.143 219.998V255.021L533.207 259.041C542.053 262.574 550.33 267.355 557.812 273.252L566.34 279.969L575.734 274.529L596.926 262.238C609.088 276.002 618.205 291.842 623.742 309.561L603.297 321.385L593.871 326.836L595.482 337.605C597.014 347.824 597.016 356.42 595.492 366.34L593.832 377.146L603.297 382.619L624.021 394.662C618.207 412.15 609.102 427.99 596.611 441.574ZM496 304C469.49 304 448 325.49 448 352S469.49 400 496 400S544 378.51 544 352S522.51 304 496 304ZM496 384C478.355 384 464 369.645 464 352S478.355 320 496 320S528 334.355 528 352S513.645 384 496 384Z" />
        </Icon>
    </>
}