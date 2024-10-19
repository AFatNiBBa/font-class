
import { Icon } from "../../index";

/**
 * A component that renders the `circle-bookmark` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-bookmark?s=solid circle-bookmark}
 * @preview ![circle-bookmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTM1MiAzODRMMjU2IDMyMEwxNjAgMzg0VjE2MEMxNjAgMTQyLjMyNiAxNzQuMzI2IDEyOCAxOTIgMTI4SDMyMEMzMzcuNjc0IDEyOCAzNTIgMTQyLjMyNiAzNTIgMTYwVjM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleBookmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM352 384L256 320L160 384V160C160 142.326 174.326 128 192 128H320C337.674 128 352 142.326 352 160V384Z" />
    </Icon>
);

export default CircleBookmark;