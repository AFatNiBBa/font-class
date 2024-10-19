
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrows-left-right` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=light arrows-left-right}
 * @preview ![arrows-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDcuMzEyIDI2Ny4zMTJMMzk1LjMxMiAzNzkuMzEyQzM5Mi4xODggMzgyLjQzOCAzODguMDk0IDM4NCAzODQgMzg0UzM3NS44MTIgMzgyLjQzOCAzNzIuNjg4IDM3OS4zMTJDMzY2LjQzOCAzNzMuMDYyIDM2Ni40MzggMzYyLjkzNyAzNzIuNjg4IDM1Ni42ODhMNDU3LjM3NSAyNzJINTQuNjI1TDEzOS4zMTIgMzU2LjY4OEMxNDUuNTYyIDM2Mi45MzggMTQ1LjU2MiAzNzMuMDYzIDEzOS4zMTIgMzc5LjMxMkMxMzYuMTg4IDM4Mi40MzggMTMyLjA5NCAzODQgMTI4IDM4NFMxMTkuODEyIDM4Mi40MzggMTE2LjY4OCAzNzkuMzEyTDQuNjg4IDI2Ny4zMTJDLTEuNTYzIDI2MS4wNjIgLTEuNTYzIDI1MC45MzcgNC42ODggMjQ0LjY4OEwxMTYuNjg4IDEzMi42ODhDMTIyLjkzOCAxMjYuNDM4IDEzMy4wNjMgMTI2LjQzOCAxMzkuMzEyIDEzMi42ODhTMTQ1LjU2MiAxNDkuMDYzIDEzOS4zMTIgMTU1LjMxMkw1NC42MjUgMjQwSDQ1Ny4zNzVMMzcyLjY4NyAxNTUuMzEyQzM2Ni40MzcgMTQ5LjA2MiAzNjYuNDM3IDEzOC45MzcgMzcyLjY4NyAxMzIuNjg4UzM4OS4wNjIgMTI2LjQzOCAzOTUuMzEyIDEzMi42ODhMNTA3LjMxMiAyNDQuNjg4QzUxMy41NjIgMjUwLjkzOCA1MTMuNTYyIDI2MS4wNjIgNTA3LjMxMiAyNjcuMzEyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowsLeftRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M507.312 267.312L395.312 379.312C392.188 382.438 388.094 384 384 384S375.812 382.438 372.688 379.312C366.438 373.062 366.438 362.937 372.688 356.688L457.375 272H54.625L139.312 356.688C145.562 362.938 145.562 373.063 139.312 379.312C136.188 382.438 132.094 384 128 384S119.812 382.438 116.688 379.312L4.688 267.312C-1.563 261.062 -1.563 250.937 4.688 244.688L116.688 132.688C122.938 126.438 133.063 126.438 139.312 132.688S145.562 149.063 139.312 155.312L54.625 240H457.375L372.687 155.312C366.437 149.062 366.437 138.937 372.687 132.688S389.062 126.438 395.312 132.688L507.312 244.688C513.562 250.938 513.562 261.062 507.312 267.312Z" />
        </Icon>
    </>
}