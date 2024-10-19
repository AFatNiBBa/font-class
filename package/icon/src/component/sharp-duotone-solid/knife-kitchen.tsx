
import { Icon, generic } from "../../index";

/**
 * A component that renders the `knife-kitchen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife-kitchen?s=sharp-duotone-solid knife-kitchen}
 * @preview ![knife-kitchen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MHM0OCAzMiAxMTIgMzJjMTYwIDAgMjk2LTE1MiAyOTYtMTUybC0zMi0zMkwyNjQgMjE2IDAgNDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNTY4IDg4TDQ4MCAwIDI2NCAyMTYgMzc2IDMyOGw3Mi01NiAwLTY0TDU2OCA4OHpNNDE2IDE0NGExNiAxNiAwIDEgMSAzMiAwIDE2IDE2IDAgMSAxIC0zMiAwem03Mi03MmExNiAxNiAwIDEgMSAwIDMyIDE2IDE2IDAgMSAxIDAtMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const KnifeKitchen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480s48 32 112 32c160 0 296-152 296-152l-32-32L264 216 0 480z" />
            <path d="M568 88L480 0 264 216 376 328l72-56 0-64L568 88zM416 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm72-72a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default KnifeKitchen;