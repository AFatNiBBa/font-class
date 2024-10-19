
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `left-long` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/left-long?s=regular left-long}
 * @preview ![left-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNDUuNjg3IDEzMEMxNTQuNDQ1IDEzMy44MTEgMTYwLjEwNSAxNDIuNDUyIDE2MC4xMDUgMTUxLjk5OFYyMzJINDg4QzUwMS4yNSAyMzIgNTEyIDI0Mi43NSA1MTIgMjU2QzUxMiAyNjkuMjUgNTAxLjI1IDI4MCA0ODggMjgwSDE2MC4xMDVWMzYwQzE2MC4xMDUgMzY5LjU0NyAxNTQuNDQ1IDM3OC4xODggMTQ1LjY4NyAzODIuMDAyQzEzNi45MzQgMzg1LjgxMyAxMjYuNzM4IDM4NC4wNzkgMTE5Ljc1IDM3Ny41OTRMNy42NzYgMjczLjU5NEMtMi41NTkgMjY0LjA5NCAtMi41NTkgMjQ3LjkwNSA3LjY3NiAyMzguNDA3TDExOS43NSAxMzQuNDA1QzEyNi43MzggMTI3LjkyIDEzNi45MzQgMTI2LjE4NiAxNDUuNjg3IDEzMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function LeftLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M145.687 130C154.445 133.811 160.105 142.452 160.105 151.998V232H488C501.25 232 512 242.75 512 256C512 269.25 501.25 280 488 280H160.105V360C160.105 369.547 154.445 378.188 145.687 382.002C136.934 385.813 126.738 384.079 119.75 377.594L7.676 273.594C-2.559 264.094 -2.559 247.905 7.676 238.407L119.75 134.405C126.738 127.92 136.934 126.186 145.687 130Z" />
        </Icon>
    </>
}