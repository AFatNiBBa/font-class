
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `arrow-down-to-line` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=light arrow-down-to-line}
 * @preview ![arrow-down-to-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODAuNjg4IDM5NS4zMTJDMTgzLjgxMiAzOTguNDM4IDE4Ny45MDYgNDAwIDE5MiA0MDBTMjAwLjE4OCAzOTguNDM4IDIwMy4zMTIgMzk1LjMxMkwzNDcuMzEyIDI1MS4zMTJDMzUzLjU2MiAyNDUuMDYyIDM1My41NjIgMjM0LjkzNyAzNDcuMzEyIDIyOC42ODhTMzMwLjkzNyAyMjIuNDM4IDMyNC42ODggMjI4LjY4OEwyMDggMzQ1LjM3NVY0OEMyMDggMzkuMTU2IDIwMC44NDQgMzIgMTkyIDMyUzE3NiAzOS4xNTYgMTc2IDQ4VjM0NS4zNzVMNTkuMzEyIDIyOC42ODhDNTMuMDYyIDIyMi40MzggNDIuOTM3IDIyMi40MzggMzYuNjg4IDIyOC42ODhTMzAuNDM4IDI0NS4wNjMgMzYuNjg4IDI1MS4zMTJMMTgwLjY4OCAzOTUuMzEyWk0zNjggNDQ4SDE2QzcuMTU2IDQ0OCAwIDQ1NS4xNTYgMCA0NjRTNy4xNTYgNDgwIDE2IDQ4MEgzNjhDMzc2Ljg0NCA0ODAgMzg0IDQ3Mi44NDQgMzg0IDQ2NFMzNzYuODQ0IDQ0OCAzNjggNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowDownToLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M180.688 395.312C183.812 398.438 187.906 400 192 400S200.188 398.438 203.312 395.312L347.312 251.312C353.562 245.062 353.562 234.937 347.312 228.688S330.937 222.438 324.688 228.688L208 345.375V48C208 39.156 200.844 32 192 32S176 39.156 176 48V345.375L59.312 228.688C53.062 222.438 42.937 222.438 36.688 228.688S30.438 245.063 36.688 251.312L180.688 395.312ZM368 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H368C376.844 480 384 472.844 384 464S376.844 448 368 448Z" />
        </Icon>
    </>
}