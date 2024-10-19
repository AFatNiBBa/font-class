
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `user-lock` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/user-lock?s=solid user-lock}
 * @preview ![user-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01OTIgMjg4SDU3NlYyMTIuNjk1QzU3NiAxNzAuODUyIDU0NS45NjcgMTMyLjY1NiA1MDQuMzQgMTI4LjQyMkM0NTYuNDg2IDEyMy41NjIgNDE2IDE2MS4xMjUgNDE2IDIwOFYyODhINDAwQzM3My42IDI4OCAzNTIgMzA5LjYwMiAzNTIgMzM2VjQ2NEMzNTIgNDkwLjM5OCAzNzMuNiA1MTIgNDAwIDUxMkg1OTJDNjE4LjQgNTEyIDY0MCA0OTAuMzk4IDY0MCA0NjRWMzM2QzY0MCAzMDkuNjAyIDYxOC40IDI4OCA1OTIgMjg4Wk00OTYgNDMyQzQ3OC4zNzUgNDMyIDQ2NCA0MTcuNjI1IDQ2NCA0MDBTNDc4LjM3NSAzNjggNDk2IDM2OFM1MjggMzgyLjM3NSA1MjggNDAwUzUxMy42MjUgNDMyIDQ5NiA0MzJaTTUyOCAyODhINDY0VjIwOEM0NjQgMTkwLjM3NSA0NzguMzc1IDE3NiA0OTYgMTc2UzUyOCAxOTAuMzc1IDUyOCAyMDhWMjg4Wk0yMjQgMjU2QzI5NC42OTUgMjU2IDM1MiAxOTguNjkxIDM1MiAxMjhTMjk0LjY5NSAwIDIyNCAwQzE1My4zMTIgMCA5NiA1Ny4zMDkgOTYgMTI4UzE1My4zMTIgMjU2IDIyNCAyNTZaTTMyMCAzMzZDMzIwIDMyNy4zMjggMzIxLjczOCAzMTkuMTI5IDMyNC4zMDMgMzExLjMwNUMzMDguNTY4IDMwNi42MDUgMjkxLjkyOCAzMDQgMjc0LjY2NCAzMDRIMTczLjMzNkM3Ny42MDkgMzA0IDAgMzgxLjYwMiAwIDQ3Ny4zMzJDMCA0OTYuNDc3IDE1LjUyMyA1MTIgMzQuNjY0IDUxMkgzMzYuNDA4QzMyNi4yNTYgNDk4LjU4NiAzMjAgNDgyLjA3OCAzMjAgNDY0VjMzNloiLz48L3N2Zz4=|width=32|height=32)
 */
export default function UserLock(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M592 288H576V212.695C576 170.852 545.967 132.656 504.34 128.422C456.486 123.562 416 161.125 416 208V288H400C373.6 288 352 309.602 352 336V464C352 490.398 373.6 512 400 512H592C618.4 512 640 490.398 640 464V336C640 309.602 618.4 288 592 288ZM496 432C478.375 432 464 417.625 464 400S478.375 368 496 368S528 382.375 528 400S513.625 432 496 432ZM528 288H464V208C464 190.375 478.375 176 496 176S528 190.375 528 208V288ZM224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM320 336C320 327.328 321.738 319.129 324.303 311.305C308.568 306.605 291.928 304 274.664 304H173.336C77.609 304 0 381.602 0 477.332C0 496.477 15.523 512 34.664 512H336.408C326.256 498.586 320 482.078 320 464V336Z" />
        </Icon>
    </>
}