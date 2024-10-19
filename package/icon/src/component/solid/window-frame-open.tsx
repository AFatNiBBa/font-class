
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `window-frame-open` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/window-frame-open?s=solid window-frame-open}
 * @preview ![window-frame-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMzJDNDgwIDE0LjM3NSA0NjUuNjI1IDAgNDQ4IDBINjRDNDYuMzc1IDAgMzIgMTQuMzc1IDMyIDMyVjI4OEg0ODBWMzJaTTI0MCAyMjRIOTZWNjRIMjQwVjIyNFpNNDE2IDIyNEgyNzJWNjRINDE2VjIyNFpNNDk2IDQ0OEg0ODBWMzIwSDQxNlY0NDhIOTZWMzIwSDMyVjQ0OEgxNkM3LjEyNSA0NDggMCA0NTUuMTI1IDAgNDY0VjQ5NkMwIDUwNC44NzUgNy4xMjUgNTEyIDE2IDUxMkg0OTZDNTA0Ljg3NSA1MTIgNTEyIDUwNC44NzUgNTEyIDQ5NlY0NjRDNTEyIDQ1NS4xMjUgNTA0Ljg3NSA0NDggNDk2IDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function WindowFrameOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 32C480 14.375 465.625 0 448 0H64C46.375 0 32 14.375 32 32V288H480V32ZM240 224H96V64H240V224ZM416 224H272V64H416V224ZM496 448H480V320H416V448H96V320H32V448H16C7.125 448 0 455.125 0 464V496C0 504.875 7.125 512 16 512H496C504.875 512 512 504.875 512 496V464C512 455.125 504.875 448 496 448Z" />
        </Icon>
    </>
}