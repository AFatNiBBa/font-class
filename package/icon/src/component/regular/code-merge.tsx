
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=regular code-merge}
 * @preview ![code-merge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTkyQzMzMi4yMzggMTkyIDMwMi4zMTIgMjE1LjYyNSAyOTIuMDcgMjQ4SDIyNEMxNjcuMTExIDI0OCAxMTkuNTgyIDIwOC4xMDkgMTA3LjI5OSAxNTQuOTA2QzEzNy45NzcgMTQzLjcxNSAxNjAgMTE0LjU1MSAxNjAgODBDMTYwIDM1LjgxNiAxMjQuMTg0IDAgODAgMEMzNS44MTggMCAwIDM1LjgxNiAwIDgwQzAgMTE1Ljc2NiAyMy42MjUgMTQ1LjY4OCA1NiAxNTUuOTNWMzU2LjA3QzIzLjYyNSAzNjYuMzEyIDAgMzk2LjIzNCAwIDQzMkMwIDQ3Ni4xODQgMzUuODE4IDUxMiA4MCA1MTJDMTI0LjE4NCA1MTIgMTYwIDQ3Ni4xODQgMTYwIDQzMkMxNjAgMzk2LjIzNCAxMzYuMzc3IDM2Ni4zMTIgMTA0IDM1Ni4wN1YyNDUuMjExQzEzNC41MjUgMjc2LjQ1NyAxNzYuOTY5IDI5NiAyMjQgMjk2SDI5Mi4wN0MzMDIuMzEyIDMyOC4zNzUgMzMyLjIzOCAzNTIgMzY4IDM1MkM0MTIuMTg0IDM1MiA0NDggMzE2LjE4NCA0NDggMjcyUzQxMi4xODQgMTkyIDM2OCAxOTJaTTgwIDQ4Qzk3LjY0NSA0OCAxMTIgNjIuMzU1IDExMiA4MFM5Ny42NDUgMTEyIDgwIDExMlM0OCA5Ny42NDUgNDggODBTNjIuMzU1IDQ4IDgwIDQ4Wk04MCA0NjRDNjIuMzU1IDQ2NCA0OCA0NDkuNjQ1IDQ4IDQzMlM2Mi4zNTUgNDAwIDgwIDQwMFMxMTIgNDE0LjM1NSAxMTIgNDMyUzk3LjY0NSA0NjQgODAgNDY0Wk0zNjggMzA0QzM1MC4zNTUgMzA0IDMzNiAyODkuNjQ1IDMzNiAyNzJTMzUwLjM1NSAyNDAgMzY4IDI0MFM0MDAgMjU0LjM1NSA0MDAgMjcyUzM4NS42NDUgMzA0IDM2OCAzMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CodeMerge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368 192C332.238 192 302.312 215.625 292.07 248H224C167.111 248 119.582 208.109 107.299 154.906C137.977 143.715 160 114.551 160 80C160 35.816 124.184 0 80 0C35.818 0 0 35.816 0 80C0 115.766 23.625 145.688 56 155.93V356.07C23.625 366.312 0 396.234 0 432C0 476.184 35.818 512 80 512C124.184 512 160 476.184 160 432C160 396.234 136.377 366.312 104 356.07V245.211C134.525 276.457 176.969 296 224 296H292.07C302.312 328.375 332.238 352 368 352C412.184 352 448 316.184 448 272S412.184 192 368 192ZM80 48C97.645 48 112 62.355 112 80S97.645 112 80 112S48 97.645 48 80S62.355 48 80 48ZM80 464C62.355 464 48 449.645 48 432S62.355 400 80 400S112 414.355 112 432S97.645 464 80 464ZM368 304C350.355 304 336 289.645 336 272S350.355 240 368 240S400 254.355 400 272S385.645 304 368 304Z" />
        </Icon>
    </>
}