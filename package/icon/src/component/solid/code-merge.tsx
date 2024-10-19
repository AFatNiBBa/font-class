
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=solid code-merge}
 * @preview ![code-merge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTkyQzMzNS4yMTMgMTkyIDMwNy4xMDkgMjExLjc2NiAyOTQuNzU0IDI0MEgyMjRDMTcwLjQzIDI0MCAxMjUuNjMxIDIwMi4xMzMgMTE0LjY3IDE1MS43OTdDMTQxLjQxIDEzOC44NTIgMTYwIDExMS43MDMgMTYwIDgwQzE2MCAzNS44MTYgMTI0LjE4NCAwIDgwIDBDMzUuODE4IDAgMCAzNS44MTYgMCA4MEMwIDExMi43ODkgMTkuNzcxIDE0MC44OTEgNDggMTUzLjI0NlYzNTguNzU0QzE5Ljc3MSAzNzEuMTA5IDAgMzk5LjIxMSAwIDQzMkMwIDQ3Ni4xODQgMzUuODE4IDUxMiA4MCA1MTJDMTI0LjE4NCA1MTIgMTYwIDQ3Ni4xODQgMTYwIDQzMkMxNjAgMzk5LjIxMSAxNDAuMjMyIDM3MS4xMDkgMTEyIDM1OC43NTRWMjYzLjY1NkMxNDIuNDUxIDI4OC44NDQgMTgxLjQ4OCAzMDQgMjI0IDMwNEgyOTQuNzU0QzMwNy4xMDkgMzMyLjIzNCAzMzUuMjEzIDM1MiAzNjggMzUyQzQxMi4xODQgMzUyIDQ0OCAzMTYuMTg0IDQ0OCAyNzJTNDEyLjE4NCAxOTIgMzY4IDE5MlpNODAgNTZDOTMuMjM0IDU2IDEwNCA2Ni43NjYgMTA0IDgwUzkzLjIzNCAxMDQgODAgMTA0QzY2Ljc2OCAxMDQgNTYgOTMuMjM0IDU2IDgwUzY2Ljc2OCA1NiA4MCA1NlpNODAgNDU2QzY2Ljc2OCA0NTYgNTYgNDQ1LjIzNCA1NiA0MzJTNjYuNzY4IDQwOCA4MCA0MDhDOTMuMjM0IDQwOCAxMDQgNDE4Ljc2NiAxMDQgNDMyUzkzLjIzNCA0NTYgODAgNDU2Wk0zNjggMjk2QzM1NC43NjggMjk2IDM0NCAyODUuMjM0IDM0NCAyNzJTMzU0Ljc2OCAyNDggMzY4IDI0OEMzODEuMjM0IDI0OCAzOTIgMjU4Ljc2NiAzOTIgMjcyUzM4MS4yMzQgMjk2IDM2OCAyOTZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CodeMerge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M368 192C335.213 192 307.109 211.766 294.754 240H224C170.43 240 125.631 202.133 114.67 151.797C141.41 138.852 160 111.703 160 80C160 35.816 124.184 0 80 0C35.818 0 0 35.816 0 80C0 112.789 19.771 140.891 48 153.246V358.754C19.771 371.109 0 399.211 0 432C0 476.184 35.818 512 80 512C124.184 512 160 476.184 160 432C160 399.211 140.232 371.109 112 358.754V263.656C142.451 288.844 181.488 304 224 304H294.754C307.109 332.234 335.213 352 368 352C412.184 352 448 316.184 448 272S412.184 192 368 192ZM80 56C93.234 56 104 66.766 104 80S93.234 104 80 104C66.768 104 56 93.234 56 80S66.768 56 80 56ZM80 456C66.768 456 56 445.234 56 432S66.768 408 80 408C93.234 408 104 418.766 104 432S93.234 456 80 456ZM368 296C354.768 296 344 285.234 344 272S354.768 248 368 248C381.234 248 392 258.766 392 272S381.234 296 368 296Z" />
        </Icon>
    </>
}