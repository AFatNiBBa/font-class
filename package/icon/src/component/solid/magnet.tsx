
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `magnet` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=solid magnet}
 * @preview ![magnet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjAgMjU2LjAwMUMzMjAgMzE1LjE5NyAyNjYuMTU0IDM2Mi4wNDUgMjA0Ljg2NyAzNTAuMTQyQzE1OS4yOTEgMzQxLjI5MSAxMjggMjk4LjY0MiAxMjggMjUyLjIxMlYxNjAuMDAxSDBWMjQ4LjJDMCAzNjIuMDMzIDgxLjYxMSA0NjMuNjExIDE5NC41MiA0NzguMTA0QzMzMS4xMTcgNDk1LjYzOSA0NDggMzg5LjIxMyA0NDggMjU2LjAwMVYxNjAuMDAxSDMyMFYyNTYuMDAxWk00MTYgMzJIMzUyQzMzNC4zMjggMzIgMzIwIDQ2LjMyOCAzMjAgNjRWMTI4SDQ0OFY2NEM0NDggNDYuMzI4IDQzMy42NzQgMzIgNDE2IDMyWk0xMjggNjRDMTI4IDQ2LjMyOCAxMTMuNjc0IDMyIDk2IDMySDMyQzE0LjMyOCAzMiAwIDQ2LjMyOCAwIDY0VjEyOEgxMjhWNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Magnet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M320 256.001C320 315.197 266.154 362.045 204.867 350.142C159.291 341.291 128 298.642 128 252.212V160.001H0V248.2C0 362.033 81.611 463.611 194.52 478.104C331.117 495.639 448 389.213 448 256.001V160.001H320V256.001ZM416 32H352C334.328 32 320 46.328 320 64V128H448V64C448 46.328 433.674 32 416 32ZM128 64C128 46.328 113.674 32 96 32H32C14.328 32 0 46.328 0 64V128H128V64Z" />
        </Icon>
    </>
}