
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=sharp-thin pipe}
 * @preview ![pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MTIiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi42LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9Ik00MCAwbDAgOCAwIDQ5NiAwIDgtMTYgMCAwLThMMjQgOGwwLThMNDAgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M40 0l0 8 0 496 0 8-16 0 0-8L24 8l0-8L40 0z" />
    </Icon>
);

export default Pipe;