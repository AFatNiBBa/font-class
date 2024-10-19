
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-triangle-square` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-triangle-square?s=thin arrow-up-triangle-square}
 * @preview ![arrow-up-triangle-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuMDA4IDI4OC4wMTRIMzA0LjAwNkMyODYuMzMyIDI4OC4wMTQgMjcyLjAwNiAzMDIuMzQgMjcyLjAwNiAzMjAuMDE0VjQ0OEMyNzIuMDA2IDQ2NS42NzQgMjg2LjMzMiA0ODAgMzA0LjAwNiA0ODBINDMyLjAwOEM0NDkuNjggNDgwIDQ2NC4wMDggNDY1LjY3NCA0NjQuMDA4IDQ0OFYzMjAuMDE0QzQ2NC4wMDggMzAyLjM0IDQ0OS42OCAyODguMDE0IDQzMi4wMDggMjg4LjAxNFpNNDQ4LjAwOCA0NDhDNDQ4LjAwOCA0NTYuODIyIDQ0MC44MyA0NjQgNDMyLjAwOCA0NjRIMzA0LjAwNkMyOTUuMTg0IDQ2NCAyODguMDA2IDQ1Ni44MjIgMjg4LjAwNiA0NDhWMzIwLjAxNEMyODguMDA2IDMxMS4xOTEgMjk1LjE4NCAzMDQuMDE0IDMwNC4wMDYgMzA0LjAxNEg0MzIuMDA4QzQ0MC44MyAzMDQuMDE0IDQ0OC4wMDggMzExLjE5MSA0NDguMDA4IDMyMC4wMTRWNDQ4Wk00NzYuMTMzIDE4Mi44OTVMMzkzLjAwNiA0NS43NzlDMzg3LjQ0MyAzNi41OTQgMzc3Ljc1NiAzMiAzNjguMDY4IDMyUzM0OC42OTMgMzYuNTk0IDM0My4xMzEgNDUuNzc5TDI1OS44ODEgMTgyLjg5NUMyNDguODgxIDIwMS4xNDUgMjYyLjYzMSAyMjQuMDE4IDI4NC44ODEgMjI0LjAxOEg0NTEuMTMzQzQ3My4zODMgMjI0LjAxOCA0ODcuMTMzIDIwMS4xNDUgNDc2LjEzMyAxODIuODk1Wk00NjIuNTkyIDIwMS43MDdDNDYwLjM2MSAyMDUuNjU4IDQ1Ni4wNzYgMjA4LjAxOCA0NTEuMTMzIDIwOC4wMThIMjg0Ljg4MUMyNzkuOTM2IDIwOC4wMTggMjc1LjY1MiAyMDUuNjU4IDI3My40MiAyMDEuNzA3QzI3Mi4zMDEgMTk5LjcyNyAyNzAuODMyIDE5NS43MTkgMjczLjU1NyAxOTEuMTk5TDM1Ni44MTggNTQuMDY2QzM2MC4xMzMgNDguNTkyIDM2NS43OTEgNDggMzY4LjA2OCA0OEMzNzAuMzQ4IDQ4IDM3Ni4wMDQgNDguNTkyIDM3OS4zMjQgNTQuMDc0TDQ2Mi40MyAxOTEuMTU0QzQ2NS4xOCAxOTUuNzE5IDQ2My43MTMgMTk5LjcyNyA0NjIuNTkyIDIwMS43MDdaTTEzMy45MDYgMzQuNDg0QzEzMC44NDQgMzEuMTcyIDEyNS4xNTYgMzEuMTcyIDEyMi4wOTQgMzQuNDg0TDM0LjA5IDEzMC41MDhDMzEuMTIxIDEzMy43NiAzMS4zNCAxMzguODIyIDM0LjU5IDE0MS44MjRDMzcuODQgMTQ0LjgyNCA0Mi45MDIgMTQ0LjYwNSA0NS45MDQgMTQxLjMyNEwxMjAgNjAuNDcxVjQ3MS45OThDMTIwIDQ3Ni40MDYgMTIzLjU5NCA0ODAgMTI4IDQ4MFMxMzYgNDc2LjQwNiAxMzYgNDcxLjk5OFY2MC40NzFMMjEwLjA5OCAxNDEuMzI0QzIxMS42OTEgMTQzLjA0MyAyMTMuODQ4IDE0My45MTggMjE2LjAwNCAxNDMuOTE4QzIxNy45NDEgMTQzLjkxOCAyMTkuODc5IDE0My4yMyAyMjEuNDEgMTQxLjgyNEMyMjQuNjYgMTM4LjgyMiAyMjQuODc5IDEzMy43NiAyMjEuOTEgMTMwLjUwOEwxMzMuOTA2IDM0LjQ4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowUpTriangleSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M432.008 288.014H304.006C286.332 288.014 272.006 302.34 272.006 320.014V448C272.006 465.674 286.332 480 304.006 480H432.008C449.68 480 464.008 465.674 464.008 448V320.014C464.008 302.34 449.68 288.014 432.008 288.014ZM448.008 448C448.008 456.822 440.83 464 432.008 464H304.006C295.184 464 288.006 456.822 288.006 448V320.014C288.006 311.191 295.184 304.014 304.006 304.014H432.008C440.83 304.014 448.008 311.191 448.008 320.014V448ZM476.133 182.895L393.006 45.779C387.443 36.594 377.756 32 368.068 32S348.693 36.594 343.131 45.779L259.881 182.895C248.881 201.145 262.631 224.018 284.881 224.018H451.133C473.383 224.018 487.133 201.145 476.133 182.895ZM462.592 201.707C460.361 205.658 456.076 208.018 451.133 208.018H284.881C279.936 208.018 275.652 205.658 273.42 201.707C272.301 199.727 270.832 195.719 273.557 191.199L356.818 54.066C360.133 48.592 365.791 48 368.068 48C370.348 48 376.004 48.592 379.324 54.074L462.43 191.154C465.18 195.719 463.713 199.727 462.592 201.707ZM133.906 34.484C130.844 31.172 125.156 31.172 122.094 34.484L34.09 130.508C31.121 133.76 31.34 138.822 34.59 141.824C37.84 144.824 42.902 144.605 45.904 141.324L120 60.471V471.998C120 476.406 123.594 480 128 480S136 476.406 136 471.998V60.471L210.098 141.324C211.691 143.043 213.848 143.918 216.004 143.918C217.941 143.918 219.879 143.23 221.41 141.824C224.66 138.822 224.879 133.76 221.91 130.508L133.906 34.484Z" />
        </Icon>
    </>
}