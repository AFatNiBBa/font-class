
import { Icon, generic } from "../../index";

/**
 * A component that renders the `distribute-spacing-vertical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/distribute-spacing-vertical?s=sharp-duotone-solid distribute-spacing-vertical}
 * @preview ![distribute-spacing-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAxNjBsMzIwIDAgMCAxOTJMOTYgMzUybDAtMTkyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTEyIDMyTDAgMzIgMCA4MGw1MTIgMCAwLTQ4em0wIDQwMEwwIDQzMmwwIDQ4IDUxMiAwIDAtNDh6Ii8+PC9zdmc+|width=32|height=32)
 */
const DistributeSpacingVertical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 160l320 0 0 192L96 352l0-192z" />
            <path d="M512 32L0 32 0 80l512 0 0-48zm0 400L0 432l0 48 512 0 0-48z" />
    </Icon>
);

export default DistributeSpacingVertical;