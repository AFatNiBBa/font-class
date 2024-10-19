
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-image` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-image?s=sharp-duotone-solid scanner-image}
 * @preview ![scanner-image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI4OEwwIDQ4MGw1NzYgMCAwLTE3OS42Yy04LjEtNC4xLTE2LjItOC4zLTI0LjMtMTIuNGMtNDcgMC05My45IDAtMTQwLjkgMGMtMTM3IDAtMjczLjkgMC00MTAuOCAwem02NCA2NGw2NCAwIDAgNjQtNjQgMCAwLTY0em05NiAwbDY0IDAgMCA2NC02NCAwIDAtNjR6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik01MCAzMi4yTDc4LjUgNDYuNyA1NTEuNyAyODhsLTE0MC45IDBMNDkuNSAxMDMuNyAyMSA4OS4yIDUwIDMyLjJ6TTEyOCAzNTJsMCA2NC02NCAwIDAtNjQgNjQgMHoiLz48L3N2Zz4=|width=32|height=32)
 */
const ScannerImage: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 288L0 480l576 0 0-179.6c-8.1-4.1-16.2-8.3-24.3-12.4c-47 0-93.9 0-140.9 0c-137 0-273.9 0-410.8 0zm64 64l64 0 0 64-64 0 0-64zm96 0l64 0 0 64-64 0 0-64z" />
            <path d="M50 32.2L78.5 46.7 551.7 288l-140.9 0L49.5 103.7 21 89.2 50 32.2zM128 352l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default ScannerImage;