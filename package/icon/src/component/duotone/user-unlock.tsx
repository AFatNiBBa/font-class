
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-unlock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-unlock?s=duotone user-unlock}
 * @preview ![user-unlock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4Mi4zQzAgMzgzLjggNzkuOCAzMDQgMTc4LjMgMzA0bDkxLjQgMGM0My42IDAgODMuNiAxNS43IDExNC42IDQxLjdjLS4yIDIuMS0uMyA0LjItLjMgNi4zbDAgMTI4YzAgMTEuNyAzLjEgMjIuNiA4LjYgMzJMMjkuNyA1MTJDMTMuMyA1MTIgMCA0OTguNyAwIDQ4Mi4zek0zNTIgMTI4QTEyOCAxMjggMCAxIDEgOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MjggMjQwYy0xNy43IDAtMzIgMTQuMy0zMiAzMmwwIDQ4IDE2IDAgNDggMCA0OCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTI4YzAgMTcuNy0xNC4zIDMyLTMyIDMybC0xNjAgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0xMjhjMC0xNy43IDE0LjMtMzIgMzItMzJsMC00OGMwLTQ0LjIgMzUuOC04MCA4MC04MHM4MCAzNS44IDgwIDgwbC00OCAwYzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserUnlock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c43.6 0 83.6 15.7 114.6 41.7c-.2 2.1-.3 4.2-.3 6.3l0 128c0 11.7 3.1 22.6 8.6 32L29.7 512C13.3 512 0 498.7 0 482.3zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M528 240c-17.7 0-32 14.3-32 32l0 48 16 0 48 0 48 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l-48 0c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default UserUnlock;