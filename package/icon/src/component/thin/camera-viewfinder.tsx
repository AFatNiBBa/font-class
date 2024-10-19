
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `camera-viewfinder` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/camera-viewfinder?s=thin camera-viewfinder}
 * @preview ![camera-viewfinder](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzIwVjE5MkMzODQgMTc0LjMyNiAzNjkuNjc0IDE2MCAzNTIgMTYwSDMxNkwzMDkuODEyIDE0My41NjJDMzA2LjMxMiAxMzQuMTg4IDI5Ny4zNzUgMTI4IDI4Ny4zNzUgMTI4SDIyNC42MjVDMjE0LjYyNSAxMjggMjA1LjYyNSAxMzQuMTg4IDIwMi4xMjUgMTQzLjU2MkwxOTYgMTYwSDE2MEMxNDIuMzI2IDE2MCAxMjggMTc0LjMyNiAxMjggMTkyVjMyMEMxMjggMzM3LjY3MiAxNDIuMzI2IDM1MiAxNjAgMzUySDM1MkMzNjkuNjc0IDM1MiAzODQgMzM3LjY3MiAzODQgMzIwWk0xNDQgMzIwVjE5MkMxNDQgMTgzLjE3OCAxNTEuMTc4IDE3NiAxNjAgMTc2SDE5NkgyMDcuMTEzTDIxMC45OTQgMTY1LjU4NkwyMTcuMTE1IDE0OS4xNThDMjE4LjI2OCAxNDYuMDcyIDIyMS4yODUgMTQ0IDIyNC42MjUgMTQ0SDI4Ny4zNzVDMjkwLjczIDE0NCAyOTMuNjU0IDE0Ni4wMjMgMjk0LjgzOCAxNDkuMTk5TDMwMS4wMjUgMTY1LjYzN0wzMDQuOTI4IDE3NkgzMTZIMzUyQzM2MC44MjIgMTc2IDM2OCAxODMuMTc4IDM2OCAxOTJWMzIwQzM2OCAzMjguODIyIDM2MC44MjIgMzM2IDM1MiAzMzZIMTYwQzE1MS4xNzggMzM2IDE0NCAzMjguODIyIDE0NCAzMjBaTTI1NiAyMDhDMjI5LjUgMjA4IDIwOCAyMjkuNSAyMDggMjU2UzIyOS41IDMwNCAyNTYgMzA0UzMwNCAyODIuNSAzMDQgMjU2UzI4Mi41IDIwOCAyNTYgMjA4Wk0yNTYgMjg4QzIzOC4zNTUgMjg4IDIyNCAyNzMuNjQ1IDIyNCAyNTZTMjM4LjM1NSAyMjQgMjU2IDIyNFMyODggMjM4LjM1NSAyODggMjU2UzI3My42NDUgMjg4IDI1NiAyODhaTTggMTkyQzEyLjQyMiAxOTIgMTYgMTg4LjQwNiAxNiAxODRWNzJDMTYgNTguNzgxIDI2Ljc2NiA0OCA0MCA0OEgxNTJDMTU2LjQyMiA0OCAxNjAgNDQuNDA2IDE2MCA0MFMxNTYuNDIyIDMyIDE1MiAzMkg0MEMxNy45MzggMzIgMCA0OS45MzggMCA3MlYxODRDMCAxODguNDA2IDMuNTc4IDE5MiA4IDE5MlpNNDcyIDMySDM2MEMzNTUuNTc4IDMyIDM1MiAzNS41OTQgMzUyIDQwUzM1NS41NzggNDggMzYwIDQ4SDQ3MkM0ODUuMjM0IDQ4IDQ5NiA1OC43ODEgNDk2IDcyVjE4NEM0OTYgMTg4LjQwNiA0OTkuNTc4IDE5MiA1MDQgMTkyUzUxMiAxODguNDA2IDUxMiAxODRWNzJDNTEyIDQ5LjkzOCA0OTQuMDYyIDMyIDQ3MiAzMlpNNTA0IDMyMEM0OTkuNTc4IDMyMCA0OTYgMzIzLjU5NCA0OTYgMzI4VjQ0MEM0OTYgNDUzLjIxOSA0ODUuMjM0IDQ2NCA0NzIgNDY0SDM2MEMzNTUuNTc4IDQ2NCAzNTIgNDY3LjU5NCAzNTIgNDcyUzM1NS41NzggNDgwIDM2MCA0ODBINDcyQzQ5NC4wNjIgNDgwIDUxMiA0NjIuMDYyIDUxMiA0NDBWMzI4QzUxMiAzMjMuNTk0IDUwOC40MjIgMzIwIDUwNCAzMjBaTTE1MiA0NjRINDBDMjYuNzY2IDQ2NCAxNiA0NTMuMjE5IDE2IDQ0MFYzMjhDMTYgMzIzLjU5NCAxMi40MjIgMzIwIDggMzIwUzAgMzIzLjU5NCAwIDMyOFY0NDBDMCA0NjIuMDYyIDE3LjkzOCA0ODAgNDAgNDgwSDE1MkMxNTYuNDIyIDQ4MCAxNjAgNDc2LjQwNiAxNjAgNDcyUzE1Ni40MjIgNDY0IDE1MiA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CameraViewfinder(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M384 320V192C384 174.326 369.674 160 352 160H316L309.812 143.562C306.312 134.188 297.375 128 287.375 128H224.625C214.625 128 205.625 134.188 202.125 143.562L196 160H160C142.326 160 128 174.326 128 192V320C128 337.672 142.326 352 160 352H352C369.674 352 384 337.672 384 320ZM144 320V192C144 183.178 151.178 176 160 176H196H207.113L210.994 165.586L217.115 149.158C218.268 146.072 221.285 144 224.625 144H287.375C290.73 144 293.654 146.023 294.838 149.199L301.025 165.637L304.928 176H316H352C360.822 176 368 183.178 368 192V320C368 328.822 360.822 336 352 336H160C151.178 336 144 328.822 144 320ZM256 208C229.5 208 208 229.5 208 256S229.5 304 256 304S304 282.5 304 256S282.5 208 256 208ZM256 288C238.355 288 224 273.645 224 256S238.355 224 256 224S288 238.355 288 256S273.645 288 256 288ZM8 192C12.422 192 16 188.406 16 184V72C16 58.781 26.766 48 40 48H152C156.422 48 160 44.406 160 40S156.422 32 152 32H40C17.938 32 0 49.938 0 72V184C0 188.406 3.578 192 8 192ZM472 32H360C355.578 32 352 35.594 352 40S355.578 48 360 48H472C485.234 48 496 58.781 496 72V184C496 188.406 499.578 192 504 192S512 188.406 512 184V72C512 49.938 494.062 32 472 32ZM504 320C499.578 320 496 323.594 496 328V440C496 453.219 485.234 464 472 464H360C355.578 464 352 467.594 352 472S355.578 480 360 480H472C494.062 480 512 462.062 512 440V328C512 323.594 508.422 320 504 320ZM152 464H40C26.766 464 16 453.219 16 440V328C16 323.594 12.422 320 8 320S0 323.594 0 328V440C0 462.062 17.938 480 40 480H152C156.422 480 160 476.406 160 472S156.422 464 152 464Z" />
        </Icon>
    </>
}