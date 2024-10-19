
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `send-backward` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/send-backward?s=solid send-backward}
 * @preview ![send-backward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgMTI4VjY0QzM1MiAyOC42NTIgMzIzLjM0NiAwIDI4OCAwSDY0QzI4LjY1NCAwIDAgMjguNjUyIDAgNjRWMjg4QzAgMzIzLjM0NiAyOC42NTQgMzUyIDY0IDM1MkgxMjhWMjI0QzEyOCAxNzEuMDY0IDE3MS4wNjYgMTI4IDIyNCAxMjhIMzUyWk00NDggMTYwSDIyNEMxODguNjU0IDE2MCAxNjAgMTg4LjY1NCAxNjAgMjI0VjQ0OEMxNjAgNDgzLjM0NiAxODguNjU0IDUxMiAyMjQgNTEySDQ0OEM0ODMuMzQ2IDUxMiA1MTIgNDgzLjM0NiA1MTIgNDQ4VjIyNEM1MTIgMTg4LjY1MiA0ODMuMzQ2IDE2MCA0NDggMTYwWk00NDggNDQ4SDIyNFYyMjRINDQ4VjQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SendBackward(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 128V64C352 28.652 323.346 0 288 0H64C28.654 0 0 28.652 0 64V288C0 323.346 28.654 352 64 352H128V224C128 171.064 171.066 128 224 128H352ZM448 160H224C188.654 160 160 188.654 160 224V448C160 483.346 188.654 512 224 512H448C483.346 512 512 483.346 512 448V224C512 188.652 483.346 160 448 160ZM448 448H224V224H448V448Z" />
        </Icon>
    </>
}