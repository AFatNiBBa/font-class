
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-heart` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-heart?s=sharp-duotone-solid box-heart}
 * @preview ![box-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGwyMDggMCAwLTEyOEw2NCAzMiAwIDE2MHpNMjQwIDMybDAgMTI4IDIwOCAwTDM4NCAzMiAyNDAgMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00NDggMTYwbC0yMDggMCAwLTEyOC0zMiAwIDAgMTI4TDAgMTYwIDAgNDgwbDQ0OCAwIDAtMzIwek0yMjQgNDA4bC04Ni43LTgxLjJjLTIxLjMtMjAtMjEuOS01My42LTEuMi03NC4yYzIwLjItMjAuMiA1Mi45LTIwLjIgNzMuMSAwTDIyNCAyNjcuNGwxNC45LTE0LjljMjAuMi0yMC4yIDUyLjktMjAuMiA3My4xIDBjMjAuNiAyMC42IDIwLjEgNTQuMy0xLjIgNzQuMkwyMjQgNDA4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const BoxHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l208 0 0-128L64 32 0 160zM240 32l0 128 208 0L384 32 240 32z" />
            <path d="M448 160l-208 0 0-128-32 0 0 128L0 160 0 480l448 0 0-320zM224 408l-86.7-81.2c-21.3-20-21.9-53.6-1.2-74.2c20.2-20.2 52.9-20.2 73.1 0L224 267.4l14.9-14.9c20.2-20.2 52.9-20.2 73.1 0c20.6 20.6 20.1 54.3-1.2 74.2L224 408z" />
    </Icon>
);

export default BoxHeart;