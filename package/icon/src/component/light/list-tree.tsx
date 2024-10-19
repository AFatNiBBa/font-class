
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `list-tree` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/list-tree?s=light list-tree}
 * @preview ![list-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNzYgMTEySDQ5NkM1MDQuNzk3IDExMiA1MTIgMTA0Ljc5NyA1MTIgOTZTNTA0Ljc5NyA4MCA0OTYgODBIMTc2QzE2Ny4yMDMgODAgMTYwIDg3LjIwMyAxNjAgOTZTMTY3LjIwMyAxMTIgMTc2IDExMlpNNDk2IDI0MEgzMDRDMjk1LjIwMyAyNDAgMjg4IDI0Ny4yMDMgMjg4IDI1NlMyOTUuMjAzIDI3MiAzMDQgMjcySDQ5NkM1MDQuNzk3IDI3MiA1MTIgMjY0Ljc5NyA1MTIgMjU2UzUwNC43OTcgMjQwIDQ5NiAyNDBaTTE5MiAyMDhIMTYwQzE0Mi4zNDQgMjA4IDEyOCAyMjIuMzQ0IDEyOCAyNDBINjRWMTQ0QzgxLjY1NiAxNDQgOTYgMTI5LjY1NiA5NiAxMTJWODBDOTYgNjIuMzQ0IDgxLjY1NiA0OCA2NCA0OEgzMkMxNC4zNDQgNDggMCA2Mi4zNDQgMCA4MFYxMTJDMCAxMjkuNjU2IDE0LjM0NCAxNDQgMzIgMTQ0VjM4NEMzMiA0MTAuNDY5IDUzLjUzMSA0MzIgODAgNDMySDEyOEMxMjggNDQ5LjY1NiAxNDIuMzQ0IDQ2NCAxNjAgNDY0SDE5MkMyMDkuNjU2IDQ2NCAyMjQgNDQ5LjY1NiAyMjQgNDMyVjQwMEMyMjQgMzgyLjM0NCAyMDkuNjU2IDM2OCAxOTIgMzY4SDE2MEMxNDIuMzQ0IDM2OCAxMjggMzgyLjM0NCAxMjggNDAwSDgwQzcxLjE3MiA0MDAgNjQgMzkyLjgxMiA2NCAzODRWMjcySDEyOEMxMjggMjg5LjY1NiAxNDIuMzQ0IDMwNCAxNjAgMzA0SDE5MkMyMDkuNjU2IDMwNCAyMjQgMjg5LjY1NiAyMjQgMjcyVjI0MEMyMjQgMjIyLjM0NCAyMDkuNjU2IDIwOCAxOTIgMjA4Wk0xNjAgNDAwSDE5MlY0MzJIMTYwVjQwMFpNMzIgMTEyVjgwSDY0VjExMkgzMlpNMTkyIDI3MkgxNjBWMjQwSDE5MlYyNzJaTTQ5NiA0MDBIMzA0QzI5NS4yMDMgNDAwIDI4OCA0MDcuMjAzIDI4OCA0MTZTMjk1LjIwMyA0MzIgMzA0IDQzMkg0OTZDNTA0Ljc5NyA0MzIgNTEyIDQyNC43OTcgNTEyIDQxNlM1MDQuNzk3IDQwMCA0OTYgNDAwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ListTree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M176 112H496C504.797 112 512 104.797 512 96S504.797 80 496 80H176C167.203 80 160 87.203 160 96S167.203 112 176 112ZM496 240H304C295.203 240 288 247.203 288 256S295.203 272 304 272H496C504.797 272 512 264.797 512 256S504.797 240 496 240ZM192 208H160C142.344 208 128 222.344 128 240H64V144C81.656 144 96 129.656 96 112V80C96 62.344 81.656 48 64 48H32C14.344 48 0 62.344 0 80V112C0 129.656 14.344 144 32 144V384C32 410.469 53.531 432 80 432H128C128 449.656 142.344 464 160 464H192C209.656 464 224 449.656 224 432V400C224 382.344 209.656 368 192 368H160C142.344 368 128 382.344 128 400H80C71.172 400 64 392.812 64 384V272H128C128 289.656 142.344 304 160 304H192C209.656 304 224 289.656 224 272V240C224 222.344 209.656 208 192 208ZM160 400H192V432H160V400ZM32 112V80H64V112H32ZM192 272H160V240H192V272ZM496 400H304C295.203 400 288 407.203 288 416S295.203 432 304 432H496C504.797 432 512 424.797 512 416S504.797 400 496 400Z" />
        </Icon>
    </>
}