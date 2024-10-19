
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `game-board` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/game-board?s=solid game-board}
 * @preview ![game-board](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMzM2SDMwNFYyNTZIMjI0VjMzNlpNMjI0IDE3NkgxNDRWMjU2SDIyNFYxNzZaTTM4NCAzMkg2NEMyOC44IDMyIDAgNjAuOCAwIDk2VjQxNkMwIDQ1MS4yIDI4LjggNDgwIDY0IDQ4MEgzODRDNDE5LjIgNDgwIDQ0OCA0NTEuMiA0NDggNDE2Vjk2QzQ0OCA2MC44IDQxOS4yIDMyIDM4NCAzMlpNMzg0IDE3NkgzMDRWMjU2SDM4NFYzMzZIMzA0VjQxNkgyMjRWMzM2SDE0NFY0MTZINjRWMzM2SDE0NFYyNTZINjRWMTc2SDE0NFY5NkgyMjRWMTc2SDMwNFY5NkgzODRWMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GameBoard(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 336H304V256H224V336ZM224 176H144V256H224V176ZM384 32H64C28.8 32 0 60.8 0 96V416C0 451.2 28.8 480 64 480H384C419.2 480 448 451.2 448 416V96C448 60.8 419.2 32 384 32ZM384 176H304V256H384V336H304V416H224V336H144V416H64V336H144V256H64V176H144V96H224V176H304V96H384V176Z" />
        </Icon>
    </>
}