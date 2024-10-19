
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-g` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-g?s=thin circle-g}
 * @preview ![circle-g](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzYgMjU1LjVIMjg4QzI4My41OTQgMjU1LjUgMjgwIDI1OS4wNzggMjgwIDI2My41UzI4My41OTQgMjcxLjUgMjg4IDI3MS41SDM2Ny42ODhDMzY2Ljg3NSAyODEuMjUgMzY0LjYyNSAyOTAuMjUgMzYwLjkwNiAyOTguMzQ0QzM1NS4xODggMzEwLjg1OSAzNDYuNTYyIDMyMy4xNDEgMzM2IDMzMy44OTFDMjk0Ljg3NSAzNzUuNTYyIDIyNy45NjkgMzc4Ljc4MSAxODMuNjI1IDM0MC45NjlDMTU5LjQwNiAzMjAuMzQ0IDE0NS4zNDQgMjkxLjU5NCAxNDQuMDk0IDI2MEMxNDIuODQ0IDIyOC44NDQgMTU0Ljc4MSAxOTguMzI4IDE3Ni44MTIgMTc2LjI5N0MyMTguODc1IDEzNC4yOTcgMjg2LjQwNiAxMzIuMzc1IDMzMC42NTYgMTcyQzMzMy45NjkgMTc0Ljk4NCAzMzkuMDMxIDE3NC43MDMgMzQxLjk2OSAxNzEuMzkxQzM0NC45MDYgMTY4LjA5NCAzNDQuNjI1IDE2My4wMzEgMzQxLjM0NCAxNjAuMDk0QzI5MC43NSAxMTQuNzk3IDIxMy41MzEgMTE2Ljk2OSAxNjUuNSAxNjQuOTg0QzE0MC4zMTIgMTkwLjE1NiAxMjYuNjg4IDIyNS4wMzEgMTI4LjA5NCAyNjAuNjQxQzEyOS41NjIgMjk2LjczNCAxNDUuNTk0IDMyOS41OTQgMTczLjI1IDM1My4xNTZDMTk3IDM3My4zNzUgMjI2LjM3NSAzODMuMzU5IDI1NS43NSAzODMuMzU5QzI4OS4wOTQgMzgzLjM1OSAzMjIuNDM4IDM3MC40ODQgMzQ3LjM3NSAzNDUuMTA5QzM1OS4yNSAzMzMuMDYzIDM2OC45NjkgMzE5LjE4OCAzNzUuNDY5IDMwNUMzODEuMTI1IDI5Mi42NTYgMzg0IDI3OC42ODggMzg0IDI2My41QzM4NCAyNTkuMDc4IDM4MC40MDYgMjU1LjUgMzc2IDI1NS41Wk0yNTYgMTZDMTIzLjQ1MSAxNiAxNiAxMjMuNDUxIDE2IDI1NlMxMjMuNDUxIDQ5NiAyNTYgNDk2UzQ5NiAzODguNTQ5IDQ5NiAyNTZTMzg4LjU0OSAxNiAyNTYgMTZaTTI1NiA0ODBDMTMyLjQ4NiA0ODAgMzIgMzc5LjUxNCAzMiAyNTZTMTMyLjQ4NiAzMiAyNTYgMzJTNDgwIDEzMi40ODYgNDgwIDI1NlMzNzkuNTE0IDQ4MCAyNTYgNDgwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleG(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M376 255.5H288C283.594 255.5 280 259.078 280 263.5S283.594 271.5 288 271.5H367.688C366.875 281.25 364.625 290.25 360.906 298.344C355.188 310.859 346.562 323.141 336 333.891C294.875 375.562 227.969 378.781 183.625 340.969C159.406 320.344 145.344 291.594 144.094 260C142.844 228.844 154.781 198.328 176.812 176.297C218.875 134.297 286.406 132.375 330.656 172C333.969 174.984 339.031 174.703 341.969 171.391C344.906 168.094 344.625 163.031 341.344 160.094C290.75 114.797 213.531 116.969 165.5 164.984C140.312 190.156 126.688 225.031 128.094 260.641C129.562 296.734 145.594 329.594 173.25 353.156C197 373.375 226.375 383.359 255.75 383.359C289.094 383.359 322.438 370.484 347.375 345.109C359.25 333.063 368.969 319.188 375.469 305C381.125 292.656 384 278.688 384 263.5C384 259.078 380.406 255.5 376 255.5ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" />
        </Icon>
    </>
}