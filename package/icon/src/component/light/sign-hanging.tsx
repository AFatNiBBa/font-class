
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=light sign-hanging}
 * @preview ![sign-hanging](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTYgNjRIOTZWMTZDOTYgNy4xNTYgODguODQ0IDAgODAgMFM2NCA3LjE1NiA2NCAxNlY2NEgxNkM3LjE1NiA2NCAwIDcxLjE1NiAwIDgwUzcuMTU2IDk2IDE2IDk2SDY0VjQ5NkM2NCA1MDQuODQ0IDcxLjE1NiA1MTIgODAgNTEyUzk2IDUwNC44NDQgOTYgNDk2Vjk2SDE5MlYxNDRDMTY1LjUzMSAxNDQgMTQ0IDE2NS41MzEgMTQ0IDE5MlYzNTJDMTQ0IDM3OC40NjkgMTY1LjUzMSA0MDAgMTkyIDQwMEg0NDhDNDc0LjQ2OSA0MDAgNDk2IDM3OC40NjkgNDk2IDM1MlYxOTJDNDk2IDE2NS41MzEgNDc0LjQ2OSAxNDQgNDQ4IDE0NFY5Nkg0OTZDNTA0Ljg0NCA5NiA1MTIgODguODQ0IDUxMiA4MFM1MDQuODQ0IDY0IDQ5NiA2NFpNNDY0IDE5MlYzNTJDNDY0IDM2MC44MTIgNDU2LjgyOCAzNjggNDQ4IDM2OEgxOTJDMTgzLjE3MiAzNjggMTc2IDM2MC44MTIgMTc2IDM1MlYxOTJDMTc2IDE4My4xODggMTgzLjE3MiAxNzYgMTkyIDE3Nkg0NDhDNDU2LjgyOCAxNzYgNDY0IDE4My4xODggNDY0IDE5MlpNNDE2IDE0NEgyMjRWOTZINDE2VjE0NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SignHanging(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M496 64H96V16C96 7.156 88.844 0 80 0S64 7.156 64 16V64H16C7.156 64 0 71.156 0 80S7.156 96 16 96H64V496C64 504.844 71.156 512 80 512S96 504.844 96 496V96H192V144C165.531 144 144 165.531 144 192V352C144 378.469 165.531 400 192 400H448C474.469 400 496 378.469 496 352V192C496 165.531 474.469 144 448 144V96H496C504.844 96 512 88.844 512 80S504.844 64 496 64ZM464 192V352C464 360.812 456.828 368 448 368H192C183.172 368 176 360.812 176 352V192C176 183.188 183.172 176 192 176H448C456.828 176 464 183.188 464 192ZM416 144H224V96H416V144Z" />
        </Icon>
    </>
}