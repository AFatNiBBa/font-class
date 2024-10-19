
import { Icon, generic } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=sharp-duotone-solid x-ray}
 * @preview ![x-ray](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA5NmwwIDMyMCA0NDggMCAwLTMyMEwzMiA5NnptODAgMTI4bDE2IDAgMTEyIDAgMC0zMi04MCAwLTE2IDAgMC0zMiAxNiAwIDgwIDAgMC0xNiAwLTE2IDMyIDAgMCAxNiAwIDE2IDgwIDAgMTYgMCAwIDMyLTE2IDAtODAgMCAwIDMyIDExMiAwIDE2IDAgMCAzMi0xNiAwLTExMiAwIDAgNTQuNkwzMzAuNyAyODhsNTMuMyAwIDAgNDEuNkwzNDEuMyAzODRsLTE3MC43IDBMMTI4IDMyOS42bDAtNDEuNiA1My4zIDBMMjQwIDMxMC42bDAtNTQuNi0xMTIgMC0xNiAwIDAtMzJ6bTgwIDExMmExNiAxNiAwIDEgMCAzMiAwIDE2IDE2IDAgMSAwIC0zMiAwem05NiAwYTE2IDE2IDAgMSAwIDMyIDAgMTYgMTYgMCAxIDAgLTMyIDB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0wIDMybDMyIDAgNDQ4IDAgMzIgMCAwIDY0LTMyIDBMMzIgOTYgMCA5NiAwIDMyek0wIDQxNmwzMiAwIDQ0OCAwIDMyIDAgMCA2NC0zMiAwTDMyIDQ4MCAwIDQ4MGwwLTY0eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 96l0 320 448 0 0-320L32 96zm80 128l16 0 112 0 0-32-80 0-16 0 0-32 16 0 80 0 0-16 0-16 32 0 0 16 0 16 80 0 16 0 0 32-16 0-80 0 0 32 112 0 16 0 0 32-16 0-112 0 0 54.6L330.7 288l53.3 0 0 41.6L341.3 384l-170.7 0L128 329.6l0-41.6 53.3 0L240 310.6l0-54.6-112 0-16 0 0-32zm80 112a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm96 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
            <path d="M0 32l32 0 448 0 32 0 0 64-32 0L32 96 0 96 0 32zM0 416l32 0 448 0 32 0 0 64-32 0L32 480 0 480l0-64z" />
    </Icon>
);

export default XRay;