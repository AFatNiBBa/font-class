
import { Icon, generic } from "../../index";

/**
 * A component that renders the `retweet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/retweet?s=sharp-duotone-solid retweet}
 * @preview ![retweet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yNzIgOTZsMCA2NCAzMiAwIDE0NCAwIDAgMTYwLTY0IDAgMCAzMiA5NiA5NiA5Ni05NiAwLTMyLTY0IDAgMC0xOTIgMC0zMi0zMiAwTDMwNCA5NmwtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDY0TDAgMTYwbDAgMzIgNjQgMCAwIDE5MiAwIDMyIDMyIDAgMTc2IDAgMzIgMCAwLTY0LTMyIDAtMTQ0IDAgMC0xNjAgNjQgMCAwLTMyTDk2IDY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Retweet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M272 96l0 64 32 0 144 0 0 160-64 0 0 32 96 96 96-96 0-32-64 0 0-192 0-32-32 0L304 96l-32 0z" />
            <path d="M96 64L0 160l0 32 64 0 0 192 0 32 32 0 176 0 32 0 0-64-32 0-144 0 0-160 64 0 0-32L96 64z" />
    </Icon>
);

export default Retweet;