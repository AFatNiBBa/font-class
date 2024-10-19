
import { Icon } from "../../index";

/**
 * A component that renders the `circle-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=sharp-regular circle-down}
 * @preview ![circle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNMjU2IDQ2NGEyMDggMjA4IDAgMSAxIDAtNDE2IDIwOCAyMDggMCAxIDEgMCA0MTZ6TTI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJBMjU2IDI1NiAwIDEgMCAyNTYgMHpNMzY4IDI4OGwwLTMyLTY0IDAgMC0xMjgtOTYgMCAwIDEyOC02NCAwIDAgMzIgMTEyIDk2IDExMi05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM368 288l0-32-64 0 0-128-96 0 0 128-64 0 0 32 112 96 112-96z" />
    </Icon>
);

export default CircleDown;