
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=regular circle-down}
 * @preview ![circle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ2NGEyMDggMjA4IDAgMSAxIDAtNDE2IDIwOCAyMDggMCAxIDEgMCA0MTZ6TTI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJBMjU2IDI1NiAwIDEgMCAyNTYgMHpNMTI4IDI1NmwwIDMyTDI1NiA0MTYgMzg0IDI4OGwwLTMyLTgwIDAgMC0xMjgtOTYgMCAwIDEyOC04MCAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM128 256l0 32L256 416 384 288l0-32-80 0 0-128-96 0 0 128-80 0z" />
    </Icon>
);

export default CircleDown;