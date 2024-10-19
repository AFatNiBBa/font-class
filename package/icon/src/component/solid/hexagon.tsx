
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `hexagon` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hexagon?s=solid hexagon}
 * @preview ![hexagon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDUuODI0IDI3OC42MzNMNDAwLjQzNyA0NTcuODMyQzM5Mi4zMiA0NzEuNDg0IDM3Ny41IDQ4MCAzNjEuMzg3IDQ4MEgxNTAuNjEzQzEzNC41IDQ4MCAxMTkuNjggNDcxLjQ4NCAxMTEuNTYzIDQ1Ny44MzJMNi4xNzYgMjc4LjYzM0MtMi4wNTkgMjY0LjYzMyAtMi4wNTkgMjQ3LjM2NyA2LjE3NiAyMzMuMzY3TDExMS41NjMgNTQuMTY0QzExOS42OCA0MC41MTYgMTM0LjUgMzIgMTUwLjYxMyAzMkgzNjEuMzg3QzM3Ny41IDMyIDM5Mi4zMiA0MC41MTYgNDAwLjQzNyA1NC4xNjRMNTA1LjgyNCAyMzMuMzY3QzUxNC4wNTkgMjQ3LjM2NyA1MTQuMDU5IDI2NC42MzMgNTA1LjgyNCAyNzguNjMzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Hexagon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M505.824 278.633L400.437 457.832C392.32 471.484 377.5 480 361.387 480H150.613C134.5 480 119.68 471.484 111.563 457.832L6.176 278.633C-2.059 264.633 -2.059 247.367 6.176 233.367L111.563 54.164C119.68 40.516 134.5 32 150.613 32H361.387C377.5 32 392.32 40.516 400.437 54.164L505.824 233.367C514.059 247.367 514.059 264.633 505.824 278.633Z" />
        </Icon>
    </>
}