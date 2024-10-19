
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `cat` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cat?s=solid cat}
 * @preview ![cat](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjIuNjI1IDE5MkMzMDIuMzc1IDE5MiAyMTUuNzUgMTk0IDE2MCAyNzhWMTkyQzE2MCAxMzkgMTE3IDk2IDY0IDk2QzQ2LjM3NSA5NiAzMiAxMTAuMzc1IDMyIDEyOFM0Ni4zNzUgMTYwIDY0IDE2MFM5NiAxNzQuMzc1IDk2IDE5MlY0NDhDOTYgNDgzLjI1IDEyNC43NSA1MTIgMTYwIDUxMkgzMzZDMzQ0Ljg3NSA1MTIgMzUyIDUwNC44NzUgMzUyIDQ5NlY0ODBDMzUyIDQ2Mi4zNzUgMzM3LjYyNSA0NDggMzIwIDQ0OEgyODhMNDE2IDM1MlY0OTZDNDE2IDUwNC44NzUgNDIzLjEyNSA1MTIgNDMyIDUxMkg0NjRDNDcyLjg3NSA1MTIgNDgwIDUwNC44NzUgNDgwIDQ5NlYyODkuODc1QzQ2OS43NSAyOTIuNSA0NTkuMTI1IDI5NC4zNzUgNDQ4IDI5NC4zNzVDMzg2LjI1IDI5NC4zNzUgMzM0LjUgMjUwLjM3NSAzMjIuNjI1IDE5MlpNNDgwIDk2SDQxNkwzNTIgMzJWMTY2LjM3NUMzNTIgMjE5LjM3NSAzOTUgMjYyLjM3NSA0NDggMjYyLjM3NVM1NDQgMjE5LjM3NSA1NDQgMTY2LjM3NVYzMkw0ODAgOTZaTTQwOCAxNzZDMzk5LjEyNSAxNzYgMzkyIDE2OC44NzUgMzkyIDE2MFMzOTkuMTI1IDE0NCA0MDggMTQ0UzQyNCAxNTEuMTI1IDQyNCAxNjBTNDE2Ljg3NSAxNzYgNDA4IDE3NlpNNDg4IDE3NkM0NzkuMTI1IDE3NiA0NzIgMTY4Ljg3NSA0NzIgMTYwUzQ3OS4xMjUgMTQ0IDQ4OCAxNDRTNTA0IDE1MS4xMjUgNTA0IDE2MFM0OTYuODc1IDE3NiA0ODggMTc2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Cat(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M322.625 192C302.375 192 215.75 194 160 278V192C160 139 117 96 64 96C46.375 96 32 110.375 32 128S46.375 160 64 160S96 174.375 96 192V448C96 483.25 124.75 512 160 512H336C344.875 512 352 504.875 352 496V480C352 462.375 337.625 448 320 448H288L416 352V496C416 504.875 423.125 512 432 512H464C472.875 512 480 504.875 480 496V289.875C469.75 292.5 459.125 294.375 448 294.375C386.25 294.375 334.5 250.375 322.625 192ZM480 96H416L352 32V166.375C352 219.375 395 262.375 448 262.375S544 219.375 544 166.375V32L480 96ZM408 176C399.125 176 392 168.875 392 160S399.125 144 408 144S424 151.125 424 160S416.875 176 408 176ZM488 176C479.125 176 472 168.875 472 160S479.125 144 488 144S504 151.125 504 160S496.875 176 488 176Z" />
        </Icon>
    </>
}