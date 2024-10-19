
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-heart?s=sharp-duotone-solid message-heart}
 * @preview ![message-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMNTEyIDBsMCA0MTYtMjA4IDBMMTYwIDUxMmwwLTk2TDAgNDE2IDAgMHpNMTQ0IDE3MS4yYzAgMTYuMSA2LjYgMzEuNSAxOC4yIDQyLjdsODIuOCA3OS42TDI1NiAzMDQuMWwxMS4xLTEwLjcgODIuOC03OS42YzExLjYtMTEuMiAxOC4yLTI2LjYgMTguMi00Mi43YzAtMzIuNy0yNi41LTU5LjItNTkuMi01OS4ybC0yLjQgMGMtMTUuOSAwLTMxLjIgNi4yLTQyLjcgMTcuMmwtNy43IDcuNC03LjctNy40Yy0xMS41LTExLTI2LjgtMTcuMi00Mi43LTE3LjJsLTIuNCAwYy0zMi43IDAtNTkuMiAyNi41LTU5LjIgNTkuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTIwMy4yIDExMmMtMzIuNyAwLTU5LjIgMjYuNS01OS4yIDU5LjJjMCAxNi4xIDYuNiAzMS41IDE4LjIgNDIuN2w4Mi44IDc5LjZMMjU2IDMwNC4xbDExLjEtMTAuNyA4Mi44LTc5LjZjMTEuNi0xMS4yIDE4LjItMjYuNiAxOC4yLTQyLjdjMC0zMi43LTI2LjUtNTkuMi01OS4yLTU5LjJsLTIuNCAwYy0xNS45IDAtMzEuMiA2LjItNDIuNyAxNy4ybC03LjcgNy40LTcuNy03LjRjLTExLjUtMTEtMjYuOC0xNy4yLTQyLjctMTcuMmwtMi40IDB6Ii8+PC9zdmc+|width=32|height=32)
 */
const MessageHeart: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L512 0l0 416-208 0L160 512l0-96L0 416 0 0zM144 171.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L256 304.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0c-32.7 0-59.2 26.5-59.2 59.2z" />
            <path d="M203.2 112c-32.7 0-59.2 26.5-59.2 59.2c0 16.1 6.6 31.5 18.2 42.7l82.8 79.6L256 304.1l11.1-10.7 82.8-79.6c11.6-11.2 18.2-26.6 18.2-42.7c0-32.7-26.5-59.2-59.2-59.2l-2.4 0c-15.9 0-31.2 6.2-42.7 17.2l-7.7 7.4-7.7-7.4c-11.5-11-26.8-17.2-42.7-17.2l-2.4 0z" />
    </Icon>
);

export default MessageHeart;