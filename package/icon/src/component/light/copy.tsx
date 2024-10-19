
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `copy` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/copy?s=light copy}
 * @preview ![copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIgNDE2QzI2My4xNjQgNDE2IDI1NiA0MjMuMTYyIDI1NiA0MzJWNDQ4QzI1NiA0NjUuNjcyIDI0MS42NzQgNDgwIDIyNCA0ODBINjRDNDYuMzI2IDQ4MCAzMiA0NjUuNjcyIDMyIDQ0OFYxOTJDMzIgMTc0LjMyNiA0Ni4zMjYgMTYwIDY0IDE2MEgxNzZDMTg0LjgzNiAxNjAgMTkyIDE1Mi44MzYgMTkyIDE0NEMxOTIgMTM1LjE2MiAxODQuODM2IDEyOCAxNzYgMTI4SDY0QzI4LjY1NCAxMjggMCAxNTYuNjUyIDAgMTkyVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJIMjI0QzI1OS4zNDYgNTEyIDI4OCA0ODMuMzQ2IDI4OCA0NDhWNDMyQzI4OCA0MjMuMTYyIDI4MC44MzYgNDE2IDI3MiA0MTZaTTUwMi42MjcgODYuNjI3TDQyNS4zNzMgOS4zNzNDNDE5LjM3MSAzLjM3MSA0MTEuMjMyIDAgNDAyLjc0NiAwSDI4OEMyNTIuNjU0IDAgMjI0IDI4LjY1MiAyMjQgNjRWMzIwQzIyNCAzNTUuMzQ2IDI1Mi42NTQgMzg0IDI4OCAzODRINDQ4QzQ4My4zNDYgMzg0IDUxMiAzNTUuMzQ2IDUxMiAzMjBWMTA5LjI1NEM1MTIgMTAwLjc2OCA1MDguNjI5IDkyLjYyOSA1MDIuNjI3IDg2LjYyN1pNNDE2IDQ1LjI1NEw0NjYuNzQ2IDk2SDQxNlY0NS4yNTRaTTQ4MCAzMjBDNDgwIDMzNy42NzIgNDY1LjY3NCAzNTIgNDQ4IDM1MkgyODhDMjcwLjMyNiAzNTIgMjU2IDMzNy42NzIgMjU2IDMyMFY2NEMyNTYgNDYuMzI2IDI3MC4zMjYgMzIgMjg4IDMySDM4NFY5NkMzODQgMTEzLjY3MiAzOTguMzI2IDEyOCA0MTYgMTI4SDQ4MFYzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Copy(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M272 416C263.164 416 256 423.162 256 432V448C256 465.672 241.674 480 224 480H64C46.326 480 32 465.672 32 448V192C32 174.326 46.326 160 64 160H176C184.836 160 192 152.836 192 144C192 135.162 184.836 128 176 128H64C28.654 128 0 156.652 0 192V448C0 483.346 28.654 512 64 512H224C259.346 512 288 483.346 288 448V432C288 423.162 280.836 416 272 416ZM502.627 86.627L425.373 9.373C419.371 3.371 411.232 0 402.746 0H288C252.654 0 224 28.652 224 64V320C224 355.346 252.654 384 288 384H448C483.346 384 512 355.346 512 320V109.254C512 100.768 508.629 92.629 502.627 86.627ZM416 45.254L466.746 96H416V45.254ZM480 320C480 337.672 465.674 352 448 352H288C270.326 352 256 337.672 256 320V64C256 46.326 270.326 32 288 32H384V96C384 113.672 398.326 128 416 128H480V320Z" />
        </Icon>
    </>
}