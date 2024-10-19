
import { Icon, generic } from "../../index";

/**
 * A component that renders the `watch-smart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-smart?s=sharp-duotone-solid watch-smart}
 * @preview ![watch-smart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0bDY0IDAgMjU2IDAgNjQgMCAwIDM4NC02NCAwTDY0IDQ0OCAwIDQ0OCAwIDY0em0xNjggNzJsMCAyNCAwIDk2IDAgOS45IDcgNyA0OCA0OCAxNyAxN0wyNzMuOSAzMDRsLTE3LTE3LTQxLTQxIDAtODYuMSAwLTI0LTI0IDAtMjQgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTY0IDBsMCA2NCAyNTYgMCAwLTY0TDY0IDB6bTAgNTEybDI1NiAwIDAtNjRMNjQgNDQ4bDAgNjR6TTIxNiAxNjBsMC0yNC00OCAwIDAgMjQgMCA5NiAwIDkuOSA3IDcgNDggNDggMTcgMTdMMjczLjkgMzA0bC0xNy0xNy00MS00MSAwLTg2LjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const WatchSmart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l64 0 256 0 64 0 0 384-64 0L64 448 0 448 0 64zm168 72l0 24 0 96 0 9.9 7 7 48 48 17 17L273.9 304l-17-17-41-41 0-86.1 0-24-24 0-24 0z" />
            <path d="M64 0l0 64 256 0 0-64L64 0zm0 512l256 0 0-64L64 448l0 64zM216 160l0-24-48 0 0 24 0 96 0 9.9 7 7 48 48 17 17L273.9 304l-17-17-41-41 0-86.1z" />
    </Icon>
);

export default WatchSmart;