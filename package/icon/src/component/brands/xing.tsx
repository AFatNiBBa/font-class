
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `xing` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/xing?s=brands xing}
 * @preview ![xing](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjIuNyAyMTBjLTEuOCAzLjMtMjUuMiA0NC40LTcwLjEgMTIzLjUtNC45IDguMy0xMC44IDEyLjUtMTcuNyAxMi41SDkuOGMtNy43IDAtMTIuMS03LjUtOC41LTE0LjRsNjktMTIxLjNjLjIgMCAuMi0uMSAwLS4zbC00My45LTc1LjZjLTQuMy03LjguMy0xNC4xIDguNS0xNC4xSDEwMGM3LjMgMCAxMy4zIDQuMSAxOCAxMi4ybDQ0LjcgNzcuNXpNMzgyLjYgNDYuMWwtMTQ0IDI1M3YuM0wzMzAuMiA0NjZjMy45IDcuMS4yIDE0LjEtOC41IDE0LjFoLTY1LjJjLTcuNiAwLTEzLjYtNC0xOC0xMi4ybC05Mi40LTE2OC41YzMuMy01LjggNTEuNS05MC44IDE0NC44LTI1NS4yIDQuNi04LjEgMTAuNC0xMi4yIDE3LjUtMTIuMmg2NS43YzggMCAxMi4zIDYuNyA4LjUgMTQuMXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Xing(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z" />
        </Icon>
    </>
}