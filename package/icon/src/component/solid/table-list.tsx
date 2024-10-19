
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `table-list` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/table-list?s=solid table-list}
 * @preview ![table-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJINjRDMjguNjU0IDMyIDAgNjAuNjUyIDAgOTZWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlY5NkM1MTIgNjAuNjUyIDQ4My4zNDYgMzIgNDQ4IDMyWk02NCA5NkgxMjhWMTYwSDY0Vjk2Wk02NCAyMjRIMTI4VjI4OEg2NFYyMjRaTTY0IDQxNlYzNTJIMTI4VjQxNkg2NFpNNDQ4IDQxNkgxOTJWMzUySDQ0OFY0MTZaTTQ0OCAyODhIMTkyVjIyNEg0NDhWMjg4Wk00NDggMTYwSDE5MlY5Nkg0NDhWMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TableList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M448 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM64 96H128V160H64V96ZM64 224H128V288H64V224ZM64 416V352H128V416H64ZM448 416H192V352H448V416ZM448 288H192V224H448V288ZM448 160H192V96H448V160Z" />
        </Icon>
    </>
}