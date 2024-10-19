
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `bezier-curve` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bezier-curve?s=light bezier-curve}
 * @preview ![bezier-curve](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzYgMjA4QzYxMS4zNDggMjA4IDY0MCAxNzkuMzQ2IDY0MCAxNDRDNjQwIDEwOC42NTIgNjExLjM0OCA4MCA1NzYgODBDNTQ2LjIxMyA4MCA1MjEuNCAxMDAuNDQ1IDUxNC4yNjQgMTI4SDQwMFYxMTJDNDAwIDg1LjQ5IDM3OC41MSA2NCAzNTIgNjRIMjg4QzI2MS40OSA2NCAyNDAgODUuNDkgMjQwIDExMlYxMjhIMTI1LjczNkMxMTguNiAxMDAuNDQ1IDkzLjc4NyA4MCA2NCA4MEMyOC42NTQgODAgMCAxMDguNjUyIDAgMTQ0QzAgMTc5LjM0NiAyOC42NTQgMjA4IDY0IDIwOEM5My43ODcgMjA4IDExOC42IDE4Ny41NTcgMTI1LjczNiAxNjBIMjA1LjIxNUMxNTcuNzQgMTg4LjQ5NCAxMjEuNjAyIDIzMy45MDIgMTA1LjQzNCAyODhIODBDNTMuNDkgMjg4IDMyIDMwOS40OSAzMiAzMzZWNDAwQzMyIDQyNi41MSA1My40OSA0NDggODAgNDQ4SDE0NEMxNzAuNTEgNDQ4IDE5MiA0MjYuNTEgMTkyIDQwMFYzMzZDMTkyIDMwOS40OSAxNzAuNTEgMjg4IDE0NCAyODhIMTM5LjIwMUMxNTYuNjA1IDIzOC45OTYgMTkzLjI3MSAxOTkuMTYyIDI0MC4xNjIgMTc3LjYwN0MyNDEuMDI5IDIwMy4zNTUgMjYyLjA0MSAyMjQgMjg4IDIyNEgzNTJDMzc3Ljk1OSAyMjQgMzk4Ljk3MSAyMDMuMzU1IDM5OS44MzggMTc3LjYwN0M0NDYuNzI5IDE5OS4xNjIgNDgzLjM5NSAyMzguOTk2IDUwMC43OTkgMjg4SDQ5NkM0NjkuNDkgMjg4IDQ0OCAzMDkuNDkgNDQ4IDMzNlY0MDBDNDQ4IDQyNi41MSA0NjkuNDkgNDQ4IDQ5NiA0NDhINTYwQzU4Ni41MSA0NDggNjA4IDQyNi41MSA2MDggNDAwVjMzNkM2MDggMzA5LjQ5IDU4Ni41MSAyODggNTYwIDI4OEg1MzQuNTY2QzUxOC4zOTggMjMzLjkwMiA0ODIuMjYgMTg4LjQ5NCA0MzQuNzg1IDE2MEg1MTQuMjY0QzUyMS40IDE4Ny41NTcgNTQ2LjIxMyAyMDggNTc2IDIwOFpNNTc2IDExMkM1OTMuNjQ1IDExMiA2MDggMTI2LjM1NSA2MDggMTQ0UzU5My42NDUgMTc2IDU3NiAxNzZTNTQ0IDE2MS42NDUgNTQ0IDE0NFM1NTguMzU1IDExMiA1NzYgMTEyWk02NCAxNzZDNDYuMzU1IDE3NiAzMiAxNjEuNjQ1IDMyIDE0NFM0Ni4zNTUgMTEyIDY0IDExMlM5NiAxMjYuMzU1IDk2IDE0NFM4MS42NDUgMTc2IDY0IDE3NlpNMTQ0IDMyMEMxNTIuODIyIDMyMCAxNjAgMzI3LjE3OCAxNjAgMzM2VjQwMEMxNjAgNDA4LjgyMiAxNTIuODIyIDQxNiAxNDQgNDE2SDgwQzcxLjE3OCA0MTYgNjQgNDA4LjgyMiA2NCA0MDBWMzM2QzY0IDMyNy4xNzggNzEuMTc4IDMyMCA4MCAzMjBIMTQ0Wk0zNjggMTc2QzM2OCAxODQuODIyIDM2MC44MjIgMTkyIDM1MiAxOTJIMjg4QzI3OS4xNzggMTkyIDI3MiAxODQuODIyIDI3MiAxNzZWMTEyQzI3MiAxMDMuMTc4IDI3OS4xNzggOTYgMjg4IDk2SDM1MkMzNjAuODIyIDk2IDM2OCAxMDMuMTc4IDM2OCAxMTJWMTc2Wk01NjAgMzIwQzU2OC44MjIgMzIwIDU3NiAzMjcuMTc4IDU3NiAzMzZWNDAwQzU3NiA0MDguODIyIDU2OC44MjIgNDE2IDU2MCA0MTZINDk2QzQ4Ny4xNzggNDE2IDQ4MCA0MDguODIyIDQ4MCA0MDBWMzM2QzQ4MCAzMjcuMTc4IDQ4Ny4xNzggMzIwIDQ5NiAzMjBINTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BezierCurve(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M576 208C611.348 208 640 179.346 640 144C640 108.652 611.348 80 576 80C546.213 80 521.4 100.445 514.264 128H400V112C400 85.49 378.51 64 352 64H288C261.49 64 240 85.49 240 112V128H125.736C118.6 100.445 93.787 80 64 80C28.654 80 0 108.652 0 144C0 179.346 28.654 208 64 208C93.787 208 118.6 187.557 125.736 160H205.215C157.74 188.494 121.602 233.902 105.434 288H80C53.49 288 32 309.49 32 336V400C32 426.51 53.49 448 80 448H144C170.51 448 192 426.51 192 400V336C192 309.49 170.51 288 144 288H139.201C156.605 238.996 193.271 199.162 240.162 177.607C241.029 203.355 262.041 224 288 224H352C377.959 224 398.971 203.355 399.838 177.607C446.729 199.162 483.395 238.996 500.799 288H496C469.49 288 448 309.49 448 336V400C448 426.51 469.49 448 496 448H560C586.51 448 608 426.51 608 400V336C608 309.49 586.51 288 560 288H534.566C518.398 233.902 482.26 188.494 434.785 160H514.264C521.4 187.557 546.213 208 576 208ZM576 112C593.645 112 608 126.355 608 144S593.645 176 576 176S544 161.645 544 144S558.355 112 576 112ZM64 176C46.355 176 32 161.645 32 144S46.355 112 64 112S96 126.355 96 144S81.645 176 64 176ZM144 320C152.822 320 160 327.178 160 336V400C160 408.822 152.822 416 144 416H80C71.178 416 64 408.822 64 400V336C64 327.178 71.178 320 80 320H144ZM368 176C368 184.822 360.822 192 352 192H288C279.178 192 272 184.822 272 176V112C272 103.178 279.178 96 288 96H352C360.822 96 368 103.178 368 112V176ZM560 320C568.822 320 576 327.178 576 336V400C576 408.822 568.822 416 560 416H496C487.178 416 480 408.822 480 400V336C480 327.178 487.178 320 496 320H560Z" />
        </Icon>
    </>
}