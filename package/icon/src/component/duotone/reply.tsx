
import { Icon, generic } from "../../index";

/**
 * A component that renders the `reply` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reply?s=duotone reply}
 * @preview ![reply](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMjQgMTI4bDExMiAwYzk3LjIgMCAxNzYgNzguOCAxNzYgMTc2YzAgMTEzLjMtODEuNSAxNjMuOS0xMDAuMiAxNzQuMWMtMi41IDEuNC01LjMgMS45LTguMSAxLjljLTEwLjkgMC0xOS43LTguOS0xOS43LTE5LjdjMC03LjUgNC4zLTE0LjQgOS44LTE5LjVjOS40LTguOCAyMi4yLTI2LjQgMjIuMi01Ni43YzAtNTMtNDMtOTYtOTYtOTZsLTk2IDAgMC0xNjB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgNjRjMC0xMi42LTcuNC0yNC4xLTE5LTI5LjJzLTI1LTMtMzQuNCA1LjRsLTE2MCAxNDRDMy45IDE5MC4zIDAgMTk4LjkgMCAyMDhzMy45IDE3LjcgMTAuNiAyMy44bDE2MCAxNDRjOS40IDguNSAyMi45IDEwLjYgMzQuNCA1LjRzMTktMTYuNiAxOS0yOS4ybDAtMjg4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Reply: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 128l112 0c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96l-96 0 0-160z" />
            <path d="M224 64c0-12.6-7.4-24.1-19-29.2s-25-3-34.4 5.4l-160 144C3.9 190.3 0 198.9 0 208s3.9 17.7 10.6 23.8l160 144c9.4 8.5 22.9 10.6 34.4 5.4s19-16.6 19-29.2l0-288z" />
    </Icon>
);

export default Reply;