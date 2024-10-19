
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apple-core` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-core?s=sharp-duotone-solid apple-core}
 * @preview ![apple-core](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNzYgODBsMCAxNiAwIDE2IDE2IDAgMTYgMGM0NC4yIDAgODAtMzUuOCA4MC04MGwwLTE2IDAtMTZMMjcyIDAgMjU2IDBjLTQ0LjIgMC04MCAzNS44LTgwIDgweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMTkuMSA0NDkuNUM2NS41IDQxNy44IDk2IDM2NC40IDk2IDMwNGMwLTYyLjYtMzIuNi0xMTcuNS04MS44LTE0OC43QzMxLjIgMTM4LjQgNTMuMSAxMjggODAgMTI4bDExMiAzMiAxMTItMzJjMjYuOSAwIDQ4LjggMTAuNCA2NS44IDI3LjNDMzIwLjYgMTg2LjUgMjg4IDI0MS40IDI4OCAzMDRjMCA2MC40IDMwLjUgMTEzLjggNzYuOSAxNDUuNUMzMzUgNDg4LjYgMjk1LjUgNTEyIDI1NiA1MTJsLTY0LTE2LTY0IDE2Yy0zOS41IDAtNzktMjMuNC0xMDguOS02Mi41eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const AppleCore: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M176 80l0 16 0 16 16 0 16 0c44.2 0 80-35.8 80-80l0-16 0-16L272 0 256 0c-44.2 0-80 35.8-80 80z" />
            <path d="M19.1 449.5C65.5 417.8 96 364.4 96 304c0-62.6-32.6-117.5-81.8-148.7C31.2 138.4 53.1 128 80 128l112 32 112-32c26.9 0 48.8 10.4 65.8 27.3C320.6 186.5 288 241.4 288 304c0 60.4 30.5 113.8 76.9 145.5C335 488.6 295.5 512 256 512l-64-16-64 16c-39.5 0-79-23.4-108.9-62.5z" />
    </Icon>
);

export default AppleCore;