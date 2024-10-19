
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `user-shakespeare` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-shakespeare?s=light user-shakespeare}
 * @preview ![user-shakespeare](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDEuODM4IDMyOS43NzVDMzI4LjIyNyAzMDUuMDE2IDMwMi4yMDUgMjg4IDI3MiAyODhIMTc2QzE0NS43OTUgMjg4IDExOS43NzMgMzA1LjAxNiAxMDYuMTYyIDMyOS43NzVDNDQuMzUyIDM1MS44ODEgMCA0MTAuNTg0IDAgNDgwQzAgNDk3LjY3MiAxNC4zMjYgNTEyIDMyIDUxMkg0MTZDNDMzLjY3NCA1MTIgNDQ4IDQ5Ny42NzIgNDQ4IDQ4MEM0NDggNDEwLjU4NCA0MDMuNjQ4IDM1MS44ODEgMzQxLjgzOCAzMjkuNzc1Wk0yNDAgMzIwSDI3MkMyOTguNDY5IDMyMCAzMjAgMzQxLjUzMSAzMjAgMzY4VjM3My40MDZDMzAxLjM0IDM2NC45NjUgMjczLjA5OCAzNTUuNjMzIDI0MCAzNTMuMDg4VjMyMFpNMTI4IDM2OEMxMjggMzQxLjUzMSAxNDkuNTMxIDMyMCAxNzYgMzIwSDIwOFYzNTMuMDg4QzE3NC45MDIgMzU1LjYzMyAxNDYuNjYgMzY0Ljk2NSAxMjggMzczLjQwNlYzNjhaTTI0MCA0ODBDMjQwIDQ3MS4xNjIgMjMyLjgzNiA0NjQgMjI0IDQ2NFMyMDggNDcxLjE2MiAyMDggNDgwSDMyQzMyIDQzMi43NiA1Ny44MDkgMzkxLjU5OCA5NiAzNjkuNDYxVjQwMEM5NiA0MDUuODkxIDk5LjI1IDQxMS4yOTcgMTA0LjQzOCA0MTQuMDc4QzEwOS42MjUgNDE2Ljg3NSAxMTUuOTY5IDQxNi41OTQgMTIwLjg0NCA0MTMuMzI4QzEyMS4yODEgNDEzLjA0NyAxNjUuOTM4IDM4NCAyMjQgMzg0UzMyNi43MTkgNDEzLjA0NyAzMjcuMTU2IDQxMy4zMjhDMzI5LjgxMiA0MTUuMDk0IDMzMi45MDYgNDE1Ljk4NCAzMzYgNDE1Ljk4NEMzMzguNTk0IDQxNS45ODQgMzQxLjE4OCA0MTUuMzU5IDM0My41NjIgNDE0LjA3OEMzNDguNzUgNDExLjI5NyAzNTIgNDA1Ljg5MSAzNTIgNDAwVjM2OS40NjFDMzkwLjE5MSAzOTEuNTk4IDQxNiA0MzIuNzYgNDE2IDQ4MEgyNDBaTTIyNCA0MDBDMjE1LjE2NCA0MDAgMjA4IDQwNy4xNjIgMjA4IDQxNkMyMDggNDI0LjgzNiAyMTUuMTY0IDQzMiAyMjQgNDMyUzI0MCA0MjQuODM2IDI0MCA0MTZDMjQwIDQwNy4xNjIgMjMyLjgzNiA0MDAgMjI0IDQwMFpNMTkyIDE0NEMyMDAuODM2IDE0NCAyMDggMTM2LjgzNiAyMDggMTI4QzIwOCAxMTkuMTYyIDIwMC44MzYgMTEyIDE5MiAxMTJTMTc2IDExOS4xNjIgMTc2IDEyOEMxNzYgMTM2LjgzNiAxODMuMTY0IDE0NCAxOTIgMTQ0Wk0yNTYgMTQ0QzI2NC44MzYgMTQ0IDI3MiAxMzYuODM2IDI3MiAxMjhDMjcyIDExOS4xNjIgMjY0LjgzNiAxMTIgMjU2IDExMlMyNDAgMTE5LjE2MiAyNDAgMTI4QzI0MCAxMzYuODM2IDI0Ny4xNjQgMTQ0IDI1NiAxNDRaTTE4OCAyMDRDMjAyLjM0NCAyMDQgMjE1Ljc4MSAxOTYuNjg0IDIyNCAxOTEuMDg4QzIzMi4yMTkgMTk2LjY4NCAyNDUuNjU2IDIwNCAyNjAgMjA0QzI2Ni42MjUgMjA0IDI3MiAxOTguNjIzIDI3MiAxOTEuOTk0QzI3MiAxODUuMzY3IDI2Ni42MjUgMTc5Ljk5IDI2MCAxNzkuOTlDMjQ5LjA5NCAxNzkuOTkgMjM2LjA2MiAxNzAuNjExIDIzMS45MzggMTY3QzIyNy40MzggMTYzIDIyMC41NjIgMTYzIDIxNi4wNjIgMTY3QzIxMS45MzggMTcwLjYxMSAxOTguOTA2IDE3OS45OSAxODggMTc5Ljk5QzE4MS4zNzUgMTc5Ljk5IDE3NiAxODUuMzY3IDE3NiAxOTEuOTk0QzE3NiAxOTguNjIzIDE4MS4zNzUgMjA0IDE4OCAyMDRaTTEwOS4yNTQgMjU1LjUyN0gxNjYuMjczQzE4My4xOCAyNjUuNzY4IDIwMi43OTMgMjcyIDIyNCAyNzJTMjY0LjgyIDI2NS43NjggMjgxLjcyNyAyNTUuNTI3SDMzOC43NDZDMzYzLjczOCAyNTUuNTI3IDM4NCAyMzUuMjcgMzg0IDIxMC4yNzNDMzg0IDE5OC4yNyAzNzkuMjMyIDE4Ni43NjIgMzcwLjc0NiAxNzguMjczQzM1OC43NDIgMTY2LjI3IDM1MiAxNDkuOTkyIDM1MiAxMzMuMDJWMTI3LjUyN0MzNTIgMTE1LjI3IDM0NC44NzEgMTA0Ljk2MyAzMzQuNzQ4IDk5LjU4OEMzMjguNDk2IDQzLjY1MiAyODEuNjA0IDAgMjI0IDBTMTE5LjUwNCA0My42NTIgMTEzLjI1MiA5OS41ODhDMTAzLjEyOSAxMDQuOTYzIDk2IDExNS4yNyA5NiAxMjcuNTI3VjEzMy4wMkM5NiAxNDkuOTkyIDg5LjI1OCAxNjYuMjcgNzcuMjU0IDE3OC4yNzNDNjguNzY4IDE4Ni43NjIgNjQgMTk4LjI3IDY0IDIxMC4yNzNDNjQgMjM1LjI3IDg0LjI2MiAyNTUuNTI3IDEwOS4yNTQgMjU1LjUyN1pNMzMzLjc4NSAxODEuOTczQzMzNy44MjIgMTg4LjcyOSAzNDIuNDA2IDE5NS4xODkgMzQ4LjExNSAyMDAuODk4QzM1MC42MjEgMjAzLjQwNCAzNTIgMjA2LjczNCAzNTIgMjEwLjI3M0MzNTIgMjE3LjU4MiAzNDYuMDU1IDIyMy41MjcgMzM4Ljc0NiAyMjMuNTI3SDMxNi4xMjFDMzI0LjYyNSAyMTEuMjE5IDMzMC43NTggMTk3LjE3NiAzMzMuNzg1IDE4MS45NzNaTTE0NCAxMTJDMTQ0IDY3Ljg4NyAxNzkuODg5IDMyIDIyNCAzMlMzMDQgNjcuODg3IDMwNCAxMTJWMTYwQzMwNCAyMDAuMDAyIDI3NC4zOTYgMjMyLjkzOSAyMzYgMjM4Ljc4NVYyMjRDMjM2IDIxNy4zNzUgMjMwLjYyNSAyMTIgMjI0IDIxMlMyMTIgMjE3LjM3NSAyMTIgMjI0VjIzOC43ODVDMTczLjYwNCAyMzIuOTM5IDE0NCAyMDAuMDAyIDE0NCAxNjBWMTEyWk05OS44ODEgMjAwLjkwMkMxMDUuNTkyIDE5NS4xOTEgMTEwLjE3OCAxODguNzI5IDExNC4yMTUgMTgxLjk3MUMxMTcuMjQgMTk3LjE3NiAxMjMuMzc1IDIxMS4yMTkgMTMxLjg3OSAyMjMuNTI3SDEwOS4yNTRDMTAxLjk0NSAyMjMuNTI3IDk2IDIxNy41ODIgOTYgMjEwLjI3M0M5NiAyMDYuNzM0IDk3LjM3OSAyMDMuNDA0IDk5Ljg4MSAyMDAuOTAyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function UserShakespeare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M341.838 329.775C328.227 305.016 302.205 288 272 288H176C145.795 288 119.773 305.016 106.162 329.775C44.352 351.881 0 410.584 0 480C0 497.672 14.326 512 32 512H416C433.674 512 448 497.672 448 480C448 410.584 403.648 351.881 341.838 329.775ZM240 320H272C298.469 320 320 341.531 320 368V373.406C301.34 364.965 273.098 355.633 240 353.088V320ZM128 368C128 341.531 149.531 320 176 320H208V353.088C174.902 355.633 146.66 364.965 128 373.406V368ZM240 480C240 471.162 232.836 464 224 464S208 471.162 208 480H32C32 432.76 57.809 391.598 96 369.461V400C96 405.891 99.25 411.297 104.438 414.078C109.625 416.875 115.969 416.594 120.844 413.328C121.281 413.047 165.938 384 224 384S326.719 413.047 327.156 413.328C329.812 415.094 332.906 415.984 336 415.984C338.594 415.984 341.188 415.359 343.562 414.078C348.75 411.297 352 405.891 352 400V369.461C390.191 391.598 416 432.76 416 480H240ZM224 400C215.164 400 208 407.162 208 416C208 424.836 215.164 432 224 432S240 424.836 240 416C240 407.162 232.836 400 224 400ZM192 144C200.836 144 208 136.836 208 128C208 119.162 200.836 112 192 112S176 119.162 176 128C176 136.836 183.164 144 192 144ZM256 144C264.836 144 272 136.836 272 128C272 119.162 264.836 112 256 112S240 119.162 240 128C240 136.836 247.164 144 256 144ZM188 204C202.344 204 215.781 196.684 224 191.088C232.219 196.684 245.656 204 260 204C266.625 204 272 198.623 272 191.994C272 185.367 266.625 179.99 260 179.99C249.094 179.99 236.062 170.611 231.938 167C227.438 163 220.562 163 216.062 167C211.938 170.611 198.906 179.99 188 179.99C181.375 179.99 176 185.367 176 191.994C176 198.623 181.375 204 188 204ZM109.254 255.527H166.273C183.18 265.768 202.793 272 224 272S264.82 265.768 281.727 255.527H338.746C363.738 255.527 384 235.27 384 210.273C384 198.27 379.232 186.762 370.746 178.273C358.742 166.27 352 149.992 352 133.02V127.527C352 115.27 344.871 104.963 334.748 99.588C328.496 43.652 281.604 0 224 0S119.504 43.652 113.252 99.588C103.129 104.963 96 115.27 96 127.527V133.02C96 149.992 89.258 166.27 77.254 178.273C68.768 186.762 64 198.27 64 210.273C64 235.27 84.262 255.527 109.254 255.527ZM333.785 181.973C337.822 188.729 342.406 195.189 348.115 200.898C350.621 203.404 352 206.734 352 210.273C352 217.582 346.055 223.527 338.746 223.527H316.121C324.625 211.219 330.758 197.176 333.785 181.973ZM144 112C144 67.887 179.889 32 224 32S304 67.887 304 112V160C304 200.002 274.396 232.939 236 238.785V224C236 217.375 230.625 212 224 212S212 217.375 212 224V238.785C173.604 232.939 144 200.002 144 160V112ZM99.881 200.902C105.592 195.191 110.178 188.729 114.215 181.971C117.24 197.176 123.375 211.219 131.879 223.527H109.254C101.945 223.527 96 217.582 96 210.273C96 206.734 97.379 203.404 99.881 200.902Z" />
        </Icon>
    </>
}