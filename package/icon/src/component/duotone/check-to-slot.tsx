
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `check-to-slot` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=duotone check-to-slot}
 * @preview ![check-to-slot](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMiAzMkgxNDRDMTE3LjQ5IDMyIDk2IDUzLjQ5MiA5NiA4MFY0MDBINDgwVjgwQzQ4MCA1My40OTIgNDU4LjUxIDMyIDQzMiAzMlpNMzc4Ljg3NSAxNjYuODEyTDI5MC44NzUgMjc4LjgxMkMyODYuODQ0IDI4My45NjkgMjgwLjg3NSAyODcuMjUgMjc0LjM0NCAyODcuODc1QzI3My41NjIgMjg3Ljk2OSAyNzIuNzgxIDI4OCAyNzIgMjg4QzI2Ni4yODEgMjg4IDI2MC43NSAyODUuOTY5IDI1Ni4zNzUgMjgyLjIxOUwyMDAuMzc1IDIzNC4yMTlDMTkwLjMxMiAyMjUuNTk0IDE4OS4xNTYgMjEwLjQzOCAxOTcuNzgxIDIwMC4zNzVDMjA2LjQzOCAxOTAuMzEzIDIyMS41OTQgMTg5LjE4OCAyMzEuNjI1IDE5Ny43ODFMMjY4LjU5NCAyMjkuNDY5TDM0MS4xMjUgMTM3LjE4OEMzNDkuMzEzIDEyNi43ODEgMzY0LjQzOCAxMjQuOTY5IDM3NC44MTMgMTMzLjEyNUMzODUuMjUgMTQxLjMxMiAzODcuMDYyIDE1Ni40MDYgMzc4Ljg3NSAxNjYuODEyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01MjggMjg4SDQ4MFYzNjhINDk2QzUwNC44MzYgMzY4IDUxMiAzNzUuMTY0IDUxMiAzODRTNTA0LjgzNiA0MDAgNDk2IDQwMEg4MEM3MS4xNjQgNDAwIDY0IDM5Mi44MzYgNjQgMzg0UzcxLjE2NCAzNjggODAgMzY4SDk2VjI4OEg0OEMyMS40OTIgMjg4IDAgMzA5LjQ5MiAwIDMzNlY0MzJDMCA0NTguNTA4IDIxLjQ5MiA0ODAgNDggNDgwSDUyOEM1NTQuNTA4IDQ4MCA1NzYgNDU4LjUwOCA1NzYgNDMyVjMzNkM1NzYgMzA5LjQ5MiA1NTQuNTA4IDI4OCA1MjggMjg4Wk0yNTYuMzc1IDI4Mi4yMTlDMjYwLjc1IDI4NS45NjkgMjY2LjI4MSAyODggMjcyIDI4OEMyNzIuNzgxIDI4OCAyNzMuNTYyIDI4Ny45NjkgMjc0LjM0NCAyODcuODc1QzI4MC44NzUgMjg3LjI1IDI4Ni44NDQgMjgzLjk2OSAyOTAuODc1IDI3OC44MTNMMzc4Ljg3NSAxNjYuODEzQzM4Ny4wNjMgMTU2LjQwNiAzODUuMjUgMTQxLjMxMyAzNzQuODEzIDEzMy4xMjVDMzY0LjQzOCAxMjQuOTY5IDM0OS4zMTMgMTI2Ljc4MSAzNDEuMTI1IDEzNy4xODhMMjY4LjU5NCAyMjkuNDY5TDIzMS42MjUgMTk3Ljc4MUMyMjEuNTk0IDE4OS4xODggMjA2LjQzOCAxOTAuMzEyIDE5Ny43ODEgMjAwLjM3NUMxODkuMTU2IDIxMC40MzggMTkwLjMxMiAyMjUuNTk0IDIwMC4zNzUgMjM0LjIxOUwyNTYuMzc1IDI4Mi4yMTlaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CheckToSlot(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M432 32H144C117.49 32 96 53.492 96 80V400H480V80C480 53.492 458.51 32 432 32ZM378.875 166.812L290.875 278.812C286.844 283.969 280.875 287.25 274.344 287.875C273.562 287.969 272.781 288 272 288C266.281 288 260.75 285.969 256.375 282.219L200.375 234.219C190.312 225.594 189.156 210.438 197.781 200.375C206.438 190.313 221.594 189.188 231.625 197.781L268.594 229.469L341.125 137.188C349.313 126.781 364.438 124.969 374.813 133.125C385.25 141.312 387.062 156.406 378.875 166.812Z" />
            <path d="M528 288H480V368H496C504.836 368 512 375.164 512 384S504.836 400 496 400H80C71.164 400 64 392.836 64 384S71.164 368 80 368H96V288H48C21.492 288 0 309.492 0 336V432C0 458.508 21.492 480 48 480H528C554.508 480 576 458.508 576 432V336C576 309.492 554.508 288 528 288ZM256.375 282.219C260.75 285.969 266.281 288 272 288C272.781 288 273.562 287.969 274.344 287.875C280.875 287.25 286.844 283.969 290.875 278.813L378.875 166.813C387.063 156.406 385.25 141.313 374.813 133.125C364.438 124.969 349.313 126.781 341.125 137.188L268.594 229.469L231.625 197.781C221.594 189.188 206.438 190.312 197.781 200.375C189.156 210.438 190.312 225.594 200.375 234.219L256.375 282.219Z" />
        </Icon>
    </>
}