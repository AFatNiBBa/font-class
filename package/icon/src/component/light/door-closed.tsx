
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=light door-closed}
 * @preview ![door-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NjAgNDgwSDQ4MFY4MEM0ODAgMzUuODc1IDQ0NC4xMjUgMCA0MDAgMEgxNzZDMTMxLjg3NSAwIDk2IDM1Ljg3NSA5NiA4MFY0ODBIMTZDNy4xNjQgNDgwIDAgNDg3LjE2MiAwIDQ5NkMwIDUwNC44MzYgNy4xNjQgNTEyIDE2IDUxMkg1NjBDNTY4LjgzNiA1MTIgNTc2IDUwNC44MzYgNTc2IDQ5NkM1NzYgNDg3LjE2MiA1NjguODM2IDQ4MCA1NjAgNDgwWk00NDggNDgwSDEyOFY4MEMxMjggNTMuNTMxIDE0OS41MzEgMzIgMTc2IDMySDQwMEM0MjYuNDY5IDMyIDQ0OCA1My41MzEgNDQ4IDgwVjQ4MFpNMzg0IDIzMkMzNzAuNzQ2IDIzMiAzNjAgMjQyLjc0NiAzNjAgMjU2UzM3MC43NDYgMjgwIDM4NCAyODBTNDA4IDI2OS4yNTQgNDA4IDI1NlMzOTcuMjU0IDIzMiAzODQgMjMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 480H480V80C480 35.875 444.125 0 400 0H176C131.875 0 96 35.875 96 80V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H560C568.836 512 576 504.836 576 496C576 487.162 568.836 480 560 480ZM448 480H128V80C128 53.531 149.531 32 176 32H400C426.469 32 448 53.531 448 80V480ZM384 232C370.746 232 360 242.746 360 256S370.746 280 384 280S408 269.254 408 256S397.254 232 384 232Z" />
    </Icon>
);

export default DoorClosed;