
import { Icon, generic } from "../../index";

/**
 * A component that renders the `j` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/j?s=duotone j}
 * @preview ![j](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE2MCA0ODBDNzEuNzgxIDQ4MCAwIDQwOC4yMTkgMCAzMjBWMzA0QzAgMjc3LjUgMjEuNSAyNTYgNDggMjU2Uzk2IDI3Ny41IDk2IDMwNFYzMjBDOTYgMzU1LjI4MSAxMjQuNzE5IDM4NCAxNjAgMzg0UzIyNCAzNTUuMjgxIDIyNCAzMjBWODBDMjI0IDUzLjUgMjQ1LjUgMzIgMjcyIDMyUzMyMCA1My41IDMyMCA4MFYzMjBDMzIwIDQwOC4yMTkgMjQ4LjIxOSA0ODAgMTYwIDQ4MFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
const J: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M160 480C71.781 480 0 408.219 0 320V304C0 277.5 21.5 256 48 256S96 277.5 96 304V320C96 355.281 124.719 384 160 384S224 355.281 224 320V80C224 53.5 245.5 32 272 32S320 53.5 320 80V320C320 408.219 248.219 480 160 480Z" />
    </Icon>
);

export default J;