
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-sharp-half` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp-half?s=sharp-duotone-solid star-sharp-half}
 * @preview ![star-sharp-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggLjJsMCAzOTFMNDU0LjMgNTEyIDM5MC44IDMxNi40IDU1Ny4xIDE5NS42bC0yMDUuNiAwTDI4OCAuMnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTI4OCAzOTEuMmwwLTM5MUwyMjQuNSAxOTUuNmwtMjA1LjYgMEwxODUuMiAzMTYuNCAxMjEuNyA1MTIgMjg4IDM5MS4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const StarSharpHalf: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 .2l0 391L454.3 512 390.8 316.4 557.1 195.6l-205.6 0L288 .2z" />
            <path d="M288 391.2l0-391L224.5 195.6l-205.6 0L185.2 316.4 121.7 512 288 391.2z" />
    </Icon>
);

export default StarSharpHalf;