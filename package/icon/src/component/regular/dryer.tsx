
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=regular dryer}
 * @preview ![dryer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMEg4MEMzNS44MTggMCAwIDM1LjgxNiAwIDgwVjQ0OEMwIDQ4My4zNDggMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ4IDQ0OCA0NDhWODBDNDQ4IDM1LjgxNiA0MTIuMTg0IDAgMzY4IDBaTTQwMCA0NDhDNDAwIDQ1Ni44MjQgMzkyLjgyMiA0NjQgMzg0IDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjQgNDggNDQ4VjgwQzQ4IDYyLjM1NSA2Mi4zNTUgNDggODAgNDhIMzY4QzM4NS42NDUgNDggNDAwIDYyLjM1NSA0MDAgODBWNDQ4Wk0xMjguMDUzIDEwNEMxMjguMDUzIDkwLjc1IDExNy4yMjcgODAgMTA0LjAzNSA4MEM5MC43MjEgODAgODAuMDE4IDkwLjc1IDgwLjAxOCAxMDRTOTAuNzIxIDEyOCAxMDQuMDM1IDEyOEMxMTcuMjI3IDEyOCAxMjguMDUzIDExNy4yNSAxMjguMDUzIDEwNFpNMTg0LjA1MyAxMjhDMTk3LjI0NCAxMjggMjA3Ljk0NyAxMTcuMjUgMjA3Ljk0NyAxMDRTMTk3LjI0NCA4MCAxODQuMDUzIDgwQzE3MC43MzggODAgMTYwLjAzNSA5MC43NSAxNjAuMDM1IDEwNFMxNzAuNzM4IDEyOCAxODQuMDUzIDEyOFpNMjI0IDE2MEMxNDguODM2IDE2MCA4Ny45ODIgMjIwLjg3NSA4Ny45ODIgMjk2UzE0OC44MzYgNDMyIDIyNCA0MzJTMzYwLjAxOCAzNzEuMTI1IDM2MC4wMTggMjk2UzI5OS4xNjQgMTYwIDIyNCAxNjBaTTIyNCAzODRDMTgzLjg0NCAzODQgMTUwLjI1OCAzNTYuODE2IDEzOS43MyAzMjBIMTc2QzE4OS4yNSAzMjAgMjAwIDMwOS4yNSAyMDAgMjk2UzE4OS4yNSAyNzIgMTc2IDI3MkgxMzkuNzNDMTUwLjI1OCAyMzUuMTg0IDE4My44NDQgMjA4IDIyNCAyMDhDMjcyLjUzMyAyMDggMzEyLjAxOCAyNDcuNDc3IDMxMi4wMTggMjk2UzI3Mi41MzMgMzg0IDIyNCAzODRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Dryer(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368 0H80C35.818 0 0 35.816 0 80V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V80C448 35.816 412.184 0 368 0ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V80C48 62.355 62.355 48 80 48H368C385.645 48 400 62.355 400 80V448ZM128.053 104C128.053 90.75 117.227 80 104.035 80C90.721 80 80.018 90.75 80.018 104S90.721 128 104.035 128C117.227 128 128.053 117.25 128.053 104ZM184.053 128C197.244 128 207.947 117.25 207.947 104S197.244 80 184.053 80C170.738 80 160.035 90.75 160.035 104S170.738 128 184.053 128ZM224 160C148.836 160 87.982 220.875 87.982 296S148.836 432 224 432S360.018 371.125 360.018 296S299.164 160 224 160ZM224 384C183.844 384 150.258 356.816 139.73 320H176C189.25 320 200 309.25 200 296S189.25 272 176 272H139.73C150.258 235.184 183.844 208 224 208C272.533 208 312.018 247.477 312.018 296S272.533 384 224 384Z" />
        </Icon>
    </>
}