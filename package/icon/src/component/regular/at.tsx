
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `at` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/at?s=regular at}
 * @preview ![at](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNjMuMzU5IDE2LjEyMUMxOTguMjE5IDE0LjA1OSAxMzYuMjM0IDM4LjEzNyA4OS4zMTIgODMuNjY2QzQyLjAzMSAxMjkuNTQxIDE2IDE5MS4xNjQgMTYgMjU3LjE5M0MxNiAzNzUuNzgzIDEwMy44OTEgNDc4LjMyOCAyMjAuNDUzIDQ5NS43MzRDMjIxLjY1NiA0OTUuOTIyIDIyMi44NDQgNDk2IDIyNC4wMzEgNDk2QzIzNS43MTkgNDk2IDI0NS45NTMgNDg3LjQ1MyAyNDcuNzM0IDQ3NS41NDdDMjQ5LjY4OCA0NjIuNDM3IDI0MC42NTYgNDUwLjIxOSAyMjcuNTQ3IDQ0OC4yNjZDMTM0LjMxMiA0MzQuMzQ2IDY0IDM1Mi4yMDcgNjQgMjU3LjE5M0M2NCAyMDQuMjU4IDg0Ljg1OSAxNTQuODY3IDEyMi43MzQgMTE4LjExOUMxNjAuMjY2IDgxLjcxMyAyMDguOTg0IDYyLjI5MyAyNjEuOTIyIDY0LjA5QzM2NC41MTYgNjcuMTk5IDQ0OCAxNTcuOTE0IDQ0OCAyNjYuMzAzVjI4NS4zNUM0NDggMzA5LjgwMSA0MjguMjY2IDMyOS43MDcgNDA0IDMyOS43MDdTMzYwIDMwOS44MDEgMzYwIDI4NS4zNVYxNjguNzExQzM2MCAxNTUuNDYxIDM0OS4yNSAxNDQuNzEzIDMzNiAxNDQuNzEzQzMyNC4wNzggMTQ0LjcxMyAzMTQuNjIzIDE1My41NjggMzEyLjc1NiAxNjQuOTY1QzI5NC40MzIgMTUxLjg4OSAyNzIuMTcyIDE0NC4wMSAyNDggMTQ0LjAxQzE4Ni4yNSAxNDQuMDEgMTM2IDE5NC4yNTggMTM2IDI1Ni4wMDZTMTg2LjI1IDM2OC4wMDQgMjQ4IDM2OC4wMDRDMjc4Ljc0OCAzNjguMDA0IDMwNi42MjMgMzU1LjUyIDMyNi44ODUgMzM1LjM4NUMzNDMuMjkzIDM2MC43ODUgMzcxLjY1OCAzNzcuNzA1IDQwNCAzNzcuNzA1QzQ1NC43MzQgMzc3LjcwNSA0OTYgMzM2LjI3IDQ5NiAyODUuMzVWMjY2LjMwM0M0OTYgMTMyLjIyOSAzOTEuNjQxIDE5Ljk5NiAyNjMuMzU5IDE2LjEyMVpNMjQ4IDMyMC4wMDRDMjEyLjcwMyAzMjAuMDA0IDE4NCAyOTEuMzAzIDE4NCAyNTYuMDA2QzE4NCAyMjAuNzExIDIxMi43MDMgMTkyLjAwOCAyNDggMTkyLjAwOFMzMTIgMjIwLjcxMSAzMTIgMjU2LjAwNkMzMTIgMjkxLjMwMyAyODMuMjk3IDMyMC4wMDQgMjQ4IDMyMC4wMDRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function At(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M263.359 16.121C198.219 14.059 136.234 38.137 89.312 83.666C42.031 129.541 16 191.164 16 257.193C16 375.783 103.891 478.328 220.453 495.734C221.656 495.922 222.844 496 224.031 496C235.719 496 245.953 487.453 247.734 475.547C249.688 462.437 240.656 450.219 227.547 448.266C134.312 434.346 64 352.207 64 257.193C64 204.258 84.859 154.867 122.734 118.119C160.266 81.713 208.984 62.293 261.922 64.09C364.516 67.199 448 157.914 448 266.303V285.35C448 309.801 428.266 329.707 404 329.707S360 309.801 360 285.35V168.711C360 155.461 349.25 144.713 336 144.713C324.078 144.713 314.623 153.568 312.756 164.965C294.432 151.889 272.172 144.01 248 144.01C186.25 144.01 136 194.258 136 256.006S186.25 368.004 248 368.004C278.748 368.004 306.623 355.52 326.885 335.385C343.293 360.785 371.658 377.705 404 377.705C454.734 377.705 496 336.27 496 285.35V266.303C496 132.229 391.641 19.996 263.359 16.121ZM248 320.004C212.703 320.004 184 291.303 184 256.006C184 220.711 212.703 192.008 248 192.008S312 220.711 312 256.006C312 291.303 283.297 320.004 248 320.004Z" />
        </Icon>
    </>
}