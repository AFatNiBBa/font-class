
import { Icon, generic } from "../../index";

/**
 * A component that renders the `text` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/text?s=duotone text}
 * @preview ![text](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQzMiA3MlYxMjBDNDMyIDE0Mi4wOTQgNDE0LjA5NCAxNjAgMzkyIDE2MFMzNTIgMTQyLjA5NCAzNTIgMTIwVjExMkgyNjMuMzU3QzI2My40NDkgMTEzLjEwNyAyNjQgMTE0LjA1NyAyNjQgMTE1LjE4OFY0MTZIMzA0QzMyMS42ODggNDE2IDMzNiA0MzAuMzEyIDMzNiA0NDhTMzIxLjY4OCA0ODAgMzA0IDQ4MEgxNDRDMTI2LjMxMiA0ODAgMTEyIDQ2NS42ODggMTEyIDQ0OFMxMjYuMzEyIDQxNiAxNDQgNDE2SDE4NFYxMTUuMTg4QzE4NCAxMTQuMDU3IDE4NC41NTEgMTEzLjEwNyAxODQuNjQzIDExMkg5NlYxMjBDOTYgMTQyLjA5NCA3OC4wOTQgMTYwIDU2IDE2MFMxNiAxNDIuMDk0IDE2IDEyMFY3MkMxNiA0OS45MDYgMzMuOTA2IDMyIDU2IDMySDM5MkM0MTQuMDk0IDMyIDQzMiA0OS45MDYgNDMyIDcyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
const Text: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M432 72V120C432 142.094 414.094 160 392 160S352 142.094 352 120V112H263.357C263.449 113.107 264 114.057 264 115.188V416H304C321.688 416 336 430.312 336 448S321.688 480 304 480H144C126.312 480 112 465.688 112 448S126.312 416 144 416H184V115.188C184 114.057 184.551 113.107 184.643 112H96V120C96 142.094 78.094 160 56 160S16 142.094 16 120V72C16 49.906 33.906 32 56 32H392C414.094 32 432 49.906 432 72Z" />
    </Icon>
);

export default Text;