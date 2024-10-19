
import { Icon, generic } from "../../index";

/**
 * A component that renders the `helmet-safety` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-safety?s=sharp-duotone-solid helmet-safety}
 * @preview ![helmet-safety](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDM4NGwzMiAwIDUxMiAwIDMyIDAgMCAyNHMtODAgNzItMjg4IDcyUzAgNDA4IDAgNDA4bDAtMjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMjQgMzJsMTI4IDAgMCAzNC4zTDM1MiAxNzZsNjQuNS05MC4yQzQ5MS4yIDEyMS41IDU0MyAxOTcuNCA1NDQgMjg1LjZsMCA5OC40TDMyIDM4NGwwLTk2YzAtODkuMiA1Mi4xLTE2Ni4yIDEyNy42LTIwMi4yTDIyNCAxNzZsMC0xMDkuN0wyMjQgMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const HelmetSafety: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 384l32 0 512 0 32 0 0 24s-80 72-288 72S0 408 0 408l0-24z" />
            <path d="M224 32l128 0 0 34.3L352 176l64.5-90.2C491.2 121.5 543 197.4 544 285.6l0 98.4L32 384l0-96c0-89.2 52.1-166.2 127.6-202.2L224 176l0-109.7L224 32z" />
    </Icon>
);

export default HelmetSafety;