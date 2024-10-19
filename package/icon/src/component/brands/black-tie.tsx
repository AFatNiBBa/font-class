
import { Icon } from "../../index";

/**
 * A component that renders the `black-tie` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/black-tie?s=brands black-tie}
 * @preview ![black-tie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDMydjQ0OGg0NDhWMzJIMHptMzE2LjUgMzI1LjJMMjI0IDQ0NS45bC05Mi41LTg4LjcgNjQuNS0xODQtNjQuNS04Ni42aDE4NC45TDI1MiAxNzMuMmw2NC41IDE4NHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BlackTie: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z" />
    </Icon>
);

export default BlackTie;