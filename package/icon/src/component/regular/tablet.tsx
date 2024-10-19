
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `tablet` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/tablet?s=regular tablet}
 * @preview ![tablet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMEg2NEMyOC42NTQgMCAwIDI4LjY1NCAwIDY0VjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ2IDQ0OCA0NDhWNjRDNDQ4IDI4LjY1NCA0MTkuMzQ2IDAgMzg0IDBaTTQwMCA0NDhDNDAwIDQ1Ni44MjIgMzkyLjgyMiA0NjQgMzg0IDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjIgNDggNDQ4VjY0QzQ4IDU1LjE3OCA1NS4xNzggNDggNjQgNDhIMzg0QzM5Mi44MjIgNDggNDAwIDU1LjE3OCA0MDAgNjRWNDQ4Wk0yNTYgNDAwSDE5MkMxODMuMTY0IDQwMCAxNzYgNDA3LjE2NCAxNzYgNDE2UzE4My4xNjQgNDMyIDE5MiA0MzJIMjU2QzI2NC44MzggNDMyIDI3MiA0MjQuODM2IDI3MiA0MTZTMjY0LjgzOCA0MDAgMjU2IDQwMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Tablet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V64C448 28.654 419.346 0 384 0ZM400 448C400 456.822 392.822 464 384 464H64C55.178 464 48 456.822 48 448V64C48 55.178 55.178 48 64 48H384C392.822 48 400 55.178 400 64V448ZM256 400H192C183.164 400 176 407.164 176 416S183.164 432 192 432H256C264.838 432 272 424.836 272 416S264.838 400 256 400Z" />
        </Icon>
    </>
}