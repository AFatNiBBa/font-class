
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-dollar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-dollar?s=regular comment-dollar}
 * @preview ![comment-dollar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDMzIDMyQzExNC42NzggMzIgMC4wNjggMTI1LjEyNSAwLjA2OCAyNDBDMC4wNjggMjg3LjYyNSAxOS45NDEgMzMxLjI1IDUyLjkzNSAzNjYuMjVDMzguMDYyIDQwNS43NSA3LjA2NiA0MzkuMTI1IDYuNTY2IDQzOS41Qy0wLjA1NyA0NDYuNSAtMS44MDcgNDU2Ljc1IDEuOTQzIDQ2NS41QzUuODE2IDQ3NC4yNSAxNC40NDEgNDgwIDI0LjA2NCA0ODBDODUuNTU2IDQ4MCAxMzQuMDUxIDQ1NC4yNSAxNjMuMTcyIDQzMy43NUMxOTIuMDQzIDQ0Mi43NSAyMjMuMjg5IDQ0OCAyNTYuMDMzIDQ0OEMzOTcuMzkgNDQ4IDUxMiAzNTQuODc1IDUxMiAyNDBTMzk3LjM5IDMyIDI1Ni4wMzMgMzJaTTI1Ni4wMzMgNDAwQzIyOS4yODcgNDAwIDIwMi45MTYgMzk1Ljg3NSAxNzcuNjcgMzg3Ljg3NUwxNTQuOTIyIDM4MC43NUwxMzUuNDI2IDM5NC41QzEyMS4xNzggNDA0LjYyNSAxMDEuNTU1IDQxNS44NzUgNzcuOTMzIDQyMy41Qzg1LjMwNiA0MTEuMzc1IDkyLjMwNiAzOTcuNzUgOTcuODA1IDM4My4yNUwxMDguNDI4IDM1NS4yNUw4Ny44MDYgMzMzLjM3NUM2OS44MDggMzE0LjEyNSA0OC4wNjIgMjgyLjI1IDQ4LjA2MiAyNDBDNDguMDYyIDE1MS43NSAxNDEuMjk5IDgwIDI1Ni4wMzMgODBDMzcwLjc2OSA4MCA0NjQuMDA2IDE1MS43NSA0NjQuMDA2IDI0MFMzNzAuNzY5IDQwMCAyNTYuMDMzIDQwMFpNMjYxLjUwMiAyMjAuNzVMMjU1Ljk1NSAyMTkuMTU2QzIzMi4yNTIgMjEyLjE4OCAyMzIuODE0IDIwOC45NjkgMjMzLjU4IDIwNC41QzIzNC45NTUgMTk2LjY4OCAyNTAuMTc0IDE5NC43ODEgMjYzLjg0NiAxOTYuODc1QzI2OS40MzkgMTk3LjcxOSAyNzUuNTggMTk5LjY4OCAyODEuNDM5IDIwMS43MTlDMjkxLjgzIDIwNS4zMTMgMzAzLjI2NyAxOTkuNzgxIDMwNi44OTIgMTg5LjM3NUMzMTAuNTE3IDE3OC45MzggMzA1LjAwMiAxNjcuNTMxIDI5NC41NjQgMTYzLjkwNkMyODcuMzQ2IDE2MS40MjIgMjgxLjQ1NSAxNTkuODI4IDI3Ni4wMDIgMTU4LjYzM1YxNDhDMjc2LjAwMiAxMzYuOTY5IDI2Ny4wNDkgMTI4IDI1Ni4wMDIgMTI4UzIzNi4wMDIgMTM2Ljk2OSAyMzYuMDAyIDE0OFYxNTcuOTkyQzIxMy41OCAxNjIuNzYyIDE5Ny44MSAxNzYuNzUgMTk0LjE3NCAxOTcuNjg4QzE4Ni43NjcgMjQwLjUzMSAyMjcuMzYxIDI1Mi40MzggMjQ0LjY4OSAyNTcuNTMxTDI1MC41MDIgMjU5LjIxOUMyNzkuNzgzIDI2Ny41OTQgMjc5LjI5OSAyNzAuNDA2IDI3OC40MjQgMjc1LjVDMjc3LjA0OSAyODMuMzEyIDI2MS44MyAyODUuMjUgMjQ4LjExMSAyODMuMTI1QzI0MS4xNzQgMjgyLjA5NCAyMzIuMjk5IDI3OC45MDYgMjI0LjQ1NSAyNzYuMDk0TDIxOS45ODYgMjc0LjQ2OUMyMDkuNTggMjcwLjg3NSAxOTguMTU4IDI3Ni4yODEgMTk0LjQ3MSAyODYuNjg4QzE5MC43OTkgMjk3LjA5NCAxOTYuMjUyIDMwOC41MzEgMjA2LjY3NCAzMTIuMjE5TDIxMC45MzkgMzEzLjcxOUMyMTguNjk3IDMxNi41MDggMjI3LjMyIDMxOS4zMDkgMjM2LjAwMiAzMjEuMjNWMzMyQzIzNi4wMDIgMzQzLjAzMSAyNDQuOTU1IDM1MiAyNTYuMDAyIDM1MlMyNzYuMDAyIDM0My4wMzEgMjc2LjAwMiAzMzJWMzIxLjc0NkMyOTguMzYzIDMxNi45NTMgMzE0LjIwNyAzMDMuMjE5IDMxNy44MyAyODIuMzEyQzMyNS4zMTQgMjM5LjAzMSAyODMuNzk5IDIyNy4xMjUgMjYxLjUwMiAyMjAuNzVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CommentDollar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.033 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.941 331.25 52.935 366.25C38.062 405.75 7.066 439.125 6.566 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.816 474.25 14.441 480 24.064 480C85.556 480 134.051 454.25 163.172 433.75C192.043 442.75 223.289 448 256.033 448C397.39 448 512 354.875 512 240S397.39 32 256.033 32ZM256.033 400C229.287 400 202.916 395.875 177.67 387.875L154.922 380.75L135.426 394.5C121.178 404.625 101.555 415.875 77.933 423.5C85.306 411.375 92.306 397.75 97.805 383.25L108.428 355.25L87.806 333.375C69.808 314.125 48.062 282.25 48.062 240C48.062 151.75 141.299 80 256.033 80C370.769 80 464.006 151.75 464.006 240S370.769 400 256.033 400ZM261.502 220.75L255.955 219.156C232.252 212.188 232.814 208.969 233.58 204.5C234.955 196.688 250.174 194.781 263.846 196.875C269.439 197.719 275.58 199.688 281.439 201.719C291.83 205.313 303.267 199.781 306.892 189.375C310.517 178.938 305.002 167.531 294.564 163.906C287.346 161.422 281.455 159.828 276.002 158.633V148C276.002 136.969 267.049 128 256.002 128S236.002 136.969 236.002 148V157.992C213.58 162.762 197.81 176.75 194.174 197.688C186.767 240.531 227.361 252.438 244.689 257.531L250.502 259.219C279.783 267.594 279.299 270.406 278.424 275.5C277.049 283.312 261.83 285.25 248.111 283.125C241.174 282.094 232.299 278.906 224.455 276.094L219.986 274.469C209.58 270.875 198.158 276.281 194.471 286.688C190.799 297.094 196.252 308.531 206.674 312.219L210.939 313.719C218.697 316.508 227.32 319.309 236.002 321.23V332C236.002 343.031 244.955 352 256.002 352S276.002 343.031 276.002 332V321.746C298.363 316.953 314.207 303.219 317.83 282.312C325.314 239.031 283.799 227.125 261.502 220.75Z" />
        </Icon>
    </>
}