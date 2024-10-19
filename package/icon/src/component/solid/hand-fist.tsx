
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-fist` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fist?s=solid hand-fist}
 * @preview ![hand-fist](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgMTgwLjQxVjMyQzIyNCAxNC4zMjggMjA5LjY4OCAwIDE5MiAwUzE2MCAxNC4zMjggMTYwIDMyVjE3NkgyMDBDMjA4LjQ1OSAxNzYgMjE2LjQ1OSAxNzcuNzI5IDIyNCAxODAuNDFaTTEyOCAxNzZWNjRDMTI4IDQ2LjMyOCAxMTMuNjg4IDMyIDk2IDMyUzY0IDQ2LjMyOCA2NCA2NFYxNzYuODA3QzY2LjY2IDE3Ni41MDggNjkuMjYgMTc2IDcyIDE3NkgxMjhaTTI4OCAxOTJDMzA1LjY4OCAxOTIgMzIwIDE3Ny42NzIgMzIwIDE2MFY2NEMzMjAgNDYuMzI4IDMwNS42ODggMzIgMjg4IDMyUzI1NiA0Ni4zMjggMjU2IDY0VjE2MEMyNTYgMTc3LjY3MiAyNzAuMzEyIDE5MiAyODggMTkyWk0zODQgOTZDMzY2LjMxMiA5NiAzNTIgMTEwLjMyOCAzNTIgMTI4VjE5MkMzNTIgMjA5LjY3MiAzNjYuMzEyIDIyNCAzODQgMjI0UzQxNiAyMDkuNjcyIDQxNiAxOTJWMTI4QzQxNiAxMTAuMzI4IDQwMS42ODggOTYgMzg0IDk2Wk0zNTAuODY3IDI0Ni4xNUMzMzguNDM4IDIzOC41MDIgMzI4LjkyOCAyMjYuODQgMzIzLjk4NCAyMTIuOUMzMTMuNzI3IDIxOS44OTMgMzAxLjM0OCAyMjQgMjg4IDIyNEMyODAuMzU5IDIyNCAyNzMuMTM1IDIyMi40MzYgMjY2LjM0MiAyMTkuOThDMjY5Ljk4NCAyMjguNTk0IDI3MiAyMzguMDYxIDI3MiAyNDhDMjcyIDI4Ny43NjYgMjM5Ljc1IDMyMCAyMDAgMzIwSDEyOEMxMTkuMTY0IDMyMCAxMTIgMzEyLjgzNiAxMTIgMzA0QzExMiAyOTUuMTYyIDExOS4xNjQgMjg4IDEyOCAyODhIMjAwQzIyMi4wOTQgMjg4IDI0MCAyNzAuMDk0IDI0MCAyNDhTMjIyLjA5NCAyMDggMjAwIDIwOEg3MkM0OS45MDYgMjA4IDMyIDIyNS45MDYgMzIgMjQ4VjMxMS40MDZDMzIgMzQ0LjUzMSA0OCAzNzUuOTY5IDc0LjgxMiAzOTUuNTMxTDEyOCA0MzQuMjAxVjUxMkgzNTJWNDI2LjkwOEMzOTAuMzAxIDQwMi44MjIgNDE2IDM2MC40ODQgNDE2IDMxMlYyNDcuMTIxQzQwNi41NTMgMjUyLjYxOSAzOTUuNzE3IDI1NiAzODQgMjU2QzM3MS43MzIgMjU2IDM2MC41NDUgMjUyLjE4OCAzNTAuODY3IDI0Ni4xNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HandFist(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M224 180.41V32C224 14.328 209.688 0 192 0S160 14.328 160 32V176H200C208.459 176 216.459 177.729 224 180.41ZM128 176V64C128 46.328 113.688 32 96 32S64 46.328 64 64V176.807C66.66 176.508 69.26 176 72 176H128ZM288 192C305.688 192 320 177.672 320 160V64C320 46.328 305.688 32 288 32S256 46.328 256 64V160C256 177.672 270.312 192 288 192ZM384 96C366.312 96 352 110.328 352 128V192C352 209.672 366.312 224 384 224S416 209.672 416 192V128C416 110.328 401.688 96 384 96ZM350.867 246.15C338.438 238.502 328.928 226.84 323.984 212.9C313.727 219.893 301.348 224 288 224C280.359 224 273.135 222.436 266.342 219.98C269.984 228.594 272 238.061 272 248C272 287.766 239.75 320 200 320H128C119.164 320 112 312.836 112 304C112 295.162 119.164 288 128 288H200C222.094 288 240 270.094 240 248S222.094 208 200 208H72C49.906 208 32 225.906 32 248V311.406C32 344.531 48 375.969 74.812 395.531L128 434.201V512H352V426.908C390.301 402.822 416 360.484 416 312V247.121C406.553 252.619 395.717 256 384 256C371.732 256 360.545 252.188 350.867 246.15Z" />
        </Icon>
    </>
}