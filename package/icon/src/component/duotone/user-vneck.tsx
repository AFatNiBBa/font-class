
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-vneck` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-vneck?s=duotone user-vneck}
 * @preview ![user-vneck](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zNTIgMTI4QTEyOCAxMjggMCAxIDEgOTYgMTI4YTEyOCAxMjggMCAxIDEgMjU2IDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMzAgMzA4LjNjNi4xLTEuNCAxMi40IDEuNCAxNS45IDYuNkwyMTAuNyA0MTJjNi4zIDkuNSAyMC4zIDkuNSAyNi42IDBsNjQuOC05Ny4xYzMuNS01LjIgOS44LTggMTUuOS02LjZjNzQuNSAxNy4yIDEzMCA4NCAxMzAgMTYzLjdsMCA4YzAgMTcuNy0xNC4zIDMyLTMyIDMyTDMyIDUxMmMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC04YzAtNzkuNyA1NS41LTE0Ni41IDEzMC0xNjMuN3oiLz48L3N2Zz4=|width=32|height=32)
 */
const UserVneck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M352 128A128 128 0 1 1 96 128a128 128 0 1 1 256 0z" />
            <path d="M130 308.3c6.1-1.4 12.4 1.4 15.9 6.6L210.7 412c6.3 9.5 20.3 9.5 26.6 0l64.8-97.1c3.5-5.2 9.8-8 15.9-6.6c74.5 17.2 130 84 130 163.7l0 8c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32l0-8c0-79.7 55.5-146.5 130-163.7z" />
    </Icon>
);

export default UserVneck;