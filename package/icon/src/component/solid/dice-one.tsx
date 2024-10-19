
import { Icon } from "../../index";

/**
 * A component that renders the `dice-one` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-one?s=solid dice-one}
 * @preview ![dice-one](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEgzODRDNDE5LjM3NSA0ODAgNDQ4IDQ1MS4zNzUgNDQ4IDQxNlY5NkM0NDggNjAuNjI1IDQxOS4zNzUgMzIgMzg0IDMyWk0yMjQgMjg4QzIwNi4zNzUgMjg4IDE5MiAyNzMuNjI1IDE5MiAyNTZTMjA2LjM3NSAyMjQgMjI0IDIyNFMyNTYgMjM4LjM3NSAyNTYgMjU2UzI0MS42MjUgMjg4IDIyNCAyODhaICI+PC9wYXRoPjwvc3ZnPg==|width=32|height=32)
 */
const DiceOne: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM224 288C206.375 288 192 273.625 192 256S206.375 224 224 224S256 238.375 256 256S241.625 288 224 288Z " />
    </Icon>
);

export default DiceOne;