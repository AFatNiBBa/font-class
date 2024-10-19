
import { Icon, generic } from "../../index";

/**
 * A component that renders the `alt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alt?s=duotone alt}
 * @preview ![alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik00MTYgNDE2YzAtMTcuNyAxNC4zLTMyIDMyLTMybDE2MCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xNjAgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MjMgNzZjNi4xLTcuNiAxNS4zLTEyIDI1LTEybDE2MCAwYzE3LjcgMCAzMiAxNC4zIDMyIDMycy0xNC4zIDMyLTMyIDMybC0xNDQuNiAwTDIxNyA0MzZjLTYuMSA3LjYtMTUuMyAxMi0yNSAxMkwzMiA0NDhjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJsMTQ0LjYgMEw0MjMgNzZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Alt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M416 416c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32z" />
            <path d="M423 76c6.1-7.6 15.3-12 25-12l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-144.6 0L217 436c-6.1 7.6-15.3 12-25 12L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l144.6 0L423 76z" />
    </Icon>
);

export default Alt;