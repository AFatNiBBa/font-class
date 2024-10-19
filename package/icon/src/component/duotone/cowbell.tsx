
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cowbell` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cowbell?s=duotone cowbell}
 * @preview ![cowbell](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NC4yNTggMTIyLjM3NUMzODEuNTA4IDEwNy4xMjUgMzY4LjEzMiA5NiAzNTIuNjMxIDk2SDk1LjM2M0M3OS44NjEgOTYgNjYuNDg1IDEwNy4xMjUgNjMuNzM1IDEyMi4zNzVMMC40ODEgNDc0LjM3NUMtMi44NDkgNDkzLjMzIDExLjQ5IDUxMiAzMi4xMDggNTEySDQxNS44ODVDNDM2LjUzNCA1MTIgNDUwLjg0IDQ5My4zMTIgNDQ3LjUxMyA0NzQuMzc1TDM4NC4yNTggMTIyLjM3NVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzM2IDQ4Vjk2SDI4OFY0OEgxNjBWOTZIMTEyVjQ4QzExMiAyMi4zOTggMTM0LjQgMCAxNjAgMEgyODhDMzEzLjYgMCAzMzYgMjIuMzk4IDMzNiA0OFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
const Cowbell: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M384.258 122.375C381.508 107.125 368.132 96 352.631 96H95.363C79.861 96 66.485 107.125 63.735 122.375L0.481 474.375C-2.849 493.33 11.49 512 32.108 512H415.885C436.534 512 450.84 493.312 447.513 474.375L384.258 122.375Z" />
            <path d="M336 48V96H288V48H160V96H112V48C112 22.398 134.4 0 160 0H288C313.6 0 336 22.398 336 48Z" />
    </Icon>
);

export default Cowbell;