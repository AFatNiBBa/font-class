
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sausage` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sausage?s=light sausage}
 * @preview ![sausage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgNjRDMzYzLjA2NiA2NCAzMjAgMTA3LjA2NCAzMjAgMTYwQzMyMCAyNDguMjI1IDI0OC4yMjUgMzIwIDE2MCAzMjBDMTA3LjA2NiAzMjAgNjQgMzYzLjA2NCA2NCA0MTZDNjQgNDY4LjkzNCAxMDcuMDY2IDUxMiAxNjAgNTEyQzM1NC4wOTQgNTEyIDUxMiAzNTQuMDk0IDUxMiAxNjBDNTEyIDEwNy4wNjQgNDY4LjkzNiA2NCA0MTYgNjRaTTE2MCA0ODBDMTI0LjYyNSA0ODAgOTYgNDUxLjM3NSA5NiA0MTZTMTI0LjYyNSAzNTIgMTYwIDM1MkMyNjUuODc1IDM1MiAzNTIgMjY1Ljg3NSAzNTIgMTYwQzM1MiAxMjQuNjI1IDM4MC42MjUgOTYgNDE2IDk2UzQ4MCAxMjQuNjI1IDQ4MCAxNjBDNDgwIDMzNi41IDMzNi41IDQ4MCAxNjAgNDgwWk00MDAgMTYwQzM5MS4xMjUgMTYwIDM4NCAxNjcuMTI1IDM4NCAxNzZDMzg0IDI5MC43NSAyOTAuNzUgMzg0IDE3NiAzODRDMTY3LjEyNSAzODQgMTYwIDM5MS4xMjUgMTYwIDQwMFMxNjcuMTI1IDQxNiAxNzYgNDE2QzMwOC4zNzUgNDE2IDQxNiAzMDguMzc1IDQxNiAxNzZDNDE2IDE2Ny4xMjUgNDA4Ljg3NSAxNjAgNDAwIDE2MFpNNDAwIDMySDQ2NEM0NzIuODM2IDMyIDQ4MCAyNC44MzYgNDgwIDE2QzQ4MCA3LjE2MiA0NzIuODM2IDAgNDY0IDBINDAwQzM5MS4xNjQgMCAzODQgNy4xNjIgMzg0IDE2QzM4NCAyNC44MzYgMzkxLjE2NCAzMiA0MDAgMzJaTTE2IDM4NEM3LjE2NCAzODQgMCAzOTEuMTYyIDAgNDAwVjQ2NEMwIDQ3Mi44MzYgNy4xNjQgNDgwIDE2IDQ4MFMzMiA0NzIuODM2IDMyIDQ2NFY0MDBDMzIgMzkxLjE2MiAyNC44MzYgMzg0IDE2IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Sausage(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 64C363.066 64 320 107.064 320 160C320 248.225 248.225 320 160 320C107.066 320 64 363.064 64 416C64 468.934 107.066 512 160 512C354.094 512 512 354.094 512 160C512 107.064 468.936 64 416 64ZM160 480C124.625 480 96 451.375 96 416S124.625 352 160 352C265.875 352 352 265.875 352 160C352 124.625 380.625 96 416 96S480 124.625 480 160C480 336.5 336.5 480 160 480ZM400 160C391.125 160 384 167.125 384 176C384 290.75 290.75 384 176 384C167.125 384 160 391.125 160 400S167.125 416 176 416C308.375 416 416 308.375 416 176C416 167.125 408.875 160 400 160ZM400 32H464C472.836 32 480 24.836 480 16C480 7.162 472.836 0 464 0H400C391.164 0 384 7.162 384 16C384 24.836 391.164 32 400 32ZM16 384C7.164 384 0 391.162 0 400V464C0 472.836 7.164 480 16 480S32 472.836 32 464V400C32 391.162 24.836 384 16 384Z" />
        </Icon>
    </>
}