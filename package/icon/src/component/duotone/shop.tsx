
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shop?s=duotone shop}
 * @preview ![shop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCAxOTJsMzIgMCAzMiAwIDE5MiAwIDY0IDAgMTI4IDAgMzIgMCAzMiAwIDAgMjg4YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMybDAtMjU2LTEyOCAwIDAgMTYwIDAgODBjMCAyNi41LTIxLjUgNDgtNDggNDhsLTIyNCAwYy0yNi41IDAtNDgtMjEuNS00OC00OGwwLTgwIDAtMTkyem02NCAzMmwwIDE2MCAxOTIgMCAwLTE2MC0xOTIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTYwMy4yIDE5MkgzNi44QzE2LjUgMTkyIDAgMTc1LjUgMCAxNTUuMmMwLTcuMyAyLjItMTQuNCA2LjItMjAuNEw4MS44IDIxLjRDOTAuNyA4IDEwNS42IDAgMTIxLjcgMEg1MTguM2MxNi4xIDAgMzEgOCAzOS45IDIxLjRsNzUuNiAxMTMuM2M0IDYuMSA2LjIgMTMuMiA2LjIgMjAuNGMwIDIwLjMtMTYuNSAzNi44LTM2LjggMzYuOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const Shop: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192l32 0 32 0 192 0 64 0 128 0 32 0 32 0 0 288c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256-128 0 0 160 0 80c0 26.5-21.5 48-48 48l-224 0c-26.5 0-48-21.5-48-48l0-80 0-192zm64 32l0 160 192 0 0-160-192 0z" />
            <path d="M603.2 192H36.8C16.5 192 0 175.5 0 155.2c0-7.3 2.2-14.4 6.2-20.4L81.8 21.4C90.7 8 105.6 0 121.7 0H518.3c16.1 0 31 8 39.9 21.4l75.6 113.3c4 6.1 6.2 13.2 6.2 20.4c0 20.3-16.5 36.8-36.8 36.8z" />
    </Icon>
);

export default Shop;