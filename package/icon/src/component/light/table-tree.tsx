
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-tree` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-tree?s=light table-tree}
 * @preview ![table-tree](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjQxIDMyIDAgNjAuNjQxIDAgOTZWNDE2QzAgNDUxLjM1OSAyOC42NDEgNDgwIDY0IDQ4MEg0NDhDNDgzLjM1OSA0ODAgNTEyIDQ1MS4zNTkgNTEyIDQxNlY5NkM1MTIgNjAuNjQxIDQ4My4zNTkgMzIgNDQ4IDMyWk00ODAgNDE2QzQ4MCA0MzMuNjI1IDQ2NS42MjUgNDQ4IDQ0OCA0NDhINjRDNDYuMzc1IDQ0OCAzMiA0MzMuNjI1IDMyIDQxNlYxOTJIOTZWMzQ0Qzk2IDM2Ni4wNjIgMTEzLjkzOCAzODQgMTM2IDM4NEgyNDBDMjQ4Ljg0NCAzODQgMjU2IDM3Ni44NDQgMjU2IDM2OFMyNDguODQ0IDM1MiAyNDAgMzUySDEzNkMxMzEuNTk0IDM1MiAxMjggMzQ4LjQwNiAxMjggMzQ0VjI4Ni4zODFDMTMwLjY3MiAyODYuOTQ1IDEzMy4xNjQgMjg4IDEzNiAyODhIMTc2QzE4NC44NDQgMjg4IDE5MiAyODAuODQ0IDE5MiAyNzJTMTg0Ljg0NCAyNTYgMTc2IDI1NkgxMzZDMTMxLjU5NCAyNTYgMTI4IDI1Mi40MDYgMTI4IDI0OFYxOTJINDgwVjQxNlpNNDgwIDE2MEgzMlY5NkMzMiA3OC4zNzUgNDYuMzc1IDY0IDY0IDY0SDQ0OEM0NjUuNjI1IDY0IDQ4MCA3OC4zNzUgNDgwIDk2VjE2MFpNMjQwIDI4OEg0MDBDNDA4Ljg0NCAyODggNDE2IDI4MC44NDQgNDE2IDI3MlM0MDguODQ0IDI1NiA0MDAgMjU2SDI0MEMyMzEuMTU2IDI1NiAyMjQgMjYzLjE1NiAyMjQgMjcyUzIzMS4xNTYgMjg4IDI0MCAyODhaTTQwMCAzNTJIMzA0QzI5NS4xNTYgMzUyIDI4OCAzNTkuMTU2IDI4OCAzNjhTMjk1LjE1NiAzODQgMzA0IDM4NEg0MDBDNDA4Ljg0NCAzODQgNDE2IDM3Ni44NDQgNDE2IDM2OFM0MDguODQ0IDM1MiA0MDAgMzUyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TableTree(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.641 32 0 60.641 0 96V416C0 451.359 28.641 480 64 480H448C483.359 480 512 451.359 512 416V96C512 60.641 483.359 32 448 32ZM480 416C480 433.625 465.625 448 448 448H64C46.375 448 32 433.625 32 416V192H96V344C96 366.062 113.938 384 136 384H240C248.844 384 256 376.844 256 368S248.844 352 240 352H136C131.594 352 128 348.406 128 344V286.381C130.672 286.945 133.164 288 136 288H176C184.844 288 192 280.844 192 272S184.844 256 176 256H136C131.594 256 128 252.406 128 248V192H480V416ZM480 160H32V96C32 78.375 46.375 64 64 64H448C465.625 64 480 78.375 480 96V160ZM240 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256H240C231.156 256 224 263.156 224 272S231.156 288 240 288ZM400 352H304C295.156 352 288 359.156 288 368S295.156 384 304 384H400C408.844 384 416 376.844 416 368S408.844 352 400 352Z" />
        </Icon>
    </>
}