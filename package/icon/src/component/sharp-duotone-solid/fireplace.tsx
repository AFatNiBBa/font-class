
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fireplace` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fireplace?s=sharp-duotone-solid fireplace}
 * @preview ![fireplace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDBMMCA5NmwzMiAwIDU3NiAwIDMyIDAgMC05NkwwIDB6TTIwNy45IDQwMGMwIDYxLjkgNTAuMSAxMTIgMTEyIDExMnMxMTItNTAuMSAxMTItMTEyYzAtMTguNy0xMy40LTY3LjItNjcuMi0xMTJsLTIyLjQgMjIuNC00NC44LTQ0LjhjLTI5LjkgMTguNy04OS42IDcxLjctODkuNiAxMzQuNHptNjcuMiAzMy43YzAtMzMuNiA0NC44LTY3LjIgNDQuOC02Ny4yczQ0LjggMzMuNiA0NC44IDY3LjJjMCAyNC43LTIwLjEgNDQuOC00NC44IDQ0LjhzLTQ0LjgtMjAuMS00NC44LTQ0Ljh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik02MDggOTZMMzIgOTZsMCA0MTYgMTI4IDAgMC0xNjBjMC04OC40IDcxLjYtMTYwIDE2MC0xNjBzMTYwIDcxLjYgMTYwIDE2MGwwIDE2MCAxMjggMCAwLTQxNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Fireplace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 96l32 0 576 0 32 0 0-96L0 0zM207.9 400c0 61.9 50.1 112 112 112s112-50.1 112-112c0-18.7-13.4-67.2-67.2-112l-22.4 22.4-44.8-44.8c-29.9 18.7-89.6 71.7-89.6 134.4zm67.2 33.7c0-33.6 44.8-67.2 44.8-67.2s44.8 33.6 44.8 67.2c0 24.7-20.1 44.8-44.8 44.8s-44.8-20.1-44.8-44.8z" />
            <path d="M608 96L32 96l0 416 128 0 0-160c0-88.4 71.6-160 160-160s160 71.6 160 160l0 160 128 0 0-416z" />
    </Icon>
);

export default Fireplace;