
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pegasus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pegasus?s=thin pegasus}
 * @preview ![pegasus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNjRDNDg3LjE2NCA2NCA0ODAgNzEuMTY0IDQ4MCA4MFM0ODcuMTY0IDk2IDQ5NiA5NlM1MTIgODguODM2IDUxMiA4MFM1MDQuODM2IDY0IDQ5NiA2NFpNNTc1LjkwNiA4Mi4yMDNDNTc1LjkwNiA3Mi4yODEgNTcyLjE4OCA2Mi44NDQgNTY1LjQzOCA1NS41OTRMNTU4LjM3NSA0OC4wOTRDNTY3LjM0NCA0MC4yOTcgNTczLjQwNiAzMC4yMDMgNTc1LjY4OCAxOC45MjJDNTc2LjYyNSAxNC4yOTcgNTc1LjQzOCA5LjUxNiA1NzIuNDA2IDUuODI4QzU2OS4zNzUgMi4xMjUgNTY0LjkwNiAwIDU2MC4xNTYgMEg0MzUuNzVDMzY2LjgxMiAwIDMwOC4xNTYgNTcuODI4IDMwNCAxMjhIMjk2LjAzM0MyMDcuMjI5IDEyNi4wNTEgMTg4Ljg2OSA0Mi4wMDQgMTg4LjEyNyAzOC4zNzVDMTg3LjQzOSAzNS4wMTYgMTg0LjY1OCAzMi40NTMgMTgxLjI1MiAzMi4wMzFDMTc3Ljk3MSAzMS43NSAxNzQuNTY0IDMzLjQzOCAxNzMuMDY0IDM2LjUxNkMxNzEuODcxIDM5LjAyIDE1Mi41MjkgODAuOTkgMTUyLjI3MyAxMjguODVDMTI3LjIwMSAxMzAuOTM0IDEwNC45MDQgMTQyLjM0NiA4OC45ODQgMTYwSDczLjkzVjE2MC4wMzFDNzIuOTg4IDE2MC4wMTYgNzIgMTYwIDcyIDE2MEMzMi4zMTIgMTYwIDAgMTkyLjI5NyAwIDIzMlYzMTJDMCAzMTYuNDIyIDMuNTk0IDMyMCA4IDMyMFMxNiAzMTYuNDIyIDE2IDMxMlYyMzJDMTYgMjAxLjEyNSA0MS4xMjUgMTc2IDcyIDE3Nkg3Ny4zMTJDNjkuMDY2IDE5MC4xNzIgNjQgMjA2LjQyMiA2NCAyMjRDNjQgMjUzLjQyMiA3Ny41MjMgMjc5LjQzIDk4LjM2NyAyOTcuMDM5TDg3LjI1IDMxOC44MTJDNjcuNTYyIDM1Ny4yMzQgNjQgMzY0LjE3MiA2NCAzODAuOTA2QzY0IDM4NS44MTIgNjQuOTA2IDM5My4yODEgNjYuMDk0IDM5Ny44OTFMOTAuMDYyIDQ5My44NDRDOTIuNjI1IDUwNC4wMTYgMTAyLjg3NSA1MTIgMTEzLjM0NCA1MTJIMTc2QzE4My40MzggNTEyIDE5MC4zNDQgNTA4LjY0MSAxOTQuOTA2IDUwMi43NjZDMTk5LjQ2OSA0OTYuOTA2IDIwMS4wNjIgNDg5LjQwNiAxOTkuMTI1IDQ4MS43MTlMMTY4LjU5NCAzODQuNjg4TDE5Ni4yODEgMzI5LjMxMkwzMTIgMzU4LjI1VjQ4OEMzMTIgNTAxLjIzNCAzMjIuNzgxIDUxMiAzMzYgNTEySDM5MkM0MDUuMjE5IDUxMiA0MTYgNTAxLjIzNCA0MTYgNDg4VjMyNy4wODZDNDM1LjUwOCAzMDkuNTE2IDQ0OCAyODQuMzIgNDQ4IDI1NkM0NDggMjU1Ljk2NSA0NDcuOTkyIDI1NS45MzQgNDQ3Ljk5MiAyNTUuODk4QzQ0Ny45OTIgMjU1Ljg5MSA0NDggMTUxLjkzOCA0NDggMTUxLjkzOEw0NTMuNjg4IDE1My45NjlMNDcwLjU2MyAxODcuNTc4QzQ3Ny4zNTkgMjAxLjA4NiA0OTEuMjUgMjA5LjA5NCA1MDUuNjI5IDIwOS4wOTRDNTEwLjQzIDIwOS4wOTQgNTE1LjI3NyAyMDguMjAzIDUxOS45MzggMjA2LjMyOEw1NTEuNDY5IDE5My43MTlDNTY1LjIxOSAxODguMjM0IDU3NS45NjkgMTcyLjMxMyA1NzUuOTY5IDE1Ny40ODRMNTc1LjkwNiA4Mi4yMDNaTTU0NS41MjcgMTc4Ljg1OUw1MTMuOTYxIDE5MS40ODRDNTAyLjg5NSAxOTUuOTQ1IDQ5MC4wOTQgMTkwLjgwMSA0ODQuODU5IDE4MC4zOThMNDY3Ljk4NCAxNDYuNzg5QzQ2NC42NTYgMTQwLjE2NCA0NDkuMjYyIDEzMS40NzcgNDM4Ljc4MSAxMzguODU5QzQzNC41MzEgMTQxLjg1NSA0MzIgMTQ2LjczNCA0MzIgMTUxLjkzOEM0MzIgMTUxLjkzOCA0MzEuOTkyIDI1Ni4yMzQgNDMyIDI1Ni40MDZDNDMxLjg4MyAyNzguOTEgNDIyLjQxIDI5OS43NzMgNDA1LjI4OSAzMTUuMTk1QzQwMS45MjIgMzE4LjIzNCA0MDAgMzIyLjU1NSA0MDAgMzI3LjA4NlY0ODhDNDAwIDQ5Mi40MSAzOTYuNDEgNDk2IDM5MiA0OTZIMzM2QzMzMS41ODYgNDk2IDMyOCA0OTIuNDEgMzI4IDQ4OFYzNTguMjVDMzI4IDM1MC45MDYgMzIzLjAwNCAzNDQuNTA4IDMxNS44ODMgMzQyLjcyN0wyMDAuMTY0IDMxMy43ODlDMTkzLjc4OSAzMTIuMTk1IDE4NS43MTkgMzE0LjY1NiAxODEuOTY5IDMyMi4xNTZMMTU0LjI4MSAzNzcuNTMxQzE1Mi40MyAzODEuMjQyIDE1Mi4wODYgMzg1LjUzMSAxNTMuMzMyIDM4OS40ODhMMTgzLjYwOSA0ODUuNjI5QzE4NS4xNzIgNDkxLjgyIDE4MC42NjggNDk2IDE3NiA0OTZIMTEzLjM0NEMxMTAuMTk1IDQ5NiAxMDYuMzUyIDQ5Mi45OTYgMTA1LjU4NiA0ODkuOTY1TDgxLjU4NiAzOTMuODk4QzgwLjc0MiAzOTAuNjE3IDgwIDM4NC41NDMgODAgMzgwLjkwNkM4MCAzNjguNDA2IDgxLjgxNiAzNjQuNTA0IDEwMS41IDMyNi4wODZMMTEyLjYxNyAzMDQuMzEyQzExNS45OTYgMjk3LjY4OCAxMTQuMzY3IDI4OS42MDkgMTA4LjY5MSAyODQuODEyQzkwLjQ1NyAyNjkuNDEgODAgMjQ3LjI0MiA4MCAyMjRDODAgMTgyLjI4NyAxMTIuMjA3IDE0OC4zMjQgMTUyLjk5MiAxNDQuNzA5QzE1NC4yNTYgMTU5LjIzIDE1Ni42MDIgMTc0LjI4MyAxNjYuMTg5IDE5Mi43NUMxODUuNzUyIDIzMC4zNDQgMjI0LjY1OCAyNTQuMjY2IDI4MS44NDYgMjYzLjg1OUMyODIuMjgzIDI2My45MzggMjgyLjcyMSAyNjMuOTY5IDI4My4xNTggMjYzLjk2OUMyODcuMDAyIDI2My45NjkgMjkwLjM3NyAyNjEuMjAzIDI5MS4wMzMgMjU3LjI5N0MyOTEuNzgzIDI1Mi45MzggMjg4Ljg0NiAyNDguODEzIDI4NC40NzEgMjQ4LjA3OEMyMzIuNTMzIDIzOS4zNzUgMTk3LjUzMyAyMTguMjk3IDE4MC40MzkgMTg1LjQyMkMxNTguNjI3IDE0My41NDcgMTcwLjQ3MSA5MS40MzggMTc5Ljc4MyA2My40MzhDMTkyLjQwNiA5My4wODQgMjI0LjM2MyAxNDIuNTUxIDI5NiAxNDMuOTk2VjE0NEgzMjBWMTI4Ljc3M0MzMjMuNzczIDY2LjU3OCAzNzUuNjU2IDE2IDQzNS43NSAxNkg1NTkuOTUzQzU1OC4zNTIgMjMuNjIxIDU1NC4xOCAzMC41MzkgNTQ3Ljg3OSAzNi4wMTZDNTQwLjE4NCA0Mi43MDMgNTQxLjI4NSA1My4yODEgNTQ2LjcyNyA1OS4wNjJDNTUzLjgyIDY2LjU5NCA1NTkuOTA2IDcxLjQwNiA1NTkuOTA2IDgyLjIxOUw1NTkuOTY5IDE1Ny40ODRDNTU5Ljk2OSAxNjUuODA1IDU1My4yMjcgMTc1Ljc4OSA1NDUuNTI3IDE3OC44NTlaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Pegasus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M496 64C487.164 64 480 71.164 480 80S487.164 96 496 96S512 88.836 512 80S504.836 64 496 64ZM575.906 82.203C575.906 72.281 572.188 62.844 565.438 55.594L558.375 48.094C567.344 40.297 573.406 30.203 575.688 18.922C576.625 14.297 575.438 9.516 572.406 5.828C569.375 2.125 564.906 0 560.156 0H435.75C366.812 0 308.156 57.828 304 128H296.033C207.229 126.051 188.869 42.004 188.127 38.375C187.439 35.016 184.658 32.453 181.252 32.031C177.971 31.75 174.564 33.438 173.064 36.516C171.871 39.02 152.529 80.99 152.273 128.85C127.201 130.934 104.904 142.346 88.984 160H73.93V160.031C72.988 160.016 72 160 72 160C32.312 160 0 192.297 0 232V312C0 316.422 3.594 320 8 320S16 316.422 16 312V232C16 201.125 41.125 176 72 176H77.312C69.066 190.172 64 206.422 64 224C64 253.422 77.523 279.43 98.367 297.039L87.25 318.812C67.562 357.234 64 364.172 64 380.906C64 385.812 64.906 393.281 66.094 397.891L90.062 493.844C92.625 504.016 102.875 512 113.344 512H176C183.438 512 190.344 508.641 194.906 502.766C199.469 496.906 201.062 489.406 199.125 481.719L168.594 384.688L196.281 329.312L312 358.25V488C312 501.234 322.781 512 336 512H392C405.219 512 416 501.234 416 488V327.086C435.508 309.516 448 284.32 448 256C448 255.965 447.992 255.934 447.992 255.898C447.992 255.891 448 151.938 448 151.938L453.688 153.969L470.563 187.578C477.359 201.086 491.25 209.094 505.629 209.094C510.43 209.094 515.277 208.203 519.938 206.328L551.469 193.719C565.219 188.234 575.969 172.313 575.969 157.484L575.906 82.203ZM545.527 178.859L513.961 191.484C502.895 195.945 490.094 190.801 484.859 180.398L467.984 146.789C464.656 140.164 449.262 131.477 438.781 138.859C434.531 141.855 432 146.734 432 151.938C432 151.938 431.992 256.234 432 256.406C431.883 278.91 422.41 299.773 405.289 315.195C401.922 318.234 400 322.555 400 327.086V488C400 492.41 396.41 496 392 496H336C331.586 496 328 492.41 328 488V358.25C328 350.906 323.004 344.508 315.883 342.727L200.164 313.789C193.789 312.195 185.719 314.656 181.969 322.156L154.281 377.531C152.43 381.242 152.086 385.531 153.332 389.488L183.609 485.629C185.172 491.82 180.668 496 176 496H113.344C110.195 496 106.352 492.996 105.586 489.965L81.586 393.898C80.742 390.617 80 384.543 80 380.906C80 368.406 81.816 364.504 101.5 326.086L112.617 304.312C115.996 297.688 114.367 289.609 108.691 284.812C90.457 269.41 80 247.242 80 224C80 182.287 112.207 148.324 152.992 144.709C154.256 159.23 156.602 174.283 166.189 192.75C185.752 230.344 224.658 254.266 281.846 263.859C282.283 263.938 282.721 263.969 283.158 263.969C287.002 263.969 290.377 261.203 291.033 257.297C291.783 252.938 288.846 248.813 284.471 248.078C232.533 239.375 197.533 218.297 180.439 185.422C158.627 143.547 170.471 91.438 179.783 63.438C192.406 93.084 224.363 142.551 296 143.996V144H320V128.773C323.773 66.578 375.656 16 435.75 16H559.953C558.352 23.621 554.18 30.539 547.879 36.016C540.184 42.703 541.285 53.281 546.727 59.062C553.82 66.594 559.906 71.406 559.906 82.219L559.969 157.484C559.969 165.805 553.227 175.789 545.527 178.859Z" />
        </Icon>
    </>
}