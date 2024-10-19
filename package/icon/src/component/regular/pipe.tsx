
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=regular pipe}
 * @preview ![pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MTIiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi42LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9Ik0zMiAwQzQ1LjMgMCA1NiAxMC43IDU2IDI0bDAgNDY0YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0TDggMjRDOCAxMC43IDE4LjcgMCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M32 0C45.3 0 56 10.7 56 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24L8 24C8 10.7 18.7 0 32 0z" />
    </Icon>
);

export default Pipe;