
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `stumbleupon` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/stumbleupon?s=brands stumbleupon}
 * @preview ![stumbleupon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MDIuOSAyNjZ2NjkuN2MwIDYyLjEtNTAuMyAxMTIuNC0xMTIuNCAxMTIuNC02MS44IDAtMTEyLjQtNDkuOC0xMTIuNC0xMTEuM3YtNzAuMmwzNC4zIDE2IDUxLjEtMTUuMlYzMzhjMCAxNC43IDEyIDI2LjUgMjYuNyAyNi41UzQxNyAzNTIuNyA0MTcgMzM4di03Mmg4NS45em0tMjI0LjctNTguMmwzNC4zIDE2IDUxLjEtMTUuMlYxNzNjMC02MC41LTUxLjEtMTA5LTExMi4xLTEwOS02MC44IDAtMTEyLjEgNDguMi0xMTIuMSAxMDguMnYxNjIuNGMwIDE0LjktMTIgMjYuNy0yNi43IDI2LjdTODYgMzQ5LjUgODYgMzM0LjZWMjY2SDB2NjkuN0MwIDM5Ny43IDUwLjMgNDQ4IDExMi40IDQ0OGM2MS42IDAgMTEyLjQtNDkuNSAxMTIuNC0xMTAuOFYxNzYuOWMwLTE0LjcgMTItMjYuNyAyNi43LTI2LjdzMjYuNyAxMiAyNi43IDI2Ljd2MzAuOXoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Stumbleupon(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z" />
        </Icon>
    </>
}