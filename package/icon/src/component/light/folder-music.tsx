
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-music` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-music?s=light folder-music}
 * @preview ![folder-music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggOTZIMjcyTDIyNi43NDYgNTAuNzQ2QzIxNC43NDIgMzguNzQyIDE5OC40NjUgMzIgMTgxLjQ5IDMySDY0QzI4LjY1NCAzMiAwIDYwLjY1NCAwIDk2VjQxNkMwIDQ1MS4zNDYgMjguNjU0IDQ4MCA2NCA0ODBINDQ4QzQ4My4zNDYgNDgwIDUxMiA0NTEuMzQ2IDUxMiA0MTZWMTYwQzUxMiAxMjQuNjU0IDQ4My4zNDYgOTYgNDQ4IDk2Wk00ODAgNDE2QzQ4MCA0MzMuNjQ1IDQ2NS42NDUgNDQ4IDQ0OCA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlY5NkMzMiA3OC4zNTUgNDYuMzU1IDY0IDY0IDY0SDE4MS40OUMxOTAuMDM5IDY0IDE5OC4wNzQgNjcuMzI4IDIwNC4xMTcgNzMuMzc1TDI0OS4zNzMgMTE4LjYyN0wyNTguNzQ2IDEyOEg0NDhDNDY1LjY0NSAxMjggNDgwIDE0Mi4zNTUgNDgwIDE2MFY0MTZaTTMzOC4yNSAxNzcuMjgxQzMyOS42MjUgMTcxLjI4MSAzMTguNjI1IDE2OS44NDQgMzA4Ljc1IDE3My41OTRMMjEyLjc1IDIwOS41OTRDMjAwLjM0NCAyMTQuMjUgMTkyIDIyNi4yODEgMTkyIDIzOS41NjJWMzEzLjI4M0MxODQuNjk3IDMxMC4yODcgMTc2LjYyMSAzMDguNDY5IDE2OCAzMDguNDY5QzEzNy4xMjUgMzA4LjQ2OSAxMTIgMzMwLjAwMSAxMTIgMzU2LjQ2OUMxMTIgMzgyLjkzNyAxMzcuMTI1IDQwNC40NjkgMTY4IDQwNC40NjlTMjI0IDM4Mi45MzcgMjI0IDM1Ni40NjlWMjM5LjUzMUwzMjAgMjAzLjU2M1YyODEuMjgzQzMxMi42OTcgMjc4LjI4NyAzMDQuNjIxIDI3Ni40NjkgMjk2IDI3Ni40NjlDMjY1LjEyNSAyNzYuNDY5IDI0MCAyOTguMDAxIDI0MCAzMjQuNDY5QzI0MCAzNTAuOTM4IDI2NS4xMjUgMzcyLjQ2OSAyOTYgMzcyLjQ2OVMzNTIgMzUwLjkzOCAzNTIgMzI0LjQ2OVYyMDMuNTYyQzM1MiAxOTMuMDYyIDM0Ni44NDQgMTgzLjI1IDMzOC4yNSAxNzcuMjgxWk0xNjggMzcyLjQ2OUMxNTUuMjE5IDM3Mi40NjkgMTQ0IDM2NSAxNDQgMzU2LjQ2OVMxNTUuMjE5IDM0MC40NjkgMTY4IDM0MC40NjlTMTkyIDM0Ny45MzcgMTkyIDM1Ni40NjlTMTgwLjc4MSAzNzIuNDY5IDE2OCAzNzIuNDY5Wk0yOTYgMzQwLjQ2OUMyODMuMjE5IDM0MC40NjkgMjcyIDMzMyAyNzIgMzI0LjQ2OVMyODMuMjE5IDMwOC40NjkgMjk2IDMwOC40NjlTMzIwIDMxNS45MzcgMzIwIDMyNC40NjlTMzA4Ljc4MSAzNDAuNDY5IDI5NiAzNDAuNDY5WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FolderMusic(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 96H272L226.746 50.746C214.742 38.742 198.465 32 181.49 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.654 483.346 96 448 96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H181.49C190.039 64 198.074 67.328 204.117 73.375L249.373 118.627L258.746 128H448C465.645 128 480 142.355 480 160V416ZM338.25 177.281C329.625 171.281 318.625 169.844 308.75 173.594L212.75 209.594C200.344 214.25 192 226.281 192 239.562V313.283C184.697 310.287 176.621 308.469 168 308.469C137.125 308.469 112 330.001 112 356.469C112 382.937 137.125 404.469 168 404.469S224 382.937 224 356.469V239.531L320 203.563V281.283C312.697 278.287 304.621 276.469 296 276.469C265.125 276.469 240 298.001 240 324.469C240 350.938 265.125 372.469 296 372.469S352 350.938 352 324.469V203.562C352 193.062 346.844 183.25 338.25 177.281ZM168 372.469C155.219 372.469 144 365 144 356.469S155.219 340.469 168 340.469S192 347.937 192 356.469S180.781 372.469 168 372.469ZM296 340.469C283.219 340.469 272 333 272 324.469S283.219 308.469 296 308.469S320 315.937 320 324.469S308.781 340.469 296 340.469Z" />
        </Icon>
    </>
}