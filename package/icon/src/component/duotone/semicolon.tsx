
import { Icon, generic } from "../../index";

/**
 * A component that renders the `semicolon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/semicolon?s=duotone semicolon}
 * @preview ![semicolon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05LjUgNDcyYzAgMjEuNSAxNy41IDQwIDQwLjEgNDBjMTQgMCAyNi45LTcuMyAzNC4yLTE5LjJMMTUwLjggMzgzYzYtOS44IDkuMi0yMS4yIDkuMi0zMi43YzAtMzQuMi0yNy43LTYyLjMtNjEuOS02Mi4zYy0yOS4yIDAtNTQuNCAyMC40LTYwLjYgNDlMMTAuNCA0NjMuNmMtLjYgMi45LS45IDUuNy0uOSA4LjV6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAxMjhhNjQgNjQgMCAxIDEgMTI4IDBBNjQgNjQgMCAxIDEgMzIgMTI4eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Semicolon: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M9.5 472c0 21.5 17.5 40 40.1 40c14 0 26.9-7.3 34.2-19.2L150.8 383c6-9.8 9.2-21.2 9.2-32.7c0-34.2-27.7-62.3-61.9-62.3c-29.2 0-54.4 20.4-60.6 49L10.4 463.6c-.6 2.9-.9 5.7-.9 8.5z" />
            <path d="M32 128a64 64 0 1 1 128 0A64 64 0 1 1 32 128z" />
    </Icon>
);

export default Semicolon;