
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-user` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-user?s=duotone file-user}
 * @preview ![file-user](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDMzNkMzNjIuNTEgNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNMTkyIDE5MkMyMjcuMzQ4IDE5MiAyNTYgMjIwLjY1NiAyNTYgMjU2UzIyNy4zNDggMzIwIDE5MiAzMjBDMTU2LjY1NiAzMjAgMTI4IDI5MS4zNDQgMTI4IDI1NlMxNTYuNjU2IDE5MiAxOTIgMTkyWk0yODggNDQ4SDk2Qzg3LjE2NCA0NDggODAgNDQwLjgzNiA4MCA0MzJDODAgMzg3LjgxMiAxMTUuODIgMzUyIDE2MCAzNTJIMjI0QzI2OC4xODQgMzUyIDMwNCAzODcuODEyIDMwNCA0MzJDMzA0IDQ0MC44MzYgMjk2LjgzNiA0NDggMjg4IDQ0OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjU2IDBWMTI4SDM4NEwyNTYgMFpNMTkyIDMyMEMyMjcuMzQ4IDMyMCAyNTYgMjkxLjM0NCAyNTYgMjU2UzIyNy4zNDggMTkyIDE5MiAxOTJDMTU2LjY1NiAxOTIgMTI4IDIyMC42NTYgMTI4IDI1NlMxNTYuNjU2IDMyMCAxOTIgMzIwWk0yMjQgMzUySDE2MEMxMTUuODIgMzUyIDgwIDM4Ny44MTIgODAgNDMyQzgwIDQ0MC44MzYgODcuMTY0IDQ0OCA5NiA0NDhIMjg4QzI5Ni44MzYgNDQ4IDMwNCA0NDAuODM2IDMwNCA0MzJDMzA0IDM4Ny44MTIgMjY4LjE4NCAzNTIgMjI0IDM1MloiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function FileUser(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM192 192C227.348 192 256 220.656 256 256S227.348 320 192 320C156.656 320 128 291.344 128 256S156.656 192 192 192ZM288 448H96C87.164 448 80 440.836 80 432C80 387.812 115.82 352 160 352H224C268.184 352 304 387.812 304 432C304 440.836 296.836 448 288 448Z" />
            <path d="M256 0V128H384L256 0ZM192 320C227.348 320 256 291.344 256 256S227.348 192 192 192C156.656 192 128 220.656 128 256S156.656 320 192 320ZM224 352H160C115.82 352 80 387.812 80 432C80 440.836 87.164 448 96 448H288C296.836 448 304 440.836 304 432C304 387.812 268.184 352 224 352Z" />
        </Icon>
    </>
}