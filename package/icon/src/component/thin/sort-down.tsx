
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sort-down` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sort-down?s=thin sort-down}
 * @preview ![sort-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTIuMzQyIDI4OEgyNy42NThDMy4wNTUgMjg4IC05LjIyOSAzMTcuNzczIDguMTE5IDMzNS4xMjFMMTQwLjU4MiA0NzEuODkxQzE0NS45MzQgNDc3LjI5NyAxNTIuOTczIDQ4MCAxNjAuMDI3IDQ4MEMxNjcuMDggNDgwIDE3NC4xNDYgNDc3LjI5NyAxNzkuNTUzIDQ3MS44OTFMMzExLjg4MSAzMzUuMTIxQzMyOS4yMjkgMzE3Ljc3MyAzMTYuOTQ1IDI4OCAyOTIuMzQyIDI4OFpNMzAwLjM4MyAzMjMuOTk2TDE2OC4yMzggNDYwLjU3OEMxNjYuMDMxIDQ2Mi43ODUgMTYzLjExNSA0NjQgMTYwLjAyNyA0NjRDMTU2Ljk2OSA0NjQgMTU0LjEwMiA0NjIuODA1IDE1Mi4wNzYgNDYwLjc2TDE5LjQzNCAzMjMuODA3QzE0LjUwMiAzMTguODc3IDE2LjA0OSAzMTMuMzI2IDE2Ljk0MyAzMTEuMTdDMTcuODM2IDMwOS4wMTQgMjAuNjY4IDMwNCAyNy42NTggMzA0SDI5Mi4zNDJDMjk5LjMzMiAzMDQgMzAyLjE2NCAzMDkuMDE0IDMwMy4wNTcgMzExLjE3QzMwMy45NTEgMzEzLjMyNiAzMDUuNDk4IDMxOC44NzcgMzAwLjM4MyAzMjMuOTk2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SortDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M292.342 288H27.658C3.055 288 -9.229 317.773 8.119 335.121L140.582 471.891C145.934 477.297 152.973 480 160.027 480C167.08 480 174.146 477.297 179.553 471.891L311.881 335.121C329.229 317.773 316.945 288 292.342 288ZM300.383 323.996L168.238 460.578C166.031 462.785 163.115 464 160.027 464C156.969 464 154.102 462.805 152.076 460.76L19.434 323.807C14.502 318.877 16.049 313.326 16.943 311.17C17.836 309.014 20.668 304 27.658 304H292.342C299.332 304 302.164 309.014 303.057 311.17C303.951 313.326 305.498 318.877 300.383 323.996Z" />
        </Icon>
    </>
}