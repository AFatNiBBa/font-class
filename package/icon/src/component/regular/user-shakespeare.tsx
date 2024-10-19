
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-shakespeare` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-shakespeare?s=regular user-shakespeare}
 * @preview ![user-shakespeare](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjkuODkxIDMyNi4yNDRDMzE0LjM3OSAzMTIuNTcgMjk0LjI2IDMwNCAyNzIgMzA0SDE3NkMxNTMuNzQgMzA0IDEzMy42MjEgMzEyLjU3IDExOC4xMDkgMzI2LjI0NEM1MC4yMDEgMzQ0Ljc0OCAwIDQwNi4yMjkgMCA0ODBDMCA0OTcuNjcyIDE0LjMyNiA1MTIgMzIgNTEySDQxNkM0MzMuNjc0IDUxMiA0NDggNDk3LjY3MiA0NDggNDgwQzQ0OCA0MDYuMjI5IDM5Ny43OTkgMzQ0Ljc0OCAzMjkuODkxIDMyNi4yNDRaTTE3NiAzNTJIMjcyQzI5MS43MTkgMzUyIDMwOC4xNTYgMzY2LjM0NCAzMTEuNDA2IDM4NS4xMjVDMjg5LjIxOSAzNzYuNDIyIDI1OC43ODEgMzY4IDIyNCAzNjhTMTU4Ljc4MSAzNzYuNDIyIDEzNi41OTQgMzg1LjEyNUMxMzkuODQ0IDM2Ni4zNDQgMTU2LjI4MSAzNTIgMTc2IDM1MlpNMjQwIDQ2NEMyNDAgNDU1LjE2MiAyMzIuODM2IDQ0OCAyMjQgNDQ4UzIwOCA0NTUuMTYyIDIwOCA0NjRINDkuMTM5QzUzLjEyMyA0MzYuMjY4IDY3LjQ5OCA0MTIuMDY4IDg4IDM5NC44NzFWNDI0Qzg4IDQzMi44MjggOTIuODc1IDQ0MC45MDYgMTAwLjYyNSA0NDUuMDk0QzEwOC4zNDQgNDQ5LjIzNCAxMTcuODEyIDQ0OC44NzUgMTI1LjI1IDQ0NC4wMTZDMTI1LjYxNyA0NDMuNzYyIDE2MC42NDYgNDIxLjM2MyAyMDguMTg5IDQxNi45MzZDMjA4LjcwMSA0MjUuMzExIDIxNS40OTYgNDMyIDIyNCA0MzJTMjM5LjI5OSA0MjUuMzExIDIzOS44MTEgNDE2LjkzNkMyODcuMzUyIDQyMS4zNjMgMzIyLjM3NyA0NDMuNzU4IDMyMi42ODggNDQzLjk2OUMzMjYuNzE5IDQ0Ni42NDEgMzMxLjM0NCA0NDggMzM2IDQ0OEMzMzkuODc1IDQ0OCAzNDMuNzgxIDQ0Ny4wNjIgMzQ3LjMxMiA0NDUuMTU2QzM1NS4xMjUgNDQwLjk4NCAzNjAgNDMyLjg0NCAzNjAgNDI0VjM5NC44NzFDMzgwLjUwMiA0MTIuMDY4IDM5NC44NzcgNDM2LjI2OCAzOTguODYxIDQ2NEgyNDBaTTI1NiAxNDRDMjY0LjgzNiAxNDQgMjcyIDEzNi44MzYgMjcyIDEyOEMyNzIgMTE5LjE2MiAyNjQuODM2IDExMiAyNTYgMTEyUzI0MCAxMTkuMTYyIDI0MCAxMjhDMjQwIDEzNi44MzYgMjQ3LjE2NCAxNDQgMjU2IDE0NFpNMTkyIDE0NEMyMDAuODM2IDE0NCAyMDggMTM2LjgzNiAyMDggMTI4QzIwOCAxMTkuMTYyIDIwMC44MzYgMTEyIDE5MiAxMTJTMTc2IDExOS4xNjIgMTc2IDEyOEMxNzYgMTM2LjgzNiAxODMuMTY0IDE0NCAxOTIgMTQ0Wk0xODggMjA0QzIwMi4zNDQgMjA0IDIxNS43ODEgMTk2LjY4NCAyMjQgMTkxLjA4OEMyMzIuMjE5IDE5Ni42ODQgMjQ1LjY1NiAyMDQgMjYwIDIwNEMyNjYuNjI1IDIwNCAyNzIgMTk4LjYyMyAyNzIgMTkxLjk5NEMyNzIgMTg1LjM2NyAyNjYuNjI1IDE3OS45OSAyNjAgMTc5Ljk5QzI0OS4wOTQgMTc5Ljk5IDIzNi4wNjIgMTcwLjYxMSAyMzEuOTM4IDE2N0MyMjcuNDM4IDE2MyAyMjAuNTYyIDE2MyAyMTYuMDYyIDE2N0MyMTEuOTM4IDE3MC42MTEgMTk4LjkwNiAxNzkuOTkgMTg4IDE3OS45OUMxODEuMzc1IDE3OS45OSAxNzYgMTg1LjM2NyAxNzYgMTkxLjk5NEMxNzYgMTk4LjYyMyAxODEuMzc1IDIwNCAxODggMjA0Wk0xMDkuMjU0IDI3MkgxNjMuMjNDMTgxLjM4NSAyODEuODc3IDIwMS44NzkgMjg4IDIyNCAyODhTMjY2LjYxNSAyODEuODc3IDI4NC43NyAyNzJIMzM4Ljc0NkMzNjMuNzM4IDI3MiAzODQgMjUxLjc0MiAzODQgMjI2Ljc0NkMzODQgMjE0Ljc0MiAzNzkuMjMyIDIwMy4yMzQgMzcwLjc0NiAxOTQuNzQ2QzM1OC43NDIgMTgyLjc0MiAzNTIgMTY2LjQ2NSAzNTIgMTQ5LjQ5MlYxMjhDMzUyIDU3LjMwNyAyOTQuNjkzIDAgMjI0IDBTOTYgNTcuMzA3IDk2IDEyOFYxNDkuNDkyQzk2IDE2Ni40NjUgODkuMjU4IDE4Mi43NDIgNzcuMjU0IDE5NC43NDZDNjguNzY4IDIwMy4yMzQgNjQgMjE0Ljc0MiA2NCAyMjYuNzQ2QzY0IDI1MS43NDIgODQuMjYyIDI3MiAxMDkuMjU0IDI3MlpNMTQ0IDEyOEMxNDQgODMuODg3IDE3OS44ODkgNDggMjI0IDQ4UzMwNCA4My44ODcgMzA0IDEyOFYxNjBDMzA0IDIwMC4wMDIgMjc0LjM5NiAyMzIuOTM5IDIzNiAyMzguNzg1VjIyNEMyMzYgMjE3LjM3NSAyMzAuNjI1IDIxMiAyMjQgMjEyUzIxMiAyMTcuMzc1IDIxMiAyMjRWMjM4Ljc4NUMxNzMuNjA0IDIzMi45MzkgMTQ0IDIwMC4wMDIgMTQ0IDE2MFYxMjhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function UserShakespeare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M329.891 326.244C314.379 312.57 294.26 304 272 304H176C153.74 304 133.621 312.57 118.109 326.244C50.201 344.748 0 406.229 0 480C0 497.672 14.326 512 32 512H416C433.674 512 448 497.672 448 480C448 406.229 397.799 344.748 329.891 326.244ZM176 352H272C291.719 352 308.156 366.344 311.406 385.125C289.219 376.422 258.781 368 224 368S158.781 376.422 136.594 385.125C139.844 366.344 156.281 352 176 352ZM240 464C240 455.162 232.836 448 224 448S208 455.162 208 464H49.139C53.123 436.268 67.498 412.068 88 394.871V424C88 432.828 92.875 440.906 100.625 445.094C108.344 449.234 117.812 448.875 125.25 444.016C125.617 443.762 160.646 421.363 208.189 416.936C208.701 425.311 215.496 432 224 432S239.299 425.311 239.811 416.936C287.352 421.363 322.377 443.758 322.688 443.969C326.719 446.641 331.344 448 336 448C339.875 448 343.781 447.062 347.312 445.156C355.125 440.984 360 432.844 360 424V394.871C380.502 412.068 394.877 436.268 398.861 464H240ZM256 144C264.836 144 272 136.836 272 128C272 119.162 264.836 112 256 112S240 119.162 240 128C240 136.836 247.164 144 256 144ZM192 144C200.836 144 208 136.836 208 128C208 119.162 200.836 112 192 112S176 119.162 176 128C176 136.836 183.164 144 192 144ZM188 204C202.344 204 215.781 196.684 224 191.088C232.219 196.684 245.656 204 260 204C266.625 204 272 198.623 272 191.994C272 185.367 266.625 179.99 260 179.99C249.094 179.99 236.062 170.611 231.938 167C227.438 163 220.562 163 216.062 167C211.938 170.611 198.906 179.99 188 179.99C181.375 179.99 176 185.367 176 191.994C176 198.623 181.375 204 188 204ZM109.254 272H163.23C181.385 281.877 201.879 288 224 288S266.615 281.877 284.77 272H338.746C363.738 272 384 251.742 384 226.746C384 214.742 379.232 203.234 370.746 194.746C358.742 182.742 352 166.465 352 149.492V128C352 57.307 294.693 0 224 0S96 57.307 96 128V149.492C96 166.465 89.258 182.742 77.254 194.746C68.768 203.234 64 214.742 64 226.746C64 251.742 84.262 272 109.254 272ZM144 128C144 83.887 179.889 48 224 48S304 83.887 304 128V160C304 200.002 274.396 232.939 236 238.785V224C236 217.375 230.625 212 224 212S212 217.375 212 224V238.785C173.604 232.939 144 200.002 144 160V128Z" />
        </Icon>
    </>
}