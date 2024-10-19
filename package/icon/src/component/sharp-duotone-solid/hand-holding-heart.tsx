
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-heart?s=sharp-duotone-solid hand-holding-heart}
 * @preview ![hand-holding-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NEwwIDUxMmwzMiAwIDE5MiAwIDE2MCAwIDEyLjQgMCAxMC4yLTcgMTI4LTg4IDMzLTIyLjctNDUuMy02NS45LTMzIDIyLjctOTQuNSA2NUwyNTYgNDE2bDAtMzIgMzIgMCA2NCAwIDMyIDAgMC02NC0zMiAwLTY0IDAtNjQgMC02NCAwLTExLjIgMC04LjggN0w2OC44IDM4NCAwIDM4NHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE5MiAxNjBsLTI0LjgtMjQuOGMtMTQuOS0xNC45LTIzLjItMzUtMjMuMi01NmwwLTMuNkMxNDQgMzMuOSAxNzcuOSAwIDIxOS42IDBjMjMgMCA0NC43IDEwLjQgNTkuMSAyOC40TDI4OCA0MGw5LjMtMTEuNkMzMTEuNiAxMC40IDMzMy40IDAgMzU2LjQgMEMzOTguMSAwIDQzMiAzMy45IDQzMiA3NS42bDAgMy42YzAgMjEtOC4zIDQxLjEtMjMuMiA1NkwzODQgMTYwbC05NiA5Ni05Ni05NnoiLz48L3N2Zz4=|width=32|height=32)
 */
const HandHoldingHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384L0 512l32 0 192 0 160 0 12.4 0 10.2-7 128-88 33-22.7-45.3-65.9-33 22.7-94.5 65L256 416l0-32 32 0 64 0 32 0 0-64-32 0-64 0-64 0-64 0-11.2 0-8.8 7L68.8 384 0 384z" />
            <path d="M192 160l-24.8-24.8c-14.9-14.9-23.2-35-23.2-56l0-3.6C144 33.9 177.9 0 219.6 0c23 0 44.7 10.4 59.1 28.4L288 40l9.3-11.6C311.6 10.4 333.4 0 356.4 0C398.1 0 432 33.9 432 75.6l0 3.6c0 21-8.3 41.1-23.2 56L384 160l-96 96-96-96z" />
    </Icon>
);

export default HandHoldingHeart;