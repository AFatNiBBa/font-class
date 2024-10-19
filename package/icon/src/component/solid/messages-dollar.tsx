
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `messages-dollar` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/messages-dollar?s=solid messages-dollar}
 * @preview ![messages-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMTI4SDQ0OFYyNTZDNDQ4IDMwOC44NzEgNDA0Ljg3NSAzNTEuOTkyIDM1MiAzNTEuOTkySDI1NlYzODMuOTY5QzI1NiA0MTkuMjE1IDI4NC43NSA0NDcuOTYzIDMyMCA0NDcuOTYzSDQ0NS43NUw1MjguNSA1MTAuMDgyQzUzNC44NzUgNTE0LjgzMiA1NDQgNTEwLjIwNyA1NDQgNTAyLjIwOVY0NDcuOTYzSDU3NkM2MTEuMjUgNDQ3Ljk2MyA2NDAgNDE5LjIxNSA2NDAgMzgzLjk2OVYxOTEuOTk0QzY0MCAxNTYuNzQ4IDYxMS4yNSAxMjggNTc2IDEyOFpNNDE2IDI1Ni4wMDRWNjMuOTk0QzQxNiAyOC43NDggMzg3LjI1IDAgMzUyIDBINjRDMjguNzUgMCAwIDI4Ljc0OCAwIDYzLjk5NFYyNTYuMDA0QzAgMjkxLjI1IDI4Ljc1IDMyMCA2NCAzMjBMOTYgMzIwLjAxOFYzNzQuMjY0Qzk2IDM4Mi4yNjIgMTA1LjEyNSAzODYuODg3IDExMS41IDM4Mi4xMzlMMTk0LjI1IDMyMC4wMThMMzUyIDMxOS44NzVDMzg3LjI1IDMyMCA0MTYgMjkxLjI1IDQxNiAyNTYuMDA0Wk0yNjkuODMgMjAyLjMxMkMyNjYuMjA3IDIyMy4yMTkgMjUwLjM2MyAyMzYuOTUzIDIyOC4wMDIgMjQxLjc0NlYyNTJDMjI4LjAwMiAyNjMuMDMxIDIxOS4wNDkgMjcyIDIwOC4wMDIgMjcyUzE4OC4wMDIgMjYzLjAzMSAxODguMDAyIDI1MlYyNDEuMjNDMTc5LjMyIDIzOS4zMDkgMTcwLjY5NyAyMzYuNTA4IDE2Mi45MzkgMjMzLjcxOUwxNTguNjc0IDIzMi4yMTlDMTQ4LjI1MiAyMjguNTMxIDE0Mi43OTkgMjE3LjA5NCAxNDYuNDcxIDIwNi42ODhDMTUwLjE1OCAxOTYuMjgxIDE2MS41OCAxOTAuODc1IDE3MS45ODYgMTk0LjQ2OUwxNzYuNDU1IDE5Ni4wOTRDMTg0LjI5OSAxOTguOTA2IDE5My4xNzQgMjAyLjA5NCAyMDAuMTExIDIwMy4xMjVDMjEzLjgzIDIwNS4yNSAyMjkuMDQ5IDIwMy4zMTIgMjMwLjQyNCAxOTUuNUMyMzEuMjk5IDE5MC40MDYgMjMxLjc4MyAxODcuNTk0IDIwMi41MDIgMTc5LjIxOUwxOTYuNjg5IDE3Ny41MzFDMTc5LjM2MSAxNzIuNDM4IDEzOC43NjggMTYwLjUzMSAxNDYuMTc0IDExNy42ODhDMTQ5LjgxMSA5Ni43NSAxNjUuNTggODIuNzYyIDE4OC4wMDIgNzcuOTkyVjY4QzE4OC4wMDIgNTYuOTY5IDE5Ni45NTUgNDggMjA4LjAwMiA0OFMyMjguMDAyIDU2Ljk2OSAyMjguMDAyIDY4Vjc4LjYzM0MyMzMuNDU1IDc5LjgyOCAyMzkuMzQ2IDgxLjQyMiAyNDYuNTY0IDgzLjkwNkMyNTcuMDAyIDg3LjUzMSAyNjIuNTE4IDk4LjkzOCAyNTguODkzIDEwOS4zNzVDMjU1LjI2OCAxMTkuNzgxIDI0My44MyAxMjUuMzEyIDIzMy40MzkgMTIxLjcxOUMyMjcuNTggMTE5LjY4NyAyMjEuNDM5IDExNy43MTkgMjE1Ljg0NiAxMTYuODc1QzIwMi4xNzQgMTE0Ljc4MSAxODYuOTU1IDExNi42ODggMTg1LjU4IDEyNC41QzE4NC44MTQgMTI4Ljk2OSAxODQuMjUyIDEzMi4xODggMjA3Ljk1NSAxMzkuMTU2TDIxMy41MDIgMTQwLjc1QzIzNS43OTkgMTQ3LjEyNSAyNzcuMzE0IDE1OS4wMzEgMjY5LjgzIDIwMi4zMTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function MessagesDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 128H448V256C448 308.871 404.875 351.992 352 351.992H256V383.969C256 419.215 284.75 447.963 320 447.963H445.75L528.5 510.082C534.875 514.832 544 510.207 544 502.209V447.963H576C611.25 447.963 640 419.215 640 383.969V191.994C640 156.748 611.25 128 576 128ZM416 256.004V63.994C416 28.748 387.25 0 352 0H64C28.75 0 0 28.748 0 63.994V256.004C0 291.25 28.75 320 64 320L96 320.018V374.264C96 382.262 105.125 386.887 111.5 382.139L194.25 320.018L352 319.875C387.25 320 416 291.25 416 256.004ZM269.83 202.312C266.207 223.219 250.363 236.953 228.002 241.746V252C228.002 263.031 219.049 272 208.002 272S188.002 263.031 188.002 252V241.23C179.32 239.309 170.697 236.508 162.939 233.719L158.674 232.219C148.252 228.531 142.799 217.094 146.471 206.688C150.158 196.281 161.58 190.875 171.986 194.469L176.455 196.094C184.299 198.906 193.174 202.094 200.111 203.125C213.83 205.25 229.049 203.312 230.424 195.5C231.299 190.406 231.783 187.594 202.502 179.219L196.689 177.531C179.361 172.438 138.768 160.531 146.174 117.688C149.811 96.75 165.58 82.762 188.002 77.992V68C188.002 56.969 196.955 48 208.002 48S228.002 56.969 228.002 68V78.633C233.455 79.828 239.346 81.422 246.564 83.906C257.002 87.531 262.518 98.938 258.893 109.375C255.268 119.781 243.83 125.312 233.439 121.719C227.58 119.687 221.439 117.719 215.846 116.875C202.174 114.781 186.955 116.688 185.58 124.5C184.814 128.969 184.252 132.188 207.955 139.156L213.502 140.75C235.799 147.125 277.314 159.031 269.83 202.312Z" />
        </Icon>
    </>
}