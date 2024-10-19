
import { Icon } from "../../index";

/**
 * A component that renders the `circle` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle?s=thin circle}
 * @preview ![circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMzJDMzc5LjUxNCAzMiA0ODAgMTMyLjQ4NiA0ODAgMjU2UzM3OS41MTQgNDgwIDI1NiA0ODBTMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2TDI1NiAxNloiLz48L3N2Zz4=|width=32|height=32)
 */
const Circle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32C379.514 32 480 132.486 480 256S379.514 480 256 480S32 379.514 32 256S132.486 32 256 32M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16L256 16Z" />
    </Icon>
);

export default Circle;