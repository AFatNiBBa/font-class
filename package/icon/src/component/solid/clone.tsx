
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=solid clone}
 * @preview ![clone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMjggMzA0VjE2MEg2NEMyOC42NTQgMTYwIDAgMTg4LjY1NCAwIDIyNFY0NDhDMCA0ODMuMzQ2IDI4LjY1NCA1MTIgNjQgNTEySDI4OEMzMjMuMzQ2IDUxMiAzNTIgNDgzLjM0NiAzNTIgNDQ4VjM4NEgyMDhDMTYzLjgxNyAzODQgMTI4IDM0OC4xODMgMTI4IDMwNFpNNDQ4IDBIMjI0QzE4OC42NTQgMCAxNjAgMjguNjUyIDE2MCA2NFYyODhDMTYwIDMyMy4zNDYgMTg4LjY1NCAzNTIgMjI0IDM1Mkg0NDhDNDgzLjM0NiAzNTIgNTEyIDMyMy4zNDYgNTEyIDI4OFY2NEM1MTIgMjguNjUyIDQ4My4zNDYgMCA0NDggMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Clone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M128 304V160H64C28.654 160 0 188.654 0 224V448C0 483.346 28.654 512 64 512H288C323.346 512 352 483.346 352 448V384H208C163.817 384 128 348.183 128 304ZM448 0H224C188.654 0 160 28.652 160 64V288C160 323.346 188.654 352 224 352H448C483.346 352 512 323.346 512 288V64C512 28.652 483.346 0 448 0Z" />
        </Icon>
    </>
}