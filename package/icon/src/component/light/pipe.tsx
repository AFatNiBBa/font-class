
import { Icon } from "../../index";

/**
 * A component that renders the `pipe` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=light pipe}
 * @preview ![pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MTIiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi42LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuIC0tPjxwYXRoIGQ9Ik0zMiAwYzguOCAwIDE2IDcuMiAxNiAxNmwwIDQ4MGMwIDguOC03LjIgMTYtMTYgMTZzLTE2LTcuMi0xNi0xNkwxNiAxNkMxNiA3LjIgMjMuMiAwIDMyIDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path d="M32 0c8.8 0 16 7.2 16 16l0 480c0 8.8-7.2 16-16 16s-16-7.2-16-16L16 16C16 7.2 23.2 0 32 0z" />
    </Icon>
);

export default Pipe;