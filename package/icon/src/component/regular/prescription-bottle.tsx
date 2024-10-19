
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `prescription-bottle` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=regular prescription-bottle}
 * @preview ![prescription-bottle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMEgzMkMxNC4zMjYgMCAwIDE0LjMyNiAwIDMyVjk2QzAgMTEzLjY3NCAxNC4zMjYgMTI4IDMyIDEyOFY0NTZDMzIgNDg2Ljg3NSA1Ny4xMjUgNTEyIDg4IDUxMkgyOTZDMzI2Ljg3NSA1MTIgMzUyIDQ4Ni44NzUgMzUyIDQ1NlYxMjhDMzY5LjY3NCAxMjggMzg0IDExMy42NzQgMzg0IDk2VjMyQzM4NCAxNC4zMjYgMzY5LjY3NCAwIDM1MiAwWk00OCA0OEgzMzZWODBINDhWNDhaTTMwNCA0NTZDMzA0IDQ2MC40MDYgMzAwLjQwNiA0NjQgMjk2IDQ2NEg4OEM4My41OTQgNDY0IDgwIDQ2MC40MDYgODAgNDU2VjQxNkgxMzZDMTQ5LjI1IDQxNiAxNjAgNDA1LjI1IDE2MCAzOTJTMTQ5LjI1IDM2OCAxMzYgMzY4SDgwVjMyMEgxMzZDMTQ5LjI1IDMyMCAxNjAgMzA5LjI1IDE2MCAyOTZTMTQ5LjI1IDI3MiAxMzYgMjcySDgwVjIyNEgxMzZDMTQ5LjI1IDIyNCAxNjAgMjEzLjI1IDE2MCAyMDBTMTQ5LjI1IDE3NiAxMzYgMTc2SDgwVjEyOEgzMDRWNDU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function PrescriptionBottle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M352 0H32C14.326 0 0 14.326 0 32V96C0 113.674 14.326 128 32 128V456C32 486.875 57.125 512 88 512H296C326.875 512 352 486.875 352 456V128C369.674 128 384 113.674 384 96V32C384 14.326 369.674 0 352 0ZM48 48H336V80H48V48ZM304 456C304 460.406 300.406 464 296 464H88C83.594 464 80 460.406 80 456V416H136C149.25 416 160 405.25 160 392S149.25 368 136 368H80V320H136C149.25 320 160 309.25 160 296S149.25 272 136 272H80V224H136C149.25 224 160 213.25 160 200S149.25 176 136 176H80V128H304V456Z" />
        </Icon>
    </>
}