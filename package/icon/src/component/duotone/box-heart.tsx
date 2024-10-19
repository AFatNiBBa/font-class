
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=duotone box-heart}
 * @preview ![box-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwyMDggMCAwLTEyOEw5My43IDMyQzc1LjUgMzIgNTguOSA0Mi4zIDUwLjcgNTguNUwwIDE2MHpNMjQwIDMybDAgMTI4IDIwOCAwTDM5Ny4zIDU4LjVDMzg5LjEgNDIuMyAzNzIuNSAzMiAzNTQuMyAzMkwyNDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMTYwbC0yMDggMCAwLTEyOC0zMiAwIDAgMTI4TDAgMTYwIDAgNDE2YzAgMzUuMyAyOC43IDY0IDY0IDY0bDMyMCAwYzM1LjMgMCA2NC0yOC43IDY0LTY0bDAtMjU2ek0yMTIuNyA0MDQuN2wtNzcuMy03Ny4zYy0yMC41LTIwLjUtMjAuNS01My44IDAtNzQuM3M1My44LTIwLjUgNzQuMyAwTDIyNCAyNjcuNGwxNC4zLTE0LjNjMjAuNS0yMC41IDUzLjgtMjAuNSA3NC4zIDBzMjAuNSA1My44IDAgNzQuM2wtNzcuMyA3Ny4zYy02LjIgNi4yLTE2LjQgNi4yLTIyLjYgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5L0 160zM240 32l0 128 208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32z" />
            <path d="M448 160l-208 0 0-128-32 0 0 128L0 160 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256zM212.7 404.7l-77.3-77.3c-20.5-20.5-20.5-53.8 0-74.3s53.8-20.5 74.3 0L224 267.4l14.3-14.3c20.5-20.5 53.8-20.5 74.3 0s20.5 53.8 0 74.3l-77.3 77.3c-6.2 6.2-16.4 6.2-22.6 0z" />
    </Icon>
);

export default BoxHeart;