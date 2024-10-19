
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-from-dotted-line` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-from-dotted-line?s=thin arrows-from-dotted-line}
 * @preview ![arrows-from-dotted-line](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMiAyNDBDMjMuMTY0IDI0MCAxNiAyNDcuMTY0IDE2IDI1NlMyMy4xNjQgMjcyIDMyIDI3MlM0OCAyNjQuODM2IDQ4IDI1NlM0MC44MzYgMjQwIDMyIDI0MFpNMTQ0IDI1NkMxNDQgMjQ3LjE2NCAxMzYuODM2IDI0MCAxMjggMjQwUzExMiAyNDcuMTY0IDExMiAyNTZTMTE5LjE2NCAyNzIgMTI4IDI3MlMxNDQgMjY0LjgzNiAxNDQgMjU2Wk0yMDggMjU2QzIwOCAyNjQuODM2IDIxNS4xNjQgMjcyIDIyNCAyNzJTMjQwIDI2NC44MzYgMjQwIDI1NlMyMzIuODM2IDI0MCAyMjQgMjQwUzIwOCAyNDcuMTY0IDIwOCAyNTZaTTMyMCAyNDBDMzExLjE2NCAyNDAgMzA0IDI0Ny4xNjQgMzA0IDI1NlMzMTEuMTY0IDI3MiAzMjAgMjcyUzMzNiAyNjQuODM2IDMzNiAyNTZTMzI4LjgzNiAyNDAgMzIwIDI0MFpNNDE2IDI0MEM0MDcuMTY0IDI0MCA0MDAgMjQ3LjE2NCA0MDAgMjU2UzQwNy4xNjQgMjcyIDQxNiAyNzJTNDMyIDI2NC44MzYgNDMyIDI1NlM0MjQuODM2IDI0MCA0MTYgMjQwWk0xMzYgMTA0QzEzOC4wNDcgMTA0IDE0MC4wOTQgMTAzLjIxOSAxNDEuNjU2IDEwMS42NTZMMjE2IDI3LjMxMlYxODRDMjE2IDE4OC40MDYgMjE5LjU5NCAxOTIgMjI0IDE5MlMyMzIgMTg4LjQwNiAyMzIgMTg0VjI3LjMxMkwzMDYuMzQ0IDEwMS42NTZDMzA3LjkwNiAxMDMuMjE5IDMwOS45MzggMTA0IDMxMiAxMDRDMzE3LjcxOSAxMDQgMzIwIDk4LjkwNiAzMjAgOTZDMzIwIDkzLjk1MyAzMTkuMjE5IDkxLjkwNiAzMTcuNjU2IDkwLjM0NEwyMjkuNjU2IDIuMzQ0QzIyOC4wOTQgMC43ODEgMjI2LjA0NyAwIDIyNCAwUzIxOS45MDYgMC43ODEgMjE4LjM0NCAyLjM0NEwxMzAuMzQ0IDkwLjM0NEMxMjguNzgxIDkxLjkwNiAxMjggOTMuOTUzIDEyOCA5NkMxMjggMTAwLjU3IDEzMS43MzcgMTA0IDEzNiAxMDRaTTMxMiA0MDhDMzA5Ljk1MyA0MDggMzA3LjkwNiA0MDguNzgxIDMwNi4zNDQgNDEwLjM0NEwyMzIgNDg0LjY4OFYzMjhDMjMyIDMyMy41OTQgMjI4LjQwNiAzMjAgMjI0IDMyMFMyMTYgMzIzLjU5NCAyMTYgMzI4VjQ4NC42ODhMMTQxLjY1NiA0MTAuMzQ0QzE0MC4wOTQgNDA4Ljc4MSAxMzguMDQ3IDQwOCAxMzYgNDA4QzEzMS43MzcgNDA4IDEyOCA0MTEuNDMzIDEyOCA0MTZDMTI4IDQxOC4wNDcgMTI4Ljc4MSA0MjAuMDk0IDEzMC4zNDQgNDIxLjY1NkwyMTguMzQ0IDUwOS42NTZDMjE5LjkwNiA1MTEuMjE5IDIyMS45MzggNTEyIDIyNCA1MTJTMjI4LjA5NCA1MTEuMjE5IDIyOS42NTYgNTA5LjY1NkwzMTcuNjU2IDQyMS42NTZDMzE5LjIxOSA0MjAuMDk0IDMyMCA0MTguMDQ3IDMyMCA0MTZDMzIwIDQxMS40MyAzMTYuMjYzIDQwOCAzMTIgNDA4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowsFromDottedLine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M32 240C23.164 240 16 247.164 16 256S23.164 272 32 272S48 264.836 48 256S40.836 240 32 240ZM144 256C144 247.164 136.836 240 128 240S112 247.164 112 256S119.164 272 128 272S144 264.836 144 256ZM208 256C208 264.836 215.164 272 224 272S240 264.836 240 256S232.836 240 224 240S208 247.164 208 256ZM320 240C311.164 240 304 247.164 304 256S311.164 272 320 272S336 264.836 336 256S328.836 240 320 240ZM416 240C407.164 240 400 247.164 400 256S407.164 272 416 272S432 264.836 432 256S424.836 240 416 240ZM136 104C138.047 104 140.094 103.219 141.656 101.656L216 27.312V184C216 188.406 219.594 192 224 192S232 188.406 232 184V27.312L306.344 101.656C307.906 103.219 309.938 104 312 104C317.719 104 320 98.906 320 96C320 93.953 319.219 91.906 317.656 90.344L229.656 2.344C228.094 0.781 226.047 0 224 0S219.906 0.781 218.344 2.344L130.344 90.344C128.781 91.906 128 93.953 128 96C128 100.57 131.737 104 136 104ZM312 408C309.953 408 307.906 408.781 306.344 410.344L232 484.688V328C232 323.594 228.406 320 224 320S216 323.594 216 328V484.688L141.656 410.344C140.094 408.781 138.047 408 136 408C131.737 408 128 411.433 128 416C128 418.047 128.781 420.094 130.344 421.656L218.344 509.656C219.906 511.219 221.938 512 224 512S228.094 511.219 229.656 509.656L317.656 421.656C319.219 420.094 320 418.047 320 416C320 411.43 316.263 408 312 408Z" />
        </Icon>
    </>
}