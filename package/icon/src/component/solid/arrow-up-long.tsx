
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-long` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-long?s=solid arrow-up-long}
 * @preview ![arrow-up-long](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMTAuNTA5IDE4Mi42MjVDMjk4LjAwMiAxOTUuMTMyIDI3Ny43NTIgMTk1LjExOCAyNjUuMjU5IDE4Mi42MjVMMTkxLjg4NCAxMDkuMjVWNDgwQzE5MS44ODQgNDk3LjY4OCAxNzcuNTcyIDUxMiAxNTkuODg0IDUxMlMxMjcuODg0IDQ5Ny42ODggMTI3Ljg4NCA0ODBWMTA5LjI1TDU0LjUwOSAxODIuNjI1QzQyLjAwOSAxOTUuMTI1IDIxLjc1OSAxOTUuMTI1IDkuMjU5IDE4Mi42MjVTLTMuMjQxIDE0OS44NzUgOS4yNTkgMTM3LjM3NUwxMzcuMjU5IDkuMzc1QzE0OS43NTkgLTMuMTI1IDE3MC4wMDkgLTMuMTI1IDE4Mi41MDkgOS4zNzVMMzEwLjUwOSAxMzcuMzc1QzMyMy4wMDkgMTQ5Ljg3NSAzMjMuMDA5IDE3MC4xMjUgMzEwLjUwOSAxODIuNjI1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ArrowUpLong(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M310.509 182.625C298.002 195.132 277.752 195.118 265.259 182.625L191.884 109.25V480C191.884 497.688 177.572 512 159.884 512S127.884 497.688 127.884 480V109.25L54.509 182.625C42.009 195.125 21.759 195.125 9.259 182.625S-3.241 149.875 9.259 137.375L137.259 9.375C149.759 -3.125 170.009 -3.125 182.509 9.375L310.509 137.375C323.009 149.875 323.009 170.125 310.509 182.625Z" />
        </Icon>
    </>
}