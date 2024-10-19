
import { Icon } from "../../index";

/**
 * A component that renders the `circle` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle?s=regular circle}
 * @preview ![circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNjRDMzYxLjg2OSA2NCA0NDggMTUwLjEzMSA0NDggMjU2UzM2MS44NjkgNDQ4IDI1NiA0NDhTNjQgMzYxLjg2OSA2NCAyNTZTMTUwLjEzMSA2NCAyNTYgNjRNMjU2IDE2QzEyMy40NTEgMTYgMTYgMTIzLjQ1MSAxNiAyNTZTMTIzLjQ1MSA0OTYgMjU2IDQ5NlM0OTYgMzg4LjU0OSA0OTYgMjU2UzM4OC41NDkgMTYgMjU2IDE2TDI1NiAxNloiLz48L3N2Zz4=|width=32|height=32)
 */
const Circle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64C361.869 64 448 150.131 448 256S361.869 448 256 448S64 361.869 64 256S150.131 64 256 64M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16L256 16Z" />
    </Icon>
);

export default Circle;