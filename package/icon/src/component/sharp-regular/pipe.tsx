
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=sharp-regular pipe}
 * @preview ![pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MTIiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi42LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9Ik01NiAwbDAgMjQgMCA0NjQgMCAyNEw4IDUxMmwwLTI0TDggMjQgOCAwIDU2IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M56 0l0 24 0 464 0 24L8 512l0-24L8 24 8 0 56 0z" />
    </Icon>
);

export default Pipe;