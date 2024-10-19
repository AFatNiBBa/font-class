
import { Icon, generic } from "../../index";

/**
 * A component that renders the `utensils` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utensils?s=sharp-duotone-solid utensils}
 * @preview ![utensils](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE2MGMwIDQ3LjYgMzQuNiA4Ny4xIDgwIDk0LjdjNS4yIC45IDEwLjUgMS4zIDE2IDEuM2wzMiAwYzUuNSAwIDEwLjgtLjUgMTYtMS4zYzQ1LjQtNy42IDgwLTQ3LjEgODAtOTQuN0wxOTIgMCAxNjAgMGwwIDE2MC0xNiAwTDEyOCAwIDk2IDAgODAgMTYwbC0xNiAwTDY0IDAgMzIgMCAwIDE2MHptMjg4IDE2bDAgMTc2IDk2IDAgNjQgMEw0NDggMEM0MTYgMCAyODggMzIgMjg4IDE3NnoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTk2IDI1NmMtNS41IDAtMTAuOC0uNS0xNi0xLjNMODAgMjcybDAgMjA4IDAgMzIgNjQgMCAwLTMyIDAtMjA4IDAtMTcuM2MtNS4yIC45LTEwLjUgMS4zLTE2IDEuM2wtMzIgMHpNNDQ4IDM4NGwwLTMyLTY0IDAgMCAzMiAwIDk2IDAgMzIgNjQgMCAwLTMyIDAtOTZ6Ii8+PC9zdmc+|width=32|height=32)
 */
const Utensils: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160c0 47.6 34.6 87.1 80 94.7c5.2 .9 10.5 1.3 16 1.3l32 0c5.5 0 10.8-.5 16-1.3c45.4-7.6 80-47.1 80-94.7L192 0 160 0l0 160-16 0L128 0 96 0 80 160l-16 0L64 0 32 0 0 160zm288 16l0 176 96 0 64 0L448 0C416 0 288 32 288 176z" />
            <path d="M96 256c-5.5 0-10.8-.5-16-1.3L80 272l0 208 0 32 64 0 0-32 0-208 0-17.3c-5.2 .9-10.5 1.3-16 1.3l-32 0zM448 384l0-32-64 0 0 32 0 96 0 32 64 0 0-32 0-96z" />
    </Icon>
);

export default Utensils;