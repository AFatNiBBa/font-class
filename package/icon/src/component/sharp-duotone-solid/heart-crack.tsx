
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=sharp-duotone-solid heart-crack}
 * @preview ![heart-crack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2Ny44YzAgMzYgMTQuMyA3MC41IDM5LjggOTZMNjQgMjg4IDI1NiA0ODAgNDQ4IDI4OGwyNC4yLTI0LjJjMjUuNS0yNS41IDM5LjgtNjAgMzkuOC05NkM1MTIgOTIuOCA0NTEuMiAzMiAzNzYuMiAzMmMtMjcuNiAwLTU0LjQgOC40LTc2LjggMjMuOEMzMDYuMyA3OS45IDMxMy4xIDEwNCAzMjAgMTI4Yy0zMiAyNi43LTY0IDUzLjMtOTYgODBjMjEuMyAzNy4zIDQyLjcgNzQuNyA2NCAxMTJjLTQyLjctMzcuMy04NS4zLTc0LjctMTI4LTExMmMyNi43LTI2LjcgNTMuMy01My4zIDgwLTgwYy0yMS40LTMwLTQyLjgtNjAtNjQuMy05MGMtMTIuOC00LTI2LjMtNi00MC02QzYwLjggMzIgMCA5Mi44IDAgMTY3Ljh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMjA4bDY0IDExMkwxNjAgMjA4bDgwLTgwTDE3NS43IDM4YzIxIDYuNSA0MC4yIDE4IDU2IDMzLjdMMjU2IDk2bDI0LjItMjQuMmM1LjktNS45IDEyLjMtMTEuMiAxOS4yLTE1LjlMMzIwIDEyOGwtOTYgODB6Ii8+PC9zdmc+|width=32|height=32)
 */
const HeartCrack: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 167.8c0 36 14.3 70.5 39.8 96L64 288 256 480 448 288l24.2-24.2c25.5-25.5 39.8-60 39.8-96C512 92.8 451.2 32 376.2 32c-27.6 0-54.4 8.4-76.8 23.8C306.3 79.9 313.1 104 320 128c-32 26.7-64 53.3-96 80c21.3 37.3 42.7 74.7 64 112c-42.7-37.3-85.3-74.7-128-112c26.7-26.7 53.3-53.3 80-80c-21.4-30-42.8-60-64.3-90c-12.8-4-26.3-6-40-6C60.8 32 0 92.8 0 167.8z" />
            <path d="M224 208l64 112L160 208l80-80L175.7 38c21 6.5 40.2 18 56 33.7L256 96l24.2-24.2c5.9-5.9 12.3-11.2 19.2-15.9L320 128l-96 80z" />
    </Icon>
);

export default HeartCrack;