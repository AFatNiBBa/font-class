
import { Icon, generic } from "../../index";

/**
 * A component that renders the `meteor` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=sharp-duotone-solid meteor}
 * @preview ![meteor](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDMwOUMwIDQyMS4xIDkwLjkgNTEyIDIwMyA1MTJjNzIuNCAwIDEzOS40LTM4LjYgMTc1LjctMTAxLjNMNDk2IDIwOGwtNTkuOSA0LjZMNTEyIDAgMjk5LjQgNzUuOSAzMDQgMTYgMTAxLjMgMTMzLjRDMzguNiAxNjkuNyAwIDIzNi42IDAgMzA5em0zMjAgMTFBMTI4IDEyOCAwIDEgMSA2NCAzMjBhMTI4IDEyOCAwIDEgMSAyNTYgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDMyMGExMjggMTI4IDAgMSAxIDI1NiAwQTEyOCAxMjggMCAxIDEgNjQgMzIwem0xMjgtMzJhMzIgMzIgMCAxIDAgLTY0IDAgMzIgMzIgMCAxIDAgNjQgMHptMTYgOTZhMTYgMTYgMCAxIDAgMC0zMiAxNiAxNiAwIDEgMCAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 309C0 421.1 90.9 512 203 512c72.4 0 139.4-38.6 175.7-101.3L496 208l-59.9 4.6L512 0 299.4 75.9 304 16 101.3 133.4C38.6 169.7 0 236.6 0 309zm320 11A128 128 0 1 1 64 320a128 128 0 1 1 256 0z" />
            <path d="M64 320a128 128 0 1 1 256 0A128 128 0 1 1 64 320zm128-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Meteor;