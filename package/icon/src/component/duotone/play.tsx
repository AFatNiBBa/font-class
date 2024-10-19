
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `play` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=duotone play}
 * @preview ![play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTE3NiA0ODBDMTQ4LjYxNSA0ODAgMTI4IDQ1Ny42MDggMTI4IDQzMlY4MEMxMjggNTQuNjIgMTQ4LjM5NiAzMi4wMTcgMTc2LjAxMiAzMi4wMTdDMTg0LjY5OCAzMi4wMTcgMTkzLjM2NiAzNC4zNjggMjAxLjAzMSAzOS4wNDdMNDg5LjAzMSAyMTUuMDQ3QzUwMy4yOTcgMjIzLjc2NiA1MTIgMjM5LjI4MSA1MTIgMjU2UzUwMy4yOTcgMjg4LjIzNCA0ODkuMDMxIDI5Ni45NTNMMjAxLjAzMSA0NzIuOTUzQzE5My4zNTkgNDc3LjY0MSAxODQuNjg4IDQ4MCAxNzYgNDgwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Play(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path class={generic.secondary} d="M176 480C148.615 480 128 457.608 128 432V80C128 54.62 148.396 32.017 176.012 32.017C184.698 32.017 193.366 34.368 201.031 39.047L489.031 215.047C503.297 223.766 512 239.281 512 256S503.297 288.234 489.031 296.953L201.031 472.953C193.359 477.641 184.688 480 176 480Z" />
        </Icon>
    </>
}