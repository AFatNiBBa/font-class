
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=thin pipe}
 * @preview ![pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MTIiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi42LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9Ik0zMiAwYzQuNCAwIDggMy42IDggOGwwIDQ5NmMwIDQuNC0zLjYgOC04IDhzLTgtMy42LTgtOEwyNCA4YzAtNC40IDMuNi04IDgtOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M32 0c4.4 0 8 3.6 8 8l0 496c0 4.4-3.6 8-8 8s-8-3.6-8-8L24 8c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default Pipe;