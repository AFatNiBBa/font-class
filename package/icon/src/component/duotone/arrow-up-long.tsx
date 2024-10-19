
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=duotone arrow-up-long}
 * @preview ![arrow-up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNjAgMTA5LjNjMTAuNy0xMC43IDIxLjMtMjEuMyAzMi0zMmMxMC43IDEwLjcgMjEuMyAyMS4zIDMyIDMyTDIyNCA0ODBjMCAxNy43LTE0LjMgMzItMzIgMzJzLTMyLTE0LjMtMzItMzJsMC0zNzAuN3oiLz48cGF0aCBjbGFzcz0iZmEtcHJpbWFyeSIgZD0iTTE2OS40IDkuNGMxMi41LTEyLjUgMzIuOC0xMi41IDQ1LjMgMGwxMjggMTI4YzEyLjUgMTIuNSAxMi41IDMyLjggMCA0NS4zcy0zMi44IDEyLjUtNDUuMyAwTDE5MiA3Ny4zIDg2LjYgMTgyLjZjLTEyLjUgMTIuNS0zMi44IDEyLjUtNDUuMyAwcy0xMi41LTMyLjggMC00NS4zbDEyOC0xMjh6Ii8+PC9zdmc+|width=32|height=32)
 */
const ArrowUpLong: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M160 109.3c10.7-10.7 21.3-21.3 32-32c10.7 10.7 21.3 21.3 32 32L224 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-370.7z" />
            <path d="M169.4 9.4c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 77.3 86.6 182.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128z" />
    </Icon>
);

export default ArrowUpLong;