
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-xmark?s=duotone user-xmark}
 * @preview ![user-xmark](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4Mi4zQzAgNDk4LjcgMTMuMyA1MTIgMjkuNyA1MTJsMzg4LjYgMGMxNi40IDAgMjkuNy0xMy4zIDI5LjctMjkuN0M0NDggMzgzLjggMzY4LjIgMzA0IDI2OS43IDMwNGwtOTEuNCAwQzc5LjggMzA0IDAgMzgzLjggMCA0ODIuM3pNOTYgMTI4YTEyOCAxMjggMCAxIDAgMjU2IDBBMTI4IDEyOCAwIDEgMCA5NiAxMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MDUgMTQzYy05LjQtOS40LTI0LjYtOS40LTMzLjkgMHMtOS40IDI0LjYgMCAzMy45bDQ3IDQ3LTQ3IDQ3Yy05LjQgOS40LTkuNCAyNC42IDAgMzMuOXMyNC42IDkuNCAzMy45IDBsNDctNDcgNDcgNDdjOS40IDkuNCAyNC42IDkuNCAzMy45IDBzOS40LTI0LjYgMC0zMy45bC00Ny00NyA0Ny00N2M5LjQtOS40IDkuNC0yNC42IDAtMzMuOXMtMjQuNi05LjQtMzMuOSAwbC00NyA0Ny00Ny00N3oiLz48L3N2Zz4=|width=32|height=32)
 */
const UserXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0C79.8 304 0 383.8 0 482.3zM96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128z" />
            <path d="M505 143c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z" />
    </Icon>
);

export default UserXmark;