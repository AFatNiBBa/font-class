
import { Icon, generic } from "../../index";

/**
 * A component that renders the `comments` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/comments?s=sharp-duotone-solid comments}
 * @preview ![comments](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMzEuNSAzODNDMzQ4LjkgMzcyLjkgNDQ4IDI4OC4zIDQ0OCAxNzZjMC01LjItLjItMTAuNC0uNi0xNS41QzU1NS4xIDE2Ny4xIDY0MCAyNDMuMiA2NDAgMzM2YzAgMzcuNS0xMy45IDcyLjMtMzcuNiAxMDAuOUw2NDAgNTEyIDUzMS45IDQ5MC40QzUwMi4zIDUwNC4yIDQ2OC4yIDUxMiA0MzIgNTEyYy05NS42IDAtMTc2LjItNTQuNi0yMDAuNS0xMjl6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMDggMzUyYzExNC45IDAgMjA4LTc4LjggMjA4LTE3NlMzMjIuOSAwIDIwOCAwUzAgNzguOCAwIDE3NmMwIDM3LjUgMTMuOSA3Mi4zIDM3LjYgMTAwLjlMMCAzNTJsMTA4LjEtMjEuNkMxMzcuNyAzNDQuMiAxNzEuOCAzNTIgMjA4IDM1MnoiLz48L3N2Zz4=|width=32|height=32)
 */
const Comments: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M231.5 383C348.9 372.9 448 288.3 448 176c0-5.2-.2-10.4-.6-15.5C555.1 167.1 640 243.2 640 336c0 37.5-13.9 72.3-37.6 100.9L640 512 531.9 490.4C502.3 504.2 468.2 512 432 512c-95.6 0-176.2-54.6-200.5-129z" />
            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 37.5 13.9 72.3 37.6 100.9L0 352l108.1-21.6C137.7 344.2 171.8 352 208 352z" />
    </Icon>
);

export default Comments;