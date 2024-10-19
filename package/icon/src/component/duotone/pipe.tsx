
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe?s=duotone pipe}
 * @preview ![pipe](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA1MTIiPjwhLS0hIEZvbnQgQXdlc29tZSBQcm8gNi42LjAgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20gTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkgQ29weXJpZ2h0IDIwMjQgRm9udGljb25zLCBJbmMuIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImZhLXNlY29uZGFyeSIgZD0iTTMyIDBDNDkuNyAwIDY0IDE0LjMgNjQgMzJsMCA0NDhjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJMMCAzMkMwIDE0LjMgMTQuMyAwIDMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9IiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Pipe: typeof Icon = x => (
    <Icon viewBox="0 0 64 512" {...x}>
        <path class={generic.secondary} d="M32 0C49.7 0 64 14.3 64 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default Pipe;