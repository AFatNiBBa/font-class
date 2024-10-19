
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cart-flatbed-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cart-flatbed-empty?s=duotone cart-flatbed-empty}
 * @preview ![cart-flatbed-empty](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgNDY0YzAgMjYuNSAyMS41IDQ4IDQ4IDQ4czQ4LTIxLjUgNDgtNDhjMC01LjYtMS0xMS0yLjctMTZsLTkwLjUgMGMtMS44IDUtMi43IDEwLjQtMi43IDE2em0yODggMGMwIDI2LjUgMjEuNSA0OCA0OCA0OHM0OC0yMS41IDQ4LTQ4YzAtNS42LTEtMTEtMi43LTE2bC05MC41IDBjLTEuOCA1LTIuNyAxMC40LTIuNyAxNnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzJDMCAxNC4zIDE0LjMgMCAzMiAwTDQ4IDBjNDQuMiAwIDgwIDM1LjggODAgODBsMCAyODhjMCA4LjggNy4yIDE2IDE2IDE2bDQ2NCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC00NjQgMGMtNDQuMiAwLTgwLTM1LjgtODAtODBMNjQgODBjMC04LjgtNy4yLTE2LTE2LTE2TDMyIDY0QzE0LjMgNjQgMCA0OS43IDAgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const CartFlatbedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 464c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16zm288 0c0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1-11-2.7-16l-90.5 0c-1.8 5-2.7 10.4-2.7 16z" />
            <path d="M0 32C0 14.3 14.3 0 32 0L48 0c44.2 0 80 35.8 80 80l0 288c0 8.8 7.2 16 16 16l464 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-464 0c-44.2 0-80-35.8-80-80L64 80c0-8.8-7.2-16-16-16L32 64C14.3 64 0 49.7 0 32z" />
    </Icon>
);

export default CartFlatbedEmpty;