
import { Icon, generic } from "../../index";

/**
 * A component that renders the `less-than` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/less-than?s=duotone less-than}
 * @preview ![less-than](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTIyLjEwOSAyMjAuMTc5TDMyNi4xMDIgNjguMjQ3QzM0NS44OTggNTguMzQ2IDM2OS44OTggNjYuMzQyIDM3OS43NzIgODYuMTQ2QzM4OS42NDcgMTA1Ljg4NyAzODEuNjMyIDEyOS45MDcgMzYxLjg4MiAxMzkuNzc4TDEyOS40MzUgMjU1Ljk0NUwzNjEuODgyIDM3Mi4xMTJDMzgxLjYzMiAzODEuOTgyIDM4OS42NDcgNDA2LjAwMyAzNzkuNzcyIDQyNS43NDRDMzcyLjA4NSA0NDEuMTExIDM0OS43NjggNDU1LjQ3IDMyNi4xMDIgNDQzLjY0MkwyMi4xMDkgMjkxLjcxQzguNTYyIDI4NC45MzIgMCAyNzEuMDk0IDAgMjU1Ljk0NVM4LjU2MiAyMjYuOTU4IDIyLjEwOSAyMjAuMTc5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const LessThan: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M22.109 220.179L326.102 68.247C345.898 58.346 369.898 66.342 379.772 86.146C389.647 105.887 381.632 129.907 361.882 139.778L129.435 255.945L361.882 372.112C381.632 381.982 389.647 406.003 379.772 425.744C372.085 441.111 349.768 455.47 326.102 443.642L22.109 291.71C8.562 284.932 0 271.094 0 255.945S8.562 226.958 22.109 220.179Z" />
    </Icon>
);

export default LessThan;