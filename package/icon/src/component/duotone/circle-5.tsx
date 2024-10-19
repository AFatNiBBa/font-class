
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `circle-5` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-5?s=duotone circle-5}
 * @preview ![circle-5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxNkMxMjMuNDUxIDE2IDE2IDEyMy40NTEgMTYgMjU2UzEyMy40NTEgNDk2IDI1NiA0OTZTNDk2IDM4OC41NDkgNDk2IDI1NlMzODguNTQ5IDE2IDI1NiAxNlpNMjcyLjk1MyAzODRIMjIzLjM1OUMxOTUuMTI1IDM4NCAxNzAuMTU2IDM2NiAxNjEuMjM0IDMzOS4yMTlDMTU3LjA0NyAzMjYuNjI1IDE2My44NDQgMzEzLjAzMSAxNzYuNDIyIDMwOC44NDRDMTg4Ljk1MyAzMDQuNzgxIDIwMi41NzggMzExLjQ2OSAyMDYuNzY2IDMyNC4wMzFDMjA5LjE1NiAzMzEuMTg4IDIxNS44MTIgMzM2IDIyMy4zNTkgMzM2SDI3Mi45NTNDMjkwLjA3OCAzMzYgMzA0IDMyMi4wNjIgMzA0IDMwNC45MzhDMzA0IDI4OS4xODggMjkyLjIxOSAyNzUuOTM4IDI3Ni41OTQgMjc0LjEyNUwxODkuMjAzIDI2My44NDRDMTgyLjU3OCAyNjMuMDYyIDE3Ni41OTQgMjU5LjU2MiAxNzIuNjQxIDI1NC4xODhDMTY4LjcwMyAyNDguODEyIDE2Ny4xNzIgMjQyLjA2MiAxNjguNDIyIDIzNS41MzFMMTg1LjE1NiAxNDcuNTMxQzE4Ny4zMTIgMTM2LjE4OCAxOTcuMjAzIDEyOCAyMDguNzM0IDEyOEgzMTJDMzI1LjI1IDEyOCAzMzYgMTM4Ljc1IDMzNiAxNTJTMzI1LjI1IDE3NiAzMTIgMTc2SDIyOC41OTRMMjIwLjM5MSAyMTkuMTg4TDI4Mi4xODcgMjI2LjQzOEMzMjEuOTg0IDIzMS4xMjUgMzUyIDI2NC44NDQgMzUyIDMwNC45MzhDMzUyIDM0OC41MzEgMzE2LjU0NyAzODQgMjcyLjk1MyAzODRaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTM1Mi4wMDIgMzA0LjkzOEMzNTIuMDAyIDM0OC41MzEgMzE2LjU0OCAzODQgMjcyLjk1NSAzODRIMjIzLjM2MUMxOTUuMTI3IDM4NCAxNzAuMTU4IDM2NiAxNjEuMjM2IDMzOS4yMTlDMTU3LjA0OCAzMjYuNjI1IDE2My44NDUgMzEzLjAzMSAxNzYuNDI0IDMwOC44NDRDMTg4Ljk1NSAzMDQuNzgxIDIwMi41OCAzMTEuNDY5IDIwNi43NjcgMzI0LjAzMUMyMDkuMTU4IDMzMS4xODggMjE1LjgxNCAzMzYgMjIzLjM2MSAzMzZIMjcyLjk1NUMyOTAuMDggMzM2IDMwNC4wMDIgMzIyLjA2MiAzMDQuMDAyIDMwNC45MzhDMzA0LjAwMiAyODkuMTg4IDI5Mi4yMiAyNzUuOTM4IDI3Ni41OTUgMjc0LjEyNUwxODkuMjA1IDI2My44NDRDMTgyLjU4IDI2My4wNjIgMTc2LjU5NSAyNTkuNTYyIDE3Mi42NDIgMjU0LjE4OEMxNjguNzA1IDI0OC44MTIgMTY3LjE3MyAyNDIuMDYyIDE2OC40MjMgMjM1LjUzMUwxODUuMTU4IDE0Ny41MzFDMTg3LjMxNCAxMzYuMTg4IDE5Ny4yMDUgMTI4IDIwOC43MzYgMTI4SDMxMi4wMDJDMzI1LjI1MiAxMjggMzM2LjAwMiAxMzguNzUgMzM2LjAwMiAxNTJTMzI1LjI1MiAxNzYgMzEyLjAwMiAxNzZIMjI4LjU5NUwyMjAuMzkyIDIxOS4xODhMMjgyLjE4OSAyMjYuNDM4QzMyMS45ODYgMjMxLjEyNSAzNTIuMDAyIDI2NC44NDQgMzUyLjAwMiAzMDQuOTM4WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Circle_5(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path opacity={.4} d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM272.953 384H223.359C195.125 384 170.156 366 161.234 339.219C157.047 326.625 163.844 313.031 176.422 308.844C188.953 304.781 202.578 311.469 206.766 324.031C209.156 331.188 215.812 336 223.359 336H272.953C290.078 336 304 322.062 304 304.938C304 289.188 292.219 275.938 276.594 274.125L189.203 263.844C182.578 263.062 176.594 259.562 172.641 254.188C168.703 248.812 167.172 242.062 168.422 235.531L185.156 147.531C187.312 136.188 197.203 128 208.734 128H312C325.25 128 336 138.75 336 152S325.25 176 312 176H228.594L220.391 219.188L282.187 226.438C321.984 231.125 352 264.844 352 304.938C352 348.531 316.547 384 272.953 384Z" />
            <path d="M352.002 304.938C352.002 348.531 316.548 384 272.955 384H223.361C195.127 384 170.158 366 161.236 339.219C157.048 326.625 163.845 313.031 176.424 308.844C188.955 304.781 202.58 311.469 206.767 324.031C209.158 331.188 215.814 336 223.361 336H272.955C290.08 336 304.002 322.062 304.002 304.938C304.002 289.188 292.22 275.938 276.595 274.125L189.205 263.844C182.58 263.062 176.595 259.562 172.642 254.188C168.705 248.812 167.173 242.062 168.423 235.531L185.158 147.531C187.314 136.188 197.205 128 208.736 128H312.002C325.252 128 336.002 138.75 336.002 152S325.252 176 312.002 176H228.595L220.392 219.188L282.189 226.438C321.986 231.125 352.002 264.844 352.002 304.938Z" />
        </Icon>
    </>
}