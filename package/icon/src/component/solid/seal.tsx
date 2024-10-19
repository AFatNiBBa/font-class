
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `seal` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/seal?s=solid seal}
 * @preview ![seal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OTMuMjM1IDI4OS45NDFMNDQ3LjY0NyAzMzUuNTI5VjQwMEM0NDcuNjQ3IDQyNi41MSA0MjYuMTU3IDQ0OCAzOTkuNjQ3IDQ0OEgzMzUuMTc3TDI4OS41ODkgNDkzLjU4OEMyNzAuODQzIDUxMi4zMzIgMjQwLjQ1MiA1MTIuMzMyIDIyMS43MDYgNDkzLjU4OEwxNzYuMTE4IDQ0OEgxMTEuNjQ3Qzg1LjEzOCA0NDggNjMuNjQ3IDQyNi41MSA2My42NDcgNDAwVjMzNS41MjlMMTguMDYgMjg5Ljk0MUMtMC42ODcgMjcxLjE5NSAtMC42ODcgMjQwLjgwMyAxOC4wNiAyMjIuMDU5TDYzLjY0NyAxNzYuNDcxVjExMkM2My42NDcgODUuNDkgODUuMTM4IDY0IDExMS42NDcgNjRIMTc2LjExOEwyMjEuNzA2IDE4LjQxMkMyNDAuNDUyIC0wLjMzNCAyNzAuODQzIC0wLjMzNCAyODkuNTg5IDE4LjQxMkwzMzUuMTc3IDY0SDM5OS42NDdDNDI2LjE1NyA2NCA0NDcuNjQ3IDg1LjQ5IDQ0Ny42NDcgMTEyVjE3Ni40NzFMNDkzLjIzNSAyMjIuMDU5QzUxMS45ODEgMjQwLjgwMyA1MTEuOTgxIDI3MS4xOTUgNDkzLjIzNSAyODkuOTQxWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Seal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M493.235 289.941L447.647 335.529V400C447.647 426.51 426.157 448 399.647 448H335.177L289.589 493.588C270.843 512.332 240.452 512.332 221.706 493.588L176.118 448H111.647C85.138 448 63.647 426.51 63.647 400V335.529L18.06 289.941C-0.687 271.195 -0.687 240.803 18.06 222.059L63.647 176.471V112C63.647 85.49 85.138 64 111.647 64H176.118L221.706 18.412C240.452 -0.334 270.843 -0.334 289.589 18.412L335.177 64H399.647C426.157 64 447.647 85.49 447.647 112V176.471L493.235 222.059C511.981 240.803 511.981 271.195 493.235 289.941Z" />
        </Icon>
    </>
}