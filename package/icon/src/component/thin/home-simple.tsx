
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `home-simple` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/home-simple?s=thin home-simple}
 * @preview ![home-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NzUuOTk3IDI1NS45ODlDNTc1Ljk5NyAyNTMuNzg3IDU3NS4wOTIgMjUxLjU5NCA1NzMuMzEyIDI1MC4wMTZMMjkzLjMxMSAyLjAxNkMyOTEuNzk1IDAuNjczIDI4OS44OTcgMC4wMDEgMjg3Ljk5OCAwLjAwMVMyODQuMjAyIDAuNjczIDI4Mi42ODYgMi4wMTZMMi42ODUgMjUwLjAxNkMwLjkwNSAyNTEuNTk0IDAgMjUzLjc4NyAwIDI1NS45ODlDMCAyNjAuMzExIDMuNDc5IDI2My45ODcgNy45NjkgMjYzLjk4N0M5Ljg2NSAyNjMuOTg3IDExLjc3MyAyNjMuMzE5IDEzLjMxIDI2MS45ODRMNjMuOTk4IDIxNy44MTZWNDQ4QzYzLjk5OCA0ODMuMzQ2IDkyLjY1MSA1MTIgMTI3Ljk5NyA1MTJINDQ3Ljk5OUM0ODMuMzQ1IDUxMiA1MTEuOTk5IDQ4My4zNDYgNTExLjk5OSA0NDhWMjE3LjgxNkw1NjIuNjg3IDI2MS45ODRDNTY0LjIxOCAyNjMuMzI4IDU2Ni4wOTMgMjY0IDU2Ny45OTkgMjY0QzU3Mi40NTggMjY0IDU3NS45OTcgMjYwLjM2MSA1NzUuOTk3IDI1NS45ODlaTTQ0Ny45OTkgNDk2SDEyNy45OThDMTAxLjQ4OCA0OTYgNzkuOTk4IDQ3NC41MSA3OS45OTggNDQ4VjIwMy41OTRMMjg3Ljk5OCAxOC43MDNMNDk1Ljk5OSAyMDMuNTk0VjQ0OEM0OTUuOTk5IDQ3NC41MSA0NzQuNTA5IDQ5NiA0NDcuOTk5IDQ5NlogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function HomeSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M575.997 255.989C575.997 253.787 575.092 251.594 573.312 250.016L293.311 2.016C291.795 0.673 289.897 0.001 287.998 0.001S284.202 0.673 282.686 2.016L2.685 250.016C0.905 251.594 0 253.787 0 255.989C0 260.311 3.479 263.987 7.969 263.987C9.865 263.987 11.773 263.319 13.31 261.984L63.998 217.816V448C63.998 483.346 92.651 512 127.997 512H447.999C483.345 512 511.999 483.346 511.999 448V217.816L562.687 261.984C564.218 263.328 566.093 264 567.999 264C572.458 264 575.997 260.361 575.997 255.989ZM447.999 496H127.998C101.488 496 79.998 474.51 79.998 448V203.594L287.998 18.703L495.999 203.594V448C495.999 474.51 474.509 496 447.999 496Z " />
        </Icon>
    </>
}