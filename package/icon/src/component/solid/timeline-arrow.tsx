
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `timeline-arrow` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/timeline-arrow?s=solid timeline-arrow}
 * @preview ![timeline-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjcuMTg4IDIzMC40MDZMNTMxLjE4OCAxNTguNDA2QzUxNy4wNjMgMTQ3Ljc4MSA0OTcgMTUwLjY4OCA0ODYuNDA2IDE2NC43OTdDNDc1Ljc4MSAxNzguOTM3IDQ3OC42NTYgMTk5IDQ5Mi44MTIgMjA5LjU5NEw1MTIuMDEyIDIyNEgzODRWMTUzLjI0NkM0MTIuMjMyIDE0MC44OTEgNDMyIDExMi43ODUgNDMyIDgwQzQzMiAzNS44MiAzOTYuMTg0IDAgMzUyIDBDMzA3LjgxOCAwIDI3MiAzNS44MiAyNzIgODBDMjcyIDExMi43ODUgMjkxLjc3MSAxNDAuODkxIDMyMCAxNTMuMjQ2VjIyNEgxNjBWMTUzLjI0NkMxODguMjMyIDE0MC44OTEgMjA4IDExMi43ODUgMjA4IDgwQzIwOCAzNS44MiAxNzIuMTg0IDAgMTI4IDBDODMuODE4IDAgNDggMzUuODIgNDggODBDNDggMTEyLjc4NSA2Ny43NzEgMTQwLjg5MSA5NiAxNTMuMjQ2VjIyNEgzMkMxNC4zMzQgMjI0IDAgMjM4LjMzNCAwIDI1NlMxNC4zMzQgMjg4IDMyIDI4OEgxOTJWMzU4Ljc1NEMxNjMuNzY4IDM3MS4xMDkgMTQ0IDM5OS4yMTUgMTQ0IDQzMkMxNDQgNDc2LjE4IDE3OS44MTYgNTEyIDIyNCA1MTJDMjY4LjE4MiA1MTIgMzA0IDQ3Ni4xOCAzMDQgNDMyQzMwNCAzOTkuMjE1IDI4NC4yMjkgMzcxLjEwOSAyNTYgMzU4Ljc1NFYyODhINTEyLjAxMkw0OTIuODEyIDMwMi40MDZDNDc4LjY1NiAzMTMgNDc1Ljc4MSAzMzMuMDYyIDQ4Ni40MDYgMzQ3LjIwM0M0OTIuNjg4IDM1NS41NzggNTAyLjI4MSAzNjAgNTEyLjAzMSAzNjBDNTE4LjcxOSAzNjAgNTI1LjQzOCAzNTcuOTIyIDUzMS4xODggMzUzLjU5NEw2MjcuMTg4IDI4MS41OTRDNjM1LjI1IDI3NS41NjIgNjQwIDI2Ni4wNzggNjQwIDI1NlM2MzUuMjUgMjM2LjQzOCA2MjcuMTg4IDIzMC40MDZaTTM1MiA0OEMzNjkuNjQ1IDQ4IDM4NCA2Mi4zNTUgMzg0IDgwUzM2OS42NDUgMTEyIDM1MiAxMTJTMzIwIDk3LjY0NSAzMjAgODBTMzM0LjM1NSA0OCAzNTIgNDhaTTEyOCA0OEMxNDUuNjQ1IDQ4IDE2MCA2Mi4zNTUgMTYwIDgwUzE0NS42NDUgMTEyIDEyOCAxMTJTOTYgOTcuNjQ1IDk2IDgwUzExMC4zNTUgNDggMTI4IDQ4Wk0yMjQgNDY0QzIwNi4zNTUgNDY0IDE5MiA0NDkuNjQ1IDE5MiA0MzJTMjA2LjM1NSA0MDAgMjI0IDQwMFMyNTYgNDE0LjM1NSAyNTYgNDMyUzI0MS42NDUgNDY0IDIyNCA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TimelineArrow(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M627.188 230.406L531.188 158.406C517.063 147.781 497 150.688 486.406 164.797C475.781 178.937 478.656 199 492.812 209.594L512.012 224H384V153.246C412.232 140.891 432 112.785 432 80C432 35.82 396.184 0 352 0C307.818 0 272 35.82 272 80C272 112.785 291.771 140.891 320 153.246V224H160V153.246C188.232 140.891 208 112.785 208 80C208 35.82 172.184 0 128 0C83.818 0 48 35.82 48 80C48 112.785 67.771 140.891 96 153.246V224H32C14.334 224 0 238.334 0 256S14.334 288 32 288H192V358.754C163.768 371.109 144 399.215 144 432C144 476.18 179.816 512 224 512C268.182 512 304 476.18 304 432C304 399.215 284.229 371.109 256 358.754V288H512.012L492.812 302.406C478.656 313 475.781 333.062 486.406 347.203C492.688 355.578 502.281 360 512.031 360C518.719 360 525.438 357.922 531.188 353.594L627.188 281.594C635.25 275.562 640 266.078 640 256S635.25 236.438 627.188 230.406ZM352 48C369.645 48 384 62.355 384 80S369.645 112 352 112S320 97.645 320 80S334.355 48 352 48ZM128 48C145.645 48 160 62.355 160 80S145.645 112 128 112S96 97.645 96 80S110.355 48 128 48ZM224 464C206.355 464 192 449.645 192 432S206.355 400 224 400S256 414.355 256 432S241.645 464 224 464Z" />
        </Icon>
    </>
}