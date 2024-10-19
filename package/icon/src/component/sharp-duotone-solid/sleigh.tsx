
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sleigh` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sleigh?s=sharp-duotone-solid sleigh}
 * @preview ![sleigh](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0zMiA0MTZsMCA2NCAzMiAwIDU0NCAwIDMyIDAgMC0zMiAwLTY0IDAtMzItNjQgMCAwIDMyIDAgMzItMTI4IDAtNjQgMC0xOTIgMC02NCAwLTY0IDAtMzIgMHoiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTAgMzJsMzIgMCAyMyAwIDEgMHMwIDAgMCAwYzYwIC40IDExNS42IDMxLjQgMTQ3LjQgODIuM0MyNDYuMSAxODIuNSAzMjAuOSAyMjQgNDAxLjQgMjI0bDQ2LjYgMCAwLTEyOCAzMiAwIDMyIDAgMzIgMCAzMiAwIDAgNjQtMzIgMCAwIDk2YzAgNTMtNDMgOTYtOTYgOTZsMCA2NC02NCAwIDAtNjQtMTkyIDAgMCA2NC02NCAwIDAtNjRjLTUzIDAtOTYtNDMtOTYtOTZMMzIgOTYgMCA5NiAwIDMyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Sleigh: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 416l0 64 32 0 544 0 32 0 0-32 0-64 0-32-64 0 0 32 0 32-128 0-64 0-192 0-64 0-64 0-32 0z" />
            <path d="M0 32l32 0 23 0 1 0s0 0 0 0c60 .4 115.6 31.4 147.4 82.3C246.1 182.5 320.9 224 401.4 224l46.6 0 0-128 32 0 32 0 32 0 32 0 0 64-32 0 0 96c0 53-43 96-96 96l0 64-64 0 0-64-192 0 0 64-64 0 0-64c-53 0-96-43-96-96L32 96 0 96 0 32z" />
    </Icon>
);

export default Sleigh;