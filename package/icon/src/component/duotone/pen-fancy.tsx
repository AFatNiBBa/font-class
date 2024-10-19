
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-fancy` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pen-fancy?s=duotone pen-fancy}
 * @preview ![pen-fancy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDI4OEwwIDQ5Nkw5Ny42MjUgMzkxLjc1Qzk2Ljg3NSAzODkuMjUgOTYgMzg2Ljc1IDk2IDM4NEM5NiAzNjYuMzc1IDExMC4zNzUgMzUyIDEyOCAzNTJTMTYwIDM2Ni4zNzUgMTYwIDM4NFMxNDUuNjI1IDQxNiAxMjggNDE2QzEyNS4yNSA0MTYgMTIyLjc1IDQxNS4xMjUgMTIwLjI1IDQxNC4zNzVMMTYgNTEyTDIyNCA0NDhMMjYyLjEyNSAzNDguNzVMMTYzLjI1IDI0OS44NzVMNjQgMjg4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zNjkgMjguMzc1TDE2MyAyNDkuODc1TDI2MS44NzUgMzQ4Ljc1TDQ4My4yNSAxNDIuNUM1NjguMTI1IDY3LjUgNDQzLjUgLTU2IDM2OSAyOC4zNzVaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const PenFancy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 288L0 496L97.625 391.75C96.875 389.25 96 386.75 96 384C96 366.375 110.375 352 128 352S160 366.375 160 384S145.625 416 128 416C125.25 416 122.75 415.125 120.25 414.375L16 512L224 448L262.125 348.75L163.25 249.875L64 288Z" />
            <path d="M369 28.375L163 249.875L261.875 348.75L483.25 142.5C568.125 67.5 443.5 -56 369 28.375Z" />
    </Icon>
);

export default PenFancy;