
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `trash-list` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/trash-list?s=solid trash-list}
 * @preview ![trash-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJIMzIwTDMwOC40MjIgOC44NDRDMzA1LjcxMyAzLjQyNCAzMDAuMTcyIDAgMjk0LjExMSAwSDEyMS44ODlDMTE1LjgyOCAwIDExMC4yODkgMy40MjQgMTA3LjU3OCA4Ljg0NEw5NiAzMkgxNkM3LjE2NCAzMiAwIDM5LjE2MiAwIDQ4VjgwQzAgODguODM2IDcuMTY0IDk2IDE2IDk2SDQwMEM0MDguODM4IDk2IDQxNiA4OC44MzYgNDE2IDgwVjQ4QzQxNiAzOS4xNjIgNDA4LjgzOCAzMiA0MDAgMzJaTTUzLjE4OCA0NjdDNTQuNzUgNDkxLjg0NCA3Ni4yMTkgNTEyIDEwMS4wOTQgNTEySDMxNC45MDZDMzM5Ljc4MSA1MTIgMzYxLjI1IDQ5MS44NDQgMzYyLjgxMiA0NjdMMzg0IDEyOEgzMkw1My4xODggNDY3Wk02MDggMTI4SDQ4MEM0NjIuMzI3IDEyOCA0NDggMTQyLjMyNyA0NDggMTYwVjE2MEM0NDggMTc3LjY3MyA0NjIuMzI3IDE5MiA0ODAgMTkySDYwOEM2MjUuNjczIDE5MiA2NDAgMTc3LjY3MyA2NDAgMTYwVjE2MEM2NDAgMTQyLjMyNyA2MjUuNjczIDEyOCA2MDggMTI4Wk01MTIgMzg0SDQ4MEM0NjIuMzI3IDM4NCA0NDggMzk4LjMyNyA0NDggNDE2VjQxNkM0NDggNDMzLjY3MyA0NjIuMzI3IDQ0OCA0ODAgNDQ4SDUxMkM1MjkuNjczIDQ0OCA1NDQgNDMzLjY3MyA1NDQgNDE2VjQxNkM1NDQgMzk4LjMyNyA1MjkuNjczIDM4NCA1MTIgMzg0Wk01NzYgMjU2SDQ4MEM0NjIuMzI3IDI1NiA0NDggMjcwLjMyNyA0NDggMjg4VjI4OEM0NDggMzA1LjY3MyA0NjIuMzI3IDMyMCA0ODAgMzIwSDU3NkM1OTMuNjczIDMyMCA2MDggMzA1LjY3MyA2MDggMjg4VjI4OEM2MDggMjcwLjMyNyA1OTMuNjczIDI1NiA1NzYgMjU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function TrashList(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M400 32H320L308.422 8.844C305.713 3.424 300.172 0 294.111 0H121.889C115.828 0 110.289 3.424 107.578 8.844L96 32H16C7.164 32 0 39.162 0 48V80C0 88.836 7.164 96 16 96H400C408.838 96 416 88.836 416 80V48C416 39.162 408.838 32 400 32ZM53.188 467C54.75 491.844 76.219 512 101.094 512H314.906C339.781 512 361.25 491.844 362.812 467L384 128H32L53.188 467ZM608 128H480C462.327 128 448 142.327 448 160V160C448 177.673 462.327 192 480 192H608C625.673 192 640 177.673 640 160V160C640 142.327 625.673 128 608 128ZM512 384H480C462.327 384 448 398.327 448 416V416C448 433.673 462.327 448 480 448H512C529.673 448 544 433.673 544 416V416C544 398.327 529.673 384 512 384ZM576 256H480C462.327 256 448 270.327 448 288V288C448 305.673 462.327 320 480 320H576C593.673 320 608 305.673 608 288V288C608 270.327 593.673 256 576 256Z" />
        </Icon>
    </>
}