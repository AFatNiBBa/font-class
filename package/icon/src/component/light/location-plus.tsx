
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `location-plus` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/location-plus?s=light location-plus}
 * @preview ![location-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzEuOTQzIDE5MkgyMDcuOTQzVjEyOEMyMDcuOTQzIDExOS4xNTYgMjAwLjc4NyAxMTIgMTkxLjk0MyAxMTJTMTc1Ljk0MyAxMTkuMTU2IDE3NS45NDMgMTI4VjE5MkgxMTEuOTQzQzEwMy4xIDE5MiA5NS45NDMgMTk5LjE1NiA5NS45NDMgMjA4UzEwMy4xIDIyNCAxMTEuOTQzIDIyNEgxNzUuOTQzVjI4OEMxNzUuOTQzIDI5Ni44NDQgMTgzLjEgMzA0IDE5MS45NDMgMzA0UzIwNy45NDMgMjk2Ljg0NCAyMDcuOTQzIDI4OFYyMjRIMjcxLjk0M0MyODAuNzg3IDIyNCAyODcuOTQzIDIxNi44NDQgMjg3Ljk0MyAyMDhTMjgwLjc4NyAxOTIgMjcxLjk0MyAxOTJaTTE5MiAwQzg1Ljk2OSAwIDAgODUuOTY5IDAgMTkyQzAgMjY5LjQxIDI2Ljk2OSAyOTEuMDM1IDE3Mi4yODEgNTAxLjY3NkMxNzcuMDQ3IDUwOC41NTkgMTg0LjUyMyA1MTIgMTkyIDUxMlMyMDYuOTUzIDUwOC41NTkgMjExLjcxOSA1MDEuNjc2QzM1Ny4wMzEgMjkxLjAzNSAzODQgMjY5LjQxIDM4NCAxOTJDMzg0IDg1Ljk2OSAyOTguMDMxIDAgMTkyIDBaTTE5MiA0NzMuOTE4QzUxLjkzMiAyNzEuMzc5IDMyIDI1NS45NjkgMzIgMTkyQzMyIDEwMy43NzcgMTAzLjc3NSAzMiAxOTIgMzJTMzUyIDEwMy43NzcgMzUyIDE5MkMzNTIgMjU1Ljg3OSAzMzIuNTY2IDI3MC42NzQgMTkyIDQ3My45MThaIi8+PC9zdmc+|width=32|height=32)
 */
export default function LocationPlus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M271.943 192H207.943V128C207.943 119.156 200.787 112 191.943 112S175.943 119.156 175.943 128V192H111.943C103.1 192 95.943 199.156 95.943 208S103.1 224 111.943 224H175.943V288C175.943 296.844 183.1 304 191.943 304S207.943 296.844 207.943 288V224H271.943C280.787 224 287.943 216.844 287.943 208S280.787 192 271.943 192ZM192 0C85.969 0 0 85.969 0 192C0 269.41 26.969 291.035 172.281 501.676C177.047 508.559 184.523 512 192 512S206.953 508.559 211.719 501.676C357.031 291.035 384 269.41 384 192C384 85.969 298.031 0 192 0ZM192 473.918C51.932 271.379 32 255.969 32 192C32 103.777 103.775 32 192 32S352 103.777 352 192C352 255.879 332.566 270.674 192 473.918Z" />
        </Icon>
    </>
}