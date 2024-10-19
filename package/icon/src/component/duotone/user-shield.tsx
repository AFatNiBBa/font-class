
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-shield` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-shield?s=duotone user-shield}
 * @preview ![user-shield](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4Mi4zQzAgMzgzLjggNzkuOCAzMDQgMTc4LjMgMzA0bDkxLjQgMGMxNy42IDAgMzQuNiAyLjYgNTAuNyA3LjNjMy4zIDU5LjIgMjYuOCAxNDUuMSAxMDMuMSAyMDAuMmMtMS43IC4zLTMuNSAuNS01LjMgLjVMMjkuNyA1MTJDMTMuMyA1MTIgMCA0OTguNyAwIDQ4Mi4zek0zNTIgMTI4QTEyOCAxMjggMCAxIDEgOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MDQuOSAyMjUuN2MtNS43LTIuMy0xMi4xLTIuMy0xNy44IDBsLTEyMCA0OEMzNTggMjc3LjQgMzUyIDI4Ni4yIDM1MiAyOTZjMCA2My4zIDI1LjkgMTY4LjggMTM0LjggMjE0LjJjNS45IDIuNSAxMi42IDIuNSAxOC41IDBDNjE0LjEgNDY0LjggNjQwIDM1OS4zIDY0MCAyOTZjMC05LjgtNi0xOC42LTE1LjEtMjIuM2wtMTIwLTQ4em0tOC45IDIzNmwwLTE4Ny44TDU5MS40IDMxMmMtMy45IDUwLjctMjcuMiAxMTYuNy05NS40IDE0OS43eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const UserShield: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 482.3C0 383.8 79.8 304 178.3 304l91.4 0c17.6 0 34.6 2.6 50.7 7.3c3.3 59.2 26.8 145.1 103.1 200.2c-1.7 .3-3.5 .5-5.3 .5L29.7 512C13.3 512 0 498.7 0 482.3zM352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M504.9 225.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48zm-8.9 236l0-187.8L591.4 312c-3.9 50.7-27.2 116.7-95.4 149.7z" />
    </Icon>
);

export default UserShield;