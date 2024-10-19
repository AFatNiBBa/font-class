
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `car` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=solid car}
 * @preview ![car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NzAuNzg5IDE5Ni4zNzFMNDM3Ljg4MyA5Ny42NDNDNDI0LjgxMiA1OC40NDEgMzg4LjEyOSAzMiAzNDYuODA1IDMySDE2NS4xOTVDMTIzLjg3MSAzMiA4Ny4xODggNTguNDQxIDc0LjExNyA5Ny42NDNMNDEuMjExIDE5Ni4zNzFDMTcuMTU2IDIwNS41NzYgMCAyMjguNzA5IDAgMjU2VjQ0OEMwIDQ2NS42NzIgMTQuMzI4IDQ4MCAzMiA0ODBINjRDODEuNjcyIDQ4MCA5NiA0NjUuNjcyIDk2IDQ0OFY0MDBINDE2VjQ0OEM0MTYgNDY1LjY3MiA0MzAuMzI4IDQ4MCA0NDggNDgwSDQ4MEM0OTcuNjcyIDQ4MCA1MTIgNDY1LjY3MiA1MTIgNDQ4VjI1NkM1MTIgMjI4LjcwOSA0OTQuODQ0IDIwNS41NzYgNDcwLjc4OSAxOTYuMzcxWk0xMzQuODM2IDExNy44ODFDMTM5LjE5NSAxMDQuNzkzIDE1MS4zOTggOTYgMTY1LjE5NSA5NkgzNDYuODA1QzM2MC42MDIgOTYgMzcyLjgwNSAxMDQuNzkzIDM3Ny4xNjQgMTE3Ljg4MUw0MDEuODcxIDE5MkgxMTAuMTI5TDEzNC44MzYgMTE3Ljg4MVpNOTYgMzIwQzc4LjMyOCAzMjAgNjQgMzA1LjY3MiA2NCAyODhDNjQgMjcwLjMyNiA3OC4zMjggMjU2IDk2IDI1NlMxMjggMjcwLjMyNiAxMjggMjg4QzEyOCAzMDUuNjcyIDExMy42NzIgMzIwIDk2IDMyMFpNMzg0IDI4OEMzODQgMjcwLjMyNiAzOTguMzI4IDI1NiA0MTYgMjU2UzQ0OCAyNzAuMzI2IDQ0OCAyODhDNDQ4IDMwNS42NzIgNDMzLjY3MiAzMjAgNDE2IDMyMFMzODQgMzA1LjY3MiAzODQgMjg4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Car(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M470.789 196.371L437.883 97.643C424.812 58.441 388.129 32 346.805 32H165.195C123.871 32 87.188 58.441 74.117 97.643L41.211 196.371C17.156 205.576 0 228.709 0 256V448C0 465.672 14.328 480 32 480H64C81.672 480 96 465.672 96 448V400H416V448C416 465.672 430.328 480 448 480H480C497.672 480 512 465.672 512 448V256C512 228.709 494.844 205.576 470.789 196.371ZM134.836 117.881C139.195 104.793 151.398 96 165.195 96H346.805C360.602 96 372.805 104.793 377.164 117.881L401.871 192H110.129L134.836 117.881ZM96 320C78.328 320 64 305.672 64 288C64 270.326 78.328 256 96 256S128 270.326 128 288C128 305.672 113.672 320 96 320ZM384 288C384 270.326 398.328 256 416 256S448 270.326 448 288C448 305.672 433.672 320 416 320S384 305.672 384 288Z" />
        </Icon>
    </>
}