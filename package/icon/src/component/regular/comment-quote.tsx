
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `comment-quote` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/comment-quote?s=regular comment-quote}
 * @preview ![comment-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMDMzIDMyQzExNC42NzggMzIgMC4wNjggMTI1LjEyNSAwLjA2OCAyNDBDMC4wNjggMjg3LjYyNSAxOS45NDEgMzMxLjI1IDUyLjkzNSAzNjYuMjVDMzguMDYyIDQwNS43NSA3LjA2NiA0MzkuMTI1IDYuNTY2IDQzOS41Qy0wLjA1NyA0NDYuNSAtMS44MDcgNDU2Ljc1IDEuOTQzIDQ2NS41QzUuODE2IDQ3NC4yNSAxNC40NDEgNDgwIDI0LjA2NCA0ODBDODUuNTU2IDQ4MCAxMzQuMDUxIDQ1NC4yNSAxNjMuMTcyIDQzMy43NUMxOTIuMDQzIDQ0Mi43NSAyMjMuMjg5IDQ0OCAyNTYuMDMzIDQ0OEMzOTcuMzkgNDQ4IDUxMiAzNTQuODc1IDUxMiAyNDBTMzk3LjM5IDMyIDI1Ni4wMzMgMzJaTTI1Ni4wMzMgNDAwQzIyOS4yODcgNDAwIDIwMi45MTYgMzk1Ljg3NSAxNzcuNjcgMzg3Ljg3NUwxNTQuOTIyIDM4MC43NUwxMzUuNDI2IDM5NC41QzEyMS4xNzggNDA0LjYyNSAxMDEuNTU1IDQxNS44NzUgNzcuOTMzIDQyMy41Qzg1LjMwNiA0MTEuMzc1IDkyLjMwNiAzOTcuNzUgOTcuODA1IDM4My4yNUwxMDguNDI4IDM1NS4yNUw4Ny44MDYgMzMzLjM3NUM2OS44MDggMzE0LjEyNSA0OC4wNjIgMjgyLjI1IDQ4LjA2MiAyNDBDNDguMDYyIDE1MS43NSAxNDEuMjk5IDgwIDI1Ni4wMzMgODBDMzcwLjc2OSA4MCA0NjQuMDA2IDE1MS43NSA0NjQuMDA2IDI0MFMzNzAuNzY5IDQwMCAyNTYuMDMzIDQwMFpNMjE2IDE0NEgxNTJDMTM4Ljc1IDE0NCAxMjggMTU0Ljc1IDEyOCAxNjhWMjE2QzEyOCAyMjkuMjUgMTM4Ljc1IDI0MCAxNTIgMjQwSDE5MlYyNTZDMTkyIDI3My42MjUgMTc3LjYyNSAyODggMTYwIDI4OEgxNTZDMTQ5LjM3NSAyODggMTQ0IDI5My4zNzUgMTQ0IDMwMFYzMjRDMTQ0IDMzMC42MjUgMTQ5LjM3NSAzMzYgMTU2IDMzNkgxNjBDMjA0LjE4NyAzMzYgMjQwIDMwMC4xODggMjQwIDI1NlYxNjhDMjQwIDE1NC43NSAyMjkuMjUgMTQ0IDIxNiAxNDRaTTM2MCAxNDRIMjk2QzI4Mi43NSAxNDQgMjcyIDE1NC43NSAyNzIgMTY4VjIxNkMyNzIgMjI5LjI1IDI4Mi43NSAyNDAgMjk2IDI0MEgzMzZWMjU2QzMzNiAyNzMuNjI1IDMyMS42MjUgMjg4IDMwNCAyODhIMzAwQzI5My4zNzUgMjg4IDI4OCAyOTMuMzc1IDI4OCAzMDBWMzI0QzI4OCAzMzAuNjI1IDI5My4zNzUgMzM2IDMwMCAzMzZIMzA0QzM0OC4xODcgMzM2IDM4NCAzMDAuMTg4IDM4NCAyNTZWMTY4QzM4NCAxNTQuNzUgMzczLjI1IDE0NCAzNjAgMTQ0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CommentQuote(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.033 32C114.678 32 0.068 125.125 0.068 240C0.068 287.625 19.941 331.25 52.935 366.25C38.062 405.75 7.066 439.125 6.566 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.816 474.25 14.441 480 24.064 480C85.556 480 134.051 454.25 163.172 433.75C192.043 442.75 223.289 448 256.033 448C397.39 448 512 354.875 512 240S397.39 32 256.033 32ZM256.033 400C229.287 400 202.916 395.875 177.67 387.875L154.922 380.75L135.426 394.5C121.178 404.625 101.555 415.875 77.933 423.5C85.306 411.375 92.306 397.75 97.805 383.25L108.428 355.25L87.806 333.375C69.808 314.125 48.062 282.25 48.062 240C48.062 151.75 141.299 80 256.033 80C370.769 80 464.006 151.75 464.006 240S370.769 400 256.033 400ZM216 144H152C138.75 144 128 154.75 128 168V216C128 229.25 138.75 240 152 240H192V256C192 273.625 177.625 288 160 288H156C149.375 288 144 293.375 144 300V324C144 330.625 149.375 336 156 336H160C204.187 336 240 300.188 240 256V168C240 154.75 229.25 144 216 144ZM360 144H296C282.75 144 272 154.75 272 168V216C272 229.25 282.75 240 296 240H336V256C336 273.625 321.625 288 304 288H300C293.375 288 288 293.375 288 300V324C288 330.625 293.375 336 300 336H304C348.187 336 384 300.188 384 256V168C384 154.75 373.25 144 360 144Z" />
        </Icon>
    </>
}