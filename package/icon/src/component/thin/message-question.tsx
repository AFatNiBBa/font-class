
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `message-question` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/message-question?s=thin message-question}
 * @preview ![message-question](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMjk2LjAwMkMyNDcuMTY0IDI5Ni4wMDIgMjQwIDMwMy4xNjQgMjQwIDMxMi4wMDJDMjQwIDMyMC44MzggMjQ3LjE2NCAzMjguMDAyIDI1NiAzMjguMDAyUzI3MiAzMjAuODM4IDI3MiAzMTIuMDAyQzI3MiAzMDMuMTY0IDI2NC44MzYgMjk2LjAwMiAyNTYgMjk2LjAwMlpNMjgzLjY1NiA5NS41NjRIMjIzLjA2MkMxOTIuNjg4IDk1LjU2NCAxNjggMTIwLjI1MiAxNjggMTUwLjYxMUMxNjggMTU1LjAzMyAxNzEuNTk0IDE1OC42MTEgMTc2IDE1OC42MTFTMTg0IDE1NS4wMzMgMTg0IDE1MC42MTFDMTg0IDEyOS4wOCAyMDEuNTMxIDExMS41NjQgMjIzLjA2MiAxMTEuNTY0SDI4My42NTZDMzA4LjA5NCAxMTEuNTY0IDMyOCAxMzEuNDU1IDMyOCAxNTUuOTA4QzMyOCAxNzIuNzk5IDMxOC41OTQgMTg4LjAwMiAzMDMuMzc1IDE5NS42NDNMMjUyLjMxMyAyMjIuMTQzQzI0OS42NTYgMjIzLjUxOCAyNDggMjI2LjI1MiAyNDggMjI5LjIzNlYyNTYuMDAyQzI0OCAyNjAuNDI0IDI1MS41OTQgMjY0LjAwMiAyNTYgMjY0LjAwMlMyNjQgMjYwLjQyNCAyNjQgMjU2LjAwMlYyMzQuMDk2TDMxMC42NTYgMjA5Ljg5M0MzMzEuMjE5IDE5OS41OCAzNDQgMTc4Ljg5MyAzNDQgMTU1LjkwOEMzNDQgMTIyLjYyNyAzMTYuOTM4IDk1LjU2NCAyODMuNjU2IDk1LjU2NFpNNDQ4IDBINjRDMjguNzUgMCAwIDI4Ljc0OCAwIDYzLjk5NFYzNTEuOTcxQzAgMzg3LjIxOSAyOC43NSA0MTUuOTY3IDY0IDQxNS45NjdIMTYwVjQ5OS45NTlDMTYwIDUwNy4wMzEgMTY1LjkyIDUxMiAxNzIuMTc4IDUxMkMxNzQuNTQ3IDUxMiAxNzYuOTYzIDUxMS4yODcgMTc5LjEyNSA1MDkuNzA5TDMwNCA0MTUuOTY3SDQ0OEM0ODMuMjUgNDE1Ljk2NyA1MTIgMzg3LjIxOSA1MTIgMzUxLjk3MVY2My45OTRDNTEyIDI4Ljc0OCA0ODMuMjUgMCA0NDggMFpNNDk2IDM1MS45NzFDNDk2IDM3OC40MzYgNDc0LjQ2NyAzOTkuOTY3IDQ0OCAzOTkuOTY3SDI5OC42NjJMMjk0LjM5NSA0MDMuMTcyTDE3NiA0OTIuMDUzVjM5OS45NjdINjRDMzcuNTMzIDM5OS45NjcgMTYgMzc4LjQzNiAxNiAzNTEuOTcxVjYzLjk5NEMxNiAzNy41MjkgMzcuNTMzIDE1Ljk5OCA2NCAxNS45OThINDQ4QzQ3NC40NjcgMTUuOTk4IDQ5NiAzNy41MjkgNDk2IDYzLjk5NFYzNTEuOTcxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function MessageQuestion(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 296.002C247.164 296.002 240 303.164 240 312.002C240 320.838 247.164 328.002 256 328.002S272 320.838 272 312.002C272 303.164 264.836 296.002 256 296.002ZM283.656 95.564H223.062C192.688 95.564 168 120.252 168 150.611C168 155.033 171.594 158.611 176 158.611S184 155.033 184 150.611C184 129.08 201.531 111.564 223.062 111.564H283.656C308.094 111.564 328 131.455 328 155.908C328 172.799 318.594 188.002 303.375 195.643L252.313 222.143C249.656 223.518 248 226.252 248 229.236V256.002C248 260.424 251.594 264.002 256 264.002S264 260.424 264 256.002V234.096L310.656 209.893C331.219 199.58 344 178.893 344 155.908C344 122.627 316.938 95.564 283.656 95.564ZM448 0H64C28.75 0 0 28.748 0 63.994V351.971C0 387.219 28.75 415.967 64 415.967H160V499.959C160 507.031 165.92 512 172.178 512C174.547 512 176.963 511.287 179.125 509.709L304 415.967H448C483.25 415.967 512 387.219 512 351.971V63.994C512 28.748 483.25 0 448 0ZM496 351.971C496 378.436 474.467 399.967 448 399.967H298.662L294.395 403.172L176 492.053V399.967H64C37.533 399.967 16 378.436 16 351.971V63.994C16 37.529 37.533 15.998 64 15.998H448C474.467 15.998 496 37.529 496 63.994V351.971Z" />
        </Icon>
    </>
}