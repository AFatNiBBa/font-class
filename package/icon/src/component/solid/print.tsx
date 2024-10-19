
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `print` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/print?s=solid print}
 * @preview ![print](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMTkySDY0QzI4LjY1NCAxOTIgMCAyMjAuNjU0IDAgMjU2VjM1MkMwIDM2OS42NzQgMTQuMzI2IDM4NCAzMiAzODRINjRWNDgwQzY0IDQ5Ny42NzQgNzguMzI2IDUxMiA5NiA1MTJINDE2QzQzMy42NzQgNTEyIDQ0OCA0OTcuNjc0IDQ0OCA0ODBWMzg0SDQ4MEM0OTcuNjc0IDM4NCA1MTIgMzY5LjY3NCA1MTIgMzUyVjI1NkM1MTIgMjIwLjY1NCA0ODMuMzQ2IDE5MiA0NDggMTkyWk0zODQgNDQ4SDEyOFYzNTJIMzg0VjQ0OFpNNDMyIDI5NkM0MTguNzUgMjk2IDQwOCAyODUuMjUgNDA4IDI3MkM0MDggMjU4LjczNCA0MTguNzUgMjQ4IDQzMiAyNDhTNDU2IDI1OC43MzQgNDU2IDI3MkM0NTYgMjg1LjI1IDQ0NS4yNSAyOTYgNDMyIDI5NlpNMTI4IDY0SDM1Ny40OUwzODQgOTAuNTFWMTYwSDQ0OFY3Ny4yNUM0NDggNjguNzY2IDQ0NC42MjUgNjAuNjI1IDQzOC42MjUgNTQuNjI1TDM5My4zNzUgOS4zNzVDMzg3LjM3NSAzLjM3NSAzNzkuMjE5IDAgMzcwLjc1IDBIOTZDNzguMzQ0IDAgNjQgMTQuMzI4IDY0IDMyVjE2MEgxMjhWNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Print(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 192H64C28.654 192 0 220.654 0 256V352C0 369.674 14.326 384 32 384H64V480C64 497.674 78.326 512 96 512H416C433.674 512 448 497.674 448 480V384H480C497.674 384 512 369.674 512 352V256C512 220.654 483.346 192 448 192ZM384 448H128V352H384V448ZM432 296C418.75 296 408 285.25 408 272C408 258.734 418.75 248 432 248S456 258.734 456 272C456 285.25 445.25 296 432 296ZM128 64H357.49L384 90.51V160H448V77.25C448 68.766 444.625 60.625 438.625 54.625L393.375 9.375C387.375 3.375 379.219 0 370.75 0H96C78.344 0 64 14.328 64 32V160H128V64Z" />
        </Icon>
    </>
}